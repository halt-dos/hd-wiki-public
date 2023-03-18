---
sidebar_position: 3
---

# Link Bonds

Link Aggregating of Ethernet NICs for high throughput and reliability

---

Aggregating two or more links to achieve one fat link brings a number of advantages, in short more bandwidth. Haltdos appliances (physical or virtual instanes) support Link bonding that combines multiple NICs that are running in Active-Active or Active-Passive scenarios.

![linkbonds](/img/platform/v6/docs/linkbonds1.png)

## How to Use:

1. Go to **Stack > Instances > Instance > Network > Link Bonds**
2. Configure your settings
3. Click Save

| PARAMETERS  | ACCEPTED VALUES                              | DEFAULT |
|-------------|----------------------------------------------|---------|
| Name  | String                                       | Empty   |
| Addresses   | String                                       | Empty   |
| Route Via   | String                                       | Empty   |
| Route Type  | UNICAST / UNREACHABLE / PROHIBIT / BLACKHOLE | UNICAST |
| Route Scope | GLOBAL / LINK / HOST                         | GLOBAL  |
| Metric      | Integer                                      | 0       |