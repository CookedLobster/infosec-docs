---
title: Powershell [PSH]
---

:::info Benefits

- The **`PowerShell`** **cmdlets** can Enumerate significantly more Information than the **`net`** Commands from Command Prompt.
- We can create our own **cmdlets** to Enumerate Specific Information.
- We can use the **AD-RSAT (Remote Server Administration Tools)** **cmdlets** to directly change AD Objects, such as Resetting Passwords or adding a User to a specific Group.

:::

:::danger Drawbacks

- **`PowerShell`** is often **Monitored** more by the Blue Teams than Command Prompt.
- We have to install the **AD-RSAT (Remote Server Administration Tools)** Tooling or use other, Potentially Detectable, Scripts for **PowerShell Enumeration.**

:::


### Users

```powershell
# Returns Active Directory Users
# [Identity - Account Name]
# [Server - Domain Controller]
# [Properties - Information Associated with the Account]
Get-ADUser -Identity delilah.gomez -Server za.adobe.com -Properties *

# Filter Information
Get-ADUser -Filter 'Name -like "*delilah"' -Server za.adobe.com | Format-Table Name,SamAccountName -A
```

### Groups

```powershell
# Returns Active Directory Groups
Get-ADGroup -Identity Administrators -Server za.adobe.com

# Returns Group Membership 
Get-ADGroupMember -Identity Administrators -Server za.adobe.com
```

### Active Directory Objects

```powershell
# Active Directory Objects that were changed after a Specified Date
$ChangeDate = New-Object DateTime(2022, 02, 28, 12, 00, 00)
Get-ADObject -Filter 'whenChanged -gt $ChangeDate' -includeDeletedObjects -Server za.adobe.com
```

```powershell
# Password Spraying Attack
# Enumerate Accounts that have a badPwdCount > 0 [There Accounts should be Avoided]
Get-ADObject -Filter 'badPwdCount -gt 0' -Server za.adobe.com
```

### Domains

```powershell
# Additional Information about a specific Domain
Get-ADDomain -Server za.adobe.com
```

### Altering AD Objects

```powershell
# Force-Change the Password of Active Directory User
Set-ADAccountPassword -Identity gordon.stevens -Server za.adobe.com -OldPassword (ConvertTo-SecureString -AsPlaintext "old" -force) -NewPassword (ConvertTo-SecureString -AsPlainText "new" -Force)
```