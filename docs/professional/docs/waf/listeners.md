---
sidebar_position: 1
---

# Listeners
Used to configure websites and servers.

---

### Overview

Listeners are used for collecting set of websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource.

![Listener](/img/pro-waf/docs/listeners1.png)

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** 
3. Click on **Add Listener** button.
4. Configure your settings.
5. Click **Save**.

![Listener](/img/pro-waf/docs/listeners2.png)

| SETTINGS              | ACCEPTED VALUES                                    | DEFAULT |
|-----------------------|----------------------------------------------------|---------|
| Domain/ Virtual IP    | Website Name                                       | Blank   |
| Reference             | Drop-down                                          | Empty   |
| Service Type          | HTTP                                               | HTTP    |
| Origin Servers & port | Server IPs with listening port(Ex. 8.8.8.8:80)     | Blank   |

#### Description:

##### **Domain/ Virtual IP**

This field specifies the fully qualified name of the website for protection. Ensure to keep it empty while adding the root domain. Listener with a specific domain name can be respectively configured for protection.

##### **Reference**

This field allows the user to adapt the configurations of an existing listener to the newly created listener with a different sub-domain. It clones the same configuration in the new listener.

##### **Service Type**

This field specifies the type of service for the subdomain i.e. **HTTP**.

##### **Origin Servers**

This field specifies the IP and listening port of the backend server on which load balancing will occur. There can be multiple IP and listening port combinations.

Following configurations can be managed by clicking on the newly added listener name.