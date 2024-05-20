---
sidebar_position: 2
---

# Load Balancing


## Overview 

Load balancing across multiple application server is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault‑tolerant configurations.
Users can configure the load balancing settings, select desired load balancing algorithem, enable SSL while forwarding the data towards backend, etc. under this section. 

![Load Balancing](/img/ce-waf/docs/lbsettings.png)

## Load Balancing Algorithms
This field specifies the load balancing algorithm according to the configured website.

1. **ROUND ROBIN**: 
This algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity.

2. **LEAST CONNECTIONS**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server.

3. **LEAST RESPONSE TIME** : This load balancing algorithem is used to provide the response from the server which has the less response time. Suppose there are two servers in the backend which have repsonse time A and B. A is less than B. In this case, Haltdos WAF Solution will give preference to the server which is having less response time than others. 

4. **LEAST BANDWIDTH** : This load balancing algorithm is used to load balance as per the bandwidth available for the backend to handle the load coming from the client side. 

5. **IP HASH**: This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. 

6. **LEAST REQUEST**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests.


## How to use:
1. Go to **WAF** > **Server Farm** > **Load Balancing**
2. Set the configurations and **Save Changes**.

### Description

#### Encrypt to Upstream
This option allows users to specify if WAF should re-encrypt traffic before sending to servers

    Accepted values: Enable / Disable 

    Default: Disable  


#### Upstream Retries
This option specify the upstream retries. By default, the value is set to 1.

    Accepted values: Integer 

    Default: 1  

#### Fail-over Threshold
This option specify the fail-over threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%.

    Accepted values: Integer 
    
    Max: 100

    Min: 1

    Default: 50 

    Metric: Percentage 

#### Load Balancing Algorithm
This drop-down specify the algorithm used by the server group. By default, the value is selected as Round Robin.

    Accepted values: Roud-Robin / Least Connection / Least Response Time / Least Bandwidth / IP Hash / Least Request.

    Default: Least Connection  

#### Sticky Session Cookie
The users are allowed to specify enabling sticky session based on specified cookie

    Accepted values: String 

    Default: Blank  
