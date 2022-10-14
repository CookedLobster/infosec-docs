---
sidebar_position: 4
---

# Harvesting Passwords

:::caution This Section is a Work In Progress

:::

<br/>


## Unattended Windows Installations

When installing Windows on a large number of Hosts, Administrators may use **Windows Deployment Services (Unattended Installations).** It is possible to encounter **Credentials** in this Locations.


- **Locations**

```powershell
C:\Unattend.xml
C:\Windows\Panther\Unattend.xml
C:\Windows\Panther\Unattend\Unattend.xml
C:\Windows\system32\sysprep.inf
C:\Windows\system32\sysprep\sysprep.xml
```

- **Output**

```html
<Credentials>
    <Username>Administrator</Username>
    <Domain>thm.local</Domain>
    <Password>MyPassword123</Password>
</Credentials>
```

<br/>

## PSH History

Whenever a `User` runs a command using **`Powershell`**, it gets stored into a File that keeps a **Memory of Past Commands.** 

- **CMD**

```batch
# [CMD]
type %userprofile%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt
```

- **PSH**

```powershell
# [PSH]
type $Env:userprofile\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt
```

<br/>

## Saved Windows Credentials

Windows allows us to use other Users Credentials. This function also gives the option to save these Credentials on the System. 

- **List Saved Credentials**

```batch
cmdkey /list
```

- **Using Credentials**

```batch
runas /savecred /user:<UserName> cmd.exe
```

- **Run Specific Commands `[Password Piping is Not Allowed]`**

```batch
runas /user:<UserName> "cmd /c dir C:\"
```

<br/>

## IIS Configuration

**Internet Information Services (IIS)** is the default Web Server on Windows Installations. The configuration of websites on IIS is stored in a file called <b style={{ color: 'PowderBlue' }}>[web.config]</b> and can Store Passwords for Databases or configured Authentication Mechanisms.

```batch
C:\inetpub\wwwroot\web.config
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\web.config
```

- **Find Database Connection Strings on the File**

```
type C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\web.config | findstr connectionString
```

<br/>

## Retrieve Credentials [PuTTY]

`PuTTY` is an **SSH Client** commonly found on Windows Systems. **PuTTY** won't allow users to store their SSH Password, it will store Proxy Configurations that include **Clear-Text Authentication Credentials.**

```batch
reg query HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\Sessions\ /f "Proxy" /s
```