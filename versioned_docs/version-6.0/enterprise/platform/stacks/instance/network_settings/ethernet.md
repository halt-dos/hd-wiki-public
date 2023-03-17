---
sidebar_position: 1
---

# Ethernet

Listing of ethernet cards (NIC) on the hardware / VM

---

This section allows you to configure Ethernet settings on available NIC cards on the physical or virtual instance. You can configure IP addresses, gateway, routes and routing policies per interface.  

![Ethernet](/img/platform/v6/docs/ethernet1.png)

### How to Use:

1. Go to **Stack > Instances > Instance > Network > Ethernet**
2. Configure your settings
3. Click Save

![Ethernet](/img/platform/v6/docs/ethernet2.png)

| PARAMETERS           | ACCEPTED VALUES       | DEFAULT              |
|----------------------|-----------------------|----------------------|
| Managed              | Boolean               | Off                  |
| System Name          | String                | Interface Name       |
| Bus Address          | Integer               | Bus Address          |
| MAC Address          | Integer               | MAC Address          |
| Current IP address   | Integer               | Current IP address   |
| Name                 | String                | Empty                |
| Description          | String                | Empty                |
| Role                 | LAN / WAN / UNDEFINED | Empty                |
| Enable DHCP v4       | IP String             | LAN                  |
| Optional             | Boolean               | Off                  |
| Primary IPv4 Address | ENABLED / DISABLED    | DISABL               |
| Gateway 4            | IPv4 / IPv6           | Empty                |
| IPv6 address         | IPv4                  | Primary Ipv4 Address |
| Secondary Addresses  | IPv4/IPv6             | Empty                |
| Local Link           | IPv4                  | Empty                |
| Name Server          | IPv4                  | IP address           |

### Description

**System Name**

The System names are Network interface names that are dynamically provided by OS. By default, they are assigned on a first-come, first-served numerical basis. 

- lo – Loopback interface.
- eth0 – My first Ethernet network interface on Linux.
- vboxnet0, vmnet1, vmnet8 – Virtual machine interface working in bridge mode or NAT mode on Linux.

**Managed**

Users can specify if the interface is managed on OS level or not.

**System Name**

It will show the system name of the interface.

**Bus Address**

This option shows the bus address of the system.

**MAC Address**

This option shows the MAC address of the system.

**Current IP Addresses**

This option shows the Current IP Addresses of the system.

**Name**

This option allows users to change the desired name to the Interface. 

**Description**

This option helps users to write a short description for the Interface. Users can write any information like its segment, scope, subnet information, and other notes as well.

**Role**

This feature helps users to select the exact working mechanism of the interface, either it'll be working in the LAN segment or it'll be part of the Wide Area Network. Users can also select the third option undefined.

**Enable DHCP4**

**Dynamic Host Configuration Protocol (DHCP)** is an application layer protocol that is used to provide:

1. Subnet Mask,
2. Router Address, 
3. DNS Address,
4. Gateway IP.

**Primary IP Address**

This option allows users to add the primary IP address to the interface.

**Gateway 4**

A gateway is a network node that forms a passage between two networks operating with different transmission protocols. This option helps the user to add the network gateway.

**IPv6 Address**

An IPv6 address is 128 bits in length and consists of eight, 16-bit fields, with each field bounded by a colon. Each field must contain a hexadecimal number, in contrast to the dotted-decimal notation of IPv4 addresses.

**Secondary addresses**

This option allows users to add their secondary IP addresses to the interface.

**Local Link**

This option provides users to select the IP version of the interface. Either it is IPv4 or IPv6.

**Name Servers**

**Nameserver** is a server on the internet specialized in handling queries regarding the location of a domain name's various services. **Nameservers** are a fundamental part of the Domain Name System (DNS). They allow using domains instead of IP addresses. 

![Ethernet](/img/platform/v6/docs/ethernet3.png)

| PARAMETERS  | ACCEPTED VALUES                              | DEFAULT |
|-------------|----------------------------------------------|---------|
| Route From  | String                                       | Empty   |
| Route To    | String                                       | Empty   |
| Route Via   | String                                       | Empty   |
| Route Type  | UNICAST / UNREACHABLE / PROHIBIT / BLACKHOLE | UNICAST |
| Route Scope | GLOBAL / LINK / HOST                         | GLOBAL  |
| Metric      | Integer                                      | 0       |

#### Description

**Route From**

This option allows users to select the source node for the route. Users can specify the network ID, Host IP as well as subnet in this area.

**Route To**

This option allows users to select the destination node point for the route. Users can specify the network ID, Host IP as well as subnet in this area.

**Route Via**

This option allows users to set the specific hop of their desire. 

**Route Type **

This option allows users to set the type of route for this rule.

**Route Scope**

This option allows us to set the credential.

**Metric**

Users can specify the metric value for the route defined in the rule.

![Ethernet](/img/platform/v6/docs/ethernet4.png)

**Route Policy**

| PARAMETERS      | ACCEPTED VALUES | DEFAULT |
|-----------------|-----------------|---------|
| Policy From     | String          | Empty   |
| Policy To       | String          | Empty   |
| Policy Table    | Integer         | 1       |
| Policy Priority | Integer         | 0       |
| Policy Mark     | Integer         | 1       |
| Policy Service  | String          | Empty   |

#### Description

**Policy From**

Users can specify the source IP location for which policy is being implemented.

**Policy To**

Users can specify the destination IP location for which policy is being implemented.

**Policy Table**

Users can specify the policy table for the policy rule.

**Policy Priority**

If the user has mentioned more than one policy rule under an interface, one can define the priority value for each rule. The less priority valued rule will be called first.

**Policy Mark**

Users can specify the policy mark for the policy rule.

**Policy Service**

Users can specify the policy service for the policy rule.

:::info
Users need to add 2 default routes and 2 default policies while configuring a static WAN Interface.
:::