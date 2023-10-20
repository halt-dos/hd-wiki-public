---
sidebar_position: 1
---

# Network

This section details how to configure the Haltdos solution as a DHCP server for assigning IP addresses.

![dhcp](/img/dhcp/dhcp2.png)

### How to Use:

1. Go to **Stack > Instances > > DHCP**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS            | ACCEPTED VALUES    | DEFAULT       |
|-----------------------|--------------------|---------------|
| Enable                | ENABLED / DISABLED | DISABLED      |
| Network Name          | String             | Empty         |
| Local Link            | IPv4 / IPv6        | IPv4          |
| Network Interface     | Drop-down          | Empty         |
| Subnet Network        | Drop-down          | Empty         |
| Nameserver            | IP String          | Empty         |
| Network Mask          | IP String          | 255.255.255.0 |
| Default Gateway       | IP String          | Empty         |
| Enable IP Lease       | ENABLED / DISABLED | DISABLED      |
| Allowed IP Range      | String             | Empty         |

## Description

**Enable**

This option allows users to enable/disable the current configuration.

**Network Name**

This option allows users to set the desired name for the network setting.

**Local Link**

This option allows users to set whether they wanted to use IPv4 or IPv6. by default IPv4 is selected. 

**Network Interface**

This option allows users to set a network interface for DHCP configuration. Users can add an Interface on which DHCP service dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks.

**Subnet Network**

This feature allows you to share the subnet mask for the subnetwork.

**Nameserver**
Name Server refers to the server component of the Domain Name System (DNS), one of the two principal namespaces of the Internet. The most important function of DNS servers is the translation (resolution) of human-memorable domain names (example.com) and hostnames into the corresponding numeric Internet Protocol (IP) addresses (93.184.216.34), the second principal namespace of the Internet, which is used to identify and locate computer systems and resources on the Internet. 

**Network Mask**

This option allows users to set the network mask which will be assigned to devices on the network.

**Default Gateway**

This option allows users to set the default gateway IP as it will be assigned to devices in the network.

**Enable IP Lease**

A DHCP lease is a temporary assignment of an IP address to a device on the network. When using DHCP to manage a pool of IP addresses, each client served on the network is only “renting” its IP address. Thus, IP addresses managed by a DHCP server are only assigned for a limited period of time. Users are allowed to set the DHCP IP lease which will be assigned to the PC.

**Mac IP Binding**

Mac-binding essentially means binding together the MAC and IP addresses, so that all requests from that IP address are served only by the computer having that particular MAC address. In effect, it means that if the IP address or the MAC address changes, the device can no longer access the Internet.

![dhcp](/img/dhcp/dhcpmac.png)

| PARAMETERS  | ACCEPTED VALUES | DEFAULT |
|-------------|-----------------|---------|
| MAC Address | String          | Empty   |
| IP Address  | IP String       | Empty   |
| Description | String          | Empty   |

### Description

**MAC Address**

This option allows users to mention the MAC address which need to be bind with a IP address for MAC IP Binding.

**IP Address**

This option allows users to mention the IP address which need to be bind with MAC Address.

**Description**

This field allows users to mention a short description about the MAC IP binding or the reason for the binding.
