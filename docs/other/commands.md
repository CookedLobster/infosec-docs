---
sidebar_position: 3
---

# Commands 

## FIND

- **Search for SUID**
```bash
find / -type f -perm -04000 -ls 2>/dev/null
```

- **`GREP` Hardcoded Passwords**

```bash
grep -irE '(password|pwd|pass)[[:space:]]*=[[:space:]]*[[:alpha:]]+' 2>/dev/null
```

- **`GREP` IP**

```bash
grep -roE "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" 2>/dev/null
```

## Capabilities

```bash
getcap -r / 2>/dev/null
```