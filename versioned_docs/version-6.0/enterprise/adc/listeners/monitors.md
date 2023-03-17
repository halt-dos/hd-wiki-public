---
sidebar_position: 5
---

# Monitors

---

### How to Use:

1. Go to **Stack** > [**SLB**](/adc/docs)  > [**Listeners**](../listeners/) > **Monitors**.

2. Select the Add Monitor.

3. Configure your settings. 

4. Click Save Changes.

![monitor1](/img/adc/v6/docs/monitor1.png)

| SETTINGS              | ACCEPTED VALUES | DEFAULT |
|-----------------------|-----------------|---------|
| Monitor Name          | String          | Blank   |
| Health Check Interval | Integer         | 10      |
| Fail Threshold        | Integer         | 1       |
| Pass Threshold        | Integer         | 1       |
| Monitor Timeout       | Integer         | 1       |
| Health Check Type     | Drop-Down       | TCP     |

#### Description:

#### Monitor Name

This option allows users to specify a user-friendly name to monitor.

#### Health Check Interval

This option allows users to specify the health check interval in seconds.

#### Fail Threshold

This option allows users to specify the fail threshold.

#### Pass Threshold

This option allows users to specify the pass threshold.

#### Monitor Timeout

This option allows users to specify the timeout interval in seconds.

#### Health Check Type

This option allows users to specify the health check type for the load balancer.
