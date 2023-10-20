---
sidebar_position: 1
---

# Settings
Configure Operational settings of Listeners.

---

## Overview

Users are allowed to configure many operational settings for the [Listeners](../listener/listener.md). Users can configure most common settings like timeout settings, operation modes, header/body timeouts, error handling, and request logging. Users can also add server aliases and VIPs to the configured listener with the help of operational settings

![Listener Operational Settings](/img/waf/v7/docs/operationalsettings1.png)  
  
### How to Use:
1. Go to **WAF** > **Listener** > **Settings**.  
2. Configure the settings.
3. Click on Save changes.  

![Listener Operational Settings](/img/waf/v7/docs/operationalsettings2.png)

![Listener Operational Settings](/img/waf/v7/docs/operationalsettings3.png)


| PARAMETERS                  | ACCEPTED VALUES | DEFAULT       |
|-----------------------------|-----------------|---------------|
| Enable IPv6|Enables IPv6 Accepted values: Boolean|True
| Enable HTTP 2.0 |Enables HTTP 2.0 Accepted values: Boolean|False
  Enable Host Check|Enable Host Check Accepted values:Boolean|True
  Web socket Enabled | web socket support for servers in this group:Boolean| False
  Enable Logging | Specify whether to log requests for dynamic pages: Boolean | True 
Enable Static Extension Logging |Specify whether to log requests for static extension. Accepted values: Boolean|False
Enable Error Handling|Specify whether to enable error handling by firewall. Accepted values: Boolean|True
Connection Pool Size| Integer| 0
Client Keep-Alive Timeout |Specify timeout of keep-alive connections with clients. Set 0 to disable Accepted values: Integer|0
Upstream Keep Alive Timeout | Specify timeout of keep alive connections with upstream. Set 0 to disable. Accepted Values:Integer|0
Max Requests Per Connection | Specify max allowed requests per keep-alive connection : Integer |1000
Operational Mode | Specify operational mode for the listener like Reverse Proxy, Direct Server Return or IP Transparency: Drop-down| Reverse Proxy
Limit Maximum Connections | Integer | 0
|Client Body Timeout |Specify a timeout for receiving the request body. Accepted values: Integer|300
Client Header Timeout | Specify timeout for receiving request header. Accepted values: Integer|300
Client Send Timeout| Specify timeout for send response|300
Header Timeouts |Specify the header timeout in seconds. Accepted values: Integer|300
Static Extensions|Specify the list of allowed static extensions that don't require security validation. |png, gif, ico, etc.
Maximum HTTP Body size |Specify the maximum allowed HTTP body size from single client IP. Accepted values: Integer |10485760
Maximum HTTP Header size |Specify the maximum allowed HTTP header size from a single client IP. Accepted values: Integer|4096
Proxy HTTP Version| Specify HTTP version used while connecting upstream server: Drop-down| ANY
Proxy Buffers|Specify the number of buffers used for reading a response from the server for a single connection. Accepted values: Integer|8
Proxy Buffer Size|Specify the size of the buffer used for reading the first part of the server response. Accepted values: Integer|8
Log Format | User Define to extract log as per need. Accepted values : String | NULL
Client IP Location |Specify the location of the client IP. Accepted values: DropDown|SRC IP
Host Header|Specify the host header. Accepted values: String|Blank
Server Aliases| Listener Identity either domain name or IP address | NULL 
Virtual IPs|Specify assigned virtual IPs for accepting traffic. Accepted Values Integer|NULL
Add Port|Helps you to add HTTP/S ports for Advance Settings.Accepted values: Integer|Blank

### Description
##### **Enable IPv6**
This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network.

##### **Enable HTTP 2.0**
Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1
This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1  

##### **Enable Host Check**
Enforce host (SNI) validation for incoming request.

##### **Web-socket Enabled**
This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection.

##### **Enable Logging**
This option allows user to enable access logs in the case of service type HTTP & TCP.

##### **Enable Static Extension Logging**
This option allows user to specify whether to do log requests for static extension.

##### **Enable Error Handling**
This option allows user to specify whether to enable error handling by firewall.

##### **Connection Pool Size**
This option allows user to specify the connection pool size with upstream.

##### **Client Keep-Alive Timeout**
This option specify the timeout of keep-alive connections of clients. Set 0 to disable.

##### **Upstream Keep-Alive Timeout**
This option specify timeout of keep-alive connections of upstream. Set 0 to disable.

##### **Max Requests per Connection**
This option specify maximum allowed requests per keep-alive connection.

##### **Operational Mode**
Specify operational mode for the listener

##### **Limit MAX Collection**
Specify max allowed concurrent connections. Set 0 to disable

##### **Client Body Timeout**
This option specify the timeout for receiving the request body.

##### **Client Header Timeout**
Specify timeout for receiving request header

##### **Client Send Timeout**
Specify timeout for send response

##### **Static Extensions**
This option specify the list of allowed static extensions that don't require security validation.

##### **Maximum HTTP Body Size**
This field specifies the maximum allowed HTTP body size (in bytes) from a single client IP. If the size exceeds, then the request gets dropped. By default, it is 10485760 bytes.

:::note Note
In the case of HTTP/0.9, no headers get transmitted.
:::

##### **Maximum HTTP Header Size**
This field specifies the maximum allowed HTTP Header size (in bytes) from a single client IP. If size exceeds, then the request gets dropped. By default, it is 4096 bytes.
It comprises types, capabilities, and versions of the browser that makes the request. These elements help in returning compatible data.

##### **Proxy HTTP Version **
Specify http version used while connecting upstream server.

##### **Proxy Buffers**
This option specify the number of buffers used for reading a response from the server for a single connection.

##### **Proxy Buffer Size**
This option specify the size of the buffer used for reading the first part of the server response. Proper value can cause improper utilization of proxy buffer optimally for each request.

##### **Log Format**
This option specify the request log format.

##### **Client IP Location**
This option specify the location of the client IP.

##### **Host Header**
This option specify the host header allowed by the backend, if it's different from the listener subdomain. This allows the incoming request to alter the host header in each request and transmit it to the backend server.

##### **Server Aliases**
This option specify aliases means familiar name for the listener.

##### **Virtual IPs**
This option specify assigned virtual IPs for accepting traffic.

##### **Add Port**
This option helps you to add HTTP/S ports for Advance Settings. Here you can be unique port either HTTP or HTTPS enabled configuration without changing backend server port.

![setting](/img/waf/v7/docs/addportinsettings.png)

:::note Note
Proxy Buffer and Proxy Buffer are sensitive configurations that can affect applications that should be configured with prior knowledge.
:::