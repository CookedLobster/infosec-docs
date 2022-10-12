---
sidebar_position: 1
---

# Permissions

## User Permissions

```bash
-rw-r--r-- 12 delaila  scanner 12.0K Apr  28 10:10 file_name
|[-][-][-]-   [------] [------]
| |  |  | |      |         |
| |  |  | |      |         +---------> 7. Group
| |  |  | |      +-------------------> 6. Owner
| |  |  | +--------------------------> 5. Alternate Access Method
| |  |  +----------------------------> 4. Others Permissions
| |  +-------------------------------> 3. Group Permissions
| +----------------------------------> 2. Owner Permissions
+------------------------------------> 1. File Type
```

## SUID && GUID

```bash
    SUID		    GUID
rws-rwx-rwx		 rwx-rws-rwx
```

- **`S:`** If found in the User, it sets the <b style={{ color: 'Red' }}>SUID</b> Bit. If found in the Group, it sets the <b style={{ color: 'Plum' }}>SETGID</b> Bit. It also means that X Flag is set. When the SETUID or SETGID Flags are set on an Executable File, the file is executed with the file’s Owner and/or Group Privileges.

## Sticky Bit

```bash
   STICKY
rws-rws-r-T		 
```

- **`T:`** If found in the Others, it sets the **STICKY** Bit. It also means that X Flag is set. This Flag is useless on Files.


## Numeric Method

```bash
SUID = 4
GUID = 2
STICKY = 1

# Check File Permissions "Numeric"
stat -c "%a" File_Name 
```