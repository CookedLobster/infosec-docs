---
sidebar_position: 1
description: Wgel
keywords: [wgel, wgel tryhackme, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, privilege escalation]
---

# Enumeration

:::note Box Description

Can you exfiltrate the Root flag?

:::


## NMAP

- <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b>

```log
Nmap scan report for 10.10.250.65
Host is up (0.084s latency).

PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 94:96:1b:66:80:1b:76:48:68:2d:14:b5:9a:01:aa:aa (RSA)
|   256 18:f7:10:cc:5f:40:f6:cf:92:f8:69:16:e2:48:f4:38 (ECDSA)
|_  256 b9:0b:97:2e:45:9b:f3:2a:4b:11:c7:83:10:33:e0:ce (ED25519)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Apache2 Ubuntu Default Page: It works
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

```

## FFUF

- **Default `Apache2` Page:** <b style={{ color: 'SandyBrown' }}>[IP:80]</b>
- **Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/sitemap]</b> Website Template. 

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.250.65/sitemap/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

images                  [Status: 301, Size: 321, Words: 20, Lines: 10, Duration: 139ms]
css                     [Status: 301, Size: 318, Words: 20, Lines: 10, Duration: 113ms]
js                      [Status: 301, Size: 317, Words: 20, Lines: 10, Duration: 108ms]
fonts                   [Status: 301, Size: 320, Words: 20, Lines: 10, Duration: 113ms]
```

<br/>

- **Private SSH Key:** <b style={{ color: 'SandyBrown' }}>[IP:80/sitemap/.ssh/id_rsa]</b>  

```log
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.250.65/sitemap/FUZZ
 :: Wordlist         : FUZZ: Seclists/Discovery/Web-Content/dirsearch.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

.ssh/id_rsa             [Status: 200, Size: 1675, Words: 7, Lines: 28, Duration: 252ms]
```


<br/>

---
## Content Discovery

- Hidden Comment: <b style={{ color: 'SandyBrown' }}>[IP:80]</b> 
- **Found Username:** <b style={{ color: 'Chartreuse' }}>jessie</b>

```html
<!-- Jessie don't forget to update the webiste -->
```

<br/>

- **Template Page:** <b style={{ color: 'SandyBrown' }}>[IP:80/sitemap]</b>

![WG](/img/vmlinux/w-template.png)


<br/>

- **Private SSH Key Location:** <b style={{ color: 'SandyBrown' }}>[IP:80/sitemap/.ssh/id_rsa]</b>

```js
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA2mujeBv3MEQFCel8yvjgDz066+8Gz0W72HJ5tvG8bj7Lz380
m+JYAquy30lSp5jH/bhcvYLsK+T9zEdzHmjKDtZN2cYgwHw0dDadSXWFf9W2gc3x
W69vjkHLJs+lQi0bEJvqpCZ1rFFSpV0OjVYRxQ4KfAawBsCG6lA7GO7vLZPRiKsP
y4lg2StXQYuZ0cUvx8UkhpgxWy/OO9ceMNondU61kyHafKobJP7Py5QnH7cP/psr
+J5M/fVBoKPcPXa71mA/ZUioimChBPV/i/0za0FzVuJZdnSPtS7LzPjYFqxnm/BH
Wo/Lmln4FLzLb1T31pOoTtTKuUQWxHf7cN8v6QIDAQABAoIBAFZDKpV2HgL+6iqG
/1U+Q2dhXFLv3PWhadXLKEzbXfsAbAfwCjwCgZXUb9mFoNI2Ic4PsPjbqyCO2LmE
AnAhHKQNeUOn3ymGJEU9iJMJigb5xZGwX0FBoUJCs9QJMBBZthWyLlJUKic7GvPa
M7QYKP51VCi1j3GrOd1ygFSRkP6jZpOpM33dG1/ubom7OWDZPDS9AjAOkYuJBobG
SUM+uxh7JJn8uM9J4NvQPkC10RIXFYECwNW+iHsB0CWlcF7CAZAbWLsJgd6TcGTv
2KBA6YcfGXN0b49CFOBMLBY/dcWpHu+d0KcruHTeTnM7aLdrexpiMJ3XHVQ4QRP2
p3xz9QECgYEA+VXndZU98FT+armRv8iwuCOAmN8p7tD1W9S2evJEA5uTCsDzmsDj
7pUO8zziTXgeDENrcz1uo0e3bL13MiZeFe9HQNMpVOX+vEaCZd6ZNFbJ4R889D7I
dcXDvkNRbw42ZWx8TawzwXFVhn8Rs9fMwPlbdVh9f9h7papfGN2FoeECgYEA4EIy
GW9eJnl0tzL31TpW2lnJ+KYCRIlucQUnBtQLWdTncUkm+LBS5Z6dGxEcwCrYY1fh
shl66KulTmE3G9nFPKezCwd7jFWmUUK0hX6Sog7VRQZw72cmp7lYb1KRQ9A0Nb97
uhgbVrK/Rm+uACIJ+YD57/ZuwuhnJPirXwdaXwkCgYBMkrxN2TK3f3LPFgST8K+N
LaIN0OOQ622e8TnFkmee8AV9lPp7eWfG2tJHk1gw0IXx4Da8oo466QiFBb74kN3u
QJkSaIdWAnh0G/dqD63fbBP95lkS7cEkokLWSNhWkffUuDeIpy0R6JuKfbXTFKBW
V35mEHIidDqtCyC/gzDKIQKBgDE+d+/b46nBK976oy9AY0gJRW+DTKYuI4FP51T5
hRCRzsyyios7dMiVPtxtsomEHwYZiybnr3SeFGuUr1w/Qq9iB8/ZMckMGbxoUGmr
9Jj/dtd0ZaI8XWGhMokncVyZwI044ftoRcCQ+a2G4oeG8ffG2ZtW2tWT4OpebIsu
eyq5AoGBANCkOaWnitoMTdWZ5d+WNNCqcztoNppuoMaG7L3smUSBz6k8J4p4yDPb
QNF1fedEOvsguMlpNgvcWVXGINgoOOUSJTxCRQFy/onH6X1T5OAAW6/UXc4S7Vsg
jL8g9yBg4vPB8dHC6JeJpFFE06vxQMFzn6vjEab9GhnpMihrSCod
-----END RSA PRIVATE KEY-----
```

---