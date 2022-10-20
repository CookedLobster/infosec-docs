---
title: MySQL
description: MySQL Methodologies, Tools
---

**`MySQL`** is a **Relational Database Management System (RDBMS)** based on Structured Query Language (SQL).


```batch
:: MySQL
3306/TCP
```

#### How does MySQL work?

**MySQL**, as an **RDBMS**, is made up of the Server and Utility Programs that help in the administration of MySQL Databases. The Server handles all Database Instructions like **Creating - Dditing - Accessing Data.** It takes and Manages these requests and communicates using the MySQL Protocol. 

- **`Database`**
    - Persistent, Organised Collection of Structured Data.
- **`RDBMS`**
    - A Software or Service used to create and Manage Databases based on a Relational Model. The Data stored in the Dataset is Organised as Tables.
- **`SQL`**
    - **MYSQL** is just a Brand Name for one of the most popular RDBMS software Implementations.

<br/>

## Authentication

```batch
:: Standard Authentication
mysql -h <IP> -u <user> -p

:: Single Line Login && Enumerate
:: \G [Format The Ouput in a Readable Format]
mysql -h <IP> -u <user> --password=<password> -e "SELECT * FROM mysql.user\G;"
```



## Enumeration

```batch
:: NMAP
nmap <IP> -sV -p 3306 --script mysql-audit,mysql-databases,mysql-dump-hashes,mysql-empty-password,mysql-enum,mysql-info,mysql-query,mysql-users,mysql-variables,mysql-vuln-cve2012-2122
```

```batch
:: Metasploit
use auxiliary/scanner/mysql/mysql_version

:: [NOTE] This may put the System In Lockdown
use auxiliary/scanner/mysql/mysql_authbypass_hashdump

:: This Modules Require Valid Credentials [Username - Password]
use auxiliary/scanner/mysql/mysql_hashdump
use auxiliary/admin/mysql/mysql_enum
use auxiliary/scanner/mysql/mysql_schemadump
use exploit/windows/mysql/mysql_start_up
```

## MySQL Commands

- <a class="button button--outline button--info" href="https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3">MySQL Cheatsheet GitHub</a>

```batch
:: Basic Commands
show DATABASE;
use <DATABASE_NAME>;
show TABLES;
show columns from <TABLE_NAME>;

:: More Examples
select * from user\G;
select * from mysql.user where user='root';
```