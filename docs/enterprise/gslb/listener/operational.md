---
sidebar_position: 0
---

# Operational

To set up the Operational Settings for the particular Listener.

---

## Overview

Operational Setting configure different settings of Listener like the network protocol to be used. User can also configure the listener to work as Recursive DNS, Authoritative DNS or Both. Operational Setting specifies the IP address of the Listener. Basically, Operational enables the user to make custom changes on its DNS.

![operational](/img/gslb/v8/operational_settings.png)

### How to Use:
1. Go to  **Apps** > **GSLB** > **Listener** > **Operational**
2. Configure your settings.
3. Click **Save Changes**.

Configure the following parameters to set up the desired settings:

#### Description

**Protocols**  
Specify the resolution on specific Protocols for e.g. UDP, TCP or TLS.

    Accepted values: Specify protocols

    Default: UDP / TCP

**DNS Service Type**  
Specify the DNS Service type 

    Accepted values: Authoritative / Recursive / Auth & Recursive

    Default: Auth & Recursive 

**Upstream Resolvers**  
Specify the upstream resolver for Recursive DNS. This option only works when DNS service type is set to Rescursive  

    Accepted values: String

    Default: Blank 

**Addresses**  
Specify the list of addresses that should be used in Recursive DNS.

    Accepted values: String

    Default: Blank

**Refuse Query with no RD flag**  
Specify to respond with refuse on queries with no RD flag.  

    Accepted values: Enable / Disable

    Default: Disable 

**Domain Filter Files**  
[Domain Filter Files](../domain-filters.md) is a mechanism to introduce a customized policy in Domain Name System servers, so that recursive resolvers return possibly modified results. By modifying a result, access to the corresponding host can be blocked. User can select which Domain Filter Files should be used.  

    Accepted values: Select Domain Filter Files

    Default: Blank

**Addresses**  
Mention Cache Size

    Accepted values: Integer

    Default: 100
 

