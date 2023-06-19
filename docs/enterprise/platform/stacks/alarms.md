---
sidebar_position: 3
---

# Alarms

---

## Overview

Alarms in Haltdos Platform is a mechanism for raising alerts to the configured users based on set threshold breaches. An alarm when trigerred will generate an event that is notified by SMTP or API or both depending upon set configuration.

![alarms](/img/platform/v7/docs/alarm_newui_02.png)

### **How to Use:**

1. Go to **Stack** > **Alarms**
2. Configure your settings
3. Click **Save Changes**  
  

| PARAMETERS            | DESCRIPTION                                                                | ACCEPTED VALUES                      | DEFAULT      |
|-----------------------|----------------------------------------------------------------------------|--------------------------------------|--------------|
| Alarm Name            | A unique user friendly name                                                | STRING                               | EMPTY        |
| Resource Filter       | Select the resource : Listener, Network, App as desired                    | List of configured resources         | EMPTY        |
| Alarm On              | Metric to evaluate the alarm                                               | Metric Key                           | EMPTY        |
| Alarm Type            | Select the type of Alarm                                                   | THRESHOLD / ANOMALY                  | THRESHOLD    |
| Threshold             | Specify your conditional threshold                                         | Greater Than, Less Than or Equals to | Greater Than |
| Consecutive Threshold | Specify the number of times the threshold is breached before raising alert | INTEGER                              | EMPTY        |
| Resource Filter       | Select the resource : Listener, Network, App as desired                    | List of configured resources         | EMPTY        |
| Enabled Reporting     | User want to report the alarm when it is triggered on configured mail      | Boolean      | Disable |

  
  
Haltdos uses anomaly based alarms to generate alerts using machine learning and uses simple limit based validations for Threshold based alarms. Depending upon use case, the desired alarms can be created for managing network, zones and individual applications.
