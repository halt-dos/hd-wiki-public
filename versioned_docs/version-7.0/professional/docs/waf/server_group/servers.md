---
sidebar_position: 2
---



# Servers


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


### Description:

##### **Server**

Specify the IP address for the server. This IP address will be used for serving the requests for the application.

    Accepted values: IP

    Default: Blank 

##### **Port** 

Set the port for the backend application server will communicate.

    Accepted values: Integer

    Default: 80 

##### **Weight** 

Specify the weight of the server. Higher the weight more requests will be served by that server. 

    Accepted values: Integer

    Default: 1 

##### **Remote** 

Specify if the server can be accessed remotely or not.

    Accepted values: True/False

    Default: False 

##### **Monitor** 

Select from the monitors created. Monitors help in monitoring the health of the server.

    Accepted values: Existing monitor

    Default: None 

##### **Backup** 

Specify if backup is allowed for the server. In case of primary failure, the backup will be up and running.

    Accepted values: True/False

    Default: False

##### **Mode** 

Makes the server active/inactive. When marked Down the server will not be able to serve requests.

    Accepted values: True/False

    Default: False 

##### **Slow Start**

This option allows users to handle client request slowly in start.

    Accepted values: Integer

    Default: 0 

##### **Max Connection** 

Specify the number of max connections allowed to the specific server.

    Accepted values: Integer

    Default: 0 

##### **Connection Timeout** 

Specify the connection timeout for the server.

    Accepted values: Integer

    Default: 0 

##### **Send Timeout** 

Specify the send timeout for the server. 

    Accepted values: Integer

    Default: 0 

##### **Read Timeout** 

Specify the read timeout for the server.

    Accepted values: Integer

    Default: 0 




