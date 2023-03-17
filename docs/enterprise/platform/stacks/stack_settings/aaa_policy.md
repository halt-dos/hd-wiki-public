---
sidebar_position: 2
---

# AAA Policy

Integration with AAA service for securing access to Haltdos appliances

---

AAA is a standard-based framework used to control who is permitted to use network resources (through authentication), what they are authorized to do (through authorization), and capture the actions performed while accessing the network (through accounting).

1. Authentication - The process by which it can be identified that the user, which wants to access the network resources.

2. Authorization - It provides capabilities to enforce policies on network resources after the user has gained access to the network resources through authentication.

3. Accounting - It provides means of monitoring and capturing the events done by the user while accessing the network resources.

Haltdos supports built-in integration AAA solutions such as RADIUS or TACACS+. These services ensure authentication, authorization, and accounting when accessing Haltdos appliances.

:::info
Depending upon the organization's policy, if AAA is enabled, the same should also be configured for Haltdos appliances
:::

![aaa_policy](/img/platform/v6/docs/aaa_policy1.png)

### How to Use:

1. Go to **Stack > Settings > AAA**.

2. Configure your settings

3. Click Save

| PARAMETERS  | ACCEPTED VALUES | DEFAULT |
|-------------|-----------------|---------|
| AAA Enabled | Boolean         | False   |
| Service     | Dropdown        | RADIUS  |
| Allow SSH   | Boolean         | False   |
| Host Name   | String          | Blank   |
| Secret      | String          | Blank   |

### Description:

**AAA Enabled**

This option allows the user to enable or disable the AAA feature. By default, it is set to disable.

**Service**

This option allows the user to select the type of implementation it can be either **TACACS** or **RADIUS**.

**Terminal Access Controller Access Control System (TACACS+)** is a Cisco proprietary protocol that is used for the communication of the Cisco client and Cisco ACS server. It uses TCP port number **49** which makes it reliable.

**Remote Access Dial-In User Service (RADIUS)** is an open standard protocol used for the communication between any vendor AAA client and ACS server. It uses port number **1812** for authentication and authorization and *1813* for accounting.

**Host Name**

This option allows the users to specify the hostname or IP address of **AAA** server.

**Allow SSH**

This option will only apprears when **AAA** type is selected to **RADIUS**. When this option is enabled it allow **SSH** if **Radius Server** is down 

**Secret**

This option allows the user to mention the credential information to access AAA server.
