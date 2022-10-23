---
title: Configuration File Credentials
---

:::info This Module Focuses on `McAfee` Enterprise Endpoint Security

For a more Extensive Enumeration use the Tool **`Seatbelt`**.

:::

<br/>

Usually, applications need a method to **Authenticate** to the Domain during both the Installation and Execution phases. For example **`McAfee` Enterprise Endpoint Security**, which organizations can use as the Endpoint Detection and response Tool for Security.

**McAfee** embeds the Credentials used during Installation to Connect back to the Orchestrator in a file called **`ma.db`.** This Database File can be retrieved and read with Local Access to the Host to recover the associated <b style={{ color: 'DeepSkyBlue' }}>Active Directory</b> Service Account.


```batch
:: McAfee Database Location
C:\Users\All Users\McAfee\Agent\DB\ma.db
C:\ProgramData\McAfee\Agent\DB\ma.db
```

<br/>

- Upon Extracting the **McAfee Encryption Key** we can Decrypt it with this Tool.
- **McAfee Password Decryption Tool:** <a class="button button--outline button--info" href="https://github.com/funoverip/mcafee-sitelist-pwd-decryption">GitHub</a>