---
sidebar_position: 10
---



# Monitors


Continually test your upstream servers, avoid the servers that have failed, and gracefully add the recovered servers into the server group.

---
### Overview

Monitoring provides a comprehensive overview of the status and performance of the Server Group and/or individual real servers inside the server group. If a monitor is attached to a server group, then it will get applied to all the servers inside that group automatically. If a monitor is attached to a particular server then it will override the configuration of the server-group monitor. Health Checks computes an overall health state for each upstream server in the listener. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy.

![monitors](/img/pro-waf/docs/monitors.png)

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **Monitors**
3. Configure your settings.
4. Click on save changes.

| PARAMETERS            | ACCEPTED VALUES                      | DEFAULT  |
|-----------------------|--------------------------------------|----------|
| Monitor Name          | String                               | Blank    |
| Enable Health Check   | Enabled/Disabled                     | Disabled |
| Health Check Interval | Boolean                              | 10       |
| Fail Threshold        | Integer                              | 1        |
| Pass Threshold        | Integer                              | 1        |
| Health Check Type     | TCP/HTTP/SSL Hello/HTTPS             | TCP      |
| Check URI             | URI                                  | GET /    |
| Match Status          | Response Code                        | 200      |
| Match Content         | Content to be matched in header/body | Blank    |


### Description

##### **Monitor Name**

This option allows users to define a user-friendly name for the monitor.

##### **Enable Health Check**
Enable to periodically check the health of upstream servers by sending special health‑check requests to each server and verifying the correct response.

##### **Health Check Interval**
Set the seconds, say 10, then every 10 seconds WAF sends a request for “/” to each server/server group. If any communication error or timeout occurs (the server responds with a status code other than the expected code) the health check fails. The server is marked as unhealthy, and WAF does not send client requests to it (if attached to server group) until it once again passes a health check.

##### **Fail Threshold**
Sets the number of failed attempts that must occur during the heath check interval period for the server to be marked unavailable (default is 1 attempt).

##### **Pass Threshold**
Sets the number of passes that must occur during the heath check interval period for the server to be marked available (default is 1 attempt). If set as 2, then the server must pass two consecutive checks to be marked as healthy again instead of the default one.

##### **Health Check Type**

1. **HTTP**: Works for HTTP servers. Health check sends the request, if unable to send request, then we make that server unhealthy.

2. **SSL HELLO**: Works for HTTP servers. Health check tries SSL handshake with the server, if failed to do SSL handshake then we make that server as unhealthy.

3. **TCP**: Works for TCP servers. Health check simply attempts to open a TCP connection to the server on the specified port (which are specified in the configuration file).

4. **HTTPS**: Works for HTTPS servers. Health check sends the request, if unable to send request, then we make that server as unhealthy

##### **Check URI**
The specified URI is appended to the server domain name or IP address set for the server in the server block. This option only appears when HTTP/HTTPS is select in **Health check** option

##### **Match Status**
Using this directive it is possible to verify whether the status is in a specified range. It contains one status code.This option only appears when HTTP/HTTPS is select in **Health check** option

##### **Match Content**
Using this directive it is possible to verify whether the header or body matches a regular expression. It can contain one status code, one body condition, and multiple header conditions.This option only appears when HTTP/HTTPS is select in **Health check** option





