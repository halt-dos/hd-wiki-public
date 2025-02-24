---
sidebar_position: 3
---

# Sites

Identification of global data centers through sites

---

## Overview

A GSLB site is the logical collection of GSLB virtual server, GSLB service, LB virtual server, etc. A GSLB service identifies a load balancing or content switching virtual server, which can be at the local site or a remote site. If the GSLB virtual server selects a load balancing or content switching virtual server at a remote site, it sends the virtual server’s IP address to the DNS server. The DNS server sends it to the client. The client then resends the request to the new virtual server at the new IP.

### How to Use

1. Follow the links: **Apps** > **GSLB** > **Listener** > **Site**.

2. Click on **Add Site** and set relevant parameters described in the table below.

3. Click on **Save Changes**.

### Description


**Site ID**

It is auto generated function.

```
    Accepted values: String

    Default: Blank 
```


**Site Enabled**

Specify to enable the Site.

```
    Accepted values: Enabled / Disabled 

    Default: Enabled 
```


**Site Name**

Specify the name for your site.

```
    Accepted values: String

    Default: Blank 
```


**Site Address**

Specify the IP address of site used for monitoring

```
    Accepted values: String

    Default: Blank 
```


**Monitor Type**

Specify Monitor Type that should be used


```
    Accepted values: TCP / HTTP / HTTPS / SSL HELLO / ICMP / SCRIPT

    Default: TCP 
```


**Health Check Interval**

Specify the health check interval in seconds


```
    Accepted values: Integer

    Default: Blank 
```


**Fail Threshold**

Specify the fail threshold


```
    Accepted values: Integer

    Default: 1 
```


**Pass Threshold**

Specify the pass threshold


```
    Accepted values: String

    Default: 1 
```


**Port**

Specify the port


```
    Accepted values: Integer

    Default: 80
```


**Timeout**

Specify the timeout


```
    Accepted values: Integer

    Default: 1
```