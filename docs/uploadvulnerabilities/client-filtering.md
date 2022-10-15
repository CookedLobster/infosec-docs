---
sidebar_position: 3
---

# Client-Side Filtering

## JavaScript Off

Turn off <b style={{ color: 'Grey' }}>JavaScript</b> in the Browser. This will work provided the site doesn't require <b style={{ color: 'Grey' }}>JavaScript</b> in order to provide basic functionality. <span style={{fontWeight: 'Bold'}}>If turning off <b style={{ color: 'Grey' }}>JavaScript</b> completely will prevent the site from working at all then this method is not suitable.</span> 

<br/>

## Intercept && Modify

Intercept and Modify the Incoming Page. **Burpsuite** <b style={{ color: 'Aquamarine' }}>[Proxy - Options - Intercept Client Request - Edit (File Extensions) - Remove ^js$]</b> <b style={{ color: 'LightGreen' }}>[Do Intercept - Response To This Request]</b>

<br/>

## Intercept File Upload

This method works before the Web Page is loaded, this method allows the Web Page to load as normal, but intercepts the file upload after it's already passed (and been accepted by the filter).


