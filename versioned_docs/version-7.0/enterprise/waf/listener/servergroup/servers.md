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


### Description:

##### **Server** 

This option allows user to specify the IP address for the server for serving the request for the application.

```
    Accepted values: IP

    Default: Blank
```


##### **Port** 

This option allows user to set the port for the back-end application server for communication.

```
    Accepted values: Integer

    Max: 65535

    Min: 0

    Default: 80
```


##### **DNS Record Type** 

It is used to map domain names to various types of data such as IP addresses and services.

```
    Accepted values: ANY / A Record / AAAA Record

    Default: ANY
```


##### **Weight** 

This option allows user to specify the weight of the server. Higher the weight more requests will be served by that server. 

```
    Accepted values: Integer

    Max: 100

    Min:  1

    Default: 1 
```


##### **Remote** 

This option allows user to specify if the server can be accessed remotely or not.

```
    Accepted values: True / False

    Default: False
```

   
##### **Monitor** 

This option allows user to select from the monitors created. Monitors help in monitoring the health of the server.

```
    Accepted values: Select Existing monitor

    Default: None
```
    
##### **Backup** 

This option allows user to specify if backup is allowed for the server. In case of primary failure, the backup will be up and running.

```
    Accepted values: True / False

    Default: False
```


##### **Mode** 

This option allows user to make the server active/inactive. When marked Down the server will not be able to serve requests.

```
    Accepted values: Ready / Down

    Default: Ready
```


##### **Slow Start** 

This option allows user to specify the Slow Start for the server.

```
    Accepted values: Integer

    Default: 0
```


##### **Max Connection** 

This option allows user to specify the number of maximum connections allowed to the specific server.

```
    Accepted values: Integer

    Default: 0
```


##### **Connection Timeout** 

This option allows user to specify the connection timeout for the server.

```
    Accepted values: Integer

    Max: 1000000

    Min: 0 

    Default: 0 
```


    Metrics: Seconds 

##### **Send Timeout** 

This option allows user to specify to send timeout for the server. 

```
    Accepted values: Integer

    Max: 1000000

    Min: 0 

    Default: 0 
```


    Metrics: Seconds 

##### **Read Timeout**

This option allows user to specify the read timeout for the server.

```
    Accepted values: Integer

    Max: 1000000

    Min: 0

    Default: 0 
```


    Metrics: Seconds
