---
sidebar_position: 4
---

# Client-Side Filtering

:::caution This Section is a Work In Progress

:::

<br/>

- **Common Server Checks**
	- `[1]` Turn off Javascript in the Browser. This will work provided the site doesn't require Javascript in order to provide basic functionality. If turning off Javascript completely will prevent the site from working at all then one of the other methods would be more desirable.
	- `[2]` Intercept and Modify the Incoming Page. 
		- **Burpsuite** <b style={{ color: 'Aquamarine' }}>[Proxy - Options - Intercept Client Request - Edit (File Extensions) - Remove ^js$]</b> <b style={{ color: 'LightGreen' }}>[Do Intercept - Response To This Request]</b>

	- `[3]` Intercept and modify the File Upload. Where the previous method works before the webpage is loaded, this method allows the web page to load as normal, but intercepts the file upload after it's already passed (and been accepted by the filter).
	- `[4]` Sending the file directly to the Upload Point.
		- Using Tools such as <b style={{ color: 'Plum' }}>[CURL - HTTPie]</b>