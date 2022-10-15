---
sidebar_position: 1
title: Command Injection
---

# Injection

We can often determine whether or not Command Injection is possible by the Behaviours of an Application. Applications that use User Input to populate System Commands with data can often be combined in unintended behaviour. 


- The Shell Operators will combine two or more System Commands and execute them Both. 

```
;
&
&&
```

<br/>

## Detecting Blind Command Injection


- `Time Delay:` This Commands are significant Payloads to test with. Using `ping` the Application will hang for <span style={{fontWeight: 'Bold'}}>X (Seconds)</span>.

```bash
ping
sleep
```

<br/>
    

- `Force Output:` This can be done by using Redirection Operators such as `>`. <span style={{fontWeight: 'Bold'}}>Example:</span> We can tell the Web Application to Execute Commands such as <b style={{ color: 'coral' }}>whoami</b> and redirect that to a file. We can then use a command such as <b style={{ color: 'coral' }}>cat</b> to read this newly created file’s contents.

```bash
>
```


<br/>

- **Detecting Verbose Command Injection:**
    - If the Output of this Commands is directly displayed on the Web Application.

```bash
ping
whoami
```