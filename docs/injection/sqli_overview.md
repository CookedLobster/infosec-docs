---
sidebar_position: 1
---

# Overview

## Types Of SQLi


- <b style={{ color: 'Plum' }}>In-Band SQL Injection</b>

    - `In-Band` just refers to the same method of communication being used to exploit the Vulnerability and also receive the results, for example, discovering an SQL Injection vulnerability on a Website Page and then being able to extract Data from the Database to the same Page.

<br/>

- <b style={{ color: 'Brown' }}>Error-Based SQL Injection</b>

    - This type of SQL Injection is the most useful for obtaining Information about the **Database Structure** as Error Messages from the database are printed directly to the browser screen. This can often be used to **Enumerate** a whole Database.

<br/>

- <b style={{ color: 'LightGreen' }}>Union-Based SQL Injection</b>

    - This Injection utilises the SQL `UNION` operator alongside a `SELECT` statement to return additional results to the page. This method is the most common way of extracting large amounts of data via an SQL Injection vulnerability.

<br/>

---

- <b style={{ color: 'BurlyWood' }}>Out-of-Band SQL Injection</b>

    - Not as Common as it either depends on specific features being enabled on the Database Server or the Web Application's business logic, which makes some kind of external network call based on the results from an SQL query.


:::note

The Attacker makes a request to a Website vulnerable to SQL Injection with an Injection Payload. The Website makes an SQL query to the Database which also passes the Attacker Payload. 

The Payload contains a request which forces an HTTP Request back to the Attacker Machine containing data from the Database.
:::