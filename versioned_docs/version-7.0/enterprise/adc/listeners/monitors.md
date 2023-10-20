---
sidebar_position: 5
---

# Monitors

---
### Overview
Monitoring provides a comprehensive overview of the status and performance of the Server Group  and/or individual real servers inside the server group. If a monitor is attached to a server group, then it will get applied to all the servers inside that group automatically. If a monitor is attached to a particular server then it will override the configuration of the server-group monitor. Health Checks computes an overall health state for each upstream server in the listener. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy.

### How to Use:

1. Go to **Stack** > [**SLB**](/enterprise/adc)  > [**Listeners**](./listeners.md) > **Monitors**.
2. Select the **Add Monitor**.
3. Configure your settings. 
4. Click **Save Changes**.

![monitor1](/img/adc/v7/docs/monitor.png)

| SETTINGS              | ACCEPTED VALUES | DEFAULT |
|-----------------------|-----------------|---------|
| Monitor Name          | String          | Blank   |
| Health Check Interval | Integer         | 10      |
| Fail Threshold        | Integer         | 1       |
| Pass Threshold        | Integer         | 1       |
| Monitor Timeout       | Integer         | 1       |
| Health Check Type     | Drop-Down       | TCP     |
| Check Port     | Drop-Down       | 0     |
| HTTP Method     | Drop-Down       | GET     |
| Check URI     | String       | /     |
| Match Status     | Drop-Down       | 200     |
| Match Content     | String       | Blank     |
| Health Script     | Drop-Down       | Blank     |

### Description

##### **Monitor Name**

This option allows users to specify a user-friendly name to monitor.

##### **Health Check Interval**

This option allows users to specify the health check interval in seconds.

##### **Fail Threshold**

This option allows users to specify the fail threshold.

##### **Pass Threshold**

This option allows users to specify the pass threshold.

##### **Monitor Timeout**

This option allows users to specify the timeout interval in seconds.

##### **Health Check Type**

This option allows users to specify the health check type for the load balancer.

##### **Check Port**

This option allows users to specify port on which the health check will be carried out. 

##### **HTTP Method**
This option allows users to specify the health check type HTTP monitoring. This option will only be visible when HTTP is selected in Health Check Type.

##### **Check URI**

This option allows users to specify the check URI. This option will only be visible when HTTP is selected in Health Check Type.

##### **Match Status**

This option allows users to specify the response HTTP status to verify. This option will only be visible when HTTP is selected in Health Check Type.

##### **Match Content**

This option allows users to specify the content to match in the response. This option will only be visible when HTTP, HTTPS, & POP is selected in Health Check Type.

##### **Health Script**

This option allows users to select your custom health check script. This option will only be visible when HTTP is selected in Health Check Type.

