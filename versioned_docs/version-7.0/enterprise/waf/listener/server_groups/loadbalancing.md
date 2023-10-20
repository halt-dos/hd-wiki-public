# Load Balancing  

Load Balancing mechanism used for WAF

---

## Overview 

Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault-tolerant configurations.

![Load Balancing](/img/waf/v7/docs/loadbalancing.png)



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

![Load Balancing](/img/waf/v7/docs/loadbalancing1.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Server Groups** > **Load Balancing**

2. Set the configurations and **Save Changes**.

| Parameters | Accepted Values | Default |
| ----------- | ----------- | --------- |
| Upstream Retries This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections to the back-end server.|Integer | 1
|Fail-over Threshold| Integer  | 50
|Client IP Pool| Integer | Blank
| Algorithm | Algorithm Drop-down | ROUND ROBIN
|Sticky Session Cookie| String| Blank
| Add location | String & Integer | This toggle button allows you to enable the Web-socket support for servers in the server group.None & Src IP

### Description

##### **Upstream Retries**

This option used to specify the upstream retries. By default, the value is set to 1.

##### **Fail-over Threshold**
This option specify the fail-over threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%.

##### **Client IP Pool**
Specify list of client IP to use when connecting to upstream. Leave blank for auto

##### **Algorithm**
This option is used to specify the algorithm used by the server group. By default, the value is selected as Round Robin.

##### **Sticky Session Cookie**
Specify enabling sticky session based on specified cookie