---
sidebar position: 5
---

# Session Table

## Overview

The session table records the connection status of on boarded listeners. It plays an important role  to understand the traffic flow and to identify which request has forwarded to which upstream.

![session_table](/img/waf/v7/docs/sessiontable.png)

### How to Use:

1. Go to **Apps**
2. Select **WAF**  > Click **Session Table**
3. Here User can view all the connections that has been establish and also about the status of connection and timestamp as well.
4. From **Resources**, User can select desired resource of listed listener.
5. From **Date Range** User can select customize date to view Incidents.

### Description

**TIMESTAMP**  
In the time stamp column user can get details about the connection intialization time for that particular session, for each session time session can be different.

**SOURCE**  
In source column user can get details about the client source ip from which the request has been generated.

**PROXY**  
In proxy column the user can see the ip address that has been NAT for the client request. As the waf is working as a reverse proxy, hence requests forwarded to backend sever should be NAT with waf ip addresss.

**CLIENT NAT**  
If user has configured client ip pool and server groups then requests forwarded to backend sever will be NAT with cllient ip pool address.
 
**UPSTREAM**  
In upstream column user can see the ip of backend server. 
