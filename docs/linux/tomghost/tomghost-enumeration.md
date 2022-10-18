---
sidebar_position: 1
description: TomGhost
sidebar_label: Enumeration
keywords: [tomghost, tomghost tryhacme, tom ghost exploit, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, privilege escalation, ghostcat]
---

# [TomGhost] Enumeration

:::note Box Description

Identify recent vulnerabilities to try exploit the system or read files that you should not have access to.

:::

## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'DarkGrey' }}>[DNS: 53]</b> <b style={{ color: 'DarkGoldenRod' }}>[Apache Jserv: 8009]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP (Apache Tomcat): 8080]</b>

```log
Nmap scan report for 10.10.29.49
Host is up (0.086s latency).

PORT     STATE SERVICE    VERSION
22/tcp   open  ssh        OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 f3:c8:9f:0b:6a:c5:fe:95:54:0b:e9:e3:ba:93:db:7c (RSA)
|   256 dd:1a:09:f5:99:63:a3:43:0d:2d:90:d8:e3:e1:1f:b9 (ECDSA)
|_  256 48:d1:30:1b:38:6c:c6:53:ea:30:81:80:5d:0c:f1:05 (ED25519)
53/tcp   open  tcpwrapped
8009/tcp open  ajp13      Apache Jserv (Protocol v1.3)
| ajp-methods: 
|_  Supported methods: GET HEAD POST OPTIONS
8080/tcp open  http       Apache Tomcat 9.0.30
|_http-title: Apache Tomcat/9.0.30
|_http-favicon: Apache Tomcat
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

<br/>

---
## Content Discovery

- **Apache Tomcat:** <b style={{ color: 'SandyBrown' }}>[IP:8080]</b>
- **Version:** <b style={{ color: 'Plum' }}>9.0.30</b>

![SCF](/img/vmlinux/t-tomcat.png)


---