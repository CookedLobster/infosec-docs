---
title: NFS
description: NFS Methodologies, Tools
---

**`NFS` (Network File System)** allows a System to Share Directories and Files with others over a Network. It does this by Mounting all, or a portion of a file system on a server. **There are no Mechanisms for Authentication.**

```batch
:: NFS
2049/TCP
```

#### How NFS Works?

First, the client will Request to Mount a Directory from a Remote Host on a local Directory. The Mount Service will then act to connect to the relevant Mount Daemon using **RPC**.

The Server checks if the user has Permission to Mount whatever directory has been requested. It will then return a file handle which uniquely identifies each File and Directory that is on the Server.


<br/>

## Show Contents

```batch
:: Show Mountable Folders
showmount -e <IP>
```

```batch
:: Show Files without Mounting
nfs-ls nfs://IP/DIRECTORY

:: Read Files without Mounting
nfs-cat nfs://IP/DIRECTORY/FILE_TO_READ
```

## Mounting

```batch
:: Mounting the NFS Share
mkdir /mnt/MOUNT
mount -t nfs IP:/DIRECTORY /mnt/MOUNT -o nolock	
```

## Configuration Files

```batch
:: Location of the Configuration Files
/etc/exports
/etc/lib/nfs/etab
```

<br/>

- **`[no_root_squash]` If turned Off, it can allow the creation of `SUID` Bit files, allowing a remote user `ROOT` access to the Connected System.**

```batch
:: Dangerous Settings
no_root_squash
rw
```