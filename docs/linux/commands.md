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
# GREP Hardcoded Passwords
grep -irE '(password|pwd|pass)[[:space:]]*=[[:space:]]*[[:alpha:]]+' 2>/dev/null

# GREP IP Addresses
grep -roE "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" 2>/dev/null
```

### Capabilities


```batch
:: Search for Capabilities
getcap -r / 2>/dev/null
```