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

![Operational setting](/img/platform/v7/docs/operational_img.png)

### How to Use:

1. Go to **Stack > Instances  > Operational**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS      | DESCRIPTION                                     | ACCEPTED VALUES | DEFAULT         |
|------------------|--------------------------------------|---------------------------------|----------|
| Management IP | Management IP address         | Integer  | Blank
| SSL Engine     | Engine to be used for SSL Offloading  | Drop Down | Software Engine 
| Operational Mode    | Mode of operation     | Drop Don | Inline Mode    |
| CPU Affinity     | CPU affinity for opimization | Integer |Blank | 
| Huge Pages     | Configure Huge Pages for optimization | Integer |Blank | 


**High Watermark Threshold**

| PARAMETERS     | ACCEPTED VALUES  | DEFAULT  |
|----------------|------------------|----------|
| Resource       | CPU / RAM / DISK | CPU      |
| Low Watermark  | Integer          | No Value |
| High Watermark | Integer          | No Value |
