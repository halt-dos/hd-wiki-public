---
sidebar_position: 6
---

# Monitors
Continually test your upstream servers, avoid the servers that have failed, and gracefully add the recovered servers into the server group.

## Overview
Monitoring provides a comprehensive overview of the status and performance of the Server Group  and/or individual real servers inside the server group. If a monitor is attached to a server group, then it will get applied to all the servers inside that group automatically. If a monitor is attached to a particular server then it will override the configuration of the server-group monitor. Health Checks computes an overall health state for each upstream server in the listener. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy.

![Monitors](/img/waf/v6/docs/Monitors.png)

### How to you use:

1. Go to WAF > Listeners > Monitors
2. Click on Add Monitor
3. Click on the monitor name to configure the Health Check and click on Save changes
4. Now go to WAF > Listener > Server Group 
5. Add the Monitor to the server group / or server as required  


| Parameter | Accepted Values  | Default Values |
| ----------- | ----------- | ----------- |
| Monitor Name| String | Blank |
| Enabled Health Check | Enabled/Disabled | Disabled |  
| Health Check Type | TCP/HTTP/SSL Hello/HTTPS/etc | TCP |
| Port | Port Number | 80 |
| Check URI | URI | GET |
| Match Status | Response Code | 200|
| Match Content | Content to be matched in header/body | Blank |
| Fail Threshold | Integer | 1|
| Pass Threshold | Integer | 1|

### Description

1. **Monitor Name:** 
Specify a user friendly name to monitor.

2. **Enable Health Check:**
Enable to periodically check the health of upstream servers by sending special health‑check requests to each server and verifying the correct response.

3. **Health Check Interval:**
Set the seconds, say 10, then every 10 seconds WAF sends a request for “/” to each server/server group. If any communication error or timeout occurs (the server responds with a status code other than the expected code) the health check fails. The server is marked as unhealthy, and WAF does not send client requests to it (if attached to server group) until it once again passes a health check.

4. **Fail Threshold:**
Sets the number of failed attempts that must occur during the heath check interval period for the server to be marked unavailable (default is 1 attempt).
  
5. **Pass Threshold:**
Sets the number of passes that must occur during the heath check interval period for the server to be marked available (default is 1 attempt). If set as 2, then the server must pass two consecutive checks to be marked as healthy again instead of the default one.

6. **Health Check Type:**
 - **TCP**: 
Health check attempts to open a TCP connection to the server on the specified port (which are specified in the configuration file).
 - **SSL HELLO**:
Health check sends SSL handshake with the server, if failed to do SSL handshake then we make that server as unhealthy.
 - **HTTP**: 
Health check sends HTTP request, if unable to receive response, then we make that server unhealthy.
 - **HTTPS**: 
Health check sends HTTPS request, if unable to receive response, then we make that server as unhealthy
 - **DNS**: 
Health check sends DNS query, if unable to receive response, then we make that server as unhealthy
 - **ICMP**: 
Health check sends ICMP ping, if unable to receive response, then we make that server as unhealthy
 - **SNMP**: 
Health check sends SNMP query, if unable to receive response, then we make that server as unhealthy. For SNMP, measurement can be based on CPU, RAM or both. User will also need to specify maximum threshold (percentage) for marking the health of the server as up. SNMP v2,v2c and v3 are supported.
 - **Custom Script**: 
Health check runs custom script (shell script, perl script or Lua script). The script is executed with parameters of server IP and server Port. If the script responds with 1, heath check is passed. If the script responds with 0, we make that server as unhealthy

7. **Port**: 
 Specify a new port with the port parameter