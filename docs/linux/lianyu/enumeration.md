---
sidebar_position: 1
description: Lian_Yu
keywords: [Lian_Yu, TryHackMe, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, ftp, privilege escalation]
---

# Enumeration

## NMAP

- <b style={{ color: 'DarkKhaki' }}>[FTP: 21]</b> <b style={{ color: 'Coral' }}>[SSH: 22]</b> <b style={{ color: 'LightSkyBlue' }}>[HTTP: 80]</b> <b style={{ color: 'Gainsboro' }}>[RPC: 111]</b>

```log
Nmap scan report for 10.10.231.6
Host is up (0.083s latency).

PORT    STATE SERVICE VERSION
21/tcp  open  ftp     vsftpd 3.0.2
22/tcp  open  ssh     OpenSSH 6.7p1 Debian 5+deb8u8 (protocol 2.0)
| ssh-hostkey: 
|   1024 56:50:bd:11:ef:d4:ac:56:32:c3:ee:73:3e:de:87:f4 (DSA)
|   2048 39:6f:3a:9c:b6:2d:ad:0c:d8:6d:be:77:13:07:25:d6 (RSA)
|   256 a6:69:96:d7:6d:61:27:96:7e:bb:9f:83:60:1b:52:12 (ECDSA)
|_  256 3f:43:76:75:a8:5a:a6:cd:33:b0:66:42:04:91:fe:a0 (ED25519)
80/tcp  open  http    Apache httpd
|_http-title: Purgatory
|_http-server-header: Apache
111/tcp open  rpcbind 2-4 (RPC #100000)
| rpcinfo: 
|   program version    port/proto  service
|   100000  2,3,4        111/tcp   rpcbind
|   100000  2,3,4        111/udp   rpcbind
|   100000  3,4          111/tcp6  rpcbind
|   100000  3,4          111/udp6  rpcbind
|   100024  1          33203/udp   status
|   100024  1          47739/tcp   status
|   100024  1          60464/udp6  status
|_  100024  1          60894/tcp6  status
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
```


## FFUF

- **Found Username:** <b style={{ color: 'SandyBrown' }}>[IP:80/island]</b> 

```log
        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.231.6/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

island                  [Status: 301, Size: 234, Words: 14, Lines: 8, Duration: 137ms]
```

<br/>

- **Hidden Comment:** <b style={{ color: 'SandyBrown' }}>[IP:80/island/2100]</b> 

```log
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.231.6/island/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

2100                    [Status: 301, Size: 239, Words: 14, Lines: 8, Duration: 114ms]
```

<br/>



<br/>

---
## Content Discovery

- **Found the Username** <b style={{ color: 'Chartreuse' }}>vigilante</b> <span style={{fontWeight: 'Bold'}}>:</span> <b style={{ color: 'SandyBrown' }}>[IP:80/island]</b>

```
Ohhh Noo, Don't Talk...............

I wasn't Expecting You at this Moment. I will meet you there
You should find a way to Lian_Yu as we are planed. The Code Word is:

vigilante
```

<br/>

- **Hidden Comment:** <b style={{ color: 'SandyBrown' }}>[IP:80/island/2100]</b>

```html
How Oliver Queen finds his way to Lian_Yu?
<!-- you can avail your .ticket here but how?   -->
```

- **Fuzzing by Extension** <b style={{ color: 'Plum' }}>[.ticket].</b> 
- <span style={{fontWeight: 'Bold'}}>Found an Encoded Text:</span> <b style={{ color: 'SandyBrown' }}>[IP:80/island/2100/green_arrow.ticket]</b> 

```log
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.231.6/island/2100/FUZZ
 :: Wordlist         : FUZZ: Dirbuster/directory-list-2.3-medium.txt
 :: Extensions       : .ticket 
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

green_arrow.ticket      [Status: 200, Size: 71, Words: 10, Lines: 7, Duration: 123ms]
```

<br/>

- **`BASE58` Encoded Text:** <b style={{ color: 'SandyBrown' }}>[IP:80/island/2100/green_arrow.ticket]</b>

```
This is just a token to get into Queen's Gambit(Ship)

RTy8yhBQdscX
```

<br/>

- Decoding the Text
- **`FTP` Password:** <b style={{ color: 'Chartreuse' }}>vigilante</b><b style={{ color: 'Dark' }}>:</b><b style={{ color: 'Coral' }}>!#th3h00d</b>

```css
+--------------+    +-----------+
| RTy8yhBQdscX | >> | !#th3h00d |
+--------------+    +-----------+
```

---

<br/>


## FTP

- **We can Login as:** <b style={{ color: 'Chartreuse' }}>vigilante</b><b style={{ color: 'Dark' }}>:</b><b style={{ color: 'Coral' }}>!#th3h00d</b>
- The File **`[aa.jpg]`**  has a  **`ZIP`** File Hidden Inside.
- The File **`[.other_user]`** contains an **SSH** Username <b style={{ color: 'Chartreuse' }}>Slade</b>

```
ftp> ls -al
drwxr-xr-x    2 1001     1001         4096 May 05  2020 .
drwxr-xr-x    4 0        0            4096 May 01  2020 ..
-rw-------    1 1001     1001           44 May 01  2020 .bash_history
-rw-r--r--    1 1001     1001          220 May 01  2020 .bash_logout
-rw-r--r--    1 1001     1001         3515 May 01  2020 .bashrc
-rw-r--r--    1 0        0            2483 May 01  2020 .other_user
-rw-r--r--    1 1001     1001          675 May 01  2020 .profile
-rw-r--r--    1 0        0          511720 May 01  2020 Leave_me_alone.png
-rw-r--r--    1 0        0          549924 May 05  2020 Queen's_Gambit.png
-rw-r--r--    1 0        0          191026 May 01  2020 aa.jpg
ftp> mget .other_user Leave_me_alone.png Queen's_Gambit.png aa.jpg
```

<br/>

- **File:** `.other_user`

```
Slade Wilson was 16 years old when he enlisted in the United States Army, having lied about his age. 

[...]

[...]
```