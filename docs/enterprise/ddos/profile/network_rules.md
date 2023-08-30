---
sidebar_position: 7
---

# Network Rules

---

Network Rules are user-configured rules performed on network interfaces like IP, Port, Domain, etc in order to take action based on the conditions set in the rule.

### How to Use

1. Go to **Apps > DDoS > Profile > Network Rules**

2. Add network rules with the specific configuration required.

3. Click on **Save Changes**

![network_rukes](/img/ddos/v7/docs/22.png)

### Rule Information

| Settings    | Accepted Values  | Default |
|-------------|------------------|---------|
| Name        | String           | Blank   |
| Description | String           | Blank   |
| Priority    | Integer          | 0       |
| Direction   | Drop Down        | Any     |
| Action      | Drop down        | Count   |

### Description

##### **Name**

Specify the name of the rule

##### **Rule Description**

Specify the description for the rule

##### **Priority**

User can specify the priority of the rule. In case of multiple rules, user can set the priority accordingly

##### **Direction**

Specify the direction of the rule on which rule can apply i.e. Any, Inbound, Outbound

**Any**: Rule is applicable on both Inbound as well as Outbound traffic

**Inbound**: Rule is applicable on Inbound traffic only

**Outbound**: Rule is applicable on Outbound traffic only

##### **Action**

In this field user can select the action which should be applicable on the rule

### Rule Conditions

| Settings    | Accepted Values  | Default |
|-------------|------------------|---------|
| Protocol    | Drop Down        | IPV4    |
| Field       | Drop Down        | Is IPV4 |
| Criteria    | Drop Down        | None    |

##### **Protocol**

In this field user can specify the Protocol on which rule will be applicable.

##### **Field**

User can specify the Field according to the selected protocol. Field will be different for the different protocol

##### **Criteria**

User can specify the Criteria according to the slected field. Criteria will be differnt for the different field