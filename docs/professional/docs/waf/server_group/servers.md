---
sidebar_position: 2
---

import ProductBadge from '@site/src/components/ProductBadge';

# Servers

<ProductBadge />
<br />
<br />

Configure the application servers

---

### Overview

Configuration of upstream servers in a server group can be modified on-the-fly by using Servers.

![servers](/img/pro-waf/docs/servers1.png)
![servers](/img/pro-waf/docs/servers2.png)
![servers](/img/pro-waf/docs/servers3.png)

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **Server Groups** > **Servers**
3. Click **Add Server** and configure it with basic and advanced configuration.
4. Set the configurations and **Save Changes**


| PARAMETERS         | ACCEPTED VALUES  | DEFAULT |
|--------------------|------------------|---------|
| Server             | IP               | Blank   |
| Port               | Integer          | 80      |
| Weight             | Integer          | 1       |
| Remote             | TRUE/FALSE       | FALSE   |
| Monitor            | Existing monitor | NONE    |
| Backup             | TRUE/FALSE       | FALSE   |
| Mode               | TRUE/FALSE       | FALSE   |
| Slow Start         | Integer          | 0       |
| Max Connection     | Integer          | 0       |
| Connection Timeout | Integer          | 0       |
| Send Timeout       | Integer          | 0       |
| Read Timeout       | Integer          | 0       |


### Description:

##### **Server**

Specify the IP address for the server. This IP address will be used for serving the requests for the application.

##### **Port** 

Set the port for the backend application server will communicate.

##### **Weight** 

Specify the weight of the server. Higher the weight more requests will be served by that server. 

##### **Remote** 

Specify if the server can be accessed remotely or not.

##### **Monitor** 

Select from the monitors created. Monitors help in monitoring the health of the server.

##### **Backup** 

Specify if backup is allowed for the server. In case of primary failure, the backup will be up and running.

##### **Mode** 

Makes the server active/inactive. When marked Down the server will not be able to serve requests.

##### **Slow Start**

This option allows users to handle client request slowly in start.

##### **Max Connection** 

Specify the number of max connections allowed to the specific server.

##### **Connection Timeout** 

Specify the connection timeout for the server.

##### **Send Timeout** 

Specify the send timeout for the server. 

##### **Read Timeout** 

Specify the read timeout for the server.




