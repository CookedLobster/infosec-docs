---
sidebar_position: 2
title: Commands
sidebar_class_name: Windows Commands
---

### Terminal

```batch
:: Detect Terminal Type
(dir 2>&1 *`|echo CMD);&

:: Print current Directory
echo %cd%

:: Formatting Output
ft -auto
```

### Executing

```batch
:: Execute [PSH] Commands from [CMD]
powershell -c "<Command>"

:: Execute [CMD] Commands from [PSH]
cmd /c "<Command>"
```

### Permissions

```batch
:: List Permissions
icacls <Directory>             

:: Grant Permissions
icacls <FileName> /grant Everyone:F

:: Take File/Folder Ownership
takeown /f <FileName>
```

### Services - Task Information

```batch
:: Service Information
sc qc <ServiceName>
```

```batch
:: Show Tasks
tasklist /v

:: Kill Tasks
taskkill /F /im <TaskName>
```

```powershell
# Show Service Full-Name
Get-Service | ft -auto

# List Running Services
Get-Service | Where-Object -Property Status -eq Running

# Task Information
Get-Scheduledtask -TaskName <TaskName>
Get-ScheduledJob
```

```batch
:: Retrieving Detailed Information [Service]
schtasks /query /tn <ServiceName - TaskName> /fo list /v

:: Start the Task
schtasks /run /tn <ServiceName - TaskName>
```

### FIND - DELETE

```batch
:: Search Files [Current Folder/Subfolder]
dir /s <FileName>

:: Search Files [C:\ Drive]
where /r C:\ <FileName>

:: Force Delete Files [CMD]
del /f <FileName>
```

```powershell
# Recursive Search
Get-ChildItem -Path C:\ -Include "File.txt" -File -Recurse -ErrorAction SilentlyContinue

# Force Delete Files [PSH]
Remove-item –force <FileName>
```


### Installers

```batch
:: Running [.msi] Installer
msiexec /quiet /qn /i C:\Windows\Temp\Malicious.msi
```

### Script Execution

```powershell
# Set Execution Policy
Set-ExecutionPolicy Bypass -Scope process -Force

# List Execution Policy Rules
Get-ExecutionPolicy -List | Format-Table -AutoSize
```