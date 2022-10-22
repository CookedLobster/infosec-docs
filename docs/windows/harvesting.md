---
sidebar_position: 4
title: Harvesting
description: Windows Password Harvesting
keywords: [unattended windows installations, saved windows credentials, putty, iis credentials]
---


## Unattended Windows Installations

When installing Windows on a large number of Hosts, Administrators may use <b style={{ color: 'MediumTurquoise' }}>Windows Deployment Services (Unattended Installations)</b>. It is possible to encounter **Credentials** in this Locations.



```batch
:: Locations
C:\Unattend.xml
C:\Windows\Panther\Unattend.xml
C:\Windows\Panther\Unattend\Unattend.xml
C:\Windows\system32\sysprep.inf
C:\Windows\system32\sysprep\sysprep.xml
```

<br/>

## PSH History

Whenever a **User** runs a command using <b style={{ color: 'MediumTurquoise' }}>Powershell</b>, it gets stored into a File that keeps a **Memory of Past Commands.** 


```batch
:: [CMD]
type %userprofile%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt
```

```batch
:: [PSH]
type $Env:userprofile\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt
```

<br/>

## Saved Windows Credentials

Windows allows us to use other Users Credentials. This function also gives the option to save these Credentials on the System. 


```batch
:: List Saved Credentials
cmdkey /list
```


```batch
:: Using Credentials
runas /savecred /user:<UserName> cmd.exe
```


```batch
:: Run Specific Commands [Password Piping is Not Allowed]
runas /user:<UserName> "cmd /c dir C:\"
```

<br/>

## IIS Configuration

<b style={{ color: 'DeepSkyBlue' }}>Internet Information Services (IIS)</b> is the default Web Server on Windows Installations. The configuration of websites on IIS is stored in a file called <b style={{ color: 'MediumTurquoise' }}>[web.config]</b> and can Store Passwords for Databases or configured Authentication Mechanisms.

<br/>
<br/>

```log
C:\inetpub\wwwroot\web.config
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\web.config
```


```batch
:: Find Database Connection Strings on the File
type C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\web.config | findstr connectionString
```

<br/>

## Retrieve Credentials [PuTTY]

<b style={{ color: 'Coral' }}>PuTTY</b> is an <span style={{fontWeight: 'Bold'}}>SSH Client</span> commonly found on Windows Systems. <span style={{fontWeight: 'Bold'}}>PuTTY</span> won't allow users to store their SSH Password, it will store Proxy Configurations that include <span style={{fontWeight: 'Bold'}}>Clear-Text Authentication Credentials.</span>

<br/>
<br/>

```batch
reg query HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\Sessions\ /f "Proxy" /s
```