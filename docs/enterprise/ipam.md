---
sidebar_position: 10
pagination_prev: null
---

# IPAM

Centralized IP Address Management for your network infrastructure.

---

**IP Address Management (IPAM)** is a method for planning, tracking, and managing a network's IP address space, including both IPv4 and IPv6 addresses. It provides centralized visibility and control over IP address allocation, utilization, and subnet assignments within a network.

Haltdos IPAM enables administrators to manage, monitor, and automate IP address lifecycle across the infrastructure — from defining networks and subnets to discovering active devices and managing DHCP lease assignments.

## How It Works

Haltdos IPAM is accessible from the Stack overview. The overview dashboard displays:

- **Configured Networks** — total number of defined IP networks
- **Discovered IP Addresses** — total addresses detected across all networks
- **Network Utilization** — per-network used vs. available address breakdown
- **Statistics** — total capacity, used IPs, available IPs, utilization percentage, networks with VLAN/VRF, and recent discovery counts (last 24 hours and 7 days)
- **Recent Discoveries** — a live table of the most recently discovered devices with IP address, MAC address, hostname, network, and discovery timestamp

## IPAM Features

---

- ### **Network Management**

  Define and organize IP networks with name, description, IP address/CIDR, and VLAN ID. Each configured network can be independently managed and monitored for address utilization.

- ### **DHCP Server Integration**

  Deploy a built-in DHCP server directly on a Haltdos instance for any configured network. Supports both IPv4 and IPv6, with configurable nameservers, network mask, default gateway, and IP range pool. Default lease time and maximum lease time are configurable globally from the Settings page.

- ### **DHCP Static Bindings (MAC Binding)**

  Assign fixed IP addresses to devices by binding their MAC address to a specific IP. This ensures that critical devices such as servers and printers always receive the same IP from the DHCP pool, even across reboots.

- ### **Network Discovery**

  Scan any configured network to automatically detect active devices. Discovered devices are classified by type (Router, Switch, Server, Host), vendor, category, and status (Up/Down). Address entries show IP, MAC address, hostname, and last seen timestamp. Discovery results can be exported to Excel.

- ### **Scheduled Scans**

  Configure automated scan schedules per network — once, daily, weekly, or monthly — at a specified time and timezone. This keeps the address inventory up to date without manual intervention.

- ### **SNMP Discovery**

  Enable SNMP-based device discovery per network, supporting SNMP v1, v2c, and v3. For v3, SHA/MD5 authentication and AES/DES privacy encryption are supported. SNMP devices (switches, routers, firewalls, servers) can be registered globally from the Devices page and polled for status and last scan time.

- ### **IP Lifecycle Tracking**

  The Lifecycle view provides a full audit trail of IP address assignments per network, including timestamp, assigned by, IP, MAC address, description, device category, vendor, hostname, and assigned-to details. Filterable by IP, free-text search, and date range.

- ### **IP Request Management**

  Track and process IP address requests from the IP Requests page. Each request records the IP, assignment type, assigned-to entity, description, status, and request timestamp, providing a workflow for structured IP allocation.

- ### **Match By Client ID**

  Enable client-ID-based IP lookup from the Settings page to identify and assign IPs using the DHCP client identifier instead of MAC address alone, improving accuracy in environments with virtual machines or dynamic MAC addresses.

- ### **IPv4 and IPv6 Support**

  All network definitions, DHCP configurations, and address tracking support both IPv4 and IPv6, enabling unified management across dual-stack environments.

## Navigating Haltdos IPAM

---

Haltdos IPAM is organized into the following sections:

| Section | Description |
| --- | --- |
| **Networks** | Define and manage IP networks; view discovered devices and DHCP bindings per network |
| **Settings** | Configure global DHCP settings — default lease time, max lease time, and client ID matching |
| **IP Requests** | View and manage IP address allocation requests |

Within each network, the following sub-sections are available:

| Sub-Section | Description |
| --- | --- |
| **Network** | View network details, configure DHCP, manage static bindings, and browse discovered devices |
| **Network Settings** | Edit network name, description, IP address, mask, VLAN, and scan schedule |
| **DHCP** | Configure DHCP server parameters for this network |
| **Discovery** | Run or view network scans; filter discovered devices by status, type, category, and vendor |
| **Scan Settings** | Set scan frequency, scan time, and timezone for scheduled network scans |
| **MAC Binding** | Manage static MAC-to-IP address bindings for this network |
| **SNMP** | Configure SNMP discovery settings (version, credentials) for this network |
| **Lifecycle** | View the full IP assignment history log for this network |
