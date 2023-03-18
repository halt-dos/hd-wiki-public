---
sidebar_position: 2
---

# Source NAT

Source NAT Rule & Settings

---

Source NAT is the translation of the source IP address of a packet. It changes the source IP address of the packets which are passing through the Link Load Balancing Device. This rule helps you to set the SNAT rule by specifying the rule name, Incoming and Outgoing Interface, Source and Destination IP, Protocol, ARP Reply, Preserve Secure Port, Translation, Translate IP Range, and Port Mapping.

In static SNAT all internal IP addresses are always mapped to the same public IP address.

![source_net](/img/llb/v6/docs/llb11.png)

### **How to Use:**

1. Go to **Stack > LLB Rules**.

2. Select Source NAT rule.

3. Click Add Rule button.

4. Configure your settings.

5. Click Save.

| Settings             | Accepted Values                | Default              |
|----------------------|--------------------------------|----------------------|
| Rule Name            | Specify Rule Name              | Blank (Mandatory)    |
| Rule Message         | User Friendly Message for Rule | Blank (Mandatory)    |
| Rule Priority        | Integer                        | 0                    |
| Enabled              | Boolen                         | True                 |
| Incoming Interface   | Incoming Interface Name        | Blank (Mandatory)    |
| Outgoing Interface   | Outgoing Interface Name        | Blank (Mandatory)    |
| Source Ip            | Source IP address with CIDR    | Blank                |
| Destination IP       | Destination IP add. with CIDR  | Blank                |
| Protocol             | Select the Protocol            | Blank                |
| ARP Reply            | Boolean                        | False                |
| Preserve Source Port | Boolean                        | False                |
| Translation          | Drop Down                      | Overload (Mandatory) |
| Translate IP Range   | Intger                         | Integer (Mandatory)  |
| Port Mapping         | Boolean                        | False                |

![snat_rule_condition](/img/llb/v6/docs/llb12.png)

### **Description:**

##### **Rule Name**

This option allows the user to select desired rule name.

##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized.

##### **Enabled**

It specifies rule is enabled or disabled. By default, this option is enabled.

##### **Incoming Interface**

This option allows the user to set Incoming Interface. Every data packet entered from Incoming Interface will be inspected and mapped to translation IPs.

##### **Outgoing Interface**

This option allows the user to select the Outgoing Interface from the list of interfaces. data packets that are mapped will move outside from Outgoing Interface.

##### **Source IP**

This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will be translated according to the Translate IP Range.

##### **Destination IP**

This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned destination IP address will be translated according to the Translate IP Range.

##### **Protocol**

This option allows the user to set the protocol for the rule. The data packets are inspected and data packets that match with the mentioned protocol will be translated according to the Translate IP Range.

##### **ARP Reply**

This option allows the user to get an ARP reply from the next hop.

##### **Preserve Source Port**

Preserve Source Port keeps the same source port for services that expect traffic to come from a specific source port. This option allows the user to select the preserved source port. It maps the source port for outgoing traffic through which it came from.

##### **Translation**

It allows users to select the type of translation. By default, Overload is selected.

In Haltdos LLB, we have three types of NAT translation which are mentioned below;

a). **Overload:** SNAT maps the private IP addresses to the first available public address from a pool of addresses. An IP pool defines a single IP address or a range of IP addresses to be used as the source address for the duration of the session. If 

The Users need to define an external IP range that contains one or more IP addresses. For example, assume, we have defined an overload type IP pool with two external IP addresses (172.16.200.1â€”172.16.200.2), since there are 60,416 available port numbers per IP, this IP pool can handle 60,416*2 internal IP addresses.

![overload_translation](/img/llb/v6/docs/llb13.png)

b). **Outgoing Interface IP:** If this option is selected as translation mode then all internal traffic will be moved to the public domain by changing its source IP address to the WAN outgoing port IP.

c). **Fixed Port Range:** If this is selected as a translation method, all internal traffic will not be affected. Users can manually define the Source IP range and translation IP range. it will automatically bind the source IP with the translation IP.

##### **Translate IP Range**

Users can specify the translation IP or IP address range. If the user selects overload as translation type, another option will be shown there for translation IP or IP address range. Translation IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25.

##### **Port Mapping**

It allows users to enable port mapping