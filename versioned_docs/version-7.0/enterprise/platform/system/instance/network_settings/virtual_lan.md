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

### Description

##### **Name**
This option allows users to set a user-friendly name for the VLANs.

```
    Accepted values: String

    Default: Blank 
```


##### **Group Name**
This option allows users to set a group name that group name will be identified by the application hence it can be same as Name.

```
    Accepted values: String

    Default: Blank 
```


##### **VLAN ID**
This option allows users to write a VLAN ID in decimal number system. This VLAN ID tag will be added into the packets that are moving outside the interface.

```
    Accepted values: Integer

    Default: Blank 
```


##### **Link**
This link option allows users to select interface for the VLAN configuration.

```
    Accepted values: String

    Default: Blank 
```


##### **Addresses**
This option allows users to set an IP addresses to the interface. This Interface should not be configured from the **Ethernet** section again.

```
    Accepted values: String

    Default: Blank 
```


##### **Enable DHCP4**
This option allows users to enable automatic IPv4 address configuration using DHCPv4.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


##### **Enable DHCP6**
This option allows users to enable automatic IPv6 address configuration using DHCPv6.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


##### **Local Link**
This option allows users to set the local link for the interface.

```
    Accepted values: IPv4 / IPv6

    Default: Blank 
```


##### **Gateway4**
This option allows users to set an IPv4 gateway address. This gateway address will be used when packet destination address belongs to other networks.

```
    Accepted values: String

    Default: Blank 
```


##### **Gateway6**
This option allows users to set an IPv6 gateway address. This gateway address will be used packet's destination address belongs to other network.

```
    Accepted values: String

    Default: Blank 
```


##### **Nameservers**
This option allows users to set the name server or DNS server IP address.

```
    Accepted values: String

    Default: Blank 
```

