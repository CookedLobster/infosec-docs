---
sidebar_position: 1
description: Blaster
keywords: [Blaster, TryHackMe, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, privilege escalation, wade, CVE-2019-1388]
---


# Enumeration

## NMAP

- <b style={{ color: 'PowderBlue' }}>[IIS Windows Server: 80]</b> <b style={{ color: 'BlanchedAlmond' }}>[RDP: 3389]</b>

```log
Nmap scan report for 10.10.155.185
Host is up (0.081s latency).

PORT     STATE SERVICE       VERSION
80/tcp   open  http          Microsoft IIS httpd 10.0
| http-methods: 
|_  Potentially risky methods: TRACE
|_http-title: IIS Windows Server
|_http-server-header: Microsoft-IIS/10.0
3389/tcp open  ms-wbt-server Microsoft Terminal Services
| rdp-ntlm-info: 
|   Target_Name: RETROWEB
|   NetBIOS_Domain_Name: RETROWEB
|   NetBIOS_Computer_Name: RETROWEB
|   DNS_Domain_Name: RetroWeb
|   DNS_Computer_Name: RetroWeb
|   Product_Version: 10.0.14393
|_  System_Time: 2022-10-10T02:38:52+00:00
| ssl-cert: Subject: commonName=RetroWeb
| Not valid before: 2022-10-09T02:36:59
|_Not valid after:  2023-04-10T02:36:59
|_ssl-date: 2022-10-10T02:38:54+00:00; -5s from scanner time.
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: mean: -5s, deviation: 0s, median: -6s
```


## FFUF

- **Blog Website:** <b style={{ color: 'SandyBrown' }}>[IP:80/retro]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.155.185/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

retro                   [Status: 301, Size: 150, Words: 9, Lines: 2, Duration: 153ms]
```


<br/>

---
## Content Discovery


- <b style={{ color: 'Chartreuse' }}>Wade</b> Blog Website: <b style={{ color: 'SandyBrown' }}>[IP:80/retro]</b>


![BR](/img/vmwindows/b-blasterone.png)


- **Searching Through `Wade` Posts:** <b style={{ color: 'SandyBrown' }}>[IP:80/retro/index.php/author/wade]</b>


![BR](/img/vmwindows/b-blastertwo.png)


<br/>

- <b style={{ color: 'SandyBrown' }}>[IP:80/retro/index.php/2019/12/09/ready-player-one]</b>
- Found `Wade` <b style={{ color: 'DeepSkyBlue' }}>RDP (Remote Desktop Protocol)</b> Credentials.
- **Username - Password:** <b style={{ color: 'Chartreuse' }}>Wade</b><b style={{ color: 'Grey' }}>:</b><b style={{ color: 'Coral' }}>parzival</b>


![BR](/img/vmwindows/b-blasterthree.png)

---

<br/>

## HHUPD

A **Privilege Escalation Vulnerability** exists in the <b style={{ color: 'PowderBlue' }}>Windows Certificate Dialog</b> <b style={{ color: 'Red' }}>(CVE-2019-1388).</b>

