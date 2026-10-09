---
sidebar_position: 5
---

# Zones

Creation of DNS zones and records in GSLB

---

Zones provide you an opportunity to create and manage domains. End users can also choose a list of Apps they want to configure for that root domain. DNS Service type should be Authoritative.  

![listener](/img/gslb/v8/zones.png)

### How to Use:
1. Go to  **Apps** > **GSLB** > **Listener** > **Zones**
2. Click **Add Zone** button.
3. Configure your settings.
4. Click **Save**.

### Records

### Overview

A DNS Record is a database entry that maps a URL to a specified IP address. These records are then stored in the DNS Servers, which can be accessed by different users globally using the URL address. When you search the URL, the browser forwards the URL to the DNS server, and it redirects you to the specific Web server. This web server then serves the site or directs the user to an email server that takes care of the incoming mail.

#### Types of DNS Records :

| Record Type | Common Name | Purpose | Value 
| ----------- | ----------- | -------- | --- |
| A |IPv4 Address Mapping Records |Maps domain names to IPv4 addresses|[IPv4 Address]|
AAAA|IPv6 Address Mapping Records|Maps domain names to IPv6 addresses.|[IPv6 Address]
CAA |CAA (Certificate Authority Authorization records)|Check CAA value to ensure that only certain certificate authorities are allowed to issue valid certificates.| [Flag(0-255)] [Tag(issue/issuewild/iode)] [Certificate Authority Provider]
CNAME|Canonical Name Records|Maps one domain name to another, map multiple domains to one IP address or routing external domains.|[Fully Qualified Domain Name]
CERT |Certificate  Record |Certificates Record specifies  the authenticity of the sending and receiving parties.|[Type] [Key-Tag] [Algorithm Code] [Base 64 Encoded Certificate Data]
PTR|Pointer Record |PTR records provide specifies that the given hostname or a domain are connected to the IP address.|[Fully Qualified Domain Name]
MX|Mail Exchange Records|Specifies a mail exchange server address.|[Priority] [Fully Qualified Domain Name]
TXT|Text Record|Stores strings of information in DNS.|[Enclosed text in quotation marks]
SRV|Service Record|Points one domain to another domain name using a specific destination port.|[Priority] [Weight] [Port] [Fully Qualified Domain Name]
NS|Name server|Points to the authoritative server for the domain|[Fully Qualified Domain Name]
SOA|Start of Authority|Stores important information about a domain such as email address of the administrator, when the domain was last updated, and how long the server should wait between refreshes etch.|[MNAME] [RNAME] [Serial] [Refresh] [Retry] [Expire] [TTL]

#### Configurable Fields

**Rule Name**

This field specifies the unique identifier for a zone, which represents a specific network or domain within your DNS configuration.

```
    Accepted values: String

    Default: Blank 
```


**DNSSEC** 

Specify whether DNSSEC (Domain Name System Security Extensions) is enabled to ensure the integrity and authenticity of DNS responses.

```
    Accepted values: Enabled / Disabled

    Default: Disabled 
```
