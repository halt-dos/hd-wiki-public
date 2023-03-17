---
sidebar_position: 5
---

# Network Rules

---

Network Rules are user-configured rules performed on network interfaces like IP, Port, Domain, etc in order to take action based on the conditions set in the rule.

### **How to Use:**

1. **Go to Stack > Resource > DDoS > Profile > Network Rules**

2. Add network rules with the specific configuration required.

3. Click on Save Condition

4. Save the file.

![network_rukes](\img\ddos\v6\docs\ddos19.png)

| Settings    | Accepted Values  | Default |
|-------------|------------------|---------|
| Name        | String           | Blank   |
| Description | String           | Blank   |
| Priority    | Integer          | 0       |
| Direction   | Drop Down        | Any     |
| Action      | Drop down        | Count   |

### **Description:**

##### **Name**

Specify the name of the rule

##### **Description**

Specify the description for the rule

##### **Priority**

Specify the priority of the rule
##### **Direction**

Specify the direction of the rule i.e. Any, Inbound, Outbound

##### **Action**

Select the action of the rule