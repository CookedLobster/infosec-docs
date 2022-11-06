---
sidebar_position: 1
title: Permissions
---


- <a class="button button--outline button--warning" href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls">ICACLS Permissions</a>

```batch
:: Sequence [Basic Permissions]
[F]    -- Full Access               [Administer - Read - Write - Edit - Execute - Delete]
[M]    -- Modify Access             [Read - Write - Edit - Execute - Delete]
[RX]   -- Read - Execute Access     
[R]    -- Read-Only 
[W]    -- Write-Only
[I]    -- Inherited Permissions
```

```batch
:: Comma Separated in Parenthesis [Advanced Permissions]
[D]   -- Delete
[RC]  -- Read Control
[WD]  -- Write Data/Add File
[WO]  -- Write Owner
[AD]  -- Append Data/Add Subdirectory
```