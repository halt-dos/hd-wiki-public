---
sidebar_position: 1
---

# Ethernet

Listing of ethernet cards (NIC) on the hardware / VM

---

This section allows you to configure Ethernet settings on available NIC cards on the physical or virtual instance. You can configure IP addresses, gateway, routes and routing policies per interface. 

### How to Use:

1. Go to **Stack > Infrastructure  > Network > Ethernet**
2. Configure your settings
3. Click **Save CHanges**

![Ethernet](/img/platform/v8/docs/sysEthernet.png)


### Description

##### System Name

The System names are Network interface names that are dynamically provided by OS. By default, they are assigned on a first-come, first-served numerical basis. 

- lo – Loopback interface.
- eth0 – My first Ethernet network interface on Linux.
- vboxnet0, vmnet1, vmnet8 – Virtual machine interface working in bridge mode or NAT mode on Linux.

##### Managed

Users can specify if the interface is managed on OS level or not.

    Accepted values: Enable / Disable

    Default: Disable 

##### System Name

It will show the system name of the interface.

    Accepted values: String

    Default: ens160 

##### Group Name

It will show the Group Name.

    Accepted values: String

    Default: ens160 


##### Bus Address

This option shows the bus address of the system.

    Accepted values: String

    Default: ens160 

##### MAC Address

This option shows the MAC address of the system.

    Accepted values: String

    Default: 2 

##### Current IP Addresses

This option shows the Current IP Addresses of the system.

    Accepted values: IP

    Default: 2 

##### Name

This option allows users to change the desired name to the Interface. 

    Accepted values: String

    Default: ens160 

##### Description

This option helps users to write a short description for the Interface. Users can write any information like its segment, scope, subnet information, and other notes as well.

    Accepted values: String

    Default: Blank

##### Role

This feature helps users to select the exact working mechanism of the interface, either it'll be working in the LAN segment or it'll be part of the Wide Area Network. Users can also select the third option undefined.

    Accepted values: LAN / WAN / UNIDENTIFIED

    Default: LAN 

#### Enable DHCP4

##### Dynamic Host Configuration Protocol (DHCP)  

It is an application layer protocol that is used to provide:

    Accepted values: Enable / Disable

    Default: Disable

1. Subnet Mask,
2. Router Address, 
3. DNS Address,
4. Gateway IP.

**Primary IP Address**

This option allows users to add the primary IP address to the interface.

    Accepted values: Integer

    Default: Blank

**Gateway 4**

A gateway is a network node that forms a passage between two networks operating with different transmission protocols. This option helps the user to add the network gateway.

    Accepted values: String

    Default: Blank

**IPv6 Address**

An IPv6 address is 128 bits in length and consists of eight, 16-bit fields, with each field bounded by a colon. Each field must contain a hexadecimal number, in contrast to the dotted-decimal notation of IPv4 addresses.

    Accepted values: Enable / Disable

    Default: Disable 

**Secondary addresses**

This option allows users to add their secondary IP addresses to the interface.

    Accepted values: Integer

    Default: Blank 

**Local Link**

This option provides users to select the IP version of the interface. Either it is IPv4 or IPv6.

    Accepted values: IPV4 / IPv6

    Default: Blank 

**Name Servers**

**Nameserver** is a server on the internet specialized in handling queries regarding the location of a domain name's various services. **Nameservers** are a fundamental part of the Domain Name System (DNS). They allow using domains instead of IP addresses. 

    Accepted values: String

    Default: Blank 

### **Route**

### Description

**Route From**

This option allows users to select the source node for the route. Users can specify the network ID, Host IP as well as subnet in this area.

    Accepted values: String

    Default: Blank 

**Route To**

This option allows users to select the destination node point for the route. Users can specify the network ID, Host IP as well as subnet in this area.

    Accepted values: String

    Default: Blank 

**Route Via**

This option allows users to set the specific hop of their desire. 

    Accepted values: String

    Default: Blank 

**Route Type**

This option allows users to set the type of route for this rule.

    Accepted values: DEFAULT / UNICAST / UNREACHABLE / PROHIBIT / BLACKHOLE

    Default: DEFAULT 

**Route Scope**

This option allows us to set the credential.

    Accepted values: DEFAULT / GLOBAL / LINK / HOST

    Default: DEFAULT 

**Metric**

Users can specify the metric value for the route defined in the rule.

    Accepted values: String

    Default: Blank 

### **Route Policy**

### Description

**Policy From**

Users can specify the source IP location for which policy is being implemented.

    Accepted values: String

    Default: Blank 

**Policy To**

Users can specify the destination IP location for which policy is being implemented.

    Accepted values: String

    Default: Blank 

**Policy Table**

Users can specify the policy table for the policy rule.

    Accepted values: Select Policy from table

    Default: Blank 

**Policy Priority**

If the user has mentioned more than one policy rule under an interface, one can define the priority value for each rule. The less priority valued rule will be called first.

    Accepted values: Integer

    Default: Blank 

**Policy Mark**

Users can specify the policy mark for the policy rule.

    Accepted values: String

    Default: Blank 

**Policy Service**

Users can specify the policy service for the policy rule.

    Accepted values: String

    Default: Blank 

:::info
Users need to add 2 default routes and 2 default policies while configuring a static WAN Interface.
:::