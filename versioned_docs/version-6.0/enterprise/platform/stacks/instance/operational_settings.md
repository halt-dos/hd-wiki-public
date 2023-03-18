---
sidebar_position: 1
---

# Operational Settings

To configure Haltdos appliance in various operational modes

---

## Overview

Haltdos platform supports multiple modes of operations of various Apps depending upon user requirement and deployment strategy. The appliance can be configured in the following modes:

- Layer 2 mode
    - Bridge
    - Transparent
- Layer 3 mode
    - Reverse Proxy
    - Direct Server Return
    - Out-of-Path mode with BGP Flowspec
- Offline mode
    - TAP / SPAN interface
    - Netflow / IPFIX / SFlow
    - Parsing access logs

![Operational setting](/img/platform/v6/docs/operational_settings1.png)

### How to Use:

1. Go to **Stack > Instances > Instance > Operational**
2. Configure your settings
3. Click Save

| Enable Bypass    | Enable Hardware Bypass on instance   | ENABLED / DISABLED              | DISABLED |
|------------------|--------------------------------------|---------------------------------|----------|
| Operational Mode | Choose the mode of operation         | LAYER 3 / LAYER 2
/ OFFLINE     | LAYER 3  |
| Management IP    | Configure instance management IP     | Integer                         | Blank    |
| Offline Mode     | Choose the mode of offline operation | SPAN / NETFLOW / 
SFLOW / IPFIX | SPAN     |

**High Watermark Threshold**

| PARAMETERS     | ACCEPTED VALUES  | DEFAULT  |
|----------------|------------------|----------|
| Resource       | CPU / RAM / DISK | CPU      |
| Low Watermark  | Integer          | No Value |
| High Watermark | Integer          | No Value |
