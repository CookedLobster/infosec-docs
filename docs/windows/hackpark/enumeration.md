---
sidebar_position: 1
---

# Enumeration

## NMAP

- <b style={{ color: 'PowderBlue' }}>[IIS Windows Server: 80]</b> <b style={{ color: 'BlanchedAlmond' }}>[RDP: 3389]</b>

```log
Nmap scan report for 10.10.169.216
Host is up (0.22s latency).

PORT     STATE SERVICE            VERSION
80/tcp   open  http               Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-server-header: Microsoft-IIS/8.5
|_http-title: hackpark | hackpark amusements
| http-methods: 
|_  Potentially risky methods: TRACE
| http-robots.txt: 6 disallowed entries 
| /Account/*.* /search /search.aspx /error404.aspx 
|_/archive /archive.aspx
3389/tcp open  ssl/ms-wbt-server?
| ssl-cert: Subject: commonName=hackpark
| Not valid before: 2022-10-09T06:04:58
|_Not valid after:  2023-04-10T06:04:58
| rdp-ntlm-info: 
|   Target_Name: HACKPARK
|   NetBIOS_Domain_Name: HACKPARK
|   NetBIOS_Computer_Name: HACKPARK
|   DNS_Domain_Name: hackpark
|   DNS_Computer_Name: hackpark
|   Product_Version: 6.3.9600
|_  System_Time: 2022-10-10T06:06:39+00:00
|_ssl-date: 2022-10-10T06:06:41+00:00; -5s from scanner time.
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: mean: -5s, deviation: 0s, median: -6s
```

<br/>

---
## Content Discovery


- **Landing Page:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b>
- From the Landing Page we can Click `Login` to get Redirected to `BlogEngie` Login Portal.

<br/>

- **`BlogEngine` Login Portal Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/Account/login.aspx?ReturnURL=/admin/]</b>

![HP](/img/vmwindows/h-hackparklogin.png)

---