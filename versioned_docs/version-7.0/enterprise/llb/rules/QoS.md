---
sidebar_position: 6
---

# Traffic Shaper / QoS

Traffic Shaper Rules & Setings

---

Traffic shaping (also known as packet shaping) is a bandwidth management technique that delays the flow of certain types of network packets in order to ensure network performance for higher priority applications. Traffic shaping essentially limits the amount of bandwidth that can be consumed by certain types of applications. It is primarily used to ensure a high quality of service for business-related network traffic.

![traffic_shaper](/img/llb/v7/docs/qos.png)

### **How to Use:**

1. Go to **Apps > LLB > Rules > Traffic Shaper**.

2. Click Add Rule button.

3. Configure your settings.

4. Click **Save Changes**.


### Description

##### **Rule Name**

This option allows the user to select desired rule name.

    Accepted values: String

    Default: Blank 

##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

    Accepted values: String

    Default: Blank 

##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritize.

    Accepted values: Integer

    Default: Blank 

##### **Enabled**

It Specify rule is enabled or disabled. By default, this option is enabled.

    Accepted values: Enable / Disable

    Default: Disable 

##### **Outgoing Interface**

This option allows the user to select the outgoing interface from the list of interfaces. If any data packet matches the policy mentioned above will be routed to the Outgoing Interface. Users can select the Interface from the drop-down menu.

    Accepted values: Interface

    Default: Blank 

##### **Source IP**

This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface

    Accepted values: IP

    Default: Blank 

##### **Destination IP**

This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected  and  packets that match with a mentioned destination IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface

    Accepted values: IP

    Default: Blank 

##### **Source Ports**

This option allows the user to set Source Port Range for the rule. The data packets are inspected and data packets that match with mentioned Source Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface. 

    Accepted values: Integer

    Default: Blank 

##### **Destination Port**

This option allows the user to set Destination Port Range for the rule. The data packets are inspected and data packets that match with mentioned Destination Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface. 

    Accepted values: Integer

    Default: Blank 

##### **Protocol**

This option allows the user to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned Protocol will only be routed to an outgoing interface which is selected under the Outgoing Interface. By default ANY protocol is set i. e. all protocols are selected for the rule.

    Accepted values: ANY / TCP / UDP / SCTP / CUSTOM

    Default: ANY 

##### **Traffic Rule**

It specifies the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate.

    Accepted values: Integer

    Default: Blank 

##### **Traffic Burst**

It specifies the traffic burst rate for the page. The burst rate specified will validate the total number of requests received. 

    Accepted values: Integer

    Default: 5 

:::note Note
Always traffic burst must be greater than or equal to traffic rate.
:::
