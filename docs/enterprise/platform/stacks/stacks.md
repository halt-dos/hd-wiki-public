---
sidebar_position: 0
pagination_prev: null
---

# Stacks

---

## Overview

Think of a Stack as a collection of services and settings that you create for a project or website. Many customers use just one Stack. If you manage multiple web properties that you'd like to track separately or require a different set of tools, then creating multiple stacks is the way to go.

Stacks form the basis for creating, enabling, and using all Haltdos services including managing APIs, enabling billing, adding and removing collaborators, and managing permissions for your resources.

---

## Stack Creation 

A stack is equivalent to a license in the traditional appliance. Based on the provided license on your Haltdos appliance, appropriate stack would be configured. If your license includes virtual ADC, you can create your own vADC stack. If you are using Haltdos Centralized Management solution, you can manage multiple stacks as well.


This page displays list of all Stacks along with their Stack ID, Stack Type, Status, Enabled ot not, Expiry Date, and Actions.

### Create Stack

![Create Stack](/img/platform/v8/docs/sysCreateStack.png)

#### Stack Name

```
    Accepted values: String

    Default: Blank
```

#### Stack Type

```
    Accepted values: DEDICATED

    Default: DEDICATED
```

#### Enable Stack ID

```
    Accepted values: Enable / Disable

    Default: Disable
```

#### Stack ID

A random Stack ID is generated.

#### Expiry

```
    Accepted values: Date

    Default: Blank
```

#### Apps

```
    Accepted values: ADC / DNS / CDN / SCAN / SLB

    Default: Blank
```

#### Throughput

```
    Accepted values: Integer in Mbps

    Default: Blank
```

### Actions

Actions that can be performed are-
1. Fetch Stack License.
2. Edit Stack - Stack Name, Expiry, Throughput can be changed.
3. Delete Stack.

## Stack Subscriptions

After the creation of the stack, the stack will be subscribed to all Apps issued to the stack. Haltdos provides various Apps like WAF, DDOS, LLB, SCAN, etc. Depending upon the license issued to you, your stack will support the respective features and capabilities. These capabilities may be further restricted based on allowed throughput limit, feature limit depending upon the subscribed license. A stack can support multiple Apps simultaneously. This means that the same stack can support capabilities of DDoS protection (DDoS App), Web Application Firewall (WAF), Server Load Balancer (SLB), etc. - all at the same time.

:::note NOTE:
The limit on your stack depends upon allotted license. These limits can be increased by upgrading your current license. Contact Haltdos Sales or Support for more information.
:::