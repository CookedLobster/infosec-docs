---
title: SMB
description: SMB Methodologies, Tools
---

**SMB (Server Message Block Protocol)** is a **Client-Server** communication Protocol used for Sharing access to files, Printers, Serial Ports and other resources on a Network. 


```batch
:: NBT Over IP
139/TCP

:: SMB Over IP
445/TCP
```

The **SMB** protocol is known as a **Response-Request** Protocol, meaning that it transmits multiple messages between the Client and Server to establish a Connection. 

Once the Connection is Estabilished, clients can then send Commands to the Server that allow them to access Shares, Open Files, Read and Write Files etc..

<br/>


## Enumeration

```batch
:: Enumerating
smbclient --no-pass -L //<IP>

:: Simple Enumeration
:: -U -G [Users - Group Enumeration]
enum4linux-ng -A <IP>
enum4linux -a <IP>

:: Show Shares && Permissions
smbmap -H <IP>

:: Enumerate Anonymously [Null User]
:: --loggedon-users [Enumerate Logged Users]
crackmapexec smb <IP> -u "" -p "" --shares
crackmapexec smb <IP> --pass-pol -u "" -p ""

:: Namesserver Scanner
nbtscan <IP>
```


## Connecting

```batch
:: Connecting
smbclient --no-pass //IP/SHARE

:: Null Session Windows Share Connection
smbclient -U '%' -N \\\\IP\\SHARE

:: Recursively List Directories
smbmap -R profiles -H <IP>
```

```batch
:: GUI
xdg-open smb://IP/

:: GUI [Use Nautilus && Browser or Alternatives]
smb://IP/SHARE/
```

## Brute-Force

```html
hydra -l <user> -P <wordlist> <ip> smb
```