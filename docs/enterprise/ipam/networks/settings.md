---
sidebar_position: 3
---

# Network Settings

Edit network configuration and configure scheduled scans.

---

The **Network Settings** page allows administrators to update the core attributes of a network — its name, description, IP address, subnet mask, and VLAN ID — and to set up an automated scan schedule.

### How to Use:

1. Go to **Stack** > **IPAM** > **Networks** > select a network > **Network Settings**.
2. Update the required fields.
3. Click **Save Changes** to save network details.
4. Configure the scan schedule and click **Save Schedule**.

---

## Network Details

##### **Network Name**

A unique identifier for this network within IPAM.

```
Accepted values: String

Default: Blank
```

##### **Description**

An optional description for the purpose or scope of this network.

```
Accepted values: String

Default: Blank
```

##### **IP Address**

The base IP address of the network.

```
Accepted values: IPv4 / IPv6

Example: 192.168.1.0
```

##### **Mask**

The subnet prefix length in CIDR notation that defines the size of the network.

```
Accepted values: Integer (1–128)

Example: 24
```

##### **VLAN**

The VLAN ID for network traffic segregation.

```
Accepted values: Integer

Default: 0
```

---

## Scan Schedule

Configure an automated scan to periodically discover devices within this network.

##### **Enable Scan**

Toggle to activate scheduled scanning for this network.

```
Accepted values: Enabled / Disabled

Default: Disabled
```

##### **Frequency**

How often the scheduled scan should repeat.

```
Accepted values: Once / Daily / Weekly / Monthly

Default: Once
```

##### **Scan Time**

The time of day at which the scan should run, in 24-hour format (HH:MM).

```
Accepted values: HH:MM

Example: 02:30
```
