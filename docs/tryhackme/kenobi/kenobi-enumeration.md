---
sidebar_position: 1
title: Kenobi
hide_title: true
sidebar_label: Enumeration
description: Walkthrough on exploiting a Linux machine. Enumerate Samba for shares, manipulate a vulnerable version of ProFTPD and escalate your privileges with path variable manipulation.
keywords: [kenobi, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, enum4linux, smbmap, smbclient, privilege escalation]
---


:::note Box Description

Walkthrough on exploiting a Linux machine. Enumerate `Samba` for shares, manipulate a vulnerable version of `ProFTPD` and escalate your privileges with path variable manipulation.

:::


## NMAP

- <b style={{ color: 'DarkKhaki' }}>[FTP: 21]</b> <b style={{ color: 'DarkKhaki' }}>[Variant: ProFTPD]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b> <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'Orange' }}>[SMB: 139-445]</b> <b style={{ color: 'LightSeaGreen' }}>[NFS: 2049]</b>

```log
Nmap scan report for 10.10.118.63
Host is up (0.085s latency).

PORT     STATE SERVICE     VERSION
// highlight-next-line
21/tcp   open  ftp         ProFTPD 1.3.5
22/tcp   open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.7 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 b3:ad:83:41:49:e9:5d:16:8d:3b:0f:05:7b:e2:c0:ae (RSA)
|   256 f8:27:7d:64:29:97:e6:f8:65:54:65:22:f7:c8:1d:8a (ECDSA)
|_  256 5a:06:ed:eb:b6:56:7e:4c:01:dd:ea:bc:ba:fa:33:79 (ED25519)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp  open  netbios-ssn Samba smbd 4.3.11-Ubuntu (workgroup: WORKGROUP)
2049/tcp open  nfs         2-4 (RPC #100003)
Service Info: Host: KENOBI; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
|_clock-skew: mean: 1h39m54s, deviation: 2h53m12s, median: -5s
| smb2-time: 
|   date: 2022-10-07T06:27:15
|_  start_date: N/A
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled but not required
|_nbstat: NetBIOS name: KENOBI, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb-os-discovery: 
|   OS: Windows 6.1 (Samba 4.3.11-Ubuntu)
|   Computer name: kenobi
|   NetBIOS computer name: KENOBI\x00
|   Domain name: \x00
|   FQDN: kenobi
|_  System time: 2022-10-07T01:27:15-05:00
```


## ENUM4LINUX

- **Found Usernames:** <b style={{ color: 'LightGreen' }}>Kenobi</b>

```log
 ==================================================================
|    Users, Groups and Machines on 10.10.118.63 via RID Cycling    |
 ==================================================================
[*] Trying to enumerate SIDs
[+] Found 3 SID(s)
[*] Trying SID S-1-22-1
[+] Found user 'Unix User\kenobi' (RID 1000)
```


## SMBMAP

- **We have `Read` Only Access on the** <b style={{ color: 'DarkGoldenRod' }}>Share:</b> <span style={{fontWeight: 'Bold'}}>`anonymous`</span>

```log
[+] Guest session   	IP: 10.10.118.63:445	Name: 10.10.118.63                                      
        Disk                                                  	Permissions	Comment
	----                                                  	-----------	-------
	print$                                            	NO ACCESS	Printer Drivers
	anonymous                                         	READ ONLY	
	IPC$                                              	NO ACCESS	IPC Service (kenobi server (Samba, Ubuntu))
```


## SMBCLIENT

- **We can Login as `Anonymous`**
- **The `log.txt` File States that the User** <b style={{ color: 'LightGreen' }}>Kenobi:</b> <span style={{fontWeight: 'Bold'}}>has an `SSH` Configuration.</span>
- There are Details about `ProFTPD` Configuration.

```log
smb: \> ls
  .                                   D        0  Wed Sep  4 12:49:09 2019
  ..                                  D        0  Wed Sep  4 12:56:07 2019
  // highlight-next-line
  log.txt                             N    12237  Wed Sep  4 12:49:09 2019

		9204224 blocks of size 1024. 6877088 blocks available
smb: \> get log.txt
```

- **File:** `log.txt`

```log
Generating public/private rsa key pair.
Enter file in which to save the key (/home/kenobi/.ssh/id_rsa): 
Created directory '/home/kenobi/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/kenobi/.ssh/id_rsa.
Your public key has been saved in /home/kenobi/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:C17GWSl/v7KlUZrOwWxSyk+F7gYhVzsbfqkCIkr2d7Q kenobi@kenobi
The key's randomart image is:
+---[RSA 2048]----+
|                 |
|           ..    |
|        . o. .   |
|       ..=o +.   |
|      . So.o++o. |
|  o ...+oo.Bo*o  |
| o o ..o.o+.@oo  |
|  . . . E .O+= . |
|     . .   oBo.  |
+----[SHA256]-----+

ServerName			"ProFTPD Default Installation"
ServerType			standalone
DefaultServer		on
Port				21
```