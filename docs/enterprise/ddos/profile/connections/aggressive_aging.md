---
sidebar_position: 3
---

# Aggressive Aging

---

The Aggressive aging feature is used to set the age value for non-responsive established & non-established connections.

![aggressive aging](/img/ddos/v7/docs/aggressive_aging.png)

### How to Use

1. Go to **Apps > DDoS > Profile > Connection Settings > Aggressive Aging**

2. Configure the settings.

3. Click on **Save Changes**

| Parameter                               | Accepted Values | Default |
|-----------------------------------------|-----------------|---------|
| Inbound Aging Enabled                   | Boolen          | 0       |
| Inbound Connection Time Out             | Integer         | 600     |
| Inbound Incomplete Connection Time Out  | Integer         | 30      |
| Outbound Aging Enabled                  | Boolen          | 0       |
| Outbound Connection Time Out            | Integer         | 600     |
| Outbound Incomplete Connection Time Out | Integer         | 30      |

### Description

#### Inbound Aging Enabled

Enable Inbound Connection Timeout

#### Inbound Connection Timeout

Specify the TCP inbound connection timeout

#### Inbound Incomplete Connection Timeout

Specify the half-open TCP inbound connection timeout

#### Outbound Aging Enabled

Enable Outbound Connection Timeout

#### Outbound Connection Timeout

Specify the TCP outbound connection timeout

#### Outbound Incomplete Connection Timeout

Specify the half-open TCP outbound connection timeout