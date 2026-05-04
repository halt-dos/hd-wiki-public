---
sidebar_position: 2
---

# Network

View and manage an individual network's details, DHCP configuration, static bindings, and discovered devices.

---

The **Network** detail page provides a consolidated view of a specific network's configuration. It shows the network's base details, optionally deploys a DHCP server, manages static DHCP bindings, and lists all devices discovered within that network.

### How to Use:

1. Go to **Stack** > **IPAM** > **Networks**.
2. Click on a configured network name.
3. Review or update the network details.
4. Toggle **Deploy DHCP** to configure DHCP for this network.
5. Click **Save Changes**.

---

## Network Details

##### **Network Name**

The unique identifier for this network (read-only on this page; editable in Network Settings).

##### **Description**

An optional description for the network (read-only on this page).

##### **IP Address / CIDR**

The base IP address and subnet mask of the network in CIDR notation (e.g., `192.168.1.0 / 24`).

##### **VLAN**

The VLAN ID associated with this network for traffic segmentation.

##### **Deploy DHCP**

Toggle to enable a DHCP server for this network. When enabled, the DHCP Configuration section becomes active.

```
Accepted values: Enabled / Disabled

Default: Disabled
```

---

## DHCP Configuration

Visible when **Deploy DHCP** is enabled.

##### **Local Link**

The IP protocol version for the DHCP server.

```
Accepted values: IPv4 / IPv6

Default: IPv4
```

##### **Instance**

The Haltdos instance on which the DHCP server will be deployed.

```
Accepted values: Select from available instances

Default: Blank
```

##### **Network Interface**

The network interface on the selected instance through which the DHCP server will serve addresses.

```
Accepted values: Select from available interfaces

Default: Blank
```

##### **Subnet Network**

The subnet associated with the selected interface used for DHCP configuration.

```
Accepted values: Select from available subnets

Default: Blank
```

##### **Nameserver**

Comma-separated DNS server IP addresses that will be pushed to DHCP clients.

```
Accepted values: Comma-separated IP addresses

Example: 8.8.8.8, 8.8.4.4
```

##### **Network Mask**

The subnet mask in dotted decimal notation sent to DHCP clients.

```
Accepted values: Dotted decimal notation

Example: 255.255.255.0
```

##### **Default Gateway**

The gateway IP address pushed to DHCP clients.

```
Accepted values: IPv4 address

Example: 172.16.0.1
```

##### **Allowed IP Range**

The DHCP pool range from which IP addresses are dynamically assigned to clients.

```
Accepted values: IP range in format start-end

Example: 172.16.0.10-172.16.0.100
```

---

## DHCP Static Bindings

Manage static MAC-to-IP bindings for this network directly from the Network detail page. Click **Add Binding** to assign a fixed IP to a specific device MAC address.

| Field | Description |
| --- | --- |
| **MAC Address** | Hardware address of the device (e.g., `AA:BB:CC:DD:EE:FF`) |
| **IP Address** | Fixed IP address to be assigned to this MAC |
| **Description** | Optional note identifying the device or owner |

---

## Discovered Devices

Lists all IP addresses and devices detected within this network through scanning or DHCP. Use the search box to filter by IP, MAC address, hostname, or description. Results can be exported to Excel.

Click **Add Address** to manually add a device entry.

| Field | Description |
| --- | --- |
| **Address** | IP address of the discovered device |
| **Description** | Label or note for this address |
| **MAC Address** | Hardware address of the device |
| **Hostname** | DNS hostname resolved for this device |
| **Last Seen** | Timestamp when the device was last detected on the network |
