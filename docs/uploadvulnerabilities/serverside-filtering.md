---
sidebar_position: 2
---

# Server-Side Filtering

## File Extensions

In `Server Side Filtering` we have to perform a lot of testing to build up an idea of what is or is not allowed through the filter, then gradually put together a Payload.


<br/>

- `Burpsuite:` We can Intercept the Request of Upload using BurpSuite and then pass is to Intruder to Perform Checks on which Extensions are Allowed. We can than Craft a PAYLOAD based on the Allowed File Types.
- `Obfuscating File Extensions:` The Server may only check if the File has <b style={{ color: 'LightGreen' }}>.jpeg</b> or <b style={{ color: 'LightGreen' }}>.jpg</b> in the Filename. 
    - We can try to Upload a **PAYLOAD** like this: <b style={{ color: 'Aquamarine' }}>php-reverse.jpeg.php</b>

<br/>

- **Vulnerable `PHP` Code**

```php
<?php
	$extension = pathinfo($_FILES["fileToUpload"]["name"])["extension"];
	switch($extension){
		case "php":
		case "phtml":
		case "phar":
		case "php3":
		case "php4":
		case "php7":
		case "phps":
		case "php-s":
		case "pht":
		case "phar":
		case NULL:
			$uploadFail = True;
			break;
		default:
			$uploadFail = False;
	}
?>
```

<br/>

## Magic Numbers

The magic number of a file is a string of hex digits, and is always the very first thing in a file. Knowing this, it's possible to use magic numbers to validate file uploads, simply by reading those first few bytes and comparing them against either a whitelist or a blacklist.

<br/>

- We can Modify the First Digits of a File with a `Hex Editor`

```php
┌────────┬─────────────────────────┬─────────────────────────┬────────┬────────┐
│00000000│ 3c 3f 70 68 70 0a 73 65 ┊ 74 5f 74 69 6d 65 5f 6c │<?php_se┊t_time_l│
│00000010│ 69 6d 69 74 20 28 30 29 ┊ 3b 0a 24 56 45 52 53 49 │imit (0)┊;_$VERSI│
└────────┴─────────────────────────┴─────────────────────────┴────────┴────────┘
```

- Transforming `PHP` File Into `GIF`

```php
┌────────┬─────────────────────────┬─────────────────────────┬────────┬────────┐
│00000000│ 47 49 46 38 37 61 0a 3c ┊ 3f 70 68 70 0a 73 65 74 │GIF87a_<┊?php_set│
│00000010│ 5f 74 69 6d 65 5f 6c 69 ┊ 6d 69 74 20 28 30 29 3b │_time_li┊mit (0);│
└────────┴─────────────────────────┴─────────────────────────┴────────┴────────┘
```

<br/>


- **Vulnerable `PHP` Code**

```php
<?php
	$finfo = finfo_open(FILEINFO_MIME_TYPE);
	$type = finfo_file($finfo, $_FILES["fileToUpload"]["tmp_name"]);
	finfo_close($finfo);
	if (strpos($type, "image/gif") !== false){
		$uploadFail = False;
	}
	else{
		$uploadFail = True;
	}
?>
```
