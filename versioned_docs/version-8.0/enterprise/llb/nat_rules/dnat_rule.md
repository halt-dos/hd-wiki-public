---
sidebar_position: 2
---

# DNAT Rules

Haltdos Destination NAT & Settings

---

Destination NAT changes the destination address in the IP header of a packet. It may also change the destination port in the TCP/UDP headers. These rules help you to set the destination NAT by specifying the rule name, rule message, and rule priority. Additional rule conditions can also be applied such as Type, Incoming & Outgoing Interface, External and Mapped IP Range, Service Protocol, and Port forwarding.

The typical usage of this is to redirect incoming packets with a destination of a public address/port to a private IP address/port inside your network.

![destination_nat](/img/llb/v8/llb_dnat_rule.png)

### **How to Use:**

1. Go to **Stack > LLB >  NAT Rules**.

2. select Destination NAT rule.

3. Click Add Rule button.

4. Configure your settings

5. Click Save

### **Description:**

##### **Rule Enabled**

It Specify rule is enabled or disabled. By default, this option is enabled.

    Accepted values: Enabled / Disabled

    Default: Disabled

##### **Rule Name**

This option allows the user to select desired rule name.

    Accepted values: String

    Default: Blank

##### **Rule Message**

It Specifies the custom message for the rule.

    Accepted values: String

    Default: Blank

##### **Rule Priority**

This option allows the user to set rule priority.

    Accepted values: Integer

    Default: Blank

##### **Type**

This specifies the type of IP protocol used for rules. By default, IPv4 is selected. Users can select any from IPv4, IPv6, DNS46, and DNS64.

    Accepted values: Select the IP Type

    Default: IPV4

##### **Incoming Group**

This option allows the user to specify the Incoming Group from the drop-down list. This rule will apply to the data packets which are moving inside from the Group mentioned.

    Accepted values: Select Incoming Group

    Default: Blank

##### **Outgoing Group**

This option allows the user to specify the Outgoing Group from the drop-down list. This rule will check and validate the data which is moving outside from the Group mentioned.

    Accepted values: Select Outgoing Group

    Default: Blank

##### **External IP Range**

It specifies the external IP address range. This option allows the user to set the range of IP address that belonged to an external network.

    Accepted values: IP Range

    Default: Blank

##### **Mapped IP Range**

It specifies the mapped IP address range. This option allows the user to set the range of IP address that needs to be mapped from the internal network.

    Accepted values: IP Range

    Default: Blank

![destination_nat](/img/llb/v8/llb_dnat_rule_1.png)

#### Add Protocol Port

##### **Service Protocol**

This option allows users to select the service protocol on which rule will apply.

    Accepted values: Select Service Protocol

    Default: Any

##### **Port**

This option allows users to specify the port on which rule will apply.

    Accepted values: Integer

    Default: 0

##### **Mapped Port**

Mapped port is an application of network address translation (NAT) that redirects a communication request from one address and port number combination to another.

    Accepted values: Integer

    Default: -1
