---
sidebar_position: 2
---

# Config Sync

Synchronizing configurations across peer managements

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

### Description:

**Enable Sync**

This option helps the user to mention the IP address or the hostname of the external backup server on which the Syslog service is exporting the log details.

    Accepted values: Enable / Disable

    Default: Disable 

**Enable Accept Remote Connections**

Enable lo/accept sync with peer management

    Accepted values: Enable / Disable

    Default: Disable 

**Peer Host**

Specify the host name or IP address of peer management

    Accepted values: IP / Host Name 

    Default: Blank 

**Peer Host Port**

Specify the peer management port

    Accepted values: Integer

    Default: Blank 

**Auth Key**

Specify Auth Key for authentication

    Accepted values: String

    Default: Blank 

**Timeout**

Specify the timeout for API Call in Seconds

    Accepted values: Integer	

    Default: Blank 

**Scope**

Specify the scope for sync configuration

    Accepted values: List of Configured Resoruces

    Default: Blank 
