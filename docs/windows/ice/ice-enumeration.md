---
sidebar_position: 1
description: Ice
keywords: [ice, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, privilege escalation, icecast exploit, CVE-2004-1561]
---


# Enumeration

## NMAP

- <b style={{ color: 'BurlyWood' }}>[RPC: 135]</b> <b style={{ color: 'BlanchedAlmond' }}>[SMB: 139-445]</b> <b style={{ color: 'BlanchedAlmond' }}>[RDP: 3389]</b>> <b style={{ color: 'Orchid' }}>[Microsoft Network Discovery: 5357]</b> <b style={{ color: 'PowderBlue' }}>[Icecast: 8000]</b>

```log
Nmap scan report for 10.10.96.65
Host is up (0.092s latency).

PORT     STATE SERVICE      VERSION
135/tcp  open  msrpc        Microsoft Windows RPC
139/tcp  open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp  open  microsoft-ds Windows 7 Professional 7601 Service Pack 1 microsoft-ds (workgroup: WORKGROUP)
3389/tcp open  tcpwrapped
5357/tcp open  http         Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-title: Service Unavailable
|_http-server-header: Microsoft-HTTPAPI/2.0
8000/tcp open  http         Icecast streaming media server
|_http-title: Site doesn't have a title (text/html).
Service Info: Host: DARK-PC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode: 
|   2.1: 
|_    Message signing enabled but not required
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb-os-discovery: 
|   OS: Windows 7 Professional 7601 Service Pack 1 (Windows 7 Professional 6.1)
|   OS CPE: cpe:/o:microsoft:windows_7::sp1:professional
|   Computer name: Dark-PC
|   NetBIOS computer name: DARK-PC\x00
|   Workgroup: WORKGROUP\x00
|_  System time: 2022-10-09T23:44:29-05:00
|_clock-skew: mean: 1h39m54s, deviation: 2h53m12s, median: -6s
| smb2-time: 
|   date: 2022-10-10T04:44:29
|_  start_date: 2022-10-10T04:43:00
|_nbstat: NetBIOS name: DARK-PC, NetBIOS user: <unknown>, NetBIOS MAC: 02:57:74:7b:51:cd (unknown)
```


## Icecast

Buffer overflow in <b style={{ color: 'PowderBlue' }}>Icecast</b> <b style={{ color: 'Plum' }}>2.0.1</b> <b style={{ color: 'Red' }}>(CVE-2004-1561)</b> and earlier allows Remote Attackers to Execute arbitrary code via an HTTP Request with a large number of Headers.