---
sidebar_position: 1
title: Simple CTF
hide_title: true
sidebar_label: Enumeration
description: Beginner level CTF.
keywords: [simple ctf, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, privilege escalation, cms made simple, CVE-2019-9053, EDB-ID 46635]
---

:::note Box Description

Beginner level CTF.

:::


## NMAP

- <b style={{ color: 'DarkKhaki' }}>[FTP: 21]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b> <b style={{ color: 'Coral' }}>[SSH: 2222]</b>

```log
Nmap scan report for 10.10.43.24
Host is up (0.10s latency).

PORT     STATE SERVICE VERSION
21/tcp   open  ftp     vsftpd 3.0.3
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_Can't get directory listing: TIMEOUT
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:10.11.30.40
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 3
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
80/tcp   open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Apache2 Ubuntu Default Page: It works
| http-robots.txt: 2 disallowed entries 
|_/ /openemr-5_0_1_3 
2222/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 29:42:69:14:9e:ca:d9:17:98:8c:27:72:3a:cd:a9:23 (RSA)
|   256 9b:d1:65:07:51:08:00:61:98:de:95:ed:3a:e3:81:1c (ECDSA)
|_  256 12:65:1b:61:cf:4d:e5:75:fe:f4:e8:d4:6e:10:2a:f6 (ED25519)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
```


## FFUF

- **Default `Apache2` Page:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b> 
- **`robots.txt` is Exposed:**  <b style={{ color: 'SandyBrown' }}>[IP:80/robots.txt]</b>
- **Message [Successful Installation of `CMS Made Simple`]:** <b style={{ color: 'SandyBrown' }}>[IP:80/simple]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.43.24/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

simple                  [Status: 301, Size: 311, Words: 20, Lines: 10, Duration: 133ms]
```

<br/>

- **Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/simple/admin]</b>  is a Login Portal to `CMS Made Simple` 

```log
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.43.24/simple/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

modules                 [Status: 301, Size: 319, Words: 20, Lines: 10, Duration: 94ms]
uploads                 [Status: 301, Size: 319, Words: 20, Lines: 10, Duration: 99ms]
doc                     [Status: 301, Size: 315, Words: 20, Lines: 10, Duration: 115ms]
admin                   [Status: 301, Size: 317, Words: 20, Lines: 10, Duration: 123ms]
assets                  [Status: 301, Size: 318, Words: 20, Lines: 10, Duration: 145ms]
lib                     [Status: 301, Size: 315, Words: 20, Lines: 10, Duration: 113ms]
tmp                     [Status: 301, Size: 315, Words: 20, Lines: 10, Duration: 120ms]
```

<br/>

---
## Content Discovery


- **`CMS Made Simple` Welcome Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/simple]</b> 

![SCF](/img/vmlinux/c-madesimple_one.png)

- **Version Information:** <b style={{ color: 'Plum' }}>2.2.8</b> 

![SCF](/img/vmlinux/c-madesimple_two.png)


- **`CMS Made Simple` Login Portal:** <b style={{ color: 'SandyBrown' }}>[IP:80/simple/admin]</b> 

![SCF](/img/vmlinux/c-madesimple_three.png)


---