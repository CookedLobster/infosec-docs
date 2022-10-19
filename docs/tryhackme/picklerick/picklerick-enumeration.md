---
sidebar_position: 1
title: Enumeration
description: Pickle Rick
keywords: [pickle rick, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, privilege escalation]
---


:::note Box Description

A Rick and Morty CTF. Help turn Rick back into a human!

:::

## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.186.248
Host is up (0.088s latency).

PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.6 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 b9:b0:63:1d:b3:94:47:4b:66:65:4d:3e:9b:46:c9:b0 (RSA)
|   256 05:d6:69:c6:86:df:d5:cd:c8:a4:34:f1:24:f5:ff:2e (ECDSA)
|_  256 c7:d4:01:19:a8:e3:99:a9:73:01:72:40:10:f5:67:00 (ED25519)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-title: Rick is sup4r cool
|_http-server-header: Apache/2.4.18 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```


## FFUF

- **`robots.txt` is Exposed:** <b style={{ color: 'SandyBrown' }}>[IP:80/robots.txt]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.186.248/FUZZ
 :: Wordlist         : FUZZ: Seclists/Discovery/Web-Content/RobotsDisallowed-Top1000.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

robots.txt                  [Status: 200, Size: 17, Words: 1, Lines: 1]
```

<br/>

- **Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/login.php]</b> contains a Login Portal. 

```
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.186.248/FUZZ
 :: Wordlist         : FUZZ: Seclists/Discovery/Web-Content/Login.fuzz.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

/login.php                  [Status: 200, Size: 882, Words: 89, Lines: 26]
```


<br/>

---
## Content Discovery

- There is a **Comment on:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b> showing the <span style={{fontWeight: 'Bold'}}>Username:</span> <b style={{ color: 'Chartreuse' }}>R1ckRul3s</b>

```html
<!--
    Note to self, remember username!
// highlight-next-line
    Username: R1ckRul3s
-->
```

##

- **`robots.txt` Location:** <b style={{ color: 'SandyBrown' }}>[IP:80/robots.txt]</b>
- There is a Password in `robots.txt:` <b style={{ color: 'Coral' }}>Wubbalubbadubdub</b>

```
Wubbalubbadubdub
```

- This Password can be used to Login at: <b style={{ color: 'SandyBrown' }}>[IP:80/login.php]</b>

---