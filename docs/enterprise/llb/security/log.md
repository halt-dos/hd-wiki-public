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

| Parameter              | Accepted Value                 | Default Values     |
|------------------------|--------------------------------|--------------------|
| Rule Enabled           | Boolean                        | True               |
| Rule Name              | Specify Rule Name              | Blank (Mandatory)  |
| Rule Message           | User Friendly Message For Rule | Blank (Mandatory)  |
| Rule Priority          | Integer                        | 0                  |
| Incoming Group         | Drop-Down                      | Blank              |
| Outgoing Group         | Drop-Down                      | Blank              |
| Source IP range        | IP address                     | Blank              |
| Destination IP range   | IP address                     | Blank              |
| Service Protocol       | Drop-Down                      | ANY                |
| Source Port Range      | Integer                        | Blank              |
| Destination Range      | Integer                        | Blank              |

### **Description:**

##### **Rule Enabled**

It specifies rule is enabled or disabled. By default, this option is enabled.

##### **Rule Name**

This option allows users to select desired rule name.

##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized.

##### **Incoming Group**

It specifies the incoming group for the log rule. All the traffic that is coming in from the Incoming group will be captured if no other conditions are configured.

##### **Outgoing Group**

It specifies the outgoing group for the log rule. All the traffic that is going out from the outgoing group will be captured if no other conditions are configured.

##### **Source IP Range**

It specifies the source IP range for the log rules. All the traffic that has configured source IP will be captured and shown in session table.

##### **Destination IP Range**

It specifies the destination IP range for the log rules. All the traffic that has configured destination IP will be captured and shown in session table.

##### **Service Protocol**

It specifies the service protocol that need to be logged.

##### **Source Port Range**

It specifies source port range for the logs capture.

##### ** Destination Port Range**

It specifies destination port range for the logs capture.