---
sidebar_position: 3
---

# SNMP

---

![snmp](/img/adc/v8/docs/snmp.png)

### How to Use:

1. Go to Stack > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) > [** Server Groups**](./server_groups.md).
2. Select the **group name**.
3. Select the **Add Server** option.
3. Configure your settings. 
4. Click **Save Changes**.

### Description:

##### **Enable Monitoring**

This option allows users to specify enabling SNMP monitoring.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


##### **SNMP port**

This option allows users to specify the SNMP port.

```
    Accepted values: Integer

    Default: 161 
```


##### **SNMP Version**

This option allows users to specify the SNMP version for monitoring.

```
    Accepted values: SNMP v1 / SNMP v2 / SNMP v2c / SNMP v3

    Default: SNMP v1
```


##### **SNMP Community**

This option allows users to specify SNMP Community.

```
    Accepted values: String

    Default: Blank 
```


##### **SNMP Security level **

This option allows users to specify the SNMP security level.

```
    Accepted values: No Auth or Privacy

    Default: No Auth or Privacy 
```


##### **SNMP Check Type**

This option allows users to specify SNMP checks.

```
    Accepted values: CPU Measurement / RAM Measurement / CPM & RAM Measurement

    Default: CPU Measurement
```


##### **SNMP Timeout**

This option allows users to specify the SNMP security level.

```
    Accepted values: Integer

    Default: 60000 
```


    Metrics: Milliseconds

     
