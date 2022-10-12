---
sidebar_position: 3
---

# Overwriting Existing Files

:::caution This Section is a Work In Progress

:::

<br/>

When files are Uploaded to the Server, a range of checks should be carried out to ensure that the file will not Overwrite anything which already exists on the server. 

<br/>

- **Common Server Checks**
	- `[1]` Assign the file with a new name, often either Random, or with the date and time of upload added to the start or end of the original filename. 
	- `[2]` Checks to see if the Filename already exists on the Server.
	- `[3]` File Permissions, Web pages, for example, should not be writeable to the web user, thus preventing them from being overwritten with a malicious version uploaded by an attacker.
