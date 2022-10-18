---
sidebar_position: 1
title: Overview
---

`SSRF` is a Vulnerability that allows a malicious user to cause the Web-Server to make an additional or edited HTTP Request to the resource of the attacker's choosing.

- **Types Of SSRF:**
    - `Regular:` The data is returned to the Attacker Screen.
    - `Blind:` No Information is returned to the Attacker Screen.


- **SSRF Impact:**
	- Access to `Unauthorised Areas`
	- Access to `Customer/Organisational Data`
	- Ability to Scale to `Internal Networks`
	- Reveal `Authentication Tokens/Credentials`


<br/>

## Finding SSRF

- **Full URL is used in a Parameter in the Address Bar:**
	- `http://server.website.com/store`

```js
┌────────────────────────────────────────────────────────────────────────┐
| URL: | https://website.com/form?server=http://server.website.com/store |
└────────────────────────────────────────────────────────────────────────┘
```

<br/>

- **Hidden Field in a Form:**
	- `value="http://server.website.com/store"`

```html
<form method="post" action="/form">
	<input type="hidden" name="server" value="http://server.website.com/store">
</form>
```

<br/>

- **Partial URL such as the Hostname:**
	- `=api`

```js
┌────────────────────────────────────────────┐
| URL: | https://website.com/form?server=api |
└────────────────────────────────────────────┘
```

<br/>

- **Path of the URL:**
	- `=/forms/contact`

```js
┌────────────────────────────────────────────────────┐
| URL: | https://website.com/form?dst=/forms/contact |
└────────────────────────────────────────────────────┘
```

:::info Blind SSRF

If working with a **Blind SSRF** where no output is reflected back. We need to use an external HTTP Logging Tool to Monitor The Requests

:::

<br/>

## Defeating SSRF Defenses

<div class="alert alert--danger" role="alert">DENY LIST</div>

<br/>

All Requests are Accepted apart from resources specified in a list or matching a particular pattern. A Web Application may employ a Deny List to protect sensitive endpoints, IP Addresses or Domains from being accessed by the Public while still allowing access to other Locations. 


A specific Endpoint to Restrict Access is the **LOCALHOST**, which may contain Server Performance Data or other Sensitive Information, so domain names such as **LOCALHOST** and `127.0.0.1` would appear on a Deny List. Attackers can Bypass a Deny List by using alternative **LOCALHOST** references such as `0 - 0.0.0.0 - 0000 - 127.1 - 127.*.*.* - 2130706433 - 017700000001` or Subdomains that have a DNS Record which Resolves to the IP Address `127.0.0.1` such as `127.0.0.1.nip.io`


In a **Cloud** Environment, it would be beneficial to block access to the IP address `169.254.169.254`, which contains Metadata for the deployed Cloud Server, including possibly Sensitive Information. An attacker can Bypass this by registering a Subdomain on their own domain with a DNS record that points to the IP Address `169.254.169.254`


<br/>

<div class="alert alert--success" role="alert">ALLOW LIST</div>

<br/>

AlL Requests get Denied unless they appear on a List or Match a particular pattern, such as a rule that an URL used in a parameter must begin with `https://website.com`. An Attacker could quickly circumvent this rule by creating a **Subdomain** such as `https://website.com.attackers-domain.com`. 

The Application Logic would Now **Allow** this Input and let an Attacker control the internal HTTP Request.

<br/>

<div class="alert alert--info" role="alert">OPEN REDIRECT</div>

<br/>

Is an Endpoint on the Server where the Website visitor gets automatically redirected to another Website Address.

The link `https://website.com/link?url=https://amazon.com`. This Endpoint was created to record the number of times visitors have clicked on this link for Advertising/Marketing purposes. **An Attacker could utilise the above feature to Redirect the Internal HTTP Request to a Domain of the Attacker Choice.**