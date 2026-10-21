---
sidebar_position: 1
---

# Load Balancing

Load Balancing Rule & Settings

---

A load balancer rule is used to define how incoming traffic is distributed to all outgoing interfaces.  These rules settings help you to enable/disable the load balancing rule by specifying the rule name, message, priority, Along with various rule conditions such as Outgoing Interface, Source IP, Destination IP, Protocol, and Criteria.

![load_balancing](/img/llb/v7/docs/loadbalancing.png)

### **How to Use:**

1. Go to **Stack > LLB > Rules**.

2. Select Load Balancing Rule.

3. Click **Add Rule** button.

4. Comfigure your settings.

5. Click **Save**.

| SETTING            | ACCEPTED VALUES                       | DEFAULT           |
|--------------------|---------------------------------------|-------------------|
| Rule Name          | Specify Rule Name                     | Blank (Mandatory) |
| Rule Message       | User Friendly Message/Purpose of rule | Blank (Mandatory) |
| Rule Priority      | Integr                                | 0                 |
| Enabled            | Boolen                                | True              |
| Outgoing Interface | Outgoing Interface Name               | Blank (Mandatory) |
| Source IP          | Source IP address with CIDR           | Blank             |
| Destination IP     | Destination IP add. with CIDR         | Blank             |
| Protocol           | Select the protocol                   | Any               |
| Criteria           | Drop Down                             | Blank             |

![load_balancing_rule_condition](/img/llb/v6/docs/llb10.png)

### **Description**:

##### **Rule Name**

This option allows the user to select desired rule name.

##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized.

##### **Enable**

It specifies rule is enabled or disabled the rule. By default, this option is enabled.

##### **Outging Interface**

This option allows the user to select the outgoing interfaces. If any data packet matches the policy mentioned in the rule, will be routed to the **Outgoing Interfaces** for load balancing. 

##### **Source IP**

This option helps users to select the source IP or network for the IP packet on which they want to set the load balancing rule. This option will filter out all packets with mentioned IP range and take action. Source IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25.

##### **Destination IP**

This option allows users to select the destination IP or network for the IP packet on which they want to set the load balancing rule. This option will filter out all packets with mentioned IP range and take action. Destination IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25.

##### **Protocol**

This option allows users to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned **Protocol** will be routed to an outgoing interface that is selected under **Outgoing Interface**. By default, **ANY** protocol is set i. e. all protocols are selected for the rule.

##### **Criteria**

It specifies the other network-based conditions for load balancing. Users can select from many options to figure out any network fluctuation in connectivity. Users can set their packet drop, jitter, latency, etc.