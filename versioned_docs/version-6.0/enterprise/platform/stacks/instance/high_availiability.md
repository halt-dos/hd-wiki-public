---
sidebar_position: 2
---

# High Availiability

---

## Overview

High availability (HA) is the ability of a system to operate continuously without failing for a designated period of time. HA works to ensure a system meets an agreed-upon operational performance level. Haltdos platform provides built-in capability for high availability using VRRP technology.

:::info
For more information on the deployment architecture, please see Infrastructure & Deployment.
:::

**Cluster / HA Active-Active**

Haltdos platform consists of Stacks for multi-tenancy. Each Stack corresponds to a Cluster that contains one or more instances. Every instance in the stack runs the same policy as defined by the user. These instances synchronise data in real-time among themselves using Auxiliary Plane. These instances therefore run in Active-Active (if 2 instances) or Cluster mode (more than 2 instances) by design.

**HA Active-Passive**

To configure instances in Active-Passive mode, configure HA settings in each instances. In Layer 3 mode, they will share the same VIP and depending upon the status of the instance, any one of them will be actively handling the traffic. 

![high availiability](/img/platform/v6/docs/high_availability.png)

### How to Use:

1. Go to **Stack > Instances > (Select Instance) > HA**
2. Configure your settings
3. Click Save

#### Description 

**HA MODE**

Specify high availability mode between multiple mitigation instances

**PRIMARY INSTANCE**

Enable if this instance is primary

**HA PORT**

Specify port over which mitigation instances communicate with each other

**PEER CHECK INTERVAL**

Specify the time in milliseconds (ms) after which one mitigation instance checks the health of its peer

**PEER FAILURE THRESHOLD**

Specify the number of failed peer health checks after which a mitigation instance consider its peer unhealthy

**PEER RECOVERY THRESHOLD**

Specify the number of successful peer health checks after which a mitigation instance changes its peer status from unhealthy to healthy

**MAXIMUM ALLOWED FLAPS**

Specify allowed number of flaps after which the primary instance goes into hardware bypass

**ENABLE BANDWIDTH MONITORING**

Specify if bandwidth monitoring should be used to trigger failover in HA cluster

**MINIMUM BANDWIDTH**

Specify minimum bandwidth in bps for specified interval in seconds below which failover is triggered

**LINK MONITORING INTERVAL**

Specify interval in milliseconds (ms) for periodic link monitoring between multiple mitigation instances

**MINIMUM ACTIVE LINKS**

Specify the minimum allowed active link pairs below which the solution will mark itself down