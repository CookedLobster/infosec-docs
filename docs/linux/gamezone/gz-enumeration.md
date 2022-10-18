---
sidebar_position: 1
description: Game Zone
sidebar_label: Enumeration
keywords: [game zone, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, privilege escalation]
---

# [Game Zone] Enumeration

:::note Box Description

Learn to Hack into this Machine. Understand how to use `SQLMap`, crack some passwords, reveal services using a reverse `SSH Tunnel` and escalate your privileges to root!

:::


## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.0.198
Host is up (0.080s latency).

PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.7 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 61:ea:89:f1:d4:a7:dc:a5:50:f7:6d:89:c3:af:0b:03 (RSA)
|   256 b3:7d:72:46:1e:d3:41:b6:6a:91:15:16:c9:4a:a5:fa (ECDSA)
|_  256 53:67:09:dc:ff:fb:3a:3e:fb:fe:cf:d8:6d:41:27:ab (ED25519)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
| http-cookie-flags: 
|   /: 
|     PHPSESSID: 
|_      httponly flag not set
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Game Zone
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

<br/>

---
## Content Discovery


- **Login Portal:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b>

```log
               Game Zone
           Welcome to Game Zone
• Online
• Downloads
• Community
• About Zone
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Log in:   [                    ]
Password: [                    ]
================================
Enter
Register >>>
Not Registered Yet?
```
