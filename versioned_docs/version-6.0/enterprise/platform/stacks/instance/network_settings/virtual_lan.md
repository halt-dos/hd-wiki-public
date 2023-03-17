---
sidebar_position: 2
---

# Virtual LAN

Creating and managing multiple VLANs on Haltdos appliance

---

This section shows how users can create and maintain multiple VLANs on Haltdos appliance / virtual instance. Apart from creating VLANs, users can also configure custom routing and route policies on traffic coming on VLANs.

![vlan](/img/platform/v6/docs/vlan1.png)

### How to Use:

1. Go to **Stack > Instances > Instance > Network > VLans**
2. Configure your settings
3. Click Save

| PARAMETERS   | ACCEPTED VALUES    | DEFAULT  |
|--------------|--------------------|----------|
| Name         | String             | Empty    |
| VLAN ID      | Integer            | Blank    |
| Link         | Drop-down          | Empty    |
| Addresses    | IP String          | Empty    |
| Enable DHCP4 | ENABLED / DISABLED | DISABLED |
| Enable DHCP6 | ENABLED / DISABLED | DISABLED |
| Local Link   | IPv4 / IPv6        | Empty    |
| Gateway 4    | IP String          | Empty    |
| Gateway 6    | IP String          | Empty    |
| Name Servers | IP String          | Empty    |

**Routes**

| PARAMETERS  | ACCEPTED VALUES                              | DEFAULT |
|-------------|----------------------------------------------|---------|
| Route From  | String                                       | Empty   |
| Route To    | String                                       | Empty   |
| Route Via   | String                                       | Empty   |
| Route Type  | UNICAST / UNREACHABLE / PROHIBIT / BLACKHOLE | UNICAST |
| Route Scope | GLOBAL / LINK / HOST                         | GLOBAL  |
| Metric      | Integer                                      | 0       |

**Route Policy**

| PARAMETERS      | ACCEPTED VALUES | DEFAULT |
|-----------------|-----------------|---------|
| Policy From     | String          | Empty   |
| Policy To       | String          | Empty   |
| Policy Table    | Integer         | 1       |
| Policy Priority | Integer         | 0       |
| Policy Mark     | Integer         | 1       |
| Policy Service  | String          | Empty   |


