---
sidebar_position: 2
---

# Load Balancing

---

## Overview 

Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault‑tolerant configurations.

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

7. **PERSISTENT HASH**: This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. NOTE: In hashing-based load balancing, if a specified value does not exists then the request is served on the basis of client's IP address.

8. **Least Requests:**
This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests.

9. **SNMP Metrics**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have least CPU / RAM usage. NOTE: For this algorithm to work, the server group should have SNMP monitor attached.

### How to Use:

1. Go to Stack > **SLB** > [**Listeners**](../listeners.md) >[** Server Groups**](./server_groups.md) > **Select Server Name** > **Load Balancing**  

2. Configure your settings.  

3. Click **Save Changes**.  


![Load balancing](/img/adc/v7/docs/loadbalancing.png)

![Load balancing](/img/adc/v7/docs/loadbalancing1.png)

| SETTINGS                  | ACCEPTED VALUE | DEFAULT     |
|---------------------------|----------------|-------------|
| Connection Reuse Policy   | Drop-Down      | Always      |
| Enable HTTP KeepAlive     | Boolean        | Disable     |
| HTTP KeepAlive Timeout    | Integer        | 2           |
| Tunnel Timeout            | Integer        | 120         |
| Request Timeout           | Integer        | 10          |
| Server Connect Timeout    | Integer        | 4           |
| Idle Connection Timeout   | Integer        | 30          |
| Resume Connection Timeout | Integer        | 1           |
| Queue Timeout             | Integer        | 5           |
| Connection Pool Size      | Integer        | 32          |
| Server Retries            | Integer        | 1           |
| Client IP Pool            |String        | Blank          |
| Algorithm                 | Drop-Down      | Round Robin |
| Sticky Session Cookie     | String         | Blank           |

![Load balancing2](/img/adc/v7/docs/loadbalancing2.png)

### Description:  

#### Connection Reuse Policy

This option allows users to specify an HTTP connection reuse policy.

#### Enable HTTP KeepAlive

This option allows users to specify enabling server connection keep-alive.

#### HTTP KeepAlive Timeout

This option allows users to specify a keep-alive server connection timeout.

#### Tunnel Timeout

This option allows users to set the maximum inactivity time on the client and server-side for Websocket tunnels

#### Request Timeout

This option allows users to specify the maximum allowed time to wait for a complete HTTP request.

#### Server Connect Timeout

This option allows users to specify a max time to wait for establishing server connection.

#### Idle Connection Timeout

This option allows users to specify idle server connection timeout.

#### Resume Connection Timeout

This option allows users to specify the time within which a lost server connection can resume.

#### Queue Timeout

This option allows users to specify the maximum time to wait in the queue for a connection slot to be free.

#### Connection Pool Size

This option allows users to specify the maximum number of idling connections for a server. Set -1 for unlimited.

#### Server Retries

This option allows users to specify the max number of connection retries.

#### Client IP Pool

This option allows users to specify list of client IP to use when connecting to upstream. Leave blank for auto.

#### Algorithm

This option allows users to specify the Server Group Algorithm.

#### Sticky Session Cookie

Users are allowed to specify enabling sticky session based on specified cookie.

#### Adding Location

![Load balancing3](/img/adc/v7/docs/loadbalancing3.png)

| SETTINGS | ACCEPTED VALUE | DEFAULT |
|----------|----------------|---------|
| Priority | String         | Blank   |
| Location | Drop-Down      | SRC IP  |
| Value    | String         | Blank   |

 - **Priority**  
The user can set the priority.  

 - **Location**  
The user can set the location for which load balancing is done.  

 - **Value**  
The users are allowed to specify the location value. This option will only visible when location is selected to val fields.  
