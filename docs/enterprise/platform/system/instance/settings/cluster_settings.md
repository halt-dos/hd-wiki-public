---
sidebar_position: 6
---

# Cluster Settings

---
The Cluster Setting is used to configure High Availability (HA) in an Active-Passive mode across multiple instances. This setup ensures that if the primary (active) instance fails, a secondary (passive) instance automatically takes over to minimize downtime and maintain service continuity.

![Monitor](/img/platform/v8/docs/cluster_settings.png)  

#### How to Use:

1. Go to **Stack > Instances  > Cluster Settings**
2. Configure your settings
3. Click **Save Changes**

### Description

##### Name

Enter the cluster name

```
    Accepted values: String

    Default: Blank
```


##### Instance State

Indicates whether the instance is currently active (primary) or passive (standby) in the HA configuration.

```
    Accepted values: Master / Backup

    Default: 5
```
##### Data Interface

The network interface designated for handling data traffic between active and passive instances in the HA setup.

```
    Accepted values: eth0

    Default: eth0
```

##### HA INTERFACE

The dedicated network interface used exclusively for communication and synchronization between instances in a high availability (HA) configuration.

```
    Accepted values: eth0

    Default: eth0
```


##### VIRTUAL ROUTER ID

A unique identifier assigned to a virtual router in an HA setup, allowing network devices to recognize the active instance for traffic routing.

```
    Accepted values: Integer

    Default: 0
```


##### Priority

Select the priority

```
    Accepted values: Integer

    Default: 0
```


##### Monitoring Frequency

Specifies how often the health and status of each instance are checked to detect failures or changes in the HA configuration.

```
    Accepted values: Integer

    Default: 0
```


##### Enable VMAC

Allows the use of a Virtual MAC address for seamless failover in HA.

```
    Accepted values: Enable / Disable 

    Default: Disable
```

##### Enable VMAC Base

Configures the base MAC address for the Virtual MAC (VMAC) used in the HA setup for consistent failover.

```
    Accepted values: Enable / Disable 

    Default: Disable
```

##### AUTH TYPE

Specifies the authentication method used for securing communication between HA instances, such as passwords or keys.

```
    Accepted values: PASS / AUTH

    Default: PASS
```

##### Auth Password

The password used for authenticating communication between HA instances based on the selected authentication type.

```
    Accepted values: PASS / AUTH

    Default: PASS
```


##### VIRUTAL IPS

The IP addresses assigned to the virtual router in the HA setup, allowing clients to connect to the active instance regardless of failover.

```
    Accepted values: IPs

    Default: Blank
```


##### PEER IPS

The IP addresses assigned to the passive (standby) instance in the HA setup, used for communication between the active and passive instances.

```
    Accepted values: IPs

    Default: Blank
```

##### Excluded Virtual IPS

The list of virtual IP addresses that are excluded from failover or management by the HA system.

```
    Accepted values: IPs

    Default: Blank
```






