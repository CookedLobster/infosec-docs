---
sidebar_position: 1
description: Skynet
keywords: [Skynet, TryHackMe, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, enum4linux, smbclient, privilege escalation]
---


# Enumeration

## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b> <b style={{ color: 'Orange' }}>[SMB: 139-445]</b> <b style={{ color: 'MediumOrchid' }}>[IMAP: 143]</b> <b style={{ color: 'DarkOrchid' }}>[POP3: 110]</b> 

```log
Nmap scan report for 10.10.237.156
Host is up (0.088s latency).

PORT    STATE SERVICE     VERSION
22/tcp  open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 99:23:31:bb:b1:e9:43:b7:56:94:4c:b9:e8:21:46:c5 (RSA)
|   256 57:c0:75:02:71:2d:19:31:83:db:e4:fe:67:96:68:cf (ECDSA)
|_  256 46:fa:4e:fc:10:a5:4f:57:57:d0:6d:54:f6:c3:4d:fe (ED25519)
80/tcp  open  http        Apache httpd 2.4.18 ((Ubuntu))
|_http-title: Skynet
|_http-server-header: Apache/2.4.18 (Ubuntu)
110/tcp open  pop3        Dovecot pop3d
|_pop3-capabilities: SASL UIDL AUTH-RESP-CODE RESP-CODES PIPELINING CAPA TOP
139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
143/tcp open  imap        Dovecot imapd
|_imap-capabilities: LITERAL+ ENABLE more LOGIN-REFERRALS have LOGINDISABLEDA0001 ID IDLE listed capabilities Pre-login OK post-login IMAP4rev1 SASL-IR
445/tcp open  netbios-ssn Samba smbd 4.3.11-Ubuntu (workgroup: WORKGROUP)
Service Info: Host: SKYNET; OS: Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
|_clock-skew: mean: 1h39m54s, deviation: 2h53m13s, median: -6s
| smb2-time: 
|   date: 2022-10-07T08:03:24
|_  start_date: N/A
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled but not required
|_nbstat: NetBIOS name: SKYNET, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb-os-discovery: 
|   OS: Windows 6.1 (Samba 4.3.11-Ubuntu)
|   Computer name: skynet
|   NetBIOS computer name: SKYNET\x00
|   Domain name: \x00
|   FQDN: skynet
|_  System time: 2022-10-07T03:03:25-05:00
```


## FFUF

- **Web-Based Email Client `SquirrelMail`:** <b style={{ color: 'SandyBrown' }}>[IP:80/squirrelmail]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.237.156/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

admin                   [Status: 301, Size: 314, Words: 20, Lines: 10, Duration: 83ms]
css                     [Status: 301, Size: 312, Words: 20, Lines: 10, Duration: 85ms]
js                      [Status: 301, Size: 311, Words: 20, Lines: 10, Duration: 115ms]
config                  [Status: 301, Size: 315, Words: 20, Lines: 10, Duration: 118ms]
ai                      [Status: 301, Size: 311, Words: 20, Lines: 10, Duration: 114ms]
squirrelmail            [Status: 301, Size: 321, Words: 20, Lines: 10, Duration: 240ms]
```


## SMBMAP

- **We have `Read` Only Access on the** <b style={{ color: 'DarkGoldenRod' }}>Share:</b> <span style={{fontWeight: 'Bold'}}>`anonymous`</span>

```log
[+] Guest session   	IP: 10.10.237.156:445	Name: 10.10.237.156                                     
        Disk                                                  	Permissions	Comment
	----                                                  	-----------	-------
	print$                                            	NO ACCESS	Printer Drivers
	anonymous                                         	READ ONLY	Skynet Anonymous Share
	milesdyson                                        	NO ACCESS	Miles Dyson Personal Share
	IPC$                                              	NO ACCESS	IPC Service (skynet server (Samba, Ubuntu))
```


## ENUM4LINUX

- **Found Usernames:** <b style={{ color: 'Chartreuse' }}>milesdyson</b>

```log
 ===================================================================
|    Users, Groups and Machines on 10.10.237.156 via RID Cycling    |
 ===================================================================
[*] Trying to enumerate SIDs
[+] Found 3 SID(s)
[*] Trying SID S-1-22-1
[+] Found user 'Unix User\milesdyson' (RID 1001)
[*] Trying SID S-1-5-21-2393614426-3774336851-1116533619
[+] Found user 'SKYNET\nobody' (RID 501)
[+] Found domain group 'SKYNET\None' (RID 513)
[+] Found user 'SKYNET\milesdyson' (RID 1000)
```


## SMBCLIENT

- **We can Login as `Anonymous`**
- **`attention.txt` contains the Username:** <b style={{ color: 'LightGreen' }}>Miles Dyson</b> <span style={{fontWeight: 'Bold'}}>, and states that due to a Malfunction various passwords need to be changed.</span>
- **`logs/log1.txt` contains possible `PASSWORD` combinations.**

```log
smb: \> ls
  .                                   D        0  Thu Nov 26 17:04:00 2020
  ..                                  D        0  Tue Sep 17 09:20:17 2019
  attention.txt                       N      163  Wed Sep 18 05:04:59 2019
  logs                                D        0  Wed Sep 18 06:42:16 2019

		9204224 blocks of size 1024. 5829012 blocks available
smb: \> get attention.txt -
A recent system malfunction has caused various passwords to be changed. All skynet employees are required to change their password after seeing this.
-Miles Dyson

smb: \> cd logs\
smb: \logs\> ls
  .                                   D        0  Wed Sep 18 06:42:16 2019
  ..                                  D        0  Thu Nov 26 17:04:00 2020
  log2.txt                            N        0  Wed Sep 18 06:42:13 2019
  log1.txt                            N      471  Wed Sep 18 06:41:59 2019
  log3.txt                            N        0  Wed Sep 18 06:42:16 2019
smb: \logs\> get log1.txt
```

- **File:** `log1.txt`

```
cyborg007haloterminator
terminator22596
terminator219
terminator20
terminator1989
terminator1988
terminator168
terminator16
terminator143
terminator13
terminator123!@#
terminator1056
terminator101
terminator10
terminator02
terminator00
roboterminator
pongterminator
manasturcaluterminator
exterminator95
exterminator200
dterminator
djxterminator
dexterminator
determinator
cyborg007haloterminator
avsterminator
alonsoterminator
Walterminator
79terminator6
1996terminator
```