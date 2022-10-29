---
title: Command Line [CMD]
---

:::info Benefits

- No Additional or External Tooling is required, these commands are often not Monitored by the Blue Team.
- **GUI** is not necessary to do this Enumeration.
- **VBScript** and other Macro Languages that are often used for Phishing Payloads support these commands natively so they can be used to Enumerate initial Information regarding the Active Directory Domain before more specific Payloads are crafted.

:::

:::danger Drawbacks

- The **`net`** commands must be executed from a **Domain-Joined** Machine. If the Machine is not **Domain-Joined**, it will default to the **WORKGROUP** Domain.
- The **`net`** commands may not show all Information.

:::

### Users

```batch
:: Returns Active Directory Users
net user /domain

:: Show [User] Detailed Information 
net user delilah.gomez /domain
```

### Groups

```batch
:: Returns Active Directory Groups
net group /domain

:: Show [Group] Detailed Information 
net group "Tier 1 Admins" /domain
```

### Password Policy

```batch
:: Returns Password Policy Details
:: [Length - Lockout - Minimum Length - Maximum Age]
net accounts /domain
```