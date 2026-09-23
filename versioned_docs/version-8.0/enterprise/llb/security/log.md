---
sidebar_position: 5
---


# Log Rules

log rule to capture packet information

---

This rule helps users to capture packet. Once we configure the log rule, all those packets which satisfy the condition of the log rule, will be captured and information will be shown in the **Session Table**.


![llbsettings](/img/llb/v8/llb_log_rules.png)

### **How to Use :**

1. Go to **Apps > LLB > Security > Log Rules**.

2. Click on add new rule.

3. Configure the rule conditions and click on save changes.

### **Description:**

##### **Rule Enabled**

It specifies rule is enabled or disabled. By default, this option is enabled.

```
    Accepted values: Enabled / Disabled 

    Default: Enabled
```


##### **Rule Name**

This option allows users to select desired rule name.

```
    Accepted values: String 

    Default: Blank
```


##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

```
    Accepted values: String

    Default: Blank
```


##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized.

```
    Accepted values: 

    Default: Blank
```


##### **Incoming Group**

It specifies the incoming group for the log rule. All the traffic that is coming in from the Incoming group will be captured if no other conditions are configured.

```
    Accepted values: Interface

    Default: Blank
```
    
##### **Outgoing Group**

It specifies the outgoing group for the log rule. All the traffic that is going out from the outgoing group will be captured if no other conditions are configured.

```
    Accepted values: Interface

    Default: Blank 
```


##### **Source IP Range**

It specifies the source IP range for the log rules. All the traffic that has configured source IP will be captured and shown in session table.

```
    Accepted values: IP

    Default: Blank 
```


##### **Destination IP Range**

It specifies the destination IP range for the log rules. All the traffic that has configured destination IP will be captured and shown in session table.

```
    Accepted values: IP

    Default: Blank 
```


##### **Service Protocol**

It specifies the service protocol that need to be logged.

```
    Accepted values: String

    Default: Blank 
```
    
##### **Source Port Range**

It specifies source port range for the logs capture.

```
    Accepted values: Port

    Default: Blank 
```
    
##### ** Destination Port Range**

It specifies destination port range for the logs capture.

```
    Accepted values: Port

    Default: Blank 
```

 
