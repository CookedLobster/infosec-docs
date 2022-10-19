---
title: FTP
description: FTP Methodologies, Tools
---

**`FTP` (File Transfer Protocol)** is a Protocol used to allow Remote Transfer of Files over a Network. FTP operates using a **Client-Server** Protocol. The client initiates a connection with the server, the server validates whatever login Credentials are provided and then Opens the Session.

```batch
:: FTP
21/TCP
```

<br/>

- **`Active - Passive`**
    - In `Active` FTP Connection, the **Client** opens a Port and listens. The server is required to actively connect to it. 
    - In `Passive` FTP connection, the **Server** opens a Port and listens **[Passively]** and the client Connects to it. 


<br/>

## Banner Grabbing

```html
nc -vn <IP> 21
```

## Authentication

```batch
:: Is going to Authenticate as Anonymous if no Credentials are Provided 
lftp 10.10.27.233 -p 21

:: Provide the Credentials [Anonymous:Anonymous] 
:: -p [Passive Mode] [Useful if Behind Firewall]
ftp 10.10.27.233	
```

```batch
:: GUI [Use Nautilus && Browser or Alternatives]
ftp://anonymous:anonymous@IP
```

## Download

```batch
:: Download Every File
:: --no-passive [Disable Passive Mode[Default]]
wget -m ftp://anonymous:anonymous@10.10.27.233
```

## Brute-Force

```html
hydra -l <user> -P <wordlist> <ip> ftp
```