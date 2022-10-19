---
sidebar_position: 1
title: Diggin Tools
hide_title: true
---


## PING - FPING

Can be used to test the Connection or to check if the Remote Source is Accessible or Network Configuration. Ping works using the **ICMP Protocol**.

```bash
ping     <target>
fping -A <target>
```


## TRACEROUTE 
Traces the Route taken by the packets from your System to another Host. The purpose of a Traceroute is to find the IP Addresses of the Routers or Hops that a packet traverses as it goes from your System to a Target Host. 

```bash
traceroute <target>
```

## WHOIS
Query who a Domain Name is registered to. Informations such as E-Mails, Techinal Contacs, Admins, Numbers...

```bash
whois <target>
```


## DIG - DOG - NSLOOKUP
When we make a query to a Web Server first we will look for tame locally if they are not found. We are going to do a request know as `Recursive DNS Server`. Many ISP have their own recursive server, however if its not found the recursive server will pass the request to a **Root Name Server.**

Tere are 13 root name DNS servers in the world. The root name servers keep track of the DNS servers in the next level down.
**Top-Level Domain** (These are lower level Servers.) servers are split up into extensions. If you were searching for **facebook.com** your request would be redirected to a **Top-Level Domain** Server that handled `.com` etc...

<br/>


```bash
dig      <target>
dog      <target>
nslookup -type=A <target>
```