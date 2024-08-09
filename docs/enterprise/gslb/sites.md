---
sidebar_position: 3
---

# Sites

Identification of global data centers through sites

---

## Overview

A GSLB site is the logical collection of GSLB virtual server, GSLB service, LB virtual server, etc. A GSLB service identifies a load balancing or content switching virtual server, which can be at the local site or a remote site. If the GSLB virtual server selects a load balancing or content switching virtual server at a remote site, it sends the virtual server’s IP address to the DNS server. The DNS server sends it to the client. The client then resends the request to the new virtual server at the new IP.


![sites](/img/gslb/v8/sites.png)

### How to Use

1. Follow the links: **Apps** > **GSLB** > **Sites** > **Add Site**.

2. Click on **Add Rule** and set relevant parameters described in the table below.

3. Click on **Save Changes**.

### Description

**Site Enabled**

Specify to enable the Site.

    Accepted values: Enabled / Disabled 

    Default: Enabled 

**Site Name**

Specify the name for your site.

    Accepted values: String

    Default: Blank 

**Site ID**

It is auto generated function.

    Accepted values: String

    Default: Blank 

**Site IP**

User can Specify the IP address of the Site 

    Accepted values: IP

    Default: Blank 

**Port**

It specifies the port number to connect 

    Accepted values: Integer

    Default: Blank 

**Username**

User can set a username to access the site 

    Accepted values: String

    Default: Blank 

**Password**

User can set a password to protect the site from any unknown login

    Accepted values: String

    Default: Blank 

**Inactivity Threshold**

In this User can specify when no events or flows are generated in the specified time.

    Accepted values: Integer

    Default: 60