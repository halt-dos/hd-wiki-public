---
sidebar_position: 1
---

# SNAT Rules

Source NAT Rule & Settings

---

Source NAT is the translation of the source IP address of a packet. It changes the source IP address of the packets which are passing through the Link Load Balancing Device. This rule helps you to set the SNAT rule by specifying the rule name, Incoming and Outgoing Interface, Source and Destination IP, Protocol, ARP Reply, Preserve Secure Port, Translation, Translate IP Range, and Port Mapping.

In static SNAT all internal IP addresses are always mapped to the same public IP address.

![source_net](/img/llb/v8/llb_snat_rule.png)

### **How to Use:**

1. Go to **Stack > LLB > NAT Rules**.

2. Select Source NAT rule.

3. Click Add Rule button.

4. Configure your settings.

5. Click Save.

### Description

##### **Enabled**

It specifies rule is enabled or disabled. By default, this option is enabled.

    Accepted values: Enabled / Disabled

    Default: Enabled

##### **Rule Name**

This option allows the user to select desired rule name.

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

This option allows the user to set Incoming Group. Every data packet entered from Incoming Group will be inspected and mapped to translation IPs.

    Accepted values: Select Incoming Group

    Default: Blank 

##### **Outgoing Group**

This option allows the user to select the Outgoing Group from the list of group. data packets that are mapped will move outside from Outgoing group.

    Accepted values: Select Outgoing Group

    Default: Blank 

##### **Source IP**

This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will be translated according to the Translate IP Range.

    Accepted values: IP

    Default: Blank 

##### **Destination IP**

This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned destination IP address will be translated according to the Translate IP Range.

    Accepted values: IP

    Default: Blank 

##### **Protocol**

This option allows the user to set the protocol for the rule. The data packets are inspected and data packets that match with the mentioned protocol will be translated according to the Translate IP Range.

    Accepted values: ANY / TCP / UDP / SCTP / CUSTOM

    Default: Blank 

##### **Preserve Source Port**

Preserve Source Port keeps the same source port for services that expect traffic to come from a specific source port. This option allows the user to select the preserved source port. It maps the source port for outgoing traffic through which it came from.

    Accepted values: Enabled / Disabled

    Default: Disabled 

##### **Translation**

It allows users to select the type of translation. By default, Overload is selected.


    Accepted values: Enabled / Disabled

    Default: OUTGOING INTRFACE IP 

:::note 
Users can specify the translation IP or IP address range. If the user selects overload as translation type, another option will be shown there for translation IP or IP address range. Translation IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25.
:::
In Haltdos LLB, we have three types of NAT translation which are mentioned below;

 - **Overload:** SNAT maps the private IP addresses to the first available public address from a pool of addresses. An IP pool defines a single IP address or a range of IP addresses to be used as the source address for the duration of the session. If 

The Users need to define an external IP range that contains one or more IP addresses. For example, assume, we have defined an overload type IP pool with two external IP addresses (172.16.200.1â€”172.16.200.2), since there are 60,416 available port numbers per IP, this IP pool can handle 60,416*2 internal IP addresses.

![overload_translation](/img/llb/v7/docs/llb13.png)

 - **Outgoing Interface IP:** If this option is selected as translation mode then all internal traffic will be moved to the public domain by changing its source IP address to the WAN outgoing port IP.

 - **Fixed Port Range:** If this is selected as a translation method, all internal traffic will not be affected. Users can manually define the Source IP range and translation IP range. it will automatically bind the source IP with the translation IP.

##### **Port Mapping**

It allows users to enable port mapping