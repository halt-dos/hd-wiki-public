---
sidebar_position: 2
---

# BGP
Dynamic routing with Border Gateway Protocol (BGP)

---

Border Gateway Protocol (BGP) is a standardized exterior gateway protocol designed to exchange routing and reachability information among autonomous systems (AS) on the Internet. BGP is classified as a path-vector routing protocol, and it makes routing decisions based on paths, network policies, or rule-sets configured by a network administrator. BGP used for routing within an autonomous system is called Interior Border Gateway Protocol, Internal BGP (iBGP). In contrast, the Internet application of the protocol is called Exterior Border Gateway Protocol, External BGP (eBGP).

Haltdos solution supports dynamic routing over BGP protocol. This section details how to configure Haltdos to support BGP.

![bgp](/img/platform/v8/docs/bgp.png)

## How to Use:

1. Go to **Stack > Instances > Routing > BGP**
2. Configure your settings
3. Click **Save Changes**

### Description

##### Enable

Enable BGP Routing

    Accepted values: Enabled / Disabled

    Default: Disabled 

##### Listening IP	

Configure listening IP

    Accepted values: IP

    Default: Blank 

##### Configuration

Configure the BGP

    Accepted values: String

    Default: Blank 
