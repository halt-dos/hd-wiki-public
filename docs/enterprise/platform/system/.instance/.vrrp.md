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
3. Click **Save Changes**.

### Description

**NAME**

Users can specify the user-friendly name for the setting.

```
    Accepted values: String

    Default: Blank 
```


**INSTANCE STATE**

Users can define the state of the instance. it should be either MASTER or BACKUP.

```
    Accepted values: String

    Default: ens160 
```


**DATA INTERFACE**

Users can specify the data interfaces.

```
    Accepted values: Select Data Interface

    Default: ens160 
```


**HA INTERFACE**

Users can add  the high available interface for redundancy.

```
    Accepted values: Select HA Interface

    Default: ens160 
```


**VIRTUAL ROUTER ID**

Users can specify the virtual router ID for the setting.

```
    Accepted values: Integer

    Default: ens160 
```


**PRIORITY**

Users can set the priority for the setting.

```
    Accepted values: Integer

    Default: ens160 
```


**MONITORING FREQUENCY**

Users can set the monitoring frequency timeout value.

```
    Accepted values: Integer

    Default: ens160 
```


**Enable VMAC**

Users can enable or disable virtual MAC. A virtual MAC address is a floating entity shared by the primary and the secondary nodes in an HA setup.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


**Enable VMAC BASE**

Users can enable or disable VMAC BASE.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


**Auth Type**

Users can specify which type of authentication is being used.

```
    Accepted values: Select Auth Type

    Default: PASS 
```


**Auth Password**

When user has selected auth type to password, then user need to update the password in this field.

```
    Accepted values: String

    Default: ens160 
```


**Virtual IPs**

Users can specify the virtual IPs for the VRRP setting

```
    Accepted values: IP

    Default: String 
```


**Peer IPs**

Users can specify the peer IPs to which machine will keep sending hello messages and verify they are up or not.

```
    Accepted values: IP

    Default: String 
```


**Excluded Virtual IPs**

Users can specify the VIP which need to be excluded in advert. For cases with large numbers (eg 200) of IPs on the same interface. To decrease the number of addresses sent in adverts, you can exclude most IPs from adverts. Since all addresses in virtual_ipaddress must be of the same family.

```
    Accepted values: IP

    Default: String 
```

