---
sidebar_position: 2
---

# Virtual LAN

Creating and managing multiple VLANs on Haltdos appliance

---

This section shows how users can create and maintain multiple VLANs on Haltdos appliance / virtual instance. Apart from creating VLANs, users can also configure custom routing and route policies on traffic coming on VLANs.

![vlan](/img/platform/v7/docs/vlan.png)

### How to Use:

1. Go to **Stack > Instances > Network > VLans**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS   | ACCEPTED VALUES    | DEFAULT  |
|--------------|--------------------|----------|
| Name         | String             | Empty    |
| Group Name         | String             | Empty    |
| VLAN ID      | Integer            | Blank    |
| Link         | Drop-down          | Empty    |
| Addresses    | IP String          | Empty    |
| Enable DHCP4 | ENABLED / DISABLED | DISABLED |
| Enable DHCP6 | ENABLED / DISABLED | DISABLED |
| Local Link   | IPv4 / IPv6        | Empty    |
| Gateway 4    | IP String          | Empty    |
| Gateway 6    | IP String          | Empty    |
| Name Servers | IP String          | Empty    |

### Description

##### **Name**
This option allows users to set a user-friendly name for the VLANs.

##### **Group Name**
This option allows users to set a group name that group name will be identified by the application hence it can be same as Name.

##### **VLAN ID**
This option allows users to write a VLAN ID in decimal number system. This VLAN ID tag will be added into the packets that are moving outside the interface.

##### **Link**
This link option allows users to select interface for the VLAN configuration.

##### **Addresses**
This option allows users to set an IP addresses to the interface. This Interface should not be configured from the **Ethernet** section again.

##### **Enable DHCP4**
This option allows users to enable automatic IPv4 address configuration using DHCPv4.

##### **Enable DHCP6**
This option allows users to enable automatic IPv6 address configuration using DHCPv6.

##### **Local Link**
This option allows users to set the local link for the interface.

##### **Gateway4**
This option allows users to set an IPv4 gateway address. This gateway address will be used when packet destination address belongs to other networks.

##### **Gateway6**
This option allows users to set an IPv6 gateway address. This gateway address will be used packet's destination address belongs to other network.

##### **Nameservers**
This option allows users to set the name server or DNS server IP address.