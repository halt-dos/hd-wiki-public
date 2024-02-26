---
sidebar_position: 5
---

# VRRP

---

The Virtual Router Redundancy Protocol (**VRRP**) is a computer networking protocol that provides for automatic assignment of available Internet Protocol (IP) routers to participating hosts. This increases the availability and reliability of routing paths via automatic default gateway selections on an IP sub network.

![VRRP](/img/platform/v7/docs/vrrp.png)

### How to Use:

1. Go to **Stack > Instances > (Select Instance) > VRRP**
2. Configure your settings  
3. Click **Save Changes**

| PARAMETERS           | ACCEPTED VALUES | DEFAULT |
|----------------------|-----------------|---------|
| NAME                 | String          | Blank   |
| INSTANCE STATE       | Drop-down       | Master  |
| Data Interface       | Drop-down       | Master  |
| HA Interface         | Drop-down       | Blank   |
| VIRTUAL ROUTER ID    | Integer         | 0       |
| PRIORITY             | Integer         | 0       |
| MONITORING FREQUENCY | Integer         | 0       |
| Enable VMAC          | Boolean         | False   |
| Enable VMAC Base     | Boolean         | False   |
| Auth Type            | Drop-down       | Pass    |
| Auth Password        | String          | Blank   |
| Virtual IPs          | Integer         | Blank   |
| Peer IPs             | Strings         | Blank   |
| Excluded Virtual IPs | Integer         | Blank   |

### Description

**NAME**

Users can specify the user-friendly name for the setting.

**INSTANCE STATE**

Users can define the state of the instance. it should be either MASTER or BACKUP.

**DATA INTERFACE**

Users can specify the data interfaces.

**HA INTERFACE**

Users can add  the high available interface for redundancy.

**DATA INTERFACE**

Users can specify the data interfaces.

**VIRTUAL ROUTER ID**

Users can specify the virtual router ID for the setting.

**PRIORITY**

Users can set the priority for the setting.

**MONITORING FREQUENCY**

Users can set the monitoring frequency timeout value.

**Enable VMAC**

Users can enable or disable virtual MAC. A virtual MAC address is a floating entity shared by the primary and the secondary nodes in an HA setup.

**Enable VMAC BASE**

Users can enable or disable VMAC BASE.

**Auth Type**

Users can specify which type of authentication is being used.

**Auth Password**

When user has selected auth type to password, then user need to update the password in this field.

**Virtual IPs**

Users can specify the virtual IPs for the VRRP setting

**Peer IPs**

Users can specify the peer IPs to which machine will keep sending hello messages and verify they are up or not.

**Excluded Virtual IPs**

Users can specify the VIP which need to be excluded in advert. For cases with large numbers (eg 200) of IPs on the same interface. To decrease the number of addresses sent in adverts, you can exclude most IPs from adverts. Since all addresses in virtual_ipaddress must be of the same family.