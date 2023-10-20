---
sidebar_position: 2
---

# OSFP

Support for dynamic routing with Open Shortest Path First (OSFP)

---

OSFP is the dynamic routing protocol used in large to very large IP networks. The protocol uses a link-state database and link-state advertisements to map the network topology. This topological map is used with the link-state algorithm to determine the best route available. The algorithm used by OSPF to determine best routes relies on the link-state database and allows OSPF to update its routes faster than RIP when a network change is encountered. OSPF uses areas to segment the network, which helps it decrease the general size of the link-state database and consequently speeds up network convergence when changes in the network are experienced.

Haltdos solution supports dynamic routing over OSFP protocol. This section details how to configure Haltdos to support OSFP.

![osfp](/img/platform/v7/docs/ospf.png)

### How to Use:

1. Go to **Stack > Instances > Instance > Routing > OSFP**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS    | DESCRIPTION                | ACCEPTED VALUES    | DEFAULT  |
|---------------|----------------------------|--------------------|----------|
| Enable        | Enable OSPF Routing        | ENABLED / DISABLED | DISABLED |
| Listening IP  | Listening IP               | String             | Empty    |
| Configuration | specify the configuration  | String             | Blank    |
