---
sidebar_position: 1
title: Enumeration
description: Alfred
keywords: [alfred, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, privilege escalation, jenkins default credentials]
---


:::note Box Description

Exploit `Jenkins` to gain an initial shell, then escalate your privileges by exploiting Windows `Authentication Tokens`.

:::

## NMAP

-  <b style={{ color: 'PowderBlue' }}>[IIS Windows Server: 80]</b> <b style={{ color: 'BlanchedAlmond' }}>[RDP: 3389]</b> <b style={{ color: 'FireBrick' }}>[Jenkins: 8080]</b>

```log
Nmap scan report for 10.10.47.178
Host is up (0.081s latency).

PORT     STATE SERVICE    VERSION
80/tcp   open  http       Microsoft IIS httpd 7.5
|_http-title: Site doesn't have a title (text/html).
|_http-server-header: Microsoft-IIS/7.5
| http-methods: 
|_  Potentially risky methods: TRACE
3389/tcp open  tcpwrapped
| ssl-cert: Subject: commonName=alfred
| Not valid before: 2022-10-09T02:19:25
|_Not valid after:  2023-04-10T02:19:25
8080/tcp open  http       Jetty 9.4.z-SNAPSHOT
|_http-server-header: Jetty(9.4.z-SNAPSHOT)
| http-robots.txt: 1 disallowed entry 
|_/
|_http-title: Site doesn't have a title (text/html;charset=utf-8).
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 31.08 seconds
```

<br/>

---
## Content Discovery

- **`Jenkins` Login Portal:** <b style={{ color: 'SandyBrown' }}>[IP:8080]</b>
- Jenkins is using **Default Credentials:** <b style={{ color: 'Chartreuse' }}>admin</b><b style={{ color: 'Grey' }}>:</b><b style={{ color: 'Coral' }}>admin</b>


![AF](/img/vmwindows/a-loginjenkins.png)


<br/>

- **We can Execute System Commands at:** <b style={{ color: 'SandyBrown' }}>[IP:8080/computer/(master)/script]</b>


![AF](/img/vmwindows/a-scriptconsolej.png)

---