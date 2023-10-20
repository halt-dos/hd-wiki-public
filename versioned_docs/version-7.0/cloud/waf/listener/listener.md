---
sidebar_position: 1
---

# Listener

Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers.

---

## Overview

Listeners are used for configuring the websites and servers to increase throughput, optimize resource use, reduce response time, and avoid overload of any single resource.


### How to Use:

1. Go to **Stack  > WAF > Zones > Listeners**

2. Click **Add Listener** button.

3. Configure your settings.

4. Click **Save**.

| SETTINGS              | ACCEPTED VALUES                                    | DEFAULT |
|-----------------------|----------------------------------------------------|---------|
| Sub Domain            | Website Name                                       | Blank   |
| Reference             | Clone existing Listener setting for new sub-domain | Empty   |
| Service Type          | Dropdown                                           | Http    |
| Origin Servers & port | Server IP’s with listening port(Ex. 8.8.8.8:80)    | Blank   |

#### Description:

**Sub Domain**

This field specifies the fully qualified name of the website for protection. Ensure to keep it empty while adding the root domain. Listener with a specific domain name can be respectively configured for protection.

**Reference**

This field allows the user to adapt the configurations of an existing listener to the newly created listener with a different sub-domain. It clones the same configuration in the new listener.

**Service Type**

This field specifies the type of service for the subdomain i.e. HTTP, TCP, UDP. Based on the protocol of the backend application, the listener/subdomain can be created with any of the three protocols.

**Origin Servers**

This field specifies the IP and listening port of the backend server on which load balancing will occur. There can be multiple IP and listening port combinations. 

Following configurations can be managed by clicking on the newly added listener name.
