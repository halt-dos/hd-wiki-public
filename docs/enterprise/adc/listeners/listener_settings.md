---
sidebar_position: 1
---

# Listener Settings
Make SLB listen on specific ports to accept connections and distribute across one or multiple origin servers.

---

## Overview

Users are allowed to configure many operational settings for the Listeners.

![Listener settings1](/img/adc/v7/docs/listenersetting.png)

### How to Use:

1. Go to **SLB** > **Listeners** > **Operational Settings**
2. Configure your settings
3. Click **Save Changes**.

![Listener settings2](/img/adc/v7/docs/listenersetting1.png)

| PARAMETERS                   | ACCEPTED VALUES | DEFAULT  |
|------------------------------|-----------------|----------|
| Enable IPv6                  | Boolean         | Enabled  |
| Enable Http 2.0              | Boolean         | Disabled |
| Enable WebSocket             | Boolean         | Disabled |
| Enable HTTP Keepalive        | Boolean         | Disabled |
| Enable Device Detection      | Boolean         | Disabled |
| Operational Mode             | Drop-down       | Reverse Proxy |
| Proxy Protocol               | Drop-down       | None     |
| Enable Logging               | Boolean         | Enabled  |
| Client Connection Timeout    | Integer         | 30       |
| Client Resume Timeout        | Integer         | 1        |
| Max Concurrent Connections   | Integer         | 0        |
| Client Keep-Alive Timeout    | Integer         | 2        |
| HTTP Request Timeout         | Integer         | 10       |
| User Session Duration        | Integer         | 60       |
| Session Cookie               | String          | Blank    |
| Max Concurrent User Sessions | Integer         | 0        |
| MAX Session Exceeded Action  | Drop-down       | Redirect |
| Max Session Forward URL      | String          | Blank    |
| Max Session Exceeded Waiting Page | Drop-down  | Blank
| Remote IP Header             | String          | Blank    |
| Server Aliases               | String          | Blank    |
| Virtual IPs                  | String          | Blank    |

![Listener settings3](/img/adc/v7/docs/listenersetting2.png)

### Description:

##### **Enable IPv6**

This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network.

##### **Enable Http 2.0**

This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. Read more about the differences between the two and how you can get started with HTTP2 today.

##### ***Enable WebSocket***

This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection.

##### **Enable HTTP Keepalive**

This option allows users to enable HTTP Keep-alive for client connections. HTTPKeep-Alive can speed up website as the browser only needs to go through the process of connecting to the server once through a single TCP connection.

##### **Enable Device Detection**

This option allows users to detect devices and its OS on the client-side in the case of service type HTTP. If the user enabled this option, they can enable the device-based upstream rules.

##### **Operational Mode**

Users are allowed to specify Operational mode for the application. There are two modes can be selected:
1. Reverse Proxy 
2. Transparent

##### **Proxy Protocol**

Users are allowed to specify Proxy protocol for the application.

##### **Enable Logging**

This option allows user to enable access logs in the case of service type HTTP & TCP’s.

##### **Client connection Timeout**

Connection timeout is a time period within which a connection between a client and a server must be established. This option is only applicable in the case of service type HTTP & TCP. This option allows users to set the connection timeout values from client-side.

##### **Client Resume Timeout**

This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify the time within which a lost client connection can resume.

##### **Max Concurrent Connections**

This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify max allowed concurrent connections. By default, Set 0 to disable.

##### **Client Keep-Alive Timeout**

This option is only applicable in the case of service type HTTP. This option allows users to specify a timeout of keep-alive connections with clients.

##### **HTTP Request Timeout**

This option is only applicable in the case of service type HTTP. This option allows users to specify client HTTP request timeout.

##### **User Session Duration**

Users can specify max allowed user session duration in minutes.

##### **Session Cookie**

This option is only applicable in the case of service type HTTP. This option allows users to specify the session cookie for tracking active users.

##### **Max Concurrent User Sessions**

This option is only applicable in the case of service type HTTP. This option allows users to specify max allowed concurrent user sessions. Set 0 to disable.

##### **Max Session Exceeded Action**

Users can specify the action to take when max session count exceeds.

#### **Max Session Forward URL**

Users can specify the redirected URL when max session count exceeds. This option will only visible when user has selected redirect option under 'Max Session Exceeded Action' option.

##### **Max Session Exceeded Waiting Page**

Users are allowed to specify the waiting room page to show when max session count exceeds. This option will only visible when user has selected send custom response option under 'Max Session Exceeded Waiting Page' option.

##### **Remote IP Header**

This option is only applicable in the case of service type HTTP. This option allows users to specify the header for extracting remote IP.

##### **Server Aliases**

This option is only applicable in the case of service type HTTP. This option allows users to specify named aliases for this listener.

##### **Virtual IPs**

This option is only applicable in the case of service type HTTP. This option allows users to specify assigned virtual IPs for accepting traffic.