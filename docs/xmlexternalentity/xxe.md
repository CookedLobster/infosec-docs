---
sidebar_position: 2
title: XXE
---


`XML External Entity Injection` is a web security vulnerability that allows an attacker to interfere with an application's processing of `XML` Data. It often allows an attacker to view files on the application server filesystem, and to interact with any back-end or external systems that the application itself can access.

In some situations, an attacker can escalate an XXE attack to compromise the underlying server or other back-end infrastructure, by leveraging the XXE vulnerability to perform server-side request forgery `SSRF` attacks.

<br/>

- **There are Two Types of XXE:**
    - `In-Band:` XXE Attack is the one in which the Attacker can receive an **Immediate Response to the XXE Payload.**
    - `Out-Of-Band:` XXE Attacks **(Blind XXE),** there is **No Immediate Response from the Web Application** and attacker has to reflect the output of their XXE payload to some other file or their own server.

<br/>

## XXE PAYLOAD 

- <a class="button button--outline button--info" href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XXE%20Injection">XXE PAYLOADS GitHub</a>
- Example of a Simple `XXE` PAYLOAD

```xml
<?xml version="1.0"?>
<!DOCTYPE root [<!ENTITY read SYSTEM 'file:///etc/passwd'>]>
<root>&read;</root>
```
