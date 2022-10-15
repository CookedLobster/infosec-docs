---
sidebar_position: 1
description: Lazy Admin
keywords: [lazy admin, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, sql backup, john, privilege escalation]
---

# Enumeration

:::note Box Description

Easy Linux machine to practice your Skills.

:::


## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.100.205
Host is up (0.097s latency).

PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 49:7c:f7:41:10:43:73:da:2c:e6:38:95:86:f8:e0:f0 (RSA)
|   256 2f:d7:c4:4c:e8:1b:5a:90:44:df:c0:63:8c:72:ae:55 (ECDSA)
|_  256 61:84:62:27:c6:c3:29:17:dd:27:45:9e:29:cb:90:5e (ED25519)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Apache2 Ubuntu Default Page: It works
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kerne
```


## FFUF

- **Default `Apache2` Page:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b>
- **Message [Welcome to `SweetRice`]:** <b style={{ color: 'SandyBrown' }}>[IP:80/content]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.100.205/FUZZ
 :: Wordlist         : FUZZ: /Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

content                 [Status: 301, Size: 316, Words: 20, Lines: 10, Duration: 92ms]
```

<br/>

- **Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/content/inc]</b> contains a <span style={{fontWeight: 'Bold'}}>Directory</span> called <span style={{fontWeight: 'Bold'}}>mysql_backup</span> which contains an <span style={{fontWeight: 'Bold'}}>SQL Backup.</span>
- **Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/content/as]</b> is a Login Portal to `SweetRice`

```log
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.100.205/content/FUZZ
 :: Wordlist         : FUZZ: /Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

images                  [Status: 301, Size: 323, Words: 20, Lines: 10, Duration: 4353ms]
js                      [Status: 301, Size: 319, Words: 20, Lines: 10, Duration: 173ms]
inc                     [Status: 301, Size: 320, Words: 20, Lines: 10, Duration: 117ms]
as                      [Status: 301, Size: 319, Words: 20, Lines: 10, Duration: 257ms]
_themes                 [Status: 301, Size: 324, Words: 20, Lines: 10, Duration: 131ms]
attachment              [Status: 301, Size: 327, Words: 20, Lines: 10, Duration: 116ms]
```

<br/>

---
## Content Discovery

- **Directory Folder:** <b style={{ color: 'SandyBrown' }}>[IP:80/content/inc]</b>

```log
   [ICO]            Name          Last modified   Size Description
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PARENTDIR] Parent Directory                         -  
[ ]         404.php              2016-09-19 17:55 1.9K  
[ ]         alert.php            2016-09-19 17:55 2.1K  
[DIR]       cache/               2019-11-29 12:30    -  
[ ]         close_tip.php        2016-09-19 17:55 2.4K  
[ ]         db.php               2019-11-29 12:30  165  
[ ]         do_ads.php           2016-09-19 17:55  782  
[ ]         do_attachment.php    2016-09-19 17:55  640  
[ ]         do_category.php      2016-09-19 17:55 2.8K  
[ ]         do_comment.php       2016-09-19 17:55 3.0K  
[ ]         do_entry.php         2016-09-19 17:55 2.6K  
[ ]         do_home.php          2016-09-19 17:55 1.8K  
[ ]         do_lang.php          2016-09-19 17:55  387  
[ ]         do_rssfeed.php       2016-09-19 17:55 1.5K  
[ ]         do_sitemap.php       2016-09-19 17:55 4.5K  
[ ]         do_tags.php          2016-09-19 17:55 2.7K  
[ ]         do_theme.php         2016-09-19 17:55  452  
[ ]         error_report.php     2016-09-19 17:55 2.5K  
[DIR]       font/                2016-09-19 17:57    -  
[ ]         function.php         2016-09-19 17:55  89K  
[TXT]       htaccess.txt         2016-09-19 17:55  137  
[ ]         init.php             2016-09-19 17:55 3.9K  
[ ]         install.lock.php     2019-11-29 12:30   45  
[DIR]       lang/                2016-09-19 17:57    -  
[TXT]       lastest.txt          2016-09-19 17:55    5
// highlight-next-line  
[DIR]       mysql_backup/        2019-11-29 12:30    -  
[ ]         rssfeed.php          2016-09-19 17:55 1.6K  
[ ]         rssfeed_category.php 2016-09-19 17:55 1.7K  
[ ]         rssfeed_entry.php    2016-09-19 17:55 2.1K  
[ ]         sitemap_xml.php      2016-09-19 17:55 2.1K  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

- **SQL Backup Location:** <b style={{ color: 'SandyBrown' }}>[IP:80/content/inc/mysql_backup]</b>

```log
   [ICO]                    Name                 Last modified Size Description
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PARENTDIR] Parent Directory                                      -  
[ ]         mysql_bakup_20191129023059-1.5.1.sql    2019-11-29 4.7K  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

<br/>

## SQL BackUP - JOHN

The **SQL BackUP** contains the **Username - Password** that can be used to Login into `SweetRice` the Password is **MD5 Encrypted.**

<br/>

- **Username:** <b style={{ color: 'Chartreuse' }}>manager</b>
```sql
"admin\\";s:7:\\"manager\\";s:6:\\"passwd\\";s:32:\\"42f749ade7f9e195bf475f37a44cafcb"
```

<br/>

- We can **Brute-Force** the **HASH** using `John`
- **Password:** <b style={{ color: 'Coral' }}>Password123</b>

```log
Loaded 1 password hash (Raw-MD5 [MD5 128/128 AVX 4x3])
Password123      (?)
```