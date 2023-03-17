---
sidebar_position: 6
---

# Config Synchronization

Synchronizing configurations across peer managements

---

Haltdos platform supports periodic and on-demand synchronization of configurations across multiple peer managements. 

:::info
API Token with READ AND WRITE access is required to sync configurations.
:::

### How to Use:

1. Go to **Stack > Settings > Config Sync**
2. Configure your settings
3. Click Save

| PARAMETERS       | DESCRIPTION                                              | ACCEPTED VALUES    | DEFAULT  |
|------------------|----------------------------------------------------------|--------------------|----------|
| Enable Sync      | Enable configuration sync with peer management           | ENABLED / DISABLED | DISABLED |
| Enable Auto Sync | Enable automatic configuration sync with peer management | ENABLED / DISABLED | DISABLED |
| Peer Host        | Specify the host name or IP address of peer management   | IP / Host Name     | Empty    |
| Peer Stack       | Specify the peer management StackId                      | String             | Empty    |
| Peer Host Port   | Specify the peer management port                         | Integer            | 9000     |
| Auth Key         | Specify Auth Key for authentication                      | String             | Empty    |

