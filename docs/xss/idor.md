---
sidebar_position: 2
title: Insecure Direct Object Reference
---


- **`Your Account`** Section gives us the ability to change our Information such as **Username - Email - Password.** **[We notice the Username & Email fields Pre-Filled in with our Information]**

	- Refereshing the Page and going to the `Network Tab` in the `Browser Tools` we see a Call to an Endpoint.
	- **Endpoint PATH:** `/api/v1/customer?id={user_id}`


![IDOR](/img/webstuff/idor.png)


```json
{id: 15, username: "delaila", email: "delaila@email.com"}
email: "delaila@email.com"
id: 15
username: "delaila"
```

<br/>


- **Changing ID:** `3`

```log
┌──────────────────────────────────────────┐    ┌────────────────────────────────────────────────────┐
| https://website.com/api/v1/customer?id=3 | -► | {id: 3, username: "jack", email: "jack@email.com"} |
└──────────────────────────────────────────┘    └────────────────────────────────────────────────────┘
```
