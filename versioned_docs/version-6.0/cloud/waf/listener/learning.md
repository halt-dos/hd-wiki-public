---
sidebar_position: 9
---
# Learning

---

## Overview

HaltDos’s security is adaptive through automated learning and can make policy recommendations by learning about application behavior, which can make it easier for security teams to manage policies. Administrators retain full control over the activation and deactivation of each ruleset, with the opportunity to screen for false-positive before committing to production.

### How to Use:

1.    Go to **WAF > Zones > Listeners > Learning**

2.    Configure your settings. 

3.    Click **Save**. 

| PARAMETERS          | ACCEPTED VALUES | DEFAULT           |
|---------------------|-----------------|-------------------|
| Learning Mode       | Dropdown        | Learning Disabled |
| Sampling Rate       | Integer         | 10                |
| Trigger Threshold   | Integer         | 100000            |
| Error Rate          | Integer         | 5                 |
| Drop Rate           | Integer         | 5                 |


#### Description:

**Learning Mode**: Specify the learning mode to enable/disable Machine Learning. When enabled it will start learning the requests and store all the required information and accordingly take action on the request detected malicious.

**Sampling Rate**: Specify the rate of sampling of requests for learning.

**Trigger Threshold**: Specify the minimum number of HTTP requests required per URL to enable learning mitigations. When the threshold is breached then it triggers mitigations.

**Error Rate**: Specify the maximum allowed error rate from the source IP beyond which the IP is temporarily blacklisted.

**Drop Rate**: Specify the maximum allowed drop rate from the source IP beyond which the IP is temporarily blacklisted.