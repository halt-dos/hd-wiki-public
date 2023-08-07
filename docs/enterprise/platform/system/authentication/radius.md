---
sidebar_position: 2
---

# RADIUS server

Integration with organizaion's RADIUS server for user management.

---

Haltdos Platform supports integration with AAA authentication mechanism with RADIUS server. AAA stands for authentication, authorization, and accounting. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the RADIUS server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their credential configured on RADIUS server.

:::info Info
If your organization is using AAA authentication , it is recommended to integrate Haltdos solutions for user management with AD.
:::

![activedirectory](/img/platform/v7/docs/radius.png)

**How to Use:**

1. Log into the Haltdos Web UI console.
2. Click on user icon on right top of the screen.
3. Go to System > Remote Authentication > RADIUS Server.
4. Configure the settings and click on save changes.


| Parameter              | Accepted Value  | Default Values |
|------------------------|-----------------|----------------|
| Enabled                | Boolean         | Disabled       |
| Endpoint               | IP address      | Blank          |
| Port                   | Port Number     | Blank          |
| Secret key             | Password phrase | Blank          |
| Authorization Protocol | Drop-down       | PAP            |
| Timeout                | Decimal         | 30             |

### Description

##### **Enabled**

This option enables users to enable or disable the RADIUS authentication.

##### **Endpoint**

This option allows users to set the endpoint or the RADIUS server IP address on which Haltdos Device will send authentication requests.

##### **Port**

This option allows users to set the port number for the port number that is being used at RADIUS server mentioned above. By default, RADIUS server set to listen on port 1812.

##### **Secret Key**

This option allows users to set the secret key which will be used while communicating the RADIUS server.

##### **Authorization Protocol**

This option allows users to configure the authentication protocol for the RADIUS server. This option contains mainly two protocols;

1. **CHAP -** CHAP is a more secure authentication protocol compared to PAP. It uses a three-way handshake process to authenticate the client with a challenge-response mechanism. 

2. **PAP -** PAP is a simple authentication protocol where the client sends its username and password in plain text to the server for authentication.
 
##### **Timeout**

This option allows users to configure the request timeout for the request. If any authentication response from RADIUS server will be delayed from the mentioned timeout, it will be discarded.