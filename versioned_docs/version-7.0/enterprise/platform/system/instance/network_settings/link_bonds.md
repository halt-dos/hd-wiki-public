---
sidebar_position: 3
---

# Link Bonds

Link Aggregating of Ethernet NICs for high throughput and reliability

---

Aggregating two or more links to achieve one fat link brings a number of advantages, in short more bandwidth. Haltdos appliances (physical or virtual instanes) support Link bonding that combines multiple NICs that are running in Active-Active or Active-Passive scenarios.

![linkbonds](/img/platform/v7/docs/link.png)

## How to Use:

1. Go to **Stack > Instances > Network > Link Bonds**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS  | ACCEPTED VALUES                              | DEFAULT |
|-------------|----------------------------------------------|---------|
| Name  | String                                       | Empty   |
| Group Name  | String                                       | Empty   |
| Interfaces   | String                                       | Empty   |
| Mode  | Drop Down | Balance RR |
| LACP Rate | Drop Down                        | Default  |
| MII Monitoring Interval      | Integer       | 0       |
| Minimum Links  | Integer                                     | Empty   |
| Transmit Hash Policy| Drop Down | Default|
| Aggregation Selection Mode  | Drop Down | Default|
| Slaves Activated   | Boolean                                       | False   |
| ARP Interval  | Integer | 0 |
| ARP Validation | Drop Down                        | Default  |
| ARP Verification     | Drop Down                        | Default  |
| Up Delay     | Integer                                      | 0       |
| Down Delay     | Integer                                      | 0       |
| MAC Policy     | Drop Down                        | Default  |
| Gratuitous ARP Count     | Integer                                      | 1       |
| Packet Per Slave     | Integer                                      | 1      |
| Primary Selection Policy     |Drop Down                        | Default  |
| Reset IGMP     | Integer                                      | 0       |
| Learn Interval     | Integer                                      | 1      |
| Default Primary     | Integer                                      | Blank       |