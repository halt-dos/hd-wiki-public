---
sidebar_position: 6
---

# Traffic Shaper / QoS

Traffic Shaper Rules & Setings

---

Traffic shaping (also known as packet shaping) is a bandwidth management technique that delays the flow of certain types of network packets in order to ensure network performance for higher priority applications. Traffic shaping essentially limits the amount of bandwidth that can be consumed by certain types of applications. It is primarily used to ensure a high quality of service for business-related network traffic.

![traffic_shaper](/img/llb/v6/docs/llb20.png)

### **How to Use:**

1. Go to **Stack > LLB > Rules**.

2. Select Traffic Shaper Rule

3. Click Add Rule button.

4. Configure your settings.

5. Click Save.

![traffic_shaper_rule_condition](/img/llb/v6/docs/llb21.png)

| Settings           | Text                           | Text             |
|--------------------|--------------------------------|------------------|
| Rule Name          | Specify Rule Name              | None (Mandatory) |
| Rule Message       | User Friendly message for Rule | None (Mandatory) |
| Rule Priority      | Integer                        | 0                |
| Enabled            | Boolean                        | True             |
| Outgoing Interface | Drop Down                      | None (Mandatory) |
| Source IP          | IP address with CIDR           | None             |
| Destination IP     | IP address with CIDR           | None             |
| Source Ports       | Integer                        | None             |
| Destination Ports  | Integer                        | None             |
| Protocol           | Select the protocol            | Any              |
| Traffic Rate       | Integer                        | 1                |
| Traffic Burst      | Integer                        | 5                |

### **Description**

##### **Rule Name**

This option allows the user to select desired rule name.

##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritize.

##### **Enabled**

It Specify rule is enabled or disabled. By default, this option is enabled.

##### **Outgoing Interface**

This option allows the user to select the outgoing interface from the list of interfaces. If any data packet matches the policy mentioned above will be routed to the Outgoing Interface. Users can select the Interface from the drop-down menu.

##### **Source IP**

This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface

##### **Destination IP**

This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected  and  packets that match with a mentioned destination IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface

##### **Source Ports**

This option allows the user to set Source Port Range for the rule. The data packets are inspected and data packets that match with mentioned Source Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface. 

##### **Destination Port**

This option allows the user to set Destination Port Range for the rule. The data packets are inspected and data packets that match with mentioned Destination Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface. 

##### **Protocol**

This option allows the user to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned Protocol will only be routed to an outgoing interface which is selected under the Outgoing Interface. By default ANY protocol is set i. e. all protocols are selected for the rule.

##### **Traffic Rule**

It specifies the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate.

##### **Traffic Burst**

It specifies the traffic burst rate for the page. The burst rate specified will validate the total number of requests received. 

Note: Always traffic burst must be greater than or equal to traffic rate.

