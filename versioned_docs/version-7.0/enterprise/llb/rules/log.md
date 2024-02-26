---
sidebar_position: 3
---


# Log Rules

log rule to capture packet information

---

This rule helps users to capture packet. Once we configure the log rule, all those packets which satisfy the condition of the log rule, will be captured and information will be shown in the **Session Table**.


![llbsettings](/img/llb/v7/docs/log_rule1.png)

### **How to Use :**

1. Go to **Apps > LLB > Rules > Log Rules**.

2. Click on add new rule.

3. Configure the rule conditions and click on save changes.

| Parameter          | Accepted Value | Default Values |
|--------------------|----------------|----------------|
| Rule Name              | Specify Rule Name              | Blank (Mandatory)  |
| Rule Message           | User Friendly Message For Rule | Blank (Mandatory)  |
| Rule Priority          | Integer                        | 0                  |
| Enabled                | Boolean                        | True               |
| Incoming Interface | Drop-Down      | Blank          |
| Outgoing Interface | Drop-Down      | Blank          |
| Source IP range    | IP address     | Blank          |
| Service Protocol   | Drop-Down      | ANY            |
| Port Range         | Integer        | Blank          |

### **Description:**

##### **Rule Name**

This option allows users to select desired rule name.

##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized.

##### **Enabled**

It specifies rule is enabled or disabled. By default, this option is enabled.

##### **Incoming Interface**

It specifies the incoming interface for the log rule. All the traffic that is coming in from the Incoming interface will be captured if no other conditions are configured.

##### **Outgoing Interface**
It specifies the outgoing interface for the log rule. All the traffic that is going out from the Incoming interface will be captured if no other conditions are configured.

##### **Source IP Range**
It specifies the source IP range for the log rules. All the traffic that has configured source IP will be captured and shown in session table.

##### **Service Protocol**
It specifies the service protocol that need to be logged.

##### **Port Range**
It specifies port range for the logs capture. 