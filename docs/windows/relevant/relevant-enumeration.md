---
sidebar_position: 1
description: Relevant
sidebar_label: Enumeration
keywords: [relevant, relevant tryhackme, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, privilege escalation, smbmap, smbclient]
---

# [Relevant] Enumeration

:::note Box Description

Penetration Testing Challenge.

:::


## NMAP

- <b style={{ color: 'PowderBlue' }}>[IIS Windows Server: 80]</b> <b style={{ color: 'BurlyWood' }}>[RPC: 135]</b> <b style={{ color: 'BlanchedAlmond' }}>[SMB: 139-445]</b> <b style={{ color: 'BlanchedAlmond' }}>[RDP: 3389]</b> <b style={{ color: 'PowderBlue' }}>[IIS Windows Server: 49663]</b>

```log
Nmap scan report for 10.10.180.65
Host is up (0.091s latency).

PORT      STATE    SERVICE       VERSION
80/tcp    open     http          Microsoft IIS httpd 10.0
|_http-title: IIS Windows Server
| http-methods: 
|_  Potentially risky methods: TRACE
|_http-server-header: Microsoft-IIS/10.0
135/tcp   open     msrpc         Microsoft Windows RPC
139/tcp   open     netbios-ssn   Microsoft Windows netbios-ssn
445/tcp   open     microsoft-ds  Windows Server 2016 Standard Evaluation 14393 microsoft-ds
3389/tcp  open     ms-wbt-server Microsoft Terminal Services
| rdp-ntlm-info: 
|   Target_Name: RELEVANT
|   NetBIOS_Domain_Name: RELEVANT
|   NetBIOS_Computer_Name: RELEVANT
|   DNS_Domain_Name: Relevant
|   DNS_Computer_Name: Relevant
|   Product_Version: 10.0.14393
|_  System_Time: 2022-10-10T04:56:55+00:00
|_ssl-date: 2022-10-10T04:57:36+00:00; -6s from scanner time.
| ssl-cert: Subject: commonName=Relevant
| Not valid before: 2022-10-09T04:55:09
|_Not valid after:  2023-04-10T04:55:09
49663/tcp open     http          Microsoft IIS httpd 10.0
| http-methods: 
|_  Potentially risky methods: TRACE
|_http-title: IIS Windows Server
|_http-server-header: Microsoft-IIS/10.0
49667/tcp open     msrpc         Microsoft Windows RPC
49669/tcp filtered unknown
Service Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: mean: 1h23m54s, deviation: 3h07m51s, median: -6s
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled but not required
| smb2-time: 
|   date: 2022-10-10T04:57:00
|_  start_date: 2022-10-10T04:55:08
| smb-os-discovery: 
|   OS: Windows Server 2016 Standard Evaluation 14393 (Windows Server 2016 Standard Evaluation 6.3)
|   Computer name: Relevant
|   NetBIOS computer name: RELEVANT\x00
|   Workgroup: WORKGROUP\x00
|_  System time: 2022-10-09T21:56:58-07:00
```


## SMBMAP

- **We have `Read - Write` Access on the <b style={{ color: 'DarkGoldenRod' }}>Share:</b> `nt4wrksv`**

```
[+] Guest session   	IP: 10.10.180.65:445	Name: 10.10.180.65                                      
        Disk                                                  	Permissions	Comment
	----                                                  	-----------	-------
	ADMIN$                                            	NO ACCESS	Remote Admin
	C$                                                	NO ACCESS	Default share
	IPC$                                              	READ ONLY	Remote IPC
	nt4wrksv                                          	READ, WRITE
```

<br/>

## SMBCLIENT

- **We can Login as `Anonymous`.**
- The File: **`passwords.txt` contain `BASE64` Encoded Passwords.**

```log
smb: \> ls
  .                                   D        0  Mon Oct 10 06:55:55 2022
  ..                                  D        0  Mon Oct 10 06:55:55 2022
  // highlight-next-line
  passwords.txt                       A       98  Sat Jul 25 17:15:33 2020
smb: \> get passwords.txt 
```

<br/>
<br/>

- **File:** `passwords.txt`
- The Text is `BASE64` Encoded

```
[User Passwords - Encoded]
Qm9iIC0gIVBAJCRXMHJEITEyMw==
QmlsbCAtIEp1dzRubmFNNG40MjA2OTY5NjkhJCQk
```

```
┌──────────────────────────────────────────┐     ┌────────────────────────────────┐
| Qm9iIC0gIVBAJCRXMHJEITEyMw==             | -►  | Bob - !P@$$W0rD!123            |
|──────────────────────────────────────────|     |────────────────────────────────|
| QmlsbCAtIEp1dzRubmFNNG40MjA20TY5NjkhJCQk | -►  | Bill - Juw4nnaM4n420696969!$$$ |
└──────────────────────────────────────────┘     └────────────────────────────────┘
```

<br/>

---
## Content Discovery

- **Windows WEB Server:** <b style={{ color: 'SandyBrown' }}>[IP:80] - [IP:49663]</b>


![RT](/img/vmwindows/r-windowsiis.png)

<br/>

- Browsing to <b style={{ color: 'Plum' }}>[IP:49663/nt4wrksv/passwords.txt]</b> we Access the same File that can be Accessed with `SMB.` **(This can be Used to Execute our `Reverse Shell` since we have Read - Write Permissions on the `SMB` Share)**
- **[NOTE]** `nt4wrksv` Is the `SMB` Share Name found with `smbmap`

```log
attacker@machine:~$ curl "10.10.180.65:49663/nt4wrksv/passwords.txt"
[User Passwords - Encoded]
Qm9iIC0gIVBAJCRXMHJEITEyMw==
QmlsbCAtIEp1dzRubmFNNG40MjA2OTY5NjkhJCQk
```

---