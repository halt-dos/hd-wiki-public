---
sidebar_position: 3
---
# Load Balancing

Load Balancing mechanism used for WAF

---

## Overview

Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault‑tolerant configurations.

**Load Balancing Algorithms**

This field specifies the load balancing algorithm according to the configured website.

- **ROUND ROBIN**: This algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity.

- **LEAST CONNECTIONS**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server.

- **LEAST LISTENER CONNECTIONS**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections to the backend server.

- **LEAST RESPONSE TIME**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests.

- **LEAST REQUEST**: This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests.

- **IP HASH**: This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. 

- **PERSIST HASH**: This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. 

- **COOKIE HASH**: This algorithm takes the cookie name specified by the user in param input field to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. 

- **HEADER HASH**: This algorithm takes the header name specified by the user in param input field to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. 

Note: In hashing-based load balancing,  if a specified value does not exists then the request is served on the basis of client's IP address.

### How to Use:

1. Go to **WAF > Zones > Listeners > Server Groups > Load Balancing**

2. Set the configurations and **Save Changes**.

| PARAMETERS              | ACCEPTED VALUES  | DEFAULT       |
|-------------------------|------------------|---------------|
| Web Socket Enabled      | Enabled/Disabled | False         |
| Keep-Alive Enabled      | Enabled/Disabled | False         |
| Keep-Alive Timeout      | Integer          | 3600          |
| Connection Pool Size    | Integer          | 32            |
| Max Keep-Alive Requests | Integer          | 100           |
| Upstream Retries        | Integer          | 1             |
| Failover Threshold      | Integer          | 50            |
| Algorithm               | Dropdown         | Round Robin   |
| Param                   | String           | None          |
| Add Location            | String & Integer | None & Src IP |

#### Description

**Web Socket Enabled**

This toggle button allows you to enable the Websocket support for servers in the server group.

**Keep-Alive Enabled**

This toggle button allows you to enable keep-alive connections with servers in the server group.

**Keep-Alive Timeout**

This field specifies upstream keep-alive connection timeout in seconds. By default, the value is set to 3600 seconds.

**Connection Pool Size**

This field specifies the connection pool size. By default, the value is set to 32.

**Max Keep-Alive Requests**

This field specifies the max allowed requests per keep-alive connection. By default, the value is set to 100 requests.

**Upstream Retries**

This field specifies the upstream retries. By default, the value is set to 1.

**Failover Threshold**

This field specifies the failover threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%.

**Algorithm**

This dropdown specifies the algorithm used by the server group. By default, the value is selected as Round Robin.

**Param**

This field specifies the parameters for the location. Location will be specified with its Priority and Location like IP, Cookie, Port, Session, etc.
