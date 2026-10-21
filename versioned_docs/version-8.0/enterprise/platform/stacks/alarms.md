---
sidebar_position: 3
---

# Alarms

---

## Overview

Alarms in Haltdos Platform is a mechanism for raising alerts to the configured users based on set threshold breaches. An alarm when trigerred will generate an event that is notified by SMTP or API or both depending upon set configuration.

![alarms](/img/platform/v8/docs/alarm_newui.png)

### **How to Use:**

1. Go to **Stack** > **Alarms**
2. Configure your settings
3. Click **Save Changes**  

### Description

##### **Enabled**

User can Enable or Disable the Alarm

```
    Accepted values: Enable / Disable

    Default: Enable 
```


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


##### **Alarm Cool Interval**

User can select the timezone here.

```
    Accepted values: String

    Default: 30
```


    Metrics: Minute

##### **Enable Reporting**

User can select the Enable Reporting 

```
    Accepted values: Enable / Disable

    Default: Disable 
```


:::note  Note
Haltdos uses anomaly based alarms to generate alerts using machine learning and uses simple limit based validations for Threshold based alarms. Depending upon use case, the desired alarms can be created for managing network, zones and individual applications.
:::
