---
sidebar_position: 1
---

# BGP
Dynamic routing with Border Gateway Protocol (BGP)

---

Border Gateway Protocol (BGP) is a standardized exterior gateway protocol designed to exchange routing and reachability information among autonomous systems (AS) on the Internet. BGP is classified as a path-vector routing protocol, and it makes routing decisions based on paths, network policies, or rule-sets configured by a network administrator. BGP used for routing within an autonomous system is called Interior Border Gateway Protocol, Internal BGP (iBGP). In contrast, the Internet application of the protocol is called Exterior Border Gateway Protocol, External BGP (eBGP).

Haltdos solution supports dynamic routing over BGP protocol. This section details how to configure Haltdos to support BGP.

![bgp](/img/platform/v6/docs/bgp1.png)

### How to Use:

1. Go to Stack > Instances > Instance > Routing > BGP
2. Configure your settings
3. Click Save Changes

| PARAMETERS    | DESCRIPTION        | ACCEPTED VALUES    | DEFAULT  |
|---------------|--------------------|--------------------|----------|
| Enable        | Enable BGP Routing | ENABLED / DISABLED | DISABLED |
| Listening IP  | Listening IP       | IP String          | Empty    |
| Configuration | Configure the BGP  | String             | Blank    |



