---
sidebar_position: 1
---

#  Settings
Configure Operational settings of Listeners.

---



## Overview

Users are allowed to configure many operational settings for the Listners.
  
![listner-setting](/img/ddos/v7/docs/listner_setting.png)
  
### How to Use:
1. Go to **Apps > DDoS > Listener > Operational Settings**.  
2. Configure the settings.
3. Click on **Save changes**.


| PARAMETERS                  | ACCEPTED VALUES | DEFAULT       |
|-----------------------------|-----------------|---------------|
| Enable IPv6|Enables IPv6 Accepted values: Boolean|True
| Enable HTTP 2.0 |Enables Http 2.0 Accepted values: Boolean|False
| Max Concurent Connection | Specify max allowed requests per keep-alive connection : Integer |1000
| Server Aliases| Listener Identity either domain name or IP address | NULL 
| VIRTUAL IPS|Specify assigned virtual IPs for accepting traffic. Accepted Values Integer|NULL
| Add Port|Helps you to add HTTP/S ports for Advance Settings.Accepted values: Integer|Blank

![port](/img/ddos/v7/docs/port.png)

### Description

##### **Enable IPv6**
This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network.

##### **Enable HTTP 2.0**
Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1
This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1  

##### **Max Concurrent Connection**
Users are allowed to configure maximum concurrent connections for the mentioned listener.By default, value is set to 0 i.e. configuration is disabled.

##### **Client Connection Timeout**
Users are allowed to configure client connection inactivity timeout. By default, value is set to 0 i.e. configuration is disabled.

##### **Server Connect Timeout**
Users are allowed to configure server-side connection inactivity timeout. By default, value is set to 0 i.e. configuration is disabled.

##### **Client Half-Close Timeout**
Users are allowed to configure client-side half open connection timeout. By default, value is set to 0 i.e. configuration is disabled.

##### **Server Half-Close Timeout**
Users are allowed to configure server-side half open connection timeout. By default, value is set to 0 i.e. configuration is disabled.

##### **Keep Alive Timeout**
Users are allowed to specify the client keep-alive timeout for the HTTP requests. By default, value is set to 0 i.e. configuration is disabled.

##### **HTTP Alive Timeout**
Users are allowed to specify the incomplete HTTP request header timeout. By default, value is set to 0 i.e. configuration is disabled.

##### **Tunnel Timeout**
Users are allowed to specify the timeout applied to bidirectional connections such as WebSocket and HTTP CONNECT requests. By default, value is set to 0 i.e. configuration is disabled.

##### **Tarpit Timeout**
This option allows users to specify time after which connections marked in tarpit will remain terminated. By default, value is set to 0 i.e. configuration is disabled.

##### **Server Aliases**
This option allows users to specify if any alias for the configured listener.

##### **Virtual IPs**
This option allows users to add or assign VIPs to the listener.

##### **Add Port**
This option helps you to add HTTP/S ports for Advance Settings. Here you can unique port either HTTP  or HTTPS enabled configuration without changing backend server port.


- **Port** : This field can be used to allow users to add listening ports for the Anti DDoS solution.
- **Protocol** : This field can be used to allow users to select the protocol that is being used for the communication.
- **SSL Enabled** : This field can be used to allow users to enable/disable the SSL offloading for the listener.
- **Forwarding Port** : This field can be used to allow users to configure the upstream/forwarding port. This forwarding port will be used while making request to the backend server/original server.
- **Encrypt To Upstream** : This field can be used to enable/disable SSL offloading to the backend/original servers.

:::note Note
**We can listen to non-HTTPS traffic and send it as HTTPS traffic to the back end server.**
::: 
