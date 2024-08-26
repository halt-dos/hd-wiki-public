---
sidebar_position: 2
---
# Load Balancing  

Load Balancing mechanism used for WAF

---

## Overview 

Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault-tolerant configurations.

![Load Balancing](/img/waf/v8/docs/WAFloadbalan.png)



### Load Balancing Algorithms
This field specifies the load balancing algorithm according to the configured website.

1. **ROUND ROBIN**: 
This algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity.

2. **LEAST CONNECTIONS**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server.

3. **LEAST LISTENER CONNECTIONS**:
 This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests.

4. **LEAST RESPONSE TIME**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests.

5. **MINIMUM JITTER**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum jitter. NOTE: For this algorithm to work, the server group should have ICMP monitor attached.

6. **IP HASH**: This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. 

7. **PERSISTENT HASH**: This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. NOTE: In hashing-based load balancing,  if a specified value does not exists then the request is served on the basis of client's IP address.

8. **Least Requests:**
This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests.

9. **SNMP Metrics**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have least CPU / RAM usage. NOTE: For this algorithm to work, the server group should have SNMP monitor attached.    

![Load Balancing](/img/waf/v8/docs/loadBalancing2.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Server Groups** > **Load Balancing**

2. Set the configurations and **Save Changes**.

### Description

##### **Upstream Retries**

This option used to specify the upstream retries. By default, the value is set to 1.

    Accepted values: Integer

    Default: 1  

##### **Fail-over Threshold**
This option specify the fail-over threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%.

    Accepted values: Integer

    Max: 100

    Min: 1

    Default: 50  

##### **Client IP Pool**
Specify list of client IP to use when connecting to upstream. Leave blank for auto

    Accepted values: list of client IP

    Default: Blank 

##### **Algorithm**
This option is used to specify the algorithm used by the server group. By default, the value is selected as Round Robin.

    Accepted values: Round Robin / Least Connection / Least Listener Connection / Least Response Time / Minium Jitter / IP Hash / Persistent Hash / Least Requests / SNMP Metrics 

    Default: Round Robin

##### **Sticky Session Cookie**
Specify enabling sticky session based on specified cookie

    Accepted values: Integer

    Default: 1

#### Location

##### **Priority**
Set the priority

    Accepted values: Integer

    Default: Blank 

##### **Location**
Set the priority

    Accepted values: SRC_IP / DST_IP / SRC_PORT / DST_PORT / URL / ARG_VAL / HEADER_VAL / COOKIE_VAL

    Default: SRC_IP 

##### **Value**
Set the location

    Accepted values: String

    Default: Blank 
  