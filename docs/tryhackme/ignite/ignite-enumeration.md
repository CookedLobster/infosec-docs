---
sidebar_position: 1
title: Ignite
sidebar_label: Enumeration
description: A new start-up has a few issues with their Web Server.
keywords: [ignite, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, fuel cms 1.4, CVE-2018-16763, privilege escalation]
---


:::note Box Description

A new start-up has a few issues with their Web Server.

:::


## NMAP

- <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.49.145
Host is up (0.080s latency).

PORT   STATE SERVICE VERSION
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-title: Welcome to FUEL CMS
| http-robots.txt: 1 disallowed entry
|_/fuel/
|_http-server-header: Apache/2.4.18 (Ubuntu)
```

<br/>

---
## Content Discovery

- **The Landing Page shows `Fuel CMS` Versions:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b>
- **Version:** <b style={{ color: 'LightGreen' }}>1.4</b>

```log
Welcome to Fuel CMS
// highlight-next-line
    Version 1.4
  Getting Started
```

<br/>

- <b style={{ color: 'SandyBrown' }}>[IP:80]</b>
- **The Landing Page shows `Fuel CMS` Default Credentials:** <b style={{ color: 'Chartreuse' }}>admin</b><b style={{ color: 'Dark' }}>:</b><b style={{ color: 'Coral' }}>admin</b>

```log
To access the FUEL admin, go to:
http://10.10.49.145/fuel
// highlight-start
User name: admin
Password: admin
// highlight-end
```

- **We can Login Using to `FUEL CMS` with the Default Credentials.** But there is nothing of Interest.
---