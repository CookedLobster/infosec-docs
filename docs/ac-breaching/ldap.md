---
title: Directory Access Protocol
---

In <b style={{ color: 'Plum' }}>Directory Access Protocol (LDAP)</b> Authentication, the Application directly verifies the User Credentials. The Application has a pair of AD Credentials that it can use first to query <b>LDAP</b> and then verify the <b style={{ color: 'DeepSkyBlue' }}>Active Directory (AD)</b> User Credentials. 


```batch
:: LDAP
389/TCP
```

<br/>

- **LDAP** Authentication is a popular mechanism with Third-Party (NON-Microsoft) applications that integrate with <b style={{ color: 'DeepSkyBlue' }}>Active Directory</b>
	- **`[Gitlab - Jenkins - Custom Web Applications - Printers - VPN's]`**


<br/>

If any of these Applications or Services are exposed on the Internet, the same type of attacks as those leveraged against **NTLM** Authenticated Systems can be used. In essence, we can attempt to recover the <b style={{ color: 'DeepSkyBlue' }}>AD</b> credentials used by the service to gain Authenticated Access to <b style={{ color: 'DeepSkyBlue' }}>AD</b>.

These Credentials are often stored in **Plain-Text** in **Configuration Files** since the Security model relies on keeping the Location and Storage Configuration file Secure rather than its Contents.