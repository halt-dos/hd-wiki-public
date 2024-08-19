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

    Accepted values: Select Created Monitor

    Default: NONE  

To add monitor user can refer to this link: [**Server Monitors**](/v7/community/waf/server_farm/monitors)

#### **Backup** 

This option allows users to determine whether a backup server is permitted. If the primary server fails, the backup server will become active and take over operations. This ensures continuity of service, minimizing downtime and maintaining functionality in the event of a primary server failure.

    Accepted values: TRUE / FALSE 

    Default: FALSE  


#### **Mode**
This option allows user to specify the server mode, either it is ready or down.

    Accepted values: Ready / Down 

    Default: Ready  


#### **Max Connection** 

This option allows users to set a limit on the number of simultaneous connections that can be made to the server. Once the specified maximum number of connections is reached, the server will not accept any additional connections until some of the existing ones are closed. 

    Accepted values: Integer 

    Max: 1000000

    Min: 0

    Default: 0  


#### **Connection Timeout** 

This option allows users to set a time limit for how long the server will attempt to establish a connection before giving up. If the server cannot establish a connection within the specified timeout period, the attempt will fail, and an error will be reported.

    Accepted values: Integer 

    Max: 1000000

    Min: 0

    Default: 0  

    Metric: Seconds


#### **Send Timeout** 

This option enables users to set a time limit for how long the server will attempt to send data before timing out. If the server is unable to send the data within the specified period, the send operation will fail, and an error may be triggered.

    Accepted values: Integer 
    
    Max: 1000000
    
    Min: 0

    Default: 0 

    Metric: Seconds


#### **Read Timeout**

This option enables users to set a time limit for how long the server will wait for a read operation to complete. If the server does not receive the expected data within the specified timeout period, the operation will fail or an error will be triggered.

    Accepted values: Integer 
    
    Max: 1000000
    
    Min: 0
    
    Default: 0  

    Metric: Seconds

