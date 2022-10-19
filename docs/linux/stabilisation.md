---
sidebar_position: 1
title: Terminal Stabilisation
hide_title: true
description: Linux Shell Stabilisation
keywords: [shell stabilisation, shell stabilisation linux, netcat shell stabilisation, netcat stabilisation]
---

## Stabilisation

- **Import using one of the Methods** 

```bash
python -c 'import pty; pty.spawn("/bin/bash")'
python3 -c 'import pty; pty.spawn("/bin/bash")'
```

- **Background the `SHELL`**

```batch
CTRL+Z
```

- **Change the Terminal Mode**

```bash
stty raw -echo; fg
reset
```

- **Set the Terminal Type**

```bash
xterm   
```

<br/>

## Interface

- **Set Terminal `[Size] - [User Colors]`**

```bash
export SHELL=bash; export TERM=xterm; stty rows 42 columns 220; export PS1="\e[1;35m\u@\h \W\$ \e[m "
```

```bash
# Find Terminal [Size]
tput cols; tput lines;

# Set Terminal [Size]
export SHELL=bash; export TERM=xterm; stty rows 42 columns 220
```

