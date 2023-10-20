---
sidebar_position: 1
---
# Operational Settings

User can specify operational settings on this page for Listener

---

Users can configure below operational settings for Listener.

### How to Use:

1. Go to **WAF > Zones > Listeners > Advanced Settings > Operational Settings**

2. Configure your settings

3. Click Save

| PARAMETERS                      | ACCEPTED VALUES                                                                                                             | DEFAULT             |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------|---------------------|
| Enable IPv6                     | Enables IPv6
Accepted values: Boolean                                                                                       | True                |
| Enable HTTP 2.0                 | Enables Http 2.0
Accepted values: Boolean                                                                                   | False               |
| Client Keep-Alive Timeout       | Specify timeout of keep-alive connections with clients. Set 0 to disable
Accepted values: Integer                           | 0                   |
| Client Body Timeout             | Specify a timeout for receiving the request body.
Accepted values: Integer                                                  | 300                 |
| Header Timeout                  | Specify the header timeout in seconds.
Accepted values: Integer                                                             | 300                 |
| Enable Static Extension Logging | Specify whether to log requests for static extension.
Accepted values: Boolean                                              | False               |
| Static Extensions               | Specify the list of allowed static extensions that don't require security validation.                                       | png, gif, ico, etc. |
| Maximum HTTP Body size          | Specify the maximum allowed HTTP body size from single client IP.
Accepted values: Integer                                  | 10485760            |
| Maximum HTTP Header size        | Specify the maximum allowed HTTP header size from a single client IP.
Accepted values: Integer                              | 4096                |
| Host Header                     | Specify the host header.
Accepted values: String                                                                            | Blank               |
| Client IP Location              | Specify the location of the client IP.
Accepted values: DropDown                                                            | SRC IP              |
| Enable Error Handling           | Specify whether to enable error handling by firewall.
Accepted values: Boolean                                              | True                |
| Proxy Buffers                   | Specify the number of buffers used for reading a response from the server for a single connection.
Accepted values: Integer | 8                   |
| Proxy Buffer Size               | Specify the size of the buffer used for reading the first part of the server response.
Accepted values: Integer             | 8                   |
| Add Port                        | Helps you to add HTTP/S ports for Advance Settings.
Accepted values: Integer                                                | Blank               |

#### Description

**Enable IPv6**: Specify if the WAF should allow IPv6 requests. By default, it supports IPv4 requests.

**Enable Http 2.0**: Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1

**Client Keep-Alive Timeout**: Specify the timeout of keep-alive connections with clients. Set 0 to disable.

**Client Body Timeout**: Specify the timeout for receiving the request body.

**Header Timeout**: Specify the header timeout. By default, it is 100 seconds.

**Enable Static Extension Logging**: Specify whether to log requests for static extension. By default, it is false.

**Static Extensions**: Specify the list of allowed static extensions that don't require security validation.

**Maximum HTTP Body Size**: HTTP Body is the data bytes transmitted in an HTTP transaction message instantaneously following all available headers.

Note: In the case of HTTP/0.9, no headers get transmitted.

This field specifies the maximum allowed HTTP body size (in bytes) from a single client IP. If the size exceeds, then the request gets dropped. By default, it is 10485760 bytes.

**Maximum HTTP Header Size**: The HTTP request header is the information that the user's browser sends to a web server. It includes two types of details. First, what the browser wants. Second what it will accept from the server. Note: It is in the form of a text record.

It comprises types, capabilities, and versions of the browser that makes the request. These elements help in returning compatible data.

This field specifies the maximum allowed HTTP Header size (in bytes) from a single client IP. If size exceeds, then the request gets dropped. By default, it is 4096 bytes,

**Host Header**: Specify the host header allowed by the backend if it's different from the listener sub-domain. This allows the incoming request to alter the host header in each request and transmit it to the backend server.

**Client IP Location**: Specify the location of the client IP.

**Enable Error Handling**: Specify whether to enable error handling by firewall.

**Proxy Buffers**: Specify the number of buffers used for reading a response from the server for a single connection.

**Proxy Buffer Size**: Specify the size of the buffer used for reading the first part of the server response. Proper value can cause improper utilization of proxy buffer optimally for each request.

**Add Port**: Helps you to add HTTP/S ports for Advance Settings. Here you can unique port either HTTP  or HTTPS enabled configuration without changing backend server port.

Note: Proxy Buffer and Proxy Buffer are sensitive configurations which can affect application that should be configured with prior knowledge.
