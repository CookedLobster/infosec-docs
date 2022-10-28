---
title: Relays
---

:::info This Module Focuses on `NetNTLM` authentication used by `SMB`

:::



## Server Message Block


<b style={{ color: 'Plum' }}>The Server Message Block (SMB)</b> Protocol allows Clients to Communicate with a Server <b>[For example a File Share].</b> In Networks that use <b style={{ color: 'DeepSkyBlue' }}>Active Directory</b>, <b>SMB</b> Governs everything from <b>Inter-Network File-Sharing</b> to <b>Remote Administration.</b>

<br/>
<br/>

The Security of earlier versions of the **SMB** Protocol was Insufficient. Often Organizations do not enforce the use of more recent Versions since Legacy Systems do not Support them. 

<br/>

- <b>Exploiting <b style={{ color: 'LightGreen' }}>NetNTLM</b> authentication with SMB:</b>

	- **`NTLM Challenges`** can be Intercepted and Cracked Offline.
	- We can use a Rogue Device to stage a **`Man-In-The-Middle`** Attack, relaying the **SMB Authentication** between the Client and Server, which will provide us with an active Authenticated Session and access to the Target Server.

<br/>

## LLMNR - NBT-NS - WPAD


<b style={{ color: 'Coral' }}>Responder</b> allows us to perform <b>Man-In-The-Middle</b> Attacks by Poisoning the Responses during <b>NetNTLM Authentication</b>, tricking the Client into talking to you instead of the actual Server they wanted to connect to. 

<br/>
<br/>

<b>In LAN, Responder will attempt to Poison:</b> <b style={{ color: 'DarkGoldenRod' }}>Link-Local Multicast Name Resolution (LLMNR)</b> <b>-</b> <b style={{ color: 'DarkKhaki' }}>NetBIOS Name Server (NBT-NS)</b> <b>-</b> <b style={{ color: 'FireBrick' }}>Web Proxy Auto-Discovery (WPAD)</b>


<br/>
<br/>

- <b style={{ color: 'MediumTurquoise' }}>[LLMNR - NBT-NS]</b> <b>-</b> Name Resolution Services that Windows Machines use to Identify Host Addresses on a Network when DNS Resolution Fails.
- <b style={{ color: 'MediumTurquoise' }}>[WPAD]</b> <b>-</b> Made to try and find a Proxy for future HTTP(s) Connection <b>[Locate and Interface with Cache Services in a Network so that Information can be delivered more quickly to the User]</b>


<br/>

**These Protocols rely on Requests Broadcasted on the Local Network, a Rogue Device would also receive these Requests.** Usually, these requests would simply be dropped since they were not meant for our host. <b style={{ color: 'Coral' }}>Responder</b> will actively listen to the Requests and send Poisoned Responses telling the requesting Host that our IP is associated with the Requested Hostname.