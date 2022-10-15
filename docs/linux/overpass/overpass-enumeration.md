---
sidebar_position: 1
description: Overpass
keywords: [overpass, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, privilege escalation]
---

# Enumeration

:::note Box Description

What happens when some broke CompSci students make a password manager?

:::

## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.240.124
Host is up (0.086s latency).

PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 37:96:85:98:d1:00:9c:14:63:d9:b0:34:75:b1:f9:57 (RSA)
|   256 53:75:fa:c0:65:da:dd:b1:e8:dd:40:b8:f6:82:39:24 (ECDSA)
|_  256 1c:4a:da:1f:36:54:6d:a6:c6:17:00:27:2e:67:75:9c (ED25519)
80/tcp open  http    Golang net/http server (Go-IPFS json-rpc or InfluxDB API)
|_http-title: Overpass
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

```

## FFUF

- **Login Portal:** <b style={{ color: 'SandyBrown' }}>[IP:80/admin]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.240.124/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

img                     [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 133ms]
downloads               [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 155ms]
aboutus                 [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 97ms]
admin                   [Status: 301, Size: 42, Words: 3, Lines: 3, Duration: 123ms]
css                     [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 113ms]
```

<br/>

---
## Content Discovery

- **Login Portal:** <b style={{ color: 'SandyBrown' }}>[IP:80/admin]</b>

```log
Administrator Area
Please Log-In to Access this Content

Overpass Administrator Login
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Username: [                    ]
Password: [                    ]
================================
[Login]
```

---