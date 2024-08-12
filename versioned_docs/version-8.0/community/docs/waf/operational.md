---
sidebar_position: 0
---

# Operational Settings

### Overview
Users are allowed to configure many operational settings for the Listeners configured under the WAF. These setting specifies all the operational configuration for user different application type (i.e. WEBSITE/WEB SERVICE/WEB SOCKET). 

![Operational Settings](/img/ce-waf/docs/Lsettings.png)
   
![Operational Settings](/img/ce-waf/docs/Lsettings2.png)
   
![Operational Settings](/img/ce-waf/docs/Lsettings3.png)
   
### How to Use:

1. Go to **WAF** > **Operational**.
2. Configure the settings.
3. Click on Save changes.
   
| Parameters                      | Accepted value |  Default          |
|---------------------------------|----------------|-------------------|
| Enable IPv6                     | Boolean        | true              |
| Enable HTTP 2.0                 | Boolean        | False             |
| Enable Host Check               | Boolean        | False             |
| WebSocket Enabled               | Boolean        | False             |
| Enable Logging                  | Boolean        | True              |
| Enable Static Extension Logging | Boolean        | False             |
| Enable Error Handling           | Boolean        | True              |
| Security Mode                   | Drop-down      | Bypass            |
| Application Type                | Drop-down      | Website           |
| Connection Pool Size            | Integer        | 0                 |
| Client Keep-Alive Timeout       | Integer        | 0                 |
| Upstream Keep-Alive Timeout     | Integer        | 0                 |
| Operational Mode                | Drop-down      | Reverse-Proxy     |
| Limit Max Connections           | Integer        | 0                 |
| Client Body Timeout             | Integer        | 300               |
| Client Header Timeout           | Integer        | 300               |
| Client Send Timeout             | Integer        | 300               |
| Static Extentions               | Drop-down      | default extention |
| Maximum HTTP body size          | Integer        | 10485760          |
| Maximum HTTP header size        | Integer        | 4096              |
| Proxy HTTP Version              | Drop-down      | Any               |
| Proxy Buffers                   | Integer        | 8                 |
| Proxy Buffer Size               | Integer        | 8                 |
| Client IP Location              | Drop-down      | SRC IP            |
| Host Header                     | Integer        | Blank             |
| Server Aliases                  | String         | Blank             |
| Virtual IPs                     | Integer        | Blank             |

### Description

#### Enable IPv6
This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network.

#### Enable HTTP 2.0
Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1
This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1 

#### Web-socket Enabled
This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection.

#### Enable Logging
This option allows user to enable access logs in the case of service type HTTP & TCP.

#### Enable Static Extension Logging
This option allows user to specify whether to do log requests for static extension.

#### Enable Error Handling
This option allows user to specify whether to enable error handling by firewall.

#### Operational Mode
This option allows user to specify operational mode for every given security profile. Different operational modes are:  
- **MITIGATION**:  In this mode, all the mitigations & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped.  
- **BYPASSED**: In this mode, all the requests get bypassed without any filtration of mitigations & rule sets.  
- **RECORD**: In this mode, all the mitigations & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event.  

#### Application Type
This option allows users to specify the type of application ( i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems.

#### Connection Pool Size
This option allows user to specify the connection pool size with upstream.

#### Client Keep-Alive Timeout
This option specify the timeout of keep-alive connections of clients. Set 0 to disable.

#### Upstream Keep-Alive Timeout
This option specify timeout of keep-alive connections of upstream. Set 0 to disable.

#### Operational Mode
This option allows users to specify operational mode for the listener.

#### Limit MAX Collection
Specify max allowed concurrent connections. Set 0 to disable

#### Client Body Timeout
This option specify the timeout for receiving the request body.

#### Client Header Timeout
Specify timeout for receiving request header

#### Client Send Timeout
Specify timeout for send response

#### Static Extensions
This option specify the list of allowed static extensions that don't require security validation.

#### Maximum HTTP Body Size
This field specifies the maximum allowed HTTP body size (in bytes) from a single client IP. If the size exceeds, then the request gets dropped. By default, it is 10485760 bytes.

Note: In the case of HTTP/0.9, no headers get transmitted.

#### Maximum HTTP Header Size
This field specifies the maximum allowed HTTP Header size (in bytes) from a single client IP. If size exceeds, then the request gets dropped. By default, it is 4096 bytes.
It comprises types, capabilities, and versions of the browser that makes the request. These elements help in returning compatible data.

#### Proxy HTTP Version 
Specify http version used while connecting upstream server.

#### Proxy Buffers
This option specify the number of buffers used for reading a response from the server for a single connection.

#### Proxy Buffer Size
This option specify the size of the buffer used for reading the first part of the server response. Proper value can cause improper utilization of proxy buffer optimally for each request.

#### Client IP Location
This option specify the location of the client IP.

#### Host Header
This option specify the host header allowed by the backend, if it's different from the listener sub-domain. This allows the incoming request to alter the host header in each request and transmit it to the backend server.

#### Server Aliases
This option specify aliases means familiar name for the listener.

#### Virtual IPs
This option specify assigned virtual IPs for accepting traffic.

#### Add Port
This option helps you to add HTTP/S ports for Advance Settings. Here you can unique port either HTTP  or HTTPS enabled configuration without changing backend server port.
**Note:** Proxy Buffer and Proxy Buffer are sensitive configurations that can affect applications that should be configured with prior knowledge.
