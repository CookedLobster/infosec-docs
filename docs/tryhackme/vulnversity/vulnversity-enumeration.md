---
sidebar_position: 1
title: Enumeration
description: Vulnversity
keywords: [vulnversity, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, privilege escalation]
---


:::note Box Description

Learn about Active Recon, Web-App Attacks and Privilege Escalation.

:::


## NMAP

- <b style={{ color: 'DarkKhaki' }}>[FTP: 21]</b> <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'Orange' }}>[SMB: 139-445]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 3333]</b>

```log
Nmap scan report for 10.10.242.24
Host is up (0.085s latency).

PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 3.0.3
22/tcp   open  ssh         OpenSSH 7.2p2 Ubuntu 4ubuntu2.7 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 5a:4f:fc:b8:c8:76:1c:b5:85:1c:ac:b2:86:41:1c:5a (RSA)
|   256 ac:9d:ec:44:61:0c:28:85:00:88:e9:68:e9:d0:cb:3d (ECDSA)
|_  256 30:50:cb:70:5a:86:57:22:cb:52:d9:36:34:dc:a5:58 (ED25519)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp  open  netbios-ssn Samba smbd 4.3.11-Ubuntu (workgroup: WORKGROUP)
3333/tcp open  http        Apache httpd 2.4.18 ((Ubuntu))
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Vuln University
Service Info: Host: VULNUNIVERSITY; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
|_clock-skew: mean: 1h19m53s, deviation: 2h18m34s, median: -6s
| smb-os-discovery: 
|   OS: Windows 6.1 (Samba 4.3.11-Ubuntu)
|   Computer name: vulnuniversity
|   NetBIOS computer name: VULNUNIVERSITY\x00
|   Domain name: \x00
|   FQDN: vulnuniversity
|_  System time: 2022-10-07T05:07:28-04:00
|_nbstat: NetBIOS name: VULNUNIVERSITY, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled but not required
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-time: 
|   date: 2022-10-07T09:07:28
|_  start_date: N/A
```


## FFUF

- **Upload Folder:** <b style={{ color: 'SandyBrown' }}>[IP:3333/internal]</b>

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v1.5.0
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.242.24:3333/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

images                  [Status: 301, Size: 320, Words: 20, Lines: 10, Duration: 97ms]
css                     [Status: 301, Size: 317, Words: 20, Lines: 10, Duration: 102ms]
js                      [Status: 301, Size: 316, Words: 20, Lines: 10, Duration: 82ms]
fonts                   [Status: 301, Size: 319, Words: 20, Lines: 10, Duration: 108ms]
internal                [Status: 301, Size: 322, Words: 20, Lines: 10, Duration: 115ms]
```

- **Files Upload Destination:** <b style={{ color: 'SandyBrown' }}>[IP:3333/internal/uploads]</b>

```log
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.242.24:3333/internal/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

uploads                 [Status: 301, Size: 330, Words: 20, Lines: 10, Duration: 95ms]
```

<br/>

---
## Content Discovery


- **Landing Page:** <b style={{ color: 'SandyBrown' }}>[IP:3333]</b>

![SCF](/img/vmlinux/v-portal.png)

<br/>


- **Upload Web Page:** <b style={{ color: 'SandyBrown' }}>[IP:3333/internal]</b>
- **The Files are Upload to:** <b style={{ color: 'SandyBrown' }}>[IP:3333/internal/uploads]</b>

![SCF](/img/vmlinux/v-uploads.png)


---