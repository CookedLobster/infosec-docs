---
sidebar_position: 2
---

# Injection

:::caution This Section is a Work In Progress

:::

We can often determine whether or not Command Injection is possible by the Behaviours of an Application.

Applications that use User Input to populate System Commands with data can often be combined in unintended behaviour. The Shell Operators `[ ; - & - && ]` will combine two or more System Commands and execute them both. 

<br/>

- **Detecting Blind Command Injection:**
    - `Time Delay:`  **Example:** <b style={{ color: 'Plum' }}>[ping - sleep]</b> Commands are significant Payloads to test with. Using <b style={{ color: 'Plum' }}>ping</b> the Application will hang for <span style={{fontWeight: 'Bold'}}>X (Seconds)</span>.
    - `Force Output:` This can be done by using Redirection Operators such as <b style={{ color: 'Plum' }}>[ > ]</b>. <span style={{fontWeight: 'Bold'}}>Example:</span> We can tell the Web Application to Execute Commands such as <b style={{ color: 'Plum' }}>whoami</b> and redirect that to a file. We can then use a command such as <b style={{ color: 'Plum' }}>cat</b> to read this newly created file’s contents.

<br/>

- **Detecting Verbose Command Injection:**
    - The Output of Commands such as <b style={{ color: 'Plum' }}>[ping - whoami]</b> is directly displayed on the Web Application.