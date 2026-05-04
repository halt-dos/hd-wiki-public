---
sidebar_position: 4
---

# SNMP Devices

Manage network devices polled via SNMP.

---

The **SNMP Devices** page allows administrators to register network infrastructure devices (switches, routers, firewalls, servers) for SNMP-based polling. Registered devices are periodically queried to check their status and assist with network discovery.

### How to Use:

1. Go to **Stack** > **IPAM** > **Devices** (SNMP Devices).
2. Click **Add Device**.
3. Fill in the device details and SNMP credentials.
4. Click **Add Device** to save.

### Description:

##### **Device Name**

A unique, human-readable name to identify the device.

```
Accepted values: String

Default: Blank
```

##### **Description**

An optional note about the device's role or location.

```
Accepted values: String

Default: Blank
```

##### **IP Address**

The IP address of the SNMP agent on the target device.

```
Accepted values: IPv4 / IPv6

Default: Blank
```

##### **Device Type**

The category of the network device.

```
Accepted values: Switch / Router / Firewall / Server / Other

Default: Switch
```

##### **SNMP Version**

The SNMP protocol version used to communicate with the device.

```
Accepted values: SNMP v1 / SNMP v2c / SNMP v3

Default: SNMP v2c
```

##### **SNMP Port**

The UDP port on which the SNMP agent listens.

```
Accepted values: Integer

Default: 161
```

##### **Community String**

The SNMP community string used for authentication with SNMP v1 and v2c devices.

```
Accepted values: String

Default: public
```

#### SNMP v3 Fields

The following fields are required when SNMP Version is set to **v3**:

##### **Username**

The SNMPv3 security username.

```
Accepted values: String

Default: Blank
```

##### **Auth Protocol**

The authentication algorithm used for SNMPv3.

```
Accepted values: SHA / MD5

Default: SHA
```

##### **Auth Password**

The password used for SNMPv3 authentication.

```
Accepted values: String

Default: Blank
```

##### **Privacy Protocol**

The encryption algorithm used for SNMPv3 privacy.

```
Accepted values: AES / DES

Default: AES
```

##### **Privacy Password**

The password used for SNMPv3 encryption.

```
Accepted values: String

Default: Blank
```

### Device Table Fields

| Field | Description |
| --- | --- |
| **Name** | Device name as configured |
| **IP Address** | SNMP agent IP of the device |
| **Type** | Device category (Switch, Router, etc.) |
| **SNMP Version** | SNMP protocol version in use |
| **Status** | Current reachability status of the device |
| **Last Scan** | Timestamp of the most recent SNMP poll |
