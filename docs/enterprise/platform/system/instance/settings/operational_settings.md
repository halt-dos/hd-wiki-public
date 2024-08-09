---
sidebar_position: 2
---

# Operational

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

![Operational setting](/img/platform/v8/docs/operational.png)

### How to Use:

1. Go to **Stack > Instances  > Operational**
2. Configure your settings
3. Click **Save Changes**

**High Watermark Threshold**

| PARAMETERS     | ACCEPTED VALUES  | DEFAULT  |
|----------------|------------------|----------|
| Resource       | CPU / RAM / DISK | CPU      |
| Low Watermark  | Integer          | No Value |
| High Watermark | Integer          | No Value |

### Description:

##### **Management IP**

Configure instance management IP address

    Accepted values: IP

    Default: 2 

##### **Management Port**

Configure instance management port

    Accepted values: Integer

    Default: 9000 

##### **SSL Engine**

Engine to be used for SSL Offloading

    Accepted values: Software Engine / Hardware Engine

    Default: Software Engine 

##### **Operational Mode**

Mode of operation

    Accepted values: Inline Mode / Offline Mode

    Default: Inline Mode 

##### **CPU Affinity**

CPU affinity for opimization

    Accepted values: Integer

    Default: 2 

##### **Huge Pages**

Configure Huge Pages for optimization

    Accepted values: Integer

    Default: 2 

##### **Public Certificate File**

Upload public file

    Accepted values: Choose File

    Default: None 

##### **Intermediate Certificate File**

Upload intermediate file

    Accepted values: Choose File

    Default: None 

##### **CA Bundle File**

Upload CA bundle

    Accepted values: Choose File

    Default: None 

##### **Private Key File**

Upload private file


    Accepted values: Choose File

    Default: None 
