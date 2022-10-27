---
sidebar_position: 1
title: Stabilization
description: Linux Shell Stabilization
keywords: [shell stabilization, shell stabilization linux, netcat shell stabilization, netcat stabilization]
---

```batch
:: In Linux we can use rlwrap before Connecting to the Target Machine
rlwrap nc -nvlp <PORT>
```


```batch
:: Import using one of the Methods
:: Python[3]
python3 -c 'import pty; pty.spawn("/bin/bash")'

:: Python[2]
python -c 'import pty; pty.spawn("/bin/bash")'
```

```batch
:: Background the SHELL
CTRL+Z
```

```batch
:: Change the Terminal Mode
stty raw -echo; fg
reset
```


```batch
:: Set the Terminal Type
xterm   
```


## Interface


```bash
# Set Terminal [Type - Size - User Colors]
export SHELL=bash; export TERM=xterm; stty rows 42 columns 220; export PS1="\e[1;35m\u@\h \W\$ \e[m "
```

```bash
# Find Terminal [Size]
tput cols; tput lines;

# Set Terminal [Size]
export SHELL=bash; export TERM=xterm; stty rows 42 columns 220
```

