---
sidebar_position: 3
title: Commands
---

### FIND


```bash
# Search for SUID
find / -type f -perm -04000 -ls 2>/dev/null

# Search for Writable Folders
find / -writable 2>/dev/null | cut -d "/" -f 2 | sort -u
```

### GREP

```bash
# Search Hardcoded Passwords
grep -iorE '(password|pwd|pass)[[:space:]]*=[[:space:]]*[[:alpha:]]+' 2>/dev/null

# Search IP Addresses
grep -roE "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" 2>/dev/null
```

### Capabilities


```bash
# Search for Capabilities
getcap -r / 2>/dev/null
```

### Network


```bash
# Show Active Connections
(netstat -punta || ss -nltpu || netstat -anv) | grep -i LISTEN

# Similar Tools
lsof -i -n
rpcinfo -p
```