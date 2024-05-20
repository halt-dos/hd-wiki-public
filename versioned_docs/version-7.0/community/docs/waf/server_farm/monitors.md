---
sidebar_position: 3
---

# Server Monitors

### Overview
Monitoring provides a comprehensive overview of the status and performance of the individual real servers. If a monitor is attached to a server, then it will get applied to the server for monitoring purposes as per the health check specified in the monitor. Health Checks computes an overall health state for upstream server in the WAF. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy.

![Monitors](/img/ce-waf/docs/monitor2.png)

### How to you Use:

1. Go to **WAF** > **Server Farm** > **Server Monitors**
2. Click on **Add Monitor**
3. Click on the monitor name to configure the Health Check and click on **Save Changes**

### Description

#### Monitor Name 
Users are allowed to specify a user friendly name to monitor.

    Accepted values: String / Integer

    Default: Blank  

#### Enable Health Check
Users are allowed to enable to periodically check the health of upstream servers by sending special health‑check requests to each server and verifying the correct response.

    Accepted values: Enable / Disable 

    Default: Disable  

#### Health Check Interval
Set the seconds, say 10, then every 10 seconds WAF sends a request for “/” to each server. If any communication error or timeout occurs (the server responds with a status code other than the expected code) the health check fails. The server is marked as unhealthy, and WAF does not send client requests to it (if attached to server group) until it once again passes a health check.

    Accepted values: Integer 

    Default: 10  

    Metrics: Second

#### Fail Threshold
Sets the number of failed attempts that must occur during the heath check interval period for the server to be marked unavailable (default is 1 attempt).
  
    Accepted values: Integer 

    Default: 1  

#### Pass Threshold 
Sets the number of passes that must occur during the heath check interval period for the server to be marked available (default is 1 attempt). If set as 2, then the server must pass two consecutive checks to be marked as healthy again instead of the default one.

    Accepted values: Integer 

    Default: 1  

#### Health Check Type:
1. **TCP**: 
Health check attempts to open a TCP connection to the server on the specified port (which are specified in the configuration file).
2.  **SSL HELLO**:
Health check sends SSL handshake with the server, if failed to do SSL handshake then we make that server as unhealthy.
3.  **HTTP**: 
Health check sends HTTP request, if unable to receive response, then we make that server unhealthy.
4.  **HTTPS**: 
Health check sends HTTPS request, if unable to receive response, then we make that server as unhealthy

#### Match Content
This option is only visible when **Health Check Type** is set to HTTP/HTTPs. This option allows users to specify the content to match in the response.

    Accepted values: TCP / SSL HELLO / HTTP / HTTPS

    Default: TCP

#### Check URI
This option is only visible when **Health Check Type** is set to HTTP/HTTPs. This option allows user to specify the URI for the health check.

    Accepted values: URI for health check

    Default: GET /

####  Match Status
This option is only visible when **Health Check Type** is set to HTTP/HTTPs. This option allows user to specify the HTTP status code that need to be checked during the health check.

    Accepted values: Integer

    Default: 200

####  Match Content
This option is only visible when **Health Check Type** is set to HTTP/HTTPs. This option allows user to specify the HTTP status code that need to be checked during the health check.

    Accepted values: String

    Default: Blank

