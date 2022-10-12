---
sidebar_position: 1
---

# Stabilisation - Colors

- **Spawn `[Python-3]` Shell**

```bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
```

- **Spawn `[Python-2]` Shell**

```bash
python  -c 'import pty; pty.spawn("/bin/bash")'
python2 -c 'import pty; pty.spawn("/bin/bash")'
```

<br/>

- **Stabilisation**

```bash
CTRL+Z
stty raw -echo; fg 
reset

# Terminal Type 
xterm
```
```bash
# Find Terminal [Size]
tput cols; tput lines;

# Set Terminal [Size]
export SHELL=bash; export TERM=xterm; stty rows 42 columns 220
```

- **`RLWRAP`**

```bash
rlwrap nc -nvlp 8888
```

<br/>

- **Set Terminal `[Size] - [User Colors]`**

```bash
export SHELL=bash; export TERM=xterm; stty rows 42 columns 220; export PS1="\e[1;35m\u@\h \W\$ \e[m "
```

- **Start Simple `HTTP` Server**

```bash
# Python3
python3 -m http.server 8888 

# Python2
python -m SimpleHTTPServer 8888  
```