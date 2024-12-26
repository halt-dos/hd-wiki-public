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

  

##### **Alarm Name**

A unique user friendly name

```
    Accepted values: String

    Default: Blank 
```


##### **Resource Filter**
User can select resource here

```
    Accepted values: List of configured resources	

    Default: Blank 
```


##### **Alarm On**

Metric to evaluate the alarm.

```
    Accepted values: Metric Key

    Default: Blank 
```


##### **Alarm Type**

Select the type of Alarm

```
    Accepted values: THRESHOLD / ANOMALY

    Default: THRESHOLD 
```


##### **Threshold**

Specify your conditional threshold

```
    Accepted values: Greater Than / Less Than / Equals to

    Default: Greater Than 
```


##### **Consecutive Threshold**

Specify the number of times the threshold is breached before raising alert

```
    Accepted values: Integer

    Default: Blank 
```


##### **Time Zone**

User can select the timezone here.

```
    Accepted values: Select Timezone

    Default: Enable 
```



Haltdos uses anomaly based alarms to generate alerts using machine learning and uses simple limit based validations for Threshold based alarms. Depending upon use case, the desired alarms can be created for managing network, zones and individual applications.
