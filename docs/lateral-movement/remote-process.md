---
title: Spawning Processes Remotely
---

:::danger Required Privileges: `Administrators`

:::


**`Windows Services`** can also be leveraged to run arbitrary commands since they execute a command when started. While a Service executable is technically different from a Regular Application, if we configure a Windows Service to run any application, it will still execute it and **Fail Afterwards.**

<br/>

```batch
:: Remote Procedure Call
135/TCP  49152-65535/TCP (DCE/RPC)

:: [NETBIOS] RPC over SMB Named Pipes
139/TCP 
445/TCP 
```

We can create a **Service** on a Remote Host with <b style={{ color: 'MediumTurquoise' }}>sc.exe</b> which is a **Standard Tool** available in Windows. When using <b>sc</b>, it will try to connect to the Service <b style={{ color: 'DeepSkyBlue' }}>Control Manager (SVCCTL)</b> Remote Service Program through <b style={{ color: 'Coral' }}>RPC</b>.

<br/>

### Creating Services

```powershell
# Creating
sc \\TARGET create SERVICE_NAME binPath= "Command/PAYLOAD To Run" start= auto
```

```powershell
# Start - Stop - Delete
sc \\TARGET start  "SERVICE_NAME"
sc \\TARGET stop   "SERVICE_NAME"
sc \\TARGET delete "SERVICE_NAME"
```

<br/>

### Creating Scheduled Tasks

```batch
:: Creating
schtasks /s TARGET /RU "SYSTEM" /create /tn "TASK_NAME" /tr "Command/PAYLOAD To Run" /sc ONCE /sd 01/01/2024 /st 00:00
```

```batch
:: Running
schtasks /s TARGET /run /TN "TASK_NAME" 

:: List Tasks 
tasklist /v 
```