---
sidebar_position: 2
---

# Settings

Configure global IPAM settings for DHCP lease management.

---

The **Settings** page contains global configuration options that apply to the DHCP server across all networks managed by Haltdos IPAM.

### How to Use:

1. Go to **Stack** > **IPAM** > **Settings**.
2. Update the required fields.
3. Click **Save Changes**.

### Description:

##### **Default Lease Time**

The default duration (in seconds) for which an IP address is leased to a device when the client does not request a specific lease duration.

```
Accepted values: Integer (seconds)

Default: Blank
```

##### **Max Lease Time**

The maximum duration (in seconds) for which an IP address can be leased to a device, regardless of what the client requests.

```
Accepted values: Integer (seconds)

Default: Blank
```

##### **Match By Client ID**

When enabled, DHCP IP lookup and assignment is performed using the DHCP client identifier (option 61) instead of the MAC address alone. This is useful in environments with virtual machines or devices that may share or cycle MAC addresses.

```
Accepted values: Enabled / Disabled

Default: Disabled
```
