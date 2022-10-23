---
sidebar_position: 2
title: Commands
---

### ICACLS


```batch
:: List Permissions
icacls <Directory>             

:: Grant Permissions
icacls <FileName> /grant Everyone:F
```

### Services - Task Information

```batch
:: Service Information
sc qc <ServiceName>

:: Show Tasks
tasklist /v
```

```powershell
# Show Service Full-Name
Get-Service | ft -auto

# List Running Services
Get-Service | Where-Object -Property Status -eq Running

# Task Information
Get-Scheduledtask -TaskName <TaskName>
```

```batch
:: Retrieving Detailed Information [Service]
schtasks /query /tn <ServiceName - TaskName> /fo list /v

:: Start the Task
schtasks /run /tn <ServiceName - TaskName>
```

### FIND

```batch
:: Search Files
where /r C:\ <FileName>
```

### Installers

```batch
:: Running [.msi] Installer
msiexec /quiet /qn /i C:\Windows\Temp\Malicious.msi
```