---
sidebar_position: 0
---

# Operational

To set up the Operational Settings for the particular Listener.

---

## Overview

Operational Setting configure different settings of Listener like the network protocol to be used. User can also configure the listener to work as Recursive DNS, Authoritative DNS or Both. Operational Setting specifies the IP address of the Listener. Basically, Operational enables the user to make custom changes on its DNS.

![operational](/img/gslb/v6/docs/operational.png)

### How to Use:
1. Go to  **Stack** > **GSLB** > **Listener** > **Operational**
2. Configure your settings.
3. Click **Save**.

Configure the following parameters to set up the desired settings:





#### Description

**Protocols**  
Specify the resolution on specific Protocols for e.g. UDP, TCP or TLS.  

**DNS Service Type**  
Specify the DNS Service type  

**Upstream Resolvers**  
Specify the upstream resolver for Recursive DNS. This option only works when DNS service type is set to Rescursive  

**Addresses**  
Specify the list of addresses that should be used in Recursive DNS.  

**Refuse Query with no RD flag**  
Specify to respond with refuse on queries with no RD flag.  

**Domain Filter Files**  
[Domain Filter Files](../domain-filters.md) is a mechanism to introduce a customized policy in Domain Name System servers, so that recursive resolvers return possibly modified results. By modifying a result, access to the corresponding host can be blocked. User can select which Domain Filter Files should be used.  