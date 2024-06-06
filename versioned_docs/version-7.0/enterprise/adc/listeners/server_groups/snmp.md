---
sidebar_position: 3
---

# SNMP

---

### How to Use:

1. Go to Stack > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) > [** Server Groups**](./server_groups.md).
2. Select the group name.
3. Select the **Add Server option**.
3. Configure your settings. 
4. Click **Save Changes**.

![snmp](/img/adc/v7/docs/snmp.png)

### Description:

##### **Enable Monitoring**

This option allows users to specify enabling SNMP monitoring.

    Accepted values: Enable / Disable

    Default: Disable 

##### **SNMP port**

This option allows users to specify the SNMP port.

    Accepted values: Integer

    Default: 161 

##### **SNMP Version**

This option allows users to specify the SNMP version for monitoring.

    Accepted values: String

    Default: Blank 

##### **SNMP Community**

This option allows users to specify SNMP Community.

    Accepted values: String

    Default: Blank 

##### **SNMP Security level **

This option allows users to specify the SNMP security level.

    Accepted values: No Auth or Privacy

    Default: No Auth or Privacy 

##### **SNMP Check Type**

This option allows users to specify SNMP checks.

    Accepted values: CPU Measurement

    Default: Blank 

##### **SNMP Timeout**

This option allows users to specify the SNMP security level.

    Accepted values: Integer

    Default: 60000 

    Metrics: Milliseconds

