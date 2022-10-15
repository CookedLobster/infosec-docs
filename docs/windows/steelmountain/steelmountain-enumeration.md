---
sidebar_position: 1
description: Steel Mountain
keywords: [steel mountain, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, privilege escalation, rejetto exploit]
---

# Enumeration

:::note Box Description

Hack into a Mr. Robot themed Windows machine. Use `Metasploit` for Initial Access, utilise `Powershell` for Windows privilege escalation enumeration and learn a new technique to get Administrator access.

:::


## NMAP

- <b style={{ color: 'BurlyWood' }}>[RPC: 135]</b> <b style={{ color: 'BlanchedAlmond' }}>[SMB: 139-445]</b> <b style={{ color: 'BlanchedAlmond' }}>[RDP: 3389]</b> <b style={{ color: 'PowderBlue' }}>[Rejetto HTTP File Server: 8080]</b>

```log
Nmap scan report for 10.10.32.61
Host is up (0.094s latency).

PORT      STATE  SERVICE            VERSION
80/tcp    open   http               Microsoft IIS httpd 8.5
|_http-title: Site doesn't have a title (text/html).
|_http-server-header: Microsoft-IIS/8.5
| http-methods: 
|_  Potentially risky methods: TRACE
135/tcp   open   msrpc              Microsoft Windows RPC
139/tcp   open   netbios-ssn        Microsoft Windows netbios-ssn
445/tcp   open   microsoft-ds       Microsoft Windows Server 2008 R2 - 2012 microsoft-ds
3389/tcp  open   ssl/ms-wbt-server?
|_ssl-date: 2022-10-10T05:16:01+00:00; -5s from scanner time.
| ssl-cert: Subject: commonName=steelmountain
| Not valid before: 2022-10-09T05:13:49
|_Not valid after:  2023-04-10T05:13:49
| rdp-ntlm-info: 
|   Target_Name: STEELMOUNTAIN
|   NetBIOS_Domain_Name: STEELMOUNTAIN
|   NetBIOS_Computer_Name: STEELMOUNTAIN
|   DNS_Domain_Name: steelmountain
|   DNS_Computer_Name: steelmountain
|   Product_Version: 6.3.9600
|_  System_Time: 2022-10-10T05:15:55+00:00
8080/tcp  open   http               HttpFileServer httpd 2.3
|_http-server-header: HFS 2.3
|_http-title: HFS /
49152/tcp open   msrpc              Microsoft Windows RPC
49153/tcp open   msrpc              Microsoft Windows RPC
49154/tcp open   msrpc              Microsoft Windows RPC
49155/tcp open   msrpc              Microsoft Windows RPC
49157/tcp closed unknown
49163/tcp closed unknown
Service Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode: 
|   3.0.2: 
|_    Message signing enabled but not required
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
|_clock-skew: mean: -5s, deviation: 0s, median: -6s
|_nbstat: NetBIOS name: STEELMOUNTAIN, NetBIOS user: <unknown>, NetBIOS MAC: 02:d7:f2:06:39:43 (unknown)
| smb2-time: 
|   date: 2022-10-10T05:15:55
|_  start_date: 2022-10-10T05:12:58
```

<br/>

---
## Content Discovery

- **Landing Page:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b>

![SM](/img/vmwindows/s-landing.png)

##

- **`Rejetto` HTTP File Server:** <b style={{ color: 'SandyBrown' }}>[IP:8080]</b>

![SM](/img/vmwindows/s-rejetto.png)

---

<br/>


## Rejetto HTTP File Server

Rejetto HTTP File Server <b style={{ color: 'Plum' }}>2.3X</b> Before <b style={{ color: 'Plum' }}>2.3c</b> <b style={{ color: 'Red' }}>(CVE-2014-6287)</b> allows Remote Attackers to Execute arbitrary programs via a <b style={{ color: 'PowderBlue' }}>%00</b> sequence in a Search Action.