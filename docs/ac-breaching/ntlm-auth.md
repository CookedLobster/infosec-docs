---
title: Authenticated Services
---

<b style={{ color: 'Plum' }}>New Technology LAN Manager (NTLM)</b> is the suite of <b>security</b> protocols used to authenticate users identities in <b style={{ color: 'DeepSkyBlue' }}>Active Directory</b>. <b>NTLM</b> can be used for Authentication by using a <b>Challenge-Response</b> Based Scheme called <b style={{ color: 'Plum' }}>NetNTLM</b> This Authentication Mechanism is heavily used by the Services on a Network. 

<br/>
<br/>

- Services that use **NetNTLM** can be exposed to the Internet:
	- **Internally-Hosted Exchange (Mail)** Servers that expose an Outlook Web App (OWA) Login Portal.
 	- **Remote Desktop Protocol (RDP)** Service of a Server being exposed to the Internet.
	- **Exposed VPN** Endpoints that were integrated with Active Directory.
	- **Web Applications** that are Internet-Facing and make use of **NetNTLM.**

<br/>


All Authentication material is forwarded to a <b style={{ color: 'Coral' }}>Domain Controller</b> in the form of a <b>Challenge</b>, and if completed successfully, the Application will Authenticate the User. 


**The Application is Authenticating on behalf of the User and not Authenticating the User directly on the Application itself.** This prevents the Application from storing <b style={{ color: 'DeepSkyBlue' }}>Active Directory</b> credentials, which should only be stored on a **Domain Controller**.

## Brute-Force

:::danger The Brute-Force is possible only if we recovered valid Credentials during our Enumeration. 

Most Active Directory Environments have **Account Lockout** configured. These types of Attacks can be Detected due to the amount of **Failed Authentication Attempts.**

:::