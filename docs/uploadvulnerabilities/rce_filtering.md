---
sidebar_position: 2
---

# Remote Code Execution -  Filtering

Remote Code Execution would allow us to execute Code Arbitrarily on the Web Server. Whilst this is likely to be as a Low-Privileged Web User account `www-data` on Linux. 

## Methodology


- **Common Server Checks:**
    - `Web Shells:` Find an Upload Method - Check WebServer Technology. Try Upload Allowed files to Find the Storage Location. 
    - `Reverse Shells:` The Process of the Upload is the Same. The only thing different is the Shell Method.


<br/>

## Filtering

Websites may attempt to blacklist dangerous file types, but fail to account for parsing discrepancies when checking the file extensions. As with any blacklist, it's also easy to accidentally omit more obscure file types that may still be dangerous.

<br/>

- <b style={{ color: 'Orange' }}>[1] [File Type Filtering]</b> 

    - Verifies that the contents of a file are acceptable to Upload.
    - `MIME Validation:` **(Multipurpose Internet Mail Extension)** types are used as an identifier for Files. MIME type for a file upload is attached in the Header of the Request `<type>/<subtype>`, and looks like this:

```log
# Original Request
Content-Disposition: form-data; name="fileToUpload"; filename="php-reverse-shell.png"
// highlight-next-line
Content-Type: image/png

# Modified Request
Content-Disposition: form-data; name="fileToUpload"; filename="php-reverse-shell.php"
// highlight-next-line
Content-Type: text/x-php
```

<br/>

- <b style={{ color: 'Orange' }}>[2] [File Type Filtering]</b> 

	- `Magic Number Validation:` Magic Numbers are the Accurate way of determining the contents of a file.. The "Magic Number" of a file is a string of bytes at the very beginning of the file content which Identify the content.

```js
┌────────┬─────────────────────────┬─────────────────────────┬────────┬────────┐
│00000000│ 89 50 4e 47 0d 0a 1a 0a ┊ 00 00 00 0d 49 48 44 52 │×PNG__•_┊000_IHDR│
│00000010│ 00 00 02 f8 00 00 02 9e ┊ 08 02 00 00 00 5f ed f8 │00•×00•×┊••000_××│
└────────┴─────────────────────────┴─────────────────────────┴────────┴────────┘
```

<br/>

- `[Extension Validation]` 
    - **Blacklist Extensions:** List of Extensions which are not allowed.
    - **Whitelist Extensions:** List of Extensions which are allowed, and reject everything else.


<br/>

- `[File Length Filtering]` Used to prevent Huge Files from being Uploaded to the Server. 

<br/>

- `[File Name Filtering]` **Files uploaded to a Server should be Unique.** Adding a Random aspect to the file name. Check if a file with the same name already exists on the server. Additionally, file names should be sanitised on upload to ensure that they don't contain any "Bad Characters", which could potentially cause problems on the File System when Uploaded. **(Additional Enumeration is Required after Shell Upload)**

<br/>

- `[File Content Filtering]` More complicated filtering systems may Scan the full contents of an Uploaded File to ensure that it's not spoofing its extension, **MIME** type and **Magic Number.**
