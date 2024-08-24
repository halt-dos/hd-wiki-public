---
sidebar_position: 1
---

# DHCP Networks

This section details how to configure the Haltdos solution as a DHCP server for assigning IP addresses.

![dhcp](/img/platform/v8/docs/dhcp_network.png)

### How to Use:

1. Go to **Stack > Instances > > DHCP**
2. Configure your settings
3. Click **Save Changes**

## Description

##### Network Name

This option allows users to set the desired name for the network setting.

    Accepted values: String

    Default: Blank

##### Network Name

Select to deploy dhcp or not

    Accepted values: Enable / Disable

    Default: Enable


**Local Link**

This option allows users to set whether they wanted to use IPv4 or IPv6. by default IPv4 is selected. 

    Accepted values: IPv4 / IPv6

    Default: IPv4

**Network Interface**

This option allows users to set a network interface for DHCP configuration. Users can add an Interface on which DHCP service dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks.

    Accepted values: eth0

    Default: eth0

**Subnet Network**

This feature allows you to share the subnet mask for the subnetwork.

    Accepted values: Select Sub Network

    Default: Blank

**Nameserver**
Name Server refers to the server component of the Domain Name System (DNS), one of the two principal namespaces of the Internet. The most important function of DNS servers is the translation (resolution) of human-memorable domain names (example.com) and hostnames into the corresponding numeric Internet Protocol (IP) addresses (93.184.216.34), the second principal namespace of the Internet, which is used to identify and locate computer systems and resources on the Internet. 

    Accepted values: Select Server

    Default: Blank

**Network Mask**

This option allows users to set the network mask which will be assigned to devices on the network.

    Accepted values: Integer

    Default: Blank

##### Default Gateway

This option allows users to set the default gateway IP as it will be assigned to devices in the network.

    Accepted values: String

    Default: Blank

##### Allowed IP range

Select Allowed IP Range

    Accepted values: IP

    Default: Blank


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
