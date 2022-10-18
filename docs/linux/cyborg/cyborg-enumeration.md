---
sidebar_position: 1
title: Enumeration
description: Cyborg
keywords: [cyborg, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, borg, privilege escalation]
---


:::note Box Description

A box involving Encrypted archives, Source code analysis and more.

:::

## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.59.109
Host is up (0.12s latency).

PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.10 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 db:b2:70:f3:07:ac:32:00:3f:81:b8:d0:3a:89:f3:65 (RSA)
|   256 68:e6:85:2f:69:65:5b:e7:c6:31:2c:8e:41:67:d7:ba (ECDSA)
|_  256 56:2c:79:92:ca:23:c3:91:49:35:fa:dd:69:7c:ca:ab (ED25519)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-title: Apache2 Ubuntu Default Page: It works
|_http-server-header: Apache/2.4.18 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

## FFUF

- **Landing Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/admin]</b>
- **Hidden Folder:** <b style={{ color: 'SandyBrown' }}>[IP:80/etc]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.59.109/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

admin                   [Status: 301, Size: 312, Words: 20, Lines: 10, Duration: 132ms]
etc                     [Status: 301, Size: 310, Words: 20, Lines: 10, Duration: 110ms]
```


<br/>

---
## Content Discovery

- **Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/admin]</b>
- There is a **Compressed Archive** that can be Downloaded from the **Navbar:** **`Archive -->> Download`**
- **File Name:** **`archive.tar`**

```log
Home    Albums    Admins    [Archive]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
..       ..        ..       [archive.tar]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```


- **Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/etc/squid]</b>

```
   [ICO]          Name        Last modified   Size Description
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PARENTDIR] Parent Directory                     -  
[ ]         passwd           2020-12-30 02:09   52  
[ ]         squid.conf       2020-12-30 02:09  258  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

- **File:** `passwd` contains a **HASH**

```php
music_archive:$apr1$BpZ.Q.1m$F0qqPwHSOG50URuOVQTTn.
```
---



