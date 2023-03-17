---
sidebar_position: 8
---

# Cluster

For High Availability

---

DDOS Protection support high availability, for two compatible DDoS Protector devices to operate in Active – Active, Active – Passive, Cluster mode.

![ha_settings](\img\ddos\v6\docs\ddos31.png)

### **How To Use:**

1. **Stack > Instance > Instance Name > HA**

2. User can configure as per requirement

3. Click on Save Settings

![ha_settings](\img\ddos\v6\docs\ddos32.png)

| Settings                    | Accepted Values | Defaults |
|-----------------------------|-----------------|----------|
| Primary Instance            | String          | --       |
| HA Mode                     | Drop Down       | None     |
| HA Port                     | Integer         | 11211    |
| Peer check Interval         | Integer         | 2        |
| Peer failure threshold      | Integer         | 2        |
| Peer recovery threshold     | Integer         | 1        |
| Max Allowed Flaps           | Integer         | 6        |
| Enable Bandwidth Monitoring | Boolen          | False    |
| Minimum Bandwidth           | Integer         | 1024/10  |
| Link Monitoring Interval    | Integer         | 100      |
| Minimum Active links        | Integer         | 0        |


### **Description:**

##### **Primary Instance**

Specify the default instance from the drop-down that will have an active mode on start-up

##### **HA Mode**

Specify the high availability mode between multiple mitigation instances

##### **HA Port**

Specify port over which mitigation instances communicate with each other

##### **Peer check interval**

Specify the time (in sec) after which one mitigation instance checks the health of its peer

##### **Peer failure threshold**

Specify the number of failed peer health checks after which a mitigation instance considers its peer unhealthy

##### **Max allowed steps**

In some situations, two mitigation instances may Allowed keep changing their state from active to inactive. A Flaps flap is counted when the instance leaves the active state. This can result in poor network performance and can disrupt normal traffic flows. Specify allowed number of flaps after which the primary instance goes into hardware bypass

##### **Enabled Bandwidth Monitoring**

Specify if bandwidth monitoring should be used to trigger fail over in the HA cluster

##### **Minimum Bandwidth**

Specify minimum bandwidth (in bps) for a specified interval (in sec) below which fail-over is triggered

##### **Link monitoring interval**

Specify the interval in milliseconds (ms) for periodic link monitoring between multiple mitigation instance

##### **Minimum Active Links**

Specify the minimum allowed active link pairs below which the solution will mark itself down