

# Server Groups


User can select the Load Balancing mechanism and specify Origin Server IPs on this screen

---

## Overview

To load balance HTTP traffic to a group of servers, first, you need to define the group. Servers in the group are configured using the Servers page. To pass requests to a server group, use Upstream Rules.

This is useful for:

- Autoscaling, when you need to add more servers.

- Backup Server, When all active servers breach the failure 

- Quick Setup, when you need to change upstream server settings such as server weight, active connections, slow start, failure timeouts.

- Monitoring, when you get the state of the server or server group with one command.

![server_groups](/img/pro-waf/docs/server_group1.png)
![server_groups](/img/pro-waf/docs/server_group2.png)

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **Server Groups**
3. Click **Add Server Group** and Configure details.
4. Click **Save Changes**

### Description

##### **Group Name**

Specify a user-friendly name to identify the server group. The group name takes alpha-numeric input.  

    Accepted values: String

    Default: Blank  

##### **Monitor**

Attach any existing monitor to the server group.

    Accepted values: Select from existing monitors

    Default: None 

##### **SSL**
Select SSL depending upon requirement.

    Accepted values: Enable / Disable

    Default: Disable 

##### **Max Connection**
Mention the max Required connection

    Accepted values: Integer

    Default: Blank 

##### **Connect Timeout** 

Defines a timeout for establishing a connection with a proxied server.

    Accepted values: Integer

    Default: 100

    Metrics: Seconds 

##### **Send Timeout** 

Sets a timeout for transmitting a request to the proxied server. The timeout is set only between two successive write operations, not for the transmission of the whole request. If the proxied server does not receive anything within this time, the connection is closed.

    Accepted values: Integer

    Default: 100 

    Metrics: Seconds 

##### **Read Timeout** 

Defines a timeout for reading a response from the proxied server. The timeout is set only between two successive read operations, not for the transmission of the whole response. If the proxied server does not transmit anything within this time, the connection is closed. 

    Accepted values: Integer

    Default: 100 

    Metrics: Seconds 



















