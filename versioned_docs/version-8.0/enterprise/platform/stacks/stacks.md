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

**To create a licensed Stack**

Go to **Home > Stacks**

1. Click on Add Stack
2. Disable virtual ADC option
3. Enter valid license Id provided by Haltdos Support team.
4. Click Save Changes. 

**To create a virtual Stack**

Go to **Home > Stacks**

1. Click on Add Stack
2. Enable virtual ADC option for creating a virtual Stack (vADC)
3. Select an existing license that supports vADC.
5. Click Save Changes.

**Stack Subscriptions**

After the creation of the stack, the stack will be subscribed to all Apps issued to the stack. Haltdos provides various Apps like WAF, DDOS, LLB, SCAN, etc. Depending upon the license issued to you, your stack will support the respective features and capabilities. These capabilities may be further restricted based on allowed throughput limit, feature limit depending upon the subscribed license. A stack can support multiple Apps simultaneously. This means that the same stack can support capabilities of DDoS protection (DDoS App), Web Application Firewall (WAF), Server Load Balancer (SLB), etc. - all at the same time.

:::note NOTE:
The limit on your stack depends upon allotted license. These limits can be increased by upgrading your current license. Contact Haltdos Sales or Support for more information.
:::