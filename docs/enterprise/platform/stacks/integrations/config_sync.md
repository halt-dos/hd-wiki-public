---
sidebar_position: 6
---

# Config Synchronization

### Synchronizing configurations across peer managements

---

Haltdos platform supports periodic and on-demand synchronization of configurations across multiple peer managements. 

:::info
API Token with READ AND WRITE access is required to sync configurations.
:::

![config sync](/img/platform/v7/docs/config_sync_newui.png)

### How to Use:

1. Go to **Stack > Integration > Config Sync**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS       | DESCRIPTION                                              | ACCEPTED VALUES    | DEFAULT  |
|------------------|----------------------------------------------------------|--------------------|----------|
| Enable Sync      | Enable configuration sync with peer management           | ENABLED / DISABLED | DISABLED |
| Enable Accept Remote Connections | Enable lo/accept sync with peer management | ENABLED / DISABLED | DISABLED |
| Peer Host        | Specify the host name or IP address of peer management   | IP / Host Name     | Empty    |
| Peer Host Port   | Specify the peer management port                         | Integer            | 9000     |
| Auth Key         | Specify Auth Key for authentication                      | String             | Empty    |
| Timeout          | Specify the timeout for API Call in Seconds              | Integer            | 30       |
| Scope            | Specify the scope for sync configuration                 |  List of Configured Resoruces | Blank    |