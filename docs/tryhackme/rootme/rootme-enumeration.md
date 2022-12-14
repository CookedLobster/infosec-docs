---
sidebar_position: 1
title: RootMe
sidebar_label: Enumeration
description: A CTF for Beginners, can you Root me?
keywords: [rootme, root me, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, privilege escalation]
---


:::note Box Description

A CTF for Beginners, can you Root me?

:::


## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.126.254
Host is up (0.092s latency).

PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 4a:b9:16:08:84:c2:54:48:ba:5c:fd:3f:22:5f:22:14 (RSA)
|   256 a9:a6:86:e8:ec:96:c3:f0:03:cd:16:d5:49:73:d0:82 (ECDSA)
|_  256 22:f6:b5:a6:54:d9:78:7c:26:03:5a:95:f3:f9:df:cd (ED25519)
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
|_http-title: HackIT - Home
| http-cookie-flags: 
|   /: 
|     PHPSESSID: 
|_      httponly flag not set
|_http-server-header: Apache/2.4.29 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```


## FFUF

- **Upload Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/panel]</b>
- **Files Upload Destination:** <b style={{ color: 'SandyBrown' }}>[IP:80/uploads]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.126.254/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

uploads                 [Status: 301, Size: 316, Words: 20, Lines: 10, Duration: 113ms]
css                     [Status: 301, Size: 312, Words: 20, Lines: 10, Duration: 83ms]
js                      [Status: 301, Size: 311, Words: 20, Lines: 10, Duration: 115ms]
panel                   [Status: 301, Size: 314, Words: 20, Lines: 10, Duration: 115ms]
```

<br/>

---
## Content Discovery


- **Upload Web Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/panel]</b>

```log
Select a file to upload:

[                    ] [Upload]
```

---