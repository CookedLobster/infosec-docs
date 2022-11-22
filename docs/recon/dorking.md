---
sidebar_position: 1
title: Google Dorking
---

Google offers Special terms known as **Advanced Operators** to help perform **Advanced Queries.** These Operators can be used to get the exact Information without spending too much time poring over page after page. 

When **Advanced Operators** are not provided in a query, Google will locate your Search Terms in any area of the Web Page including the **Title - Text - URL.**


<br/>



```batch
:: Limit Searches to the Website. Many Websites often have bad Searching Capabilities or provide Google different Information.
site:x
```

```batch
:: Require a String or Phrase to be in the URL.
inurl:x

:: Find Strings in the Title of a Page
intitle:x

:: Text in the Descriptive Text of Links
inanchor:x
```

```batch
:: Search for the Extensions of files.
ext:x
filetype:x
```

```batch
:: Google Archive of a Page. Similar to [archive.org]
cache:x
```

```batch
:: Pages created [After] a Time
after:x

:: Pages created [Before] a Time
before:x
```

```batch
:: Sites related to the Provided URL
related:x
```

```batch 
:: Show Definitions of a Word 
define:x
```