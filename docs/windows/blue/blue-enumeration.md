---
sidebar_position: 1
title: Enumeration
description: Blue
keywords: [blue, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, privilege escalation, eternalblue, eternal blue, MS17-010]
---


:::note Box Description

Deploy & hack into a Windows machine, leveraging common misconfigurations issues.

:::



## NMAP

- <b style={{ color: 'BurlyWood' }}>[RPC: 135]</b> <b style={{ color: 'BlanchedAlmond' }}>[SMB: 139-445]</b> <b style={{ color: 'BlanchedAlmond' }}>[RDP: 3389]</b>

```log
Nmap scan report for 10.10.220.76
Host is up (0.087s latency).

PORT      STATE SERVICE      VERSION
135/tcp   open  msrpc        Microsoft Windows RPC
139/tcp   open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp   open  microsoft-ds Windows 7 Professional 7601 Service Pack 1 microsoft-ds (workgroup: WORKGROUP)
3389/tcp  open  tcpwrapped
|_ssl-date: 2022-10-10T02:52:30+00:00; -6s from scanner time.
| ssl-cert: Subject: commonName=Jon-PC
| Not valid before: 2022-10-09T02:48:07
|_Not valid after:  2023-04-10T02:48:07
| rdp-ntlm-info: 
|   Target_Name: JON-PC
|   NetBIOS_Domain_Name: JON-PC
|   NetBIOS_Computer_Name: JON-PC
|   DNS_Domain_Name: Jon-PC
|   DNS_Computer_Name: Jon-PC
|   Product_Version: 6.1.7601
|_  System_Time: 2022-10-10T02:52:15+00:00
49152/tcp open  msrpc        Microsoft Windows RPC
49153/tcp open  msrpc        Microsoft Windows RPC
49154/tcp open  msrpc        Microsoft Windows RPC
49158/tcp open  msrpc        Microsoft Windows RPC
49159/tcp open  msrpc        Microsoft Windows RPC
Service Info: Host: JON-PC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: mean: 59m54s, deviation: 2h14m10s, median: -6s
|_nbstat: NetBIOS name: JON-PC, NetBIOS user: <unknown>, NetBIOS MAC: 02:5b:d5:20:9c:cb (unknown)
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode: 
|   2.1: 
|_    Message signing enabled but not required
| smb2-time: 
|   date: 2022-10-10T02:52:15
|_  start_date: 2022-10-10T02:48:06
| smb-os-discovery: 
|   OS: Windows 7 Professional 7601 Service Pack 1 (Windows 7 Professional 6.1)
|   OS CPE: cpe:/o:microsoft:windows_7::sp1:professional
|   Computer name: Jon-PC
|   NetBIOS computer name: JON-PC\x00
|   Workgroup: WORKGROUP\x00
|_  System time: 2022-10-09T21:52:15-05:00
```


## EternalBlue

**EternalBlue** Officially Named <b style={{ color: 'Red' }}>MS17-010</b> by Microsoft. Affects Windows OS that uses the SMBv1 File-Sharing Protocol.