---
sidebar_position: 4
---

# Fixed Routing

Fixed Routing Rules & settings

---

Fixed Routing is a static mechanism that is used to transfer data packets from the source to the destination. Users can set fixed routing rules by specifying rule name, priority, destination IPs, Outgoing Interface, etc.

![fixed_routing](/img/llb/v7/docs/fixedroute.png)

### **How to Use:**

1. Go to **Stack > LLB > Rules**.

2. Select Fixed Route rule.

3. Click Add Rule button.

4. Configure your settings.

5. Click Save.


| Setting            | Accepted Values                | Default           |
|--------------------|--------------------------------|-------------------|
| Rule Name          | Specify Rule Name              | Blank (Mandatory) |
| Rule Message       | User Friendly Message for Rule | Blank (Mandatory) |
| Rule Priority      | Integer                        | 0                 |
| Enabled            | Boolean                        | True              |
| Destination IP     | IP address with CIDR           | Blank (Mandatory) |
| Outgoing Interface | IP address with CIDR           | Blank (Mandatory) |
| Gateway IP         | IP address                     | Blank (Mandatory) |
| Enabled NAT        | Boolean                        | True              |

### **Description:**

##### **Rule Name**

This option allows the user to select desired rule name.

##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

##### **Rule Priority**

This option allows the user to set rule priority. The lower the priority value 

##### **Enabled**

It specifies rule is enabled or disabled the rule. By default, this option is enabled.

##### **Destination IP**

This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected with the IP address and data packets with a mentioned destination IP address will only route to the outgoing interface which is mentioned by the user in the next settings.

##### **Outgoing Interface**

This option allows the user to select the outgoing interface from which the packets will move.

##### **Gateway IP**

A gateway is a network node that serves as an access point to another network. This option allows user to set their gateway IP address. IP can be set in a format like 192.168.0.1

##### **Enabled NAT**

This option allows users to enable or disable NAT. NAT is a method of mapping an IP address space into another by modifying network address information in the IP header of packets. If there is any NAT rule already configured by the user, the source or destination IPs address will be mapped accordingly. If there is no such NAT rule added by the user, then the user can add a new rule for Network Address Translation.

