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
    - `Time Delay:`  **Example:** `[ ping - sleep ]` Commands are significant Payloads to test with. Using `ping` the Application will hang for **"X"**.
    - `Force Output:` This can be done by using Redirection Operators such as `[ > ]` . **Example:** We can tell the Web Application to Execute Commands such as `whoami` and redirect that to a file. We can then use a command such as `cat` to read this newly created file’s contents.

<br/>

- **Detecting Verbose Command Injection:**
    - The Output of Commands such as `[ ping - whoami ]` is directly displayed on the Web Application.