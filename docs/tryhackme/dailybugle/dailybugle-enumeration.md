---
sidebar_position: 1
title: Daily Bugle
sidebar_label: Enumeration
description: Daily Bugle TryHackMe
keywords: [daily bugle, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, joomla, joomla exploit, john, CVE-2017-8917, privilege escalation]
---

:::note Box Description

Compromise a `Joomla CMS` account via `SQLi`, practise cracking Hashes and escalate your privileges by taking advantage of `yum`.

:::


## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b> <b style={{ color: 'CornflowerBlue' }}>[MySQL: 3306]</b> 

```log
Nmap scan report for 10.10.220.39
Host is up (0.084s latency).

PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 7.4 (protocol 2.0)
| ssh-hostkey: 
|   2048 68:ed:7b:19:7f:ed:14:e6:18:98:6d:c5:88:30:aa:e9 (RSA)
|   256 5c:d6:82:da:b2:19:e3:37:99:fb:96:82:08:70:ee:9d (ECDSA)
|_  256 d2:a9:75:cf:2f:1e:f5:44:4f:0b:13:c2:0f:d7:37:cc (ED25519)
80/tcp   open  http    Apache httpd 2.4.6 ((CentOS) PHP/5.6.40)
|_http-title: Home
| http-robots.txt: 15 disallowed entries 
| /joomla/administrator/ /administrator/ /bin/ /cache/ 
| /cli/ /components/ /includes/ /installation/ /language/ 
|_/layouts/ /libraries/ /logs/ /modules/ /plugins/ /tmp/
|_http-generator: Joomla! - Open Source Content Management
|_http-server-header: Apache/2.4.6 (CentOS) PHP/5.6.40
3306/tcp open  mysql   MariaDB (unauthorized)
```

## FFUF

- **`Joomla` Login Portal:** <b style={{ color: 'SandyBrown' }}>[IP:80/administrator]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.220.39/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

...
administrator           [Status: 301, Size: 242, Words: 14, Lines: 8, Duration: 103ms]
...
```

<br/>

---
## Content Discovery

- **`Robots.txt`**: <b style={{ color: 'SandyBrown' }}>[IP:80]</b>

```js
nt: *
Disallow: /administrator/
Disallow: /bin/
Disallow: /cache/
Disallow: /cli/
Disallow: /components/
Disallow: /includes/
Disallow: /installation/
Disallow: /language/
Disallow: /layouts/
Disallow: /libraries/
Disallow: /logs/
Disallow: /modules/
Disallow: /plugins/
Disallow: /tmp/
```


- **`Joomla` Login Portal:** <b style={{ color: 'SandyBrown' }}>[IP:80/administrator]</b>

```log
                 Joomla
Username: [                    ][?]
Password: [                    ][?]
                 [Login]
```

- **`Joomla` Version:** <b style={{ color: 'Plum' }}>3.7.0</b> 
- <b style={{ color: 'Red' }}>Vulnerable: (CVE-2017-8917)</b>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<extension version="3.6" type="file" method="upgrade">
	<name>files_joomla</name>
	<author>Joomla! Project</author>
	<authorEmail>admin@joomla.org</authorEmail>
	<authorUrl>www.joomla.org</authorUrl>
	<copyright>(C) 2005 - 2017 Open Source Matters. All rights reserved</copyright>
	<license>GNU General Public License version 2 or later; see LICENSE.txt</license>
	// highlight-next-line
	<version>3.7.0</version>
	<creationDate>April 2017</creationDate>
	<description>FILES_JOOMLA_XML_DESCRIPTION</description>
</extension>
```
---

<br/>

## Exploitation - John

- **Exploit Used:** <a class="button button--outline button--info" href="https://github.com/stefanlucas/Exploit-Joomla">Exploit GitHub</a>
- **Username:** <b style={{ color: 'Chartreuse' }}>jonah</b>
- **HASH:** <b style={{ color: 'Coral' }}>$2y$10$0veO/JSFh4389Lluc4Xya.dfy2MFbZhz0jVMw.V.d3p12kBtZutm</b>

```py
[-] Fetching CSRF token
[-] Testing SQLi
-  Found table: fb9j5_users
-  Extracting users from fb9j5_users
[$] Found user [u'811', u'Super User', u'jonah', u'jonah@tryhackme.com', u'$2y$10$0veO/JSFh4389Lluc4Xya.dfy2MFbZhz0jVMw.V.d3p12kBtZutm', u'', u'']
-  Extracting sessions from fb9j5_session
```

##

- We can **Brute-Force** the **HASH** using `John`
- **Password:** <b style={{ color: 'Coral' }}>spiderman123</b>

```log
Loaded 1 password hash (bcrypt [Blowfish 32/64 X3])
spiderman123     (?)
```


<br/>

---
## Content Discovery

- `Joomla:` <b style={{ color: 'SandyBrown' }}>[IP:80/administrator]</b>
- **Using Cracked Credentials to Login:** <b style={{ color: 'Chartreuse' }}>jonah</b><b style={{ color: 'Dark' }}>:</b><b style={{ color: 'Coral' }}>spiderman123</b>

![Joomla](/img/vmlinux/a-joomla.png)



- In **`Extensions --> Templates --> Beez3`** we can Replace the **`index.php`** with a `PHP` **Reverse Shell.**
- Upon Clicking on **`Template Preview`** we are going to Receive a **Reverse Shell.**

![Joomla](/img/vmlinux/a-joomlatwo.png)

![Joomla](/img/vmlinux/a-joomlathree.png)

---