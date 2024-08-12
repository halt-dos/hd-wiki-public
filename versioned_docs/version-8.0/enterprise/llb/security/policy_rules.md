---
sidebar_position: 6
---

# Policy Rules

Policy Based Routing & Settings

---

Policy-based routing (PBR) is a technique that forwards and routes data packets based on policies or filters. User can selectively apply policies based on specific parameters such as source and destination IP address, source or destination port, protocols or other criteria and then route the packets on user-defined routes.

Policy-based routing  provides flexible, granular traffic-handling capabilities for forwarding packets. In this way, PBR enables users to achieve optimal bandwidth utilization for business-critical applications.

![policy_routing](/img/llb/v8/llb_policy_rule.png)

### **How to Use:**

1. Go to **Stack > LLB > Security > Policy Rules**.

2. Click Add Rule button.

3 Configure your settings.

4. Click Save.

### **Description:**

##### **Rule Enabled**

It specifies rule is enabled or disabled. By default, this option is enabled.

    Accepted values: Enabled / Disabled 

    Default: Enabled

##### **Rule Name**

This option allows users to select desired rule name.

    Accepted values: String 

    Default: Blank
  
##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

    Accepted values: String

    Default: Blank
  
##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized.

    Accepted values: Integer 

    Default: 0
  
##### **Incoming Group**

This option allows the user to set Incoming Group. Every data packet which enters from Incoming Group will be inspected for the policies mentioned below.

    Accepted values: Interface

    Default: Blank

##### **Source IP**

This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with mentioned source IP address will only be routed to the outgoing interface which is selected under the Outgoing Interface

    Accepted values: IP

    Default: Blank
 
##### **Destination IP Range**

This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected  and  packets that match with a mentioned destination IP address will only be routed to outgoing interface which is selected under the Outgoing Interface

    Accepted values: IP

    Default: Blank
 
##### **Connection Policy**

This option allows the user to select the connection policy from the drop down.

    Accepted values: Select Connection Policy

    Default: Blank 
