---
sidebar_position: 2
title: Discovery
hide_title: true
---

## Robotx.TXT

The `robots.txt` is a Document that tells **Search Engines** which pages they are and aren't allowed to show on their Search Engine results or ban specific Search Engines from crawling the website altogether.


```log
User-agent: *
Allow: /
Disallow: /staff-portal
``` 

<br/>

## Favicon

The `Favicon` is a small **Icon** displayed in the **Browser's Address Bar** or Tab used for branding a Website. Sometimes when Frameworks are used to build a Website, a Favicon that is part of the Installation gets leftover, and if the Website Developer doesn't replace this with a custom one, this can give us a clue on what Framework is in use. 

<br/>

- <a class="button button--outline button--warning" href="https://wiki.owasp.org/index.php/OWASP_favicon_database">OWASP Favicon Database</a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome to my webpage!</title>
    // highlight-next-line
    <link rel="shortcut icon" type="image/jpg" href="images/favicon.ico"/>
</head>
```

- We can get the `HASH` **Value** of the **Favicon** and compare it on the `OWASP` Database for a Match.

```js
┌──────┐    ┌────────────────────────────────────────┐    ┌────────┐
| curl | -► | https://website.com/images/favicon.ico | -► | MD5SUM |
└──────┘    └────────────────────────────────────────┘    └────────┘
```

<br/>

## Sitemap.XML

This file gives a list of every file the Website Owner wishes to be listed on a Search Engine.


```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <url>
    // highlight-next-line
        <loc>https://website.com/administrators</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
    // highlight-next-line
        <loc>https://website.com/hidden_area</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>
</urlset>
```

<br/>

## HTTP Headers

Headers can sometimes contain useful Information such as the **Webserver Software** and possibly the **Programming - Scripting Language** in use.


```log
HTTP/1.1 200 OK
// highlight-next-line
Server: nginx/1.18.0 (Ubuntu)
// highlight-next-line
X-Powered-By: PHP/7.4.3
Date: Mon, 19 Jul 2021 14:39:09 GMT
Content-Type: text/html; charset=UTF-8
Transfer-Encoding: chunked
Connection: keep-alive
```

<br/>

## Framework Stack

Once we established the Framework of a Website, either from the `Favicon` or by looking for clues in the page source such as **Comments, Copyright Notices or Credits,** we can then locate the Framework's Website.


```html
<!--
Page Generated in 0.04109 Seconds using the Custom Framework v1.2 ( https://website.com/sites/Custom-Framework )
-->
```  

<br/>

## URL

The `URL` may Hint at the Technology used by the Website. **[In this Case `Apache Struts`]**

```log
┌─────────────────────────────────┐      ┌─────────────────┐
| www.website.com/showcase.action |  -►  | showcase.action |
└─────────────────────────────────┘      └─────────────────┘
```