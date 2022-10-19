---
title: SMTP
description: SMTP Methodologies, Tools
---

**`SMTP` (Simple Mail Transfer Protocol).** It is utilised to handle the sending of **E-Mails.** In order to support E-Mail Services, a Protocol pair is used, **SMTP - POP/IMAP.** Together they allow the user to Send Outgoing Mail and retrieve incoming Mail.

```batch
:: SMTP
25/TCP
```

- **`SMTP` Functions:**
    - Verifies who is sending E-Mails through the SMTP Server
    - Sends the outgoing Mail
    - If the outgoing Mail can't be delivered it sends the Message back to the Sender

<br/>


## Banner Grabbing

```batch
:: Banner Grabbing
nc -vn <IP> <PORT>
```


## Automated Enumeration


```html
smtp-user-enum -M <mode> -U <wordlist> -t <IP>
```

```batch
:: Metasploit
auxiliary/scanner/smtp/smtp_enum

:: NMAP
nmap --script smtp-enum-users <IP>
```


## Manual Enumeration


```batch
:: Telnet Connection
telnet <IP> <PORT>
```

```batch
:: RCPT TO
HELO name
MAIL FROM:mail@mail.com
:::: Based on the Response we can Determine the Username
RCPT TO:<username>
```

```batch
:: VRFY
HELO
HELO name
:::: Based on the Response we can Determine the Username
VRFY <username>
```

```batch
:: EXPN
HELO
HELO name
:::: Based on the Response we can Determine the Username
EXPN <username>
```

## Brute-Force

```html
hydra -P <wordlist> <ip> smtp 
```