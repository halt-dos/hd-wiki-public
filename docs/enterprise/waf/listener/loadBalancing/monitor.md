---
sidebar_position: 3
---

# Health Monitors
Continually test your upstream servers, avoid the servers that have failed, and gracefully add the recovered servers into the server group.

---

### Overview
Monitoring provides a comprehensive overview of the status and performance of the Server Group and/or individual real servers inside the server group. If a monitor is attached to a server group, then it will get applied to all the servers inside that group automatically. If a monitor is attached to a particular server then it will override the configuration of the server-group monitor. Health Checks computes an overall health state for each upstream server in the listener. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy.

![Monitors](/img/waf/v8/docs/WAFhealthmonitor.png)

### How to Use:

1. Go to WAF > Listeners > Monitors
2. Click on Add Monitor
3. Click on the monitor name to configure the Health Check and click on Save changes
4. Now go to WAF > Listener > Server Group 
5. Add the Monitor to the server group / or server as required  

### Description

##### **Monitor Name**
Specify a user-friendly name to monitor.  

```
    Accepted values: Integer

    Default: 1  
```


##### **Enable Health Check**
Enable to periodically check the health of upstream servers by sending special health‑check requests to each server and verifying the correct response.  

```
    Accepted values: Enabled / Disbaled

    Default: Disabled 
```


##### **Health Check Interval**
Set the seconds, say 10, then every 10 seconds WAF sends a request for “/” to each server/server group. If any communication error or timeout occurs (the server responds with a status code other than the expected code) the health check fails. The server is marked as unhealthy, and WAF does not send client requests to it (if attached to server group) until it once again passes a health check.

```
    Accepted values: Integer

    Max: 17280

    Min: 0

    Default: 10  
```


    Metrics: Seconds

##### **Fail Threshold**
Sets the number of failed attempts that must occur during the heath check interval period for the server to be marked unavailable (default is 1 attempt).  

```
    Accepted values: Integer

    Max: 17280

    Min: 0

    Default: 10  
```


    Metrics: Seconds

##### **Pass Threshold**
Sets the number of passes that must occur during the heath check interval period for the server to be marked available (default is 1 attempt). If set as 2, then the server must pass two consecutive checks to be marked as healthy again instead of the default one.  

```
    Accepted values: Integer

    Max: 10000

    Min: 0

    Default: 1
```


##### **Health Check Type**

```
    Accepted values: TCP / HTTP / SSL HELLO / HTTPS / ICMP / SNMP / DNS / Script

    Default: TCP  
```


 - **TCP**: 
Health check attempts to open a TCP connection to the server on the specified port (which are specified in the configuration file).
 - **SSL HELLO**:
Health check sends SSL handshake with the server, if failed to do SSL handshake then we make that server as unhealthy.
 - **HTTP**: 
Health check sends HTTP request, if unable to receive response, then we make that server unhealthy.
 - **HTTPS**: 
Health check sends HTTPS request, if unable to receive response, then we make that server as unhealthy.  
 - **DNS**: 
Health check sends DNS query, if unable to receive response, then we make that server as unhealthy.  
 - **ICMP**: 
Health check sends ICMP ping, if unable to receive response, then we make that server as unhealthy.  
 - **SNMP**: 
Health check sends SNMP query, if unable to receive response, then we make that server as unhealthy. For SNMP, measurement can be based on CPU, RAM or both. User will also need to specify maximum threshold (percentage) for marking the health of the server as up. SNMP v2,v2c and v3 are supported.  
 - **Custom Script**: 
Health check runs custom script (shell script, perl script or Lua script). The script is executed with parameters of server IP and server Port. If the script responds with 1, heath check is passed. If the script responds with 0, we make that server as unhealthy  

##### **Port**
Specify a new port with the port parameter

```
    Accepted values: Integer

    Default: Blank
```


##### **Health Script**
Select your custom health check script

```
    Accepted values: Add Script

    Default: Blank
```


##### **SNMP Version**
Specify SNMP version for monitoring

```
    Accepted values: SNMP v1 / SNMP v2 / SNMP v2c / SNMP v3

    Default: Blank
```


##### **SNMP Community**
Specify SNMP Community

```
    Accepted values: String

    Default: Public
```

