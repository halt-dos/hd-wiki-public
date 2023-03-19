# Servers

Configure the application servers

---

## Overview 

Configuration of upstream servers in a server group can be modified on-the-fly by using Servers.

![Servers](/img/waf/v7/docs/server.png)

![Servers](/img/waf/v7/docs/server1.png)

## How to Use :

1.Go to **WAF** > **Listeners** > **Server Groups** > **Servers**

2.Click **Add Server** and configure it with basic and advanced configuration.

3.Set the configurations and **Save Changes**

| PARAMETERS | ACCEPTED VALUES | Default
| ----------- | ----------- | --------- |
| Server|IP|Blank
Port|Integer|80
Weight|Integer|1
Remote|TRUE/FALSE|FALSE
Monitor|Existing monitor|NONE
Backup|TRUE/FALSE|FALSE
Mode|TRUE/FALSE|FALSE
Max Connection|Integer|0
Connection Timeout |Integer|0
Send Timeout|Integer|0
Read Timeout|Integer|0

### Description:

##### **Server** 

This option allows user to specify the IP address for the server for serving the request for the application.

##### **Port** 

This option allows user to set the port for the back-end application server for communication.

##### **Weight** 

This option allows user to specify the weight of the server. Higher the weight more requests will be served by that server. 

##### **Remote** 

This option allows user to specify if the server can be accessed remotely or not.

##### **Monitor** 

This option allows user to select from the monitors created. Monitors help in monitoring the health of the server.

##### **Backup** 

This option allows user to specify if backup is allowed for the server. In case of primary failure, the backup will be up and running.

##### **Mode** 

This option allows user to make the server active/inactive. When marked Down the server will not be able to serve requests.

##### **Max Connection** 

This option allows user to specify the number of maximum connections allowed to the specific server.

##### **Connection Timeout** 

This option allows user to specify the connection timeout for the server.

##### **Send Timeout** 

This option allows user to specify to send timeout for the server. 

##### **Read Timeout**

This option allows user to specify the read timeout for the server.