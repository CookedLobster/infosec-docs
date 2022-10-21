---
sidebar_position: 1
title: File Type Filtering
---


Websites may attempt to **Blacklist** dangerous file types, but fail to account for parsing discrepancies when checking the file extensions. As with any Blacklist, it's also easy to accidentally omit more **Obscure** file types that may still be dangerous.

<br/>


- **`File Type Filtering:`** Verifies that the contents of a file are acceptable to be Uploaded.
- **`MIME Validation:`** Used as an identifier for Files. **MIME** type for a file Upload is attached in the Header of the Request `<type>/<subtype>`, and looks like this:


```log
Content-Disposition: form-data; name="fileToUpload"; filename="php-reverse-shell.png"
Content-Type: image/png
```

<br/>

- **`Magic Number Validation:`** Magic Numbers are the Accurate way of determining the contents of a file.. The **Magic Number** of a file is a **String of Bytes** at the very beginning of the file content which Identify the content.
- **PNG Signature:** `89 50 4E 47 0D 0A 1A 0A`

```js
┌────────┬─────────────────────────┬─────────────────────────┬────────┬────────┐
// highlight-next-line
│00000000│ 89 50 4e 47 0d 0a 1a 0a ┊ 00 00 00 0d 49 48 44 52 │×PNG__•_┊000_IHDR│
│00000010│ 00 00 02 f8 00 00 02 9e ┊ 08 02 00 00 00 5f ed f8 │00•×00•×┊••000_××│
└────────┴─────────────────────────┴─────────────────────────┴────────┴────────┘
```

<br/>


## Other Types Of Filtering

- **`Extension Validation:`** Blacklisting & Whitelisting

<br/>

- **`File Length Filtering:`** Used to prevent **Huge Files** from being Uploaded to the Server. 

<br/>

- **`File Name Filtering:`** 
    - <b style={{ color: 'Coral' }}>[1]</b> Files uploaded to a Server should be <span style={{fontWeight: 'Bold'}}>Unique</span>.
    - <b style={{ color: 'Coral' }}>[2]</b> Adding a <span style={{fontWeight: 'Bold'}}>Random</span> aspect to the file name. Check if a file with the same name already exists on the server. 
    - <b style={{ color: 'Coral' }}>[3]</b> File Names should be Sanitized on Upload to ensure that they don't contain any <span style={{fontWeight: 'Bold'}}>Bad Characters</span>, which could potentially cause problems on the File System when Uploaded. <span style={{fontWeight: 'Bold'}}>[If this filtering is in place additional enumeration is Required after the Upload]</span>

<br/>

- **`File Content Filtering:`** More complicated filtering systems may Scan the full contents of an Uploaded File to ensure that it's not spoofing its extension, **MIME** type and **Magic Number.**

