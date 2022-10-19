---
sidebar_position: 1
title: Permissions
hide_title: true
---

## User Permissions

```bash
-rw-r--r-- 12   mark   scanner 12.0K Apr  28 10:10 file_name
|[─][─][─]─   [──────] [──────]
| |  |  | |      |         |
| |  |  | |      |         └─────────► 7. Group
| |  |  | |      └───────────────────► 6. Owner
| |  |  | └──────────────────────────► 5. Alternate Access Method
| |  |  └────────────────────────────► 4. Others Permissions
| |  └───────────────────────────────► 3. Group Permissions
| └──────────────────────────────────► 2. Owner Permissions
└────────────────────────────────────► 1. File Type
```

## SUID && GUID

```js
    SUID		    GUID
rws-rwx-rwx		 rwx-rws-rwx
```

- **`S:`** If found in the User, it sets the <b style={{ color: 'Red' }}>SUID</b> Bit. If found in the Group, it sets the <b style={{ color: 'Plum' }}>SETGID</b> Bit. It also means that X Flag is set. When the SETUID or SETGID Flags are set on an Executable File, the file is executed with the file’s Owner and/or Group Privileges.

## Sticky Bit

```js
   STICKY
rws-rws-r-T		 
```

- **`T:`** If found in the Others, it sets the **STICKY** Bit. It also means that X Flag is set. This Flag is useless on Files.


## Numeric Method

```js
SUID = 4
GUID = 2
STICKY = 1
```

- **Check File Permissions**

```bash
stat -c "%a" File_Name 
```

<br/>

## PASSWD FORMAT

```
mark:x:1001:1001:mark,,,:/home/mark:/bin/bash
[──] ─ [──] [──] [─────] [────────] [────────]
|    |   |    |     |         |        |
|    |   |    |     |         |        └─► 7. Login Shell
|    |   |    |     |         └──────────► 6. Home Directory
|    |   |    |     └────────────────────► 5. GECOS
|    |   |    └──────────────────────────► 4. GID
|    |   └───────────────────────────────► 3. UID
|    └───────────────────────────────────► 2. Password
└────────────────────────────────────────► 1. Username
```

## SHADOW FORMAT

```
mark:$6$.n.:17736:0:99999:7:::
[──] [────] [───] ─ [───] ────
|      |      |   |   |   |||└───────────► 9. Unused
|      |      |   |   |   ||└────────────► 8. Expiration date
|      |      |   |   |   |└─────────────► 7. Inactivity Period
|      |      |   |   |   └──────────────► 6. Warning Period
|      |      |   |   └──────────────────► 5. Maximum Password Age
|      |      |   └──────────────────────► 4. Minimum Password Age
|      |      └──────────────────────────► 3. Last Password Change
|      └─────────────────────────────────► 2. Encrypted Password
└────────────────────────────────────────► 1. Username
```