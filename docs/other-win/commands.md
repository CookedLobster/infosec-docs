---
sidebar_position: 2
---

# Commands

## ICACLS


```batch
:: List Permissions
icacls <Directory>             

:: Grant Permissions
icacls <FileName> /grant Everyone:F
```

## Services - Task Information - Installers

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
:: Retriving Detailed Information [Service]
schtasks /query /tn <ServiceName - TaskName> /fo list /v

:: Start the Task
schtasks /run /tn <ServiceName - TaskName>
```

```batch
:: Search Files
where /r C:\ <FileName>
    
:: Running [.msi] Installer
msiexec /quiet /qn /i C:\Windows\Temp\Malicious.msi
```