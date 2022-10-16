---
sidebar_position: 2
---

# Commands [Common]

## ICACLS

- **List Permissions**

```batch
icacls <Directory>                     
icacls <FileName> /grant Everyone:F
```

- **Service - Task Information**

```batch
# Retriving Detailed Information [Service]
schtasks /query /tn <ServiceName - TaskName> /fo list /v

# Start the Task
schtasks /run /tn <ServiceName - TaskName>
    
# Running [.msi] Installer
msiexec /quiet /qn /i C:\Windows\Temp\Malicious.msi

# Service Info
sc qc <ServiceName>
```