---
sidebar_position: 1
---

# Overview


In some cases, Web Applications are written to request access to files on a System such as **Images - Text - etc.** Parameters are Query parameter Strings attached to the URL that could be used to retrieve data or perform actions based on User Input. 

**The main issue of LFI Vulnerabilities is the `Input Validation`,** in which the User Inputs are not Sanitized or Validated, and the User controls them. When the input is not Validated, the User can pass any input to the function, causing the Vulnerability.

<br/>


- The User Sends an HTTP Request to the WebServer that includes a file to Display. If a user wants to access and display <b style={{ color: 'Plum' }}>File_To_Access.pdf</b> within the Web Application, the request may look like this: 

```log
                                               +------------+
                                         +---- |Query String|
    +--------+       +---------+         |     +------------+
    |Protocol|       |File Name|         |
    +--------+       +---------+  +------+
         |                  |     |
         |                  |     |
      +----------------------------------------------------+
      | http://website.com/get.php?file=File_To_Access.pdf |
      +----------------------------------------------------+
                   |                 |
                   |                 |
              +-----------+      +----------+
              |Domain Name|      |Parameters|
              +-----------+      +----------+
```


<br/>

## Path Traversal [Directory Traversal]

**Directory Traversal**, is a Vulnerability that allows to read OS Resources, such as **Local Files** on the Server running an Application. The Attacker Exploits this Vulnerability by manipulating and abusing the Web Application's **URL** to locate and access Files or Directories stored outside the Application's ROOT Directory.

<br/>

- **Testing URL Parameter**
    - **Entry Point:** `get.php?file=`
	- Path Traversal Attacks take advantage of moving the Directory one step up using **`../`**
	- Suppose that we are in `/var/www/app/` and there is **No Input Validation**


```log
+------------------------------------------------------+
| http://website.com/get.php?file=../../../../boot.ini |
+------------------------------------------------------+
```