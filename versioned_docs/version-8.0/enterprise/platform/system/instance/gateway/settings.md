---
sidebar_position: 2
---

# DHCP Settings

---

This option allows to configure global settings for DHCP Network.

![dhcp](/img/platform/v8/docs/dhcp_setting.png)  
  
### How to Use:  

1. Go to **Stack** > **DHCP** > **Setiings.**
2. Edit existing configuration.
3. Click on **Save Changes**.  


### Description

##### Default Lease Time  

When DHCP sends configuration information to a client, the information is sent with a lease time. This is the length of time that the client can use the IP address it has been assigned. The duration of the lease time can be changed according to your specific requirement. Users are allowed to set the Default Lease Time for each IP that has been assigned to clients.

```
    Accepted values: Integer

    Default: 3600
```


During the lease time, the DHCP server cannot assign that IP address to any other clients.

##### Max Lease Time  

This option allows users to set the maximum lease time for the IP assigned to the host device.

```
    Accepted values: Integer

    Default: 7200
```


##### Match by Client Id  

Enabling IP lookup on the basis of Client ID

```
    Accepted values: Enable / Disable

    Default: Enable
```


