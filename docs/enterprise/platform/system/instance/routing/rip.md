---
sidebar_position: 3
---

# RIP v1/2

Support for Routing Information Protocol (RIP v1/v2)

---

The Routing Information Protocol (RIP) is one of the oldest distance-vector routing protocols which employs the hop count as a routing metric. RIP prevents routing loops by implementing a limit on the number of hops allowed in a path from source to destination. The largest number of hops allowed for RIP is 15, which limits the size of networks that RIP can support.

RIPv2 suffers from scalability issues due to a relatively low maximum hop count of 15 routing devices. Compared to more modern dynamic routing protocols, RIPv2’s methods for selecting optimal routes and the substantial convergence time it takes to recalculate paths renders it nearly obsolete.

For compatibility, Haltdos solution supports RIP v1 and RIP v2. This section details how to configure Haltdos to support RIP v1/2.

![rip](/img/platform/v7/docs/ripp.png)

### How to Use:

1. Go to **Stack > Instances > Instance > Routing > RIP**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS    | DESCRIPTION               | ACCEPTED VALUES    | DEFAULT  |
|---------------|---------------------------|--------------------|----------|
| Enable        | Enable RIP Routing        | ENABLED / DISABLED | DISABLED |
| Listening IP  | Listening IP              | String             | Empty    |
| Configuration | Specify the configuration | String             | Blank    |

