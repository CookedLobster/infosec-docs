---
title: Microsoft Deployment Toolkit
---

<b style={{ color: 'Plum' }}>Microsoft Deployment Toolkit (MDT)</b> is a Microsoft Service that assists with automating the Deployment of <b>Microsoft Operating Systems (OS).</b> Usually, MDT is integrated with Microsoft's <b style={{ color: 'SandyBrown' }}>System Center Configuration Manager (SCCM)</b> which Manages all Updates for all Microsoft Applications, Services, and Operating Systems. <b>MDT</b> is used for New Deployments.

<br/>
<br/>

<b style={{ color: 'SandyBrown' }}>SCCM</b> allows to Review Available Updates to all Software Installed across the estate. It is also possible to test Patches in a SandBoxed Environment.



<br/>

## PXE Boot

Large Organizations use **`PXE Boot`** to allow new Devices that are connected to the Network to load and Install the OS directly over a Network Connection. <b style={{ color: 'Plum' }}>MDT</b> can be used to **Create - Manage - Host** `PXE Boot Images`. PXE Boot is usually integrated with DHCP, which means that if DHCP assigns an IP lease, the host is allowed to request the PXE Boot Image and start the Network OS Installation Process.


<br/>

Once the process is Performed, the Client will use a `TFTP` Connection to Download the PXE Boot Image. 

- <b>Exploiting <b style={{ color: 'MediumTurquoise' }}>PXE</b> Boot Image:</b>

	- Inject a Privilege Escalation Vector, such as a Local Administrator Account, to gain Administrative Access to the OS once the PXE Boot has been Completed.
	- Perform Password Scraping Attacks to recover <b style={{ color: 'DeepSkyBlue' }}>Active Directory</b> Credentials used during the Install.