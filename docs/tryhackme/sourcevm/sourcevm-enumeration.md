---
sidebar_position: 1
title: Enumeration
description: Source 
keywords: [source tryhackme, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, privilege escalation]
---


:::note Box Description

Exploit a recent vulnerability and hack `Webmin`, a Web-Based System Configuration Tool.

:::


## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP (Webmin): 10000]</b>

```log
Nmap scan report for 10.10.129.88
Host is up (0.088s latency).

PORT      STATE SERVICE VERSION
22/tcp    open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 b7:4c:d0:bd:e2:7b:1b:15:72:27:64:56:29:15:ea:23 (RSA)
|   256 b7:85:23:11:4f:44:fa:22:00:8e:40:77:5e:cf:28:7c (ECDSA)
|_  256 a9:fe:4b:82:bf:89:34:59:36:5b:ec:da:c2:d3:95:ce (ED25519)
10000/tcp open  http    MiniServ 1.890 (Webmin httpd)
|_http-title: Site doesn't have a title (text/html; Charset=iso-8859-1).
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```