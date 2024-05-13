---
sidebar_position: 1
---
# Servers

### Overview 

Users can add/delete the backend servers. Users are also allowed to modify the server settings like, changing server mode, set the backend port, attach monitor to the backend server, set max concurrent connection etc.


![Servers](/img/ce-waf/docs/serversettings.png)

## How to Use :

1.Go to **WAF** > **Server Farm** > **Servers**

2.Click **Add Server** and configure it with basic and advanced configuration.

3.Set the configurations and **Save Changes**

### Description:

#### **Server** 

This option allows user to specify the IP address for the server for serving the request for the application.
Users are allowed to specify the ssl session caching

    Accepted values: IP 

    Default: Blank  


#### **Port** 

This option allows user to set the port for the back-end application server for communication.
Users are allowed to specify the ssl session caching

    Accepted values: Integer 

    Default: 80  


#### **Weight** 

This option allows user to specify the weight of the server. Higher the weight more requests will be served by that server. 
Users are allowed to specify the ssl session caching

    Accepted values: Integer 

    Default: 1 


#### **Monitor** 

This option alows user to select from the monitors created. Monitors help in monitoring the health of the server.
Users are allowed to specify the ssl session caching

    Accepted values: Existing Monitor

    Default: NONE  


#### **Backup** 

This option allows user to specify if backup is allowed for the server. In case of primary failure, the backup will be up and running.
Users are allowed to specify the ssl session caching

    Accepted values: TRUE/FALSE 

    Default: FALSE  


#### **Mode**
This option allows user to specify the server mode, either it is ready or down.
Users are allowed to specify the ssl session caching

    Accepted values: Ready/Down 

    Default: Ready  


#### **Max Connection** 

This option allows user to specify the number of maximum connections allowed to the specific server.
Users are allowed to specify the ssl session caching

    Accepted values: Integer 

    Default: 0  


#### **Connection Timeout** 

This option allows user to specify the connection timeout for the server.
Users are allowed to specify the ssl session caching

    Accepted values: Integer 

    Default: 0  


#### **Send Timeout** 

This option allows user to specify the send timeout for the server. 
Users are allowed to specify the ssl session caching

    Accepted values: Integer 

    Default: 0 


#### **Read Timeout**

This option allows user to specify the read timeout for the server.
Users are allowed to specify the ssl session caching

    Accepted values: Integer 

    Default: 0  

