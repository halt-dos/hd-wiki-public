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

    Accepted values: IP 

    Default: Blank  


#### **Port** 

This option allows user to set the port for the back-end application server for communication.

    Accepted values: Integer 

    Max: 65535

    Min: 0

    Default: 80  


#### **Weight** 

This option allows user to specify the weight of the server. Higher the weight more requests will be served by that server. (Higher weight values indicate that the server is more capable and should receive a larger share of incoming requests.)

    Accepted values: Integer 

    Max: 100

    Min: 0

    Default: 1 


#### **Monitor** 

This option alows user to select from the monitors created. Monitors help in monitoring the health of the server.

    Accepted values: Existing Monitor

    Default: NONE  


#### **Backup** 

This option allows user to specify if backup is allowed for the server. In case of primary failure, the backup will be up and running.

    Accepted values: TRUE / FALSE 

    Default: FALSE  


#### **Mode**
This option allows user to specify the server mode, either it is ready or down.

    Accepted values: Ready / Down 

    Default: Ready  


#### **Max Connection** 

This option allows user to specify the number of maximum connections allowed to the specific server.

    Accepted values: Integer 

    Max: 1000000

    Min: 0

    Default: 0  


#### **Connection Timeout** 

This option allows user to specify the connection timeout for the server.

    Accepted values: Integer 

    Max: 1000000

    Min: 0

    Default: 0  

    Metric: Seconds


#### **Send Timeout** 

This option allows user to specify the send timeout for the server. 

    Accepted values: Integer 
    
    Max: 1000000
    
    Min: 0

    Default: 0 

    Metric: Seconds


#### **Read Timeout**

This option allows user to specify the read timeout for the server.

    Accepted values: Integer 
    
    Max: 1000000
    
    Min: 0
    
    Default: 0  

    Metric: Seconds

