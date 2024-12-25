---
sidebar_position: 1
---

# Operational
Configure Operational settings of Listeners.
---

## Overview

Users are allowed to configure many operational settings for the [Listeners](/enterprise/waf/listener/). Users can configure most common settings like timeout settings, operation modes, header/body timeouts, error handling, and request logging. Users can also add server aliases and VIPs to the configured listener with the help of operational settings

![Listener Operational Settings](/img/waf/v8/docs/WAFoperational1.png)   

![Listener Operational Settings](/img/waf/v8/docs/WAFoperational2.png)

![Listener Operational Settings](/img/waf/v8/docs/WAFoperational3.png)

### How to Use:
1. Go to **WAF** > **Listener** > **Settings** > **Operational**.  
2. Configure the settings.
3. Click on Save changes. 

### Description

##### **Enable IPv6**
This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network.

```
    Accepted values: Enable / Disable

    Default: Enable 
```


##### **Enable HTTP 2.0**
Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1
This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1  

```
    Accepted values: Enable / Disable

    Default: Disable 
```


##### **Enable Host Check**
Enforce host (SNI) validation for incoming request.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


##### **Web-socket Enabled**
This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


##### **Enable Logging**
This option allows user to enable access logs in the case of service type HTTP & TCP.

```
    Accepted values: Enable / Disable

    Default: Enable 
```


##### **Enable Static Extension Logging**
This option allows user to specify whether to do log requests for static extension.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


##### **Enable Error Handling**
This option allows user to specify whether to enable error handling by firewall.

```
    Accepted values: Enable / Disable

    Default: Enable 
```


##### **Connection Pool Size**
This option allows user to specify the connection pool size with upstream.

```
    Accepted values: Integer

    Max: 20000

    Min: 0

    Default: 0 
```


##### **Client Keep-Alive Timeout**
This option specify the timeout of keep-alive connections of clients. Set 0 to disable.  

```
    Accepted values: Integer

    Max: 1000000

    Min: 0

    Default: 0  
```


    Metric: Minutes

##### **Upstream Keep-Alive Timeout**
This option specify timeout of keep-alive connections of upstream. Set 0 to disable.

```
    Accepted values: Integer

    Max: 3600

    Min: 0

    Default: 0  
```


    Metric: Seconds

##### **Max Requests per Connection**
This option specify maximum allowed requests per keep-alive connection.

```
    Accepted values: Integer

    Max: 90000000

    Min: 0

    Default: 1000 
```


##### **Operational Mode**
Specify operational mode for the listener

```
    Accepted values: Reverse Proxy / IP Transparency

    Default: Reverse Proxy 
```


##### **Limit MAX Collection**
Specify max allowed concurrent connections. Set 0 to disable

```
    Accepted values: Integer

    Max: 90000000

    Min: 0

    Default: 0  
```


    Metric: Connections  

##### **Client Body Timeout**
This option specify the timeout for receiving the request body.

```
    Accepted values: Integer

    Max: 1000000

    Min: 10

    Default: 300  
```


    Metric: Seconds  

##### **Client Header Timeout**
Specify timeout for receiving request header

```
    Accepted values: Integer

    Max: 1000000

    Min: 10

    Default: 300  
```


    Metric: Seconds  

##### **Client Send Timeout**
Specify timeout for send response

```
    Accepted values: Integer

    Max: 1000000

    Min: 10

    Default: 300  
```


    Metric: Seconds  

##### **Static Extensions**
This option specify the list of allowed static extensions that don't require security validation.

```
    Accepted values: Specify the list of allowed static extensions

    Default: png, gif, ico, jpg, jpeg, js, css, wpff, woff2, ttf, svg.   
```


##### **Maximum HTTP Body Size**
This field specifies the maximum allowed HTTP body size (in bytes) from a single client IP. If the size exceeds, then the request gets dropped. By default, it is 10485760 bytes.

```
    Accepted values: Integer

    Max: 4073741824L

    Min: 1024

    Default: 10485760  
```


    Metric: Bytes 

:::note Note
In the case of HTTP/0.9, no headers get transmitted.
:::

##### **Maximum HTTP Header Size**
This field specifies the maximum allowed HTTP Header size (in bytes) from a single client IP. If size exceeds, then the request gets dropped. By default, it is 4096 bytes.
It comprises types, capabilities, and versions of the browser that makes the request. These elements help in returning compatible data.

```
    Accepted values: Integer

    Max: 40960

    Min: 1024

    Default: 4096  
```


    Metric: Bytes 

##### **Proxy HTTP Version **
Specify http version used while connecting upstream server.

```
    Accepted values: ANY, HTTP 1.0, HTTP 1.1.

    Default: ANY 
```


##### **Proxy Buffers**
This option specify the number of buffers used for reading a response from the server for a single connection.

```
    Accepted values: Integer

    Max: 64

    Min: 8 

    Default: 8
```


    Metric: Count 

##### **Proxy Buffer Size**
This option specify the size of the buffer used for reading the first part of the server response. Proper value can cause improper utilization of proxy buffer optimally for each request.

```
    Accepted values: Integer

    Max: 4096

    Min: 8

    Default: 8 
```


    Metric: KB

##### **Log Format**
This option specify the request log format.

```
    Accepted values: String

    Default: Blank
```


##### **Client IP Location**
This option specify the location of the client IP.

```
    Accepted values: SRC-IP / X-FORWARED-FOR / X-REAL-IP / X-PROXYUSER-IP

    Default: SRC IP
```


- **X-FORWARDED-FOR** header contains the IP address of the client that initiated the request, allowing the destination server to identify the original client's IP address even though the request was forwarded through intermediaries.

- **X-REAL-IP** Similar to the X-Forwarded-For header, the X-Real-IP header is typically added by the proxy server or load balancer to the HTTP request before forwarding it to the destination server.

- **X-PROXYUSER-IP** header likely contains the IP address of the client that initiated the request, allowing the backend server to identify the true client IP address. However, since it's a custom header, its usage and interpretation may vary depending on the specific configuration of the proxy server or load balancer.

##### **Host Header**
This option specify the host header allowed by the backend, if it's different from the listener subdomain. This allows the incoming request to alter the host header in each request and transmit it to the backend server.  

```
    Accepted values: String

    Default: Blank 
```


##### **Server Aliases**
This option specify aliases means familiar name for the listener.  

```
    Accepted values: String

    Default: Blank  
```
     
##### **Add Port**
This option helps you to add HTTP/S ports for Advance Settings. Here you can be unique port either HTTP or HTTPS enabled configuration without changing backend server port.

![setting](/img/waf/v8/docs/addPort.png)

:::note Note
Proxy Buffer and Proxy Buffer are sensitive configurations that can affect applications that should be configured with prior knowledge.
:::

##### **Port**  
This option specify assigned virtual IPs for accepting traffic.  

```
    Accepted values: Integer

    Default: Blank  
```


##### **Protocol**  
This option used to select protocol.  

```
    Accepted values: HTTP

    Default: HTTP  
```


##### **SSL Enabled**  
This option used to select whether the SSL enabled or Disabled, that is uploaded by the user in the SSL Certificate section.  

```
    Accepted values: True / False

    Default: False  
```

