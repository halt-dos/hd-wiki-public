---
sidebar_position: 2
---

# DNS

This section helps in stopping different kinds of DNS flood attack.

---

![dns_setting](/img/ddos/v7/docs/dns1.png)

### How to use

1. Go to **Apps > DDoS > Profile > Application Layer**

2. Scroll to **DNS Settings**

3. Configure the settings.

4. Click on **Save Changes**.

| Settings               | Accepted Values | Default |
|------------------------|-----------------|---------|
| Enable DNS Lock Down   | Boolen          | False   |
| DNS Queries Per Source | Integer         | 0       |

### Description

#### Enable DNS Lock down

Specify enabling DNS Lock down where the system only allows valid cached DNS queries to pass through blocking all other DNS queries

#### DNS Queries Per Source

Specify allowed DNS queries per source IP in queries per second