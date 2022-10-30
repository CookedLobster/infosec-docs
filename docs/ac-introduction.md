---
title: Active Directory
hide_title: true
description: Pentesting Documentations
keywords: [tryhackme, exploitation guides, exploiting, enumeration, hackthebox, pentesting, docs, vulnerabilities, privilege escalation, infosec, infosec docs, pentesting docs, pentesting guide, hacking, priv esc, payloads, windows privilege escalation, reverse shell, web shell, terminal stabilization, shell stabilization, interactive tty, stabilize reverse shell, tryhackme overpass]
---


<br/>
<br/>

:::info Breaching

Before we can Exploit Active Directory Misconfigurations for **Privilege Escalation - Lateral Movement** we need to Achieve **Initial Access. **

Contains **`Authentication`** Methods, **`LDAP - MDT - NTLM`** and usual Locations of the **`Configuration Files`** that can contain **Exposed Credentials.**

:::

:::info Enumeration

Once we have the first set of **Active Directory Credentials**, we can start **Enumerating** various Details about the AD Setup and Structure with Authenticated Access.

This Module contains **`Command Line - Powershell`** Enumeration Techniques.
:::

<br/>


:::caution Lateral Movement

Techniques used to **Move Around the Network** while creating as few Alerts as Possible. 

Contains **`Kerberos - NetNTLM`** Authentication Methods and how to Circumvent those Methods. Guides on how to **Spawn Process Remotely.** 

- **Remote Desktop Protocol** Hijacking
- **Port Forwarding** with Tools such as **`Socat - Chisel - SSH`**
- Installation of **MSI** Packages through **WMI**

:::

