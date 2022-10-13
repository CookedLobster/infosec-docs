---
sidebar_position: 1
---

# Overview

## Insecure Direct Object Reference **(IDOR)**

This type of Vulnerability can happens when a Web Server receives User-Supplied input to retrieve Objects `Files - Data - Documents` too much trust has been placed on the **Input Data**, and it is not Validated on the **Server-Side** to confirm the Requested Object belongs to the User requesting it.

<br/>


:::info Scenario Vulnerable URL

:::

<br/>

- Chaning the **`Order Number`** will allow us to see another Customer Order.
- Chaning the **`User ID`** will allow us to see another Customer Profile

```log
+--------------------------------------------+  +------------------------------------------------+
| https://onlinestore.com/order/1234/invoice |  | http://online-service.com/profile?user_id=1305 |
+--------------------------------------------+  +------------------------------------------------+
                       |                                               |
                       ▼                                               ▼
+--------------------------------------------+  +------------------------------------------------+
| https://onlinestore.com/order/1000/invoice |  | http://online-service.com/profile?user_id=1000 |
+--------------------------------------------+  +------------------------------------------------+
```
---

<br/>

## IDORs In Encoded ID's

When passing Data from page to page either by `(POST Data - Query Strings - Cookies)` Web Developers will often first take the Raw Data and **ENCODE** it. Encoding ensures that the receiving Web Server will be able to understand the contents. 

Encoding changes binary data into an **ASCII** string commonly using the `(a-z  A-Z  0-9)` and `( = )` character for Padding.

<br/>

- `Decode - Tamper - Encode - Sumbit`

```sql         
+--------------+     +-----------+     +----------+     +--------------+
| eyJpZCI6MzB9 | - ► | {"id":30} | - ► | {"id":5} | - ► | eyJpZCI6NX0= |
+--------------+     +-----------+     +----------+     +--------------+
```

<br/>

## IDORs In Hashed ID's

**Hashed ID's** are more complicated to deal with than Encoded. But they may follow a **Predictable Pattern,** such as being the Hashed version of the Integer Value. 

<br/>

- `MD5 HASH`
    - The ID `123` would become `202cb962ac59075b964b07152d234b70` if **MD5** Hashing were in use.

```log
+----------------------------------+     +-----+
| 202cb962ac59075b964b07152d234b70 | - ► | 123 |
+----------------------------------+     +-----+
```

<br/>

## IDORs In Unpredictable ID's

A method of IDOR detection is to create Two Accounts and **Swap the ID Numbers between them.** If we can view the other User content using their ID Number while still being Logged in with a **Different Account or not Logged,** we found an IDOR Vulnerability.


<br/>

## IDORs Location

The Vulnerable Endpoint we are Targeting may not always be something we see in the Address Bar. It could be content our Browser loads in via an **AJAX Request** or something that we find referenced in a **JavaScript** File.

Sometimes **Endpoints could have an Unreferenced Parameter** that may have been of some use during development and got pushed to production. 

We may notice a call to `/user/details` displaying our User Information **[Authenticated through our Session]**. But through an Attack known as <b style={{ color: 'Coral' }}>Parameter Mining</b> we Discover a Parameter called `user_id` that we can use to display other User's Information.

<br/>

- <b style={{ color: 'Coral' }}>Parameter Mining</b>

```log
+---------------+     +---------+     +---------------------------+
| /user/details | - ► | user_id | - ► | /user/details?user_id=123 |
+---------------+     +---------+     +---------------------------+
```