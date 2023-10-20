---
sidebar_position: 2
---

# Records

Configure DNS Records for your domain

---

## Overview

A DNS Record is a database entry that maps a URL to a specified IP address. These records are then stored in the DNS Servers, which can be accessed by different users globally using the URL address. When you search the URL, the browser forwards the URL to the DNS server, and it redirects you to the specific Web server. This web server then serves the site or directs the user to an email server that takes care of the incoming mail.

### Types of DNS Records

| Record Type | Common Name                  | Purpose                                                                                              | Value                                                    | Example                    |
|-------------|------------------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------------------|
| A           | Record Address Mapping       | Maps domain names to IPv4 addresses.                                                                 | [IPv4 Address]                                           | 102.203.0.113              |
| AAAA        | IPv6 Address Mapping Records | Maps domain names to IPv6 addresses.                                                                 | [IPv6 Address]                                           | fe80::a2e6:69de:f4ff:48d5  |
| CNAME       | Canonical Name Records       | Maps one domain name to another, map multiple domains to one IP address or routing external domains. | [Fully Qualified Domain Name]                            | www.example.com            |
| MX          | Mail Exchange Records        | Specifies a mail exchange server address.                                                            | [Priority] [Fully Qualified Domain Name]                 | 10 mail.example.com        |
| TXT         | Text Record                  | Stores strings of information in DNS.                                                                | [Enclosed text in quotation marks]                       | "v=spf1 mx-all"            |
| SRV         | Service Record               | Points one domain to another domain name using a specific destination port.                          | [Priority] [Weight] [Port] [Fully Qualified Domain Name] | 1 10 5269 xmpp.example.com |

### Creating A Record

The process is quite intuitive. Steps included: 

1. Go to **DNS > Zones > Records**.
2. Click On Add Record. 
3. Configure your settings. 
4. Click Create Record.

### **Configurable Fields**

- **Record Name**: Specify the name for your DNS record. It helps in easy identification of the record. It can be empty also. 

- **Type**: Specify the type of record. You can select record type from the drop-down list.

- **Record Value**: Specify the value for the record type. Refer to the table for the format of the desired record type.

- **Time to Live (TTL)**: Specify the duration of the DNS record on the server in minutes, hour, day.

