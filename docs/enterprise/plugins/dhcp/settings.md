---
sidebar_position: 2
---

# Settings

---

This option allows to configure global settings for DHCP Network.

![dhcp](/img/platform/v8/docs/dhcp_setting.png)
  
### How to Use:  

1. Go to **Stack** > **DHCP** > **Setiings.**
2. Edit existing configuration.
3. Click on **Save Changes**.  

  
| SETTINGS   | ACCEPTED VALUE | DEFAULT |
|------------|----------------|---------|
| Default Lease Time   | Integer (Seconds) | 3600   |
| Max Lease Time | Interger (Seconds) | 7200   |
| Match Filter | Toggle  | False   |
  

### Description

**Default Lease Time**  
When DHCP sends configuration information to a client, the information is sent with a lease time. This is the length of time that the client can use the IP address it has been assigned. The duration of the lease time can be changed according to your specific requirement. Users are allowed to set the Default Lease Time for each IP that has been assigned to clients.

During the lease time, the DHCP server cannot assign that IP address to any other clients.

**Max Lease Time**  
This option allows users to set the maximum lease time for the IP assigned to the host device.

**Allowed IP Range**

This option allows users to set the IP range which is allowed to the host device within the network.

**Match Filter** 

This Enables IP lookup on the basis of Client ID for IPv4 DHCP Server.
