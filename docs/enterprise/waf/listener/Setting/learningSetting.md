---
sidebar_position: 3
---

# Learning Setting
Enable Machine Learning in WAF

---

## Overview

Haltdos’s security is adaptive through automated learning and can make policy recommendations by learning about application behavior, which can make it easier for security teams to manage policies. Administrators retain full control over the activation and deactivation of each ruleset, with the opportunity to screen for false-positive before committing to production.

This module also defends against 0-day attacks by assigning suspicion score to every request based on anomaly based machine learning techniques. The learning requires creation of baseline during normal operations to understand user and application behavior for every URL. Once the baseline has been set, the WAF solution starts to look for anomalous patterns and block malicious 0-day attacks. As an adaptive solution, the learning continues at the set sampling rate to improve the baseline for dynamic web applications.


![Listener Operational Settings](/img/waf/v8/docs/learning.png)  
  
### How to Use:
1. Go to **WAF** > **Listener** > **Settings**.  
2. Configure the settings.
3. Click on Save changes.  

### Description

##### **Learning Mode**
This option specifies the learning mode to enable/disable Machine Learning. When enabled it will start learning the requests and store all the required information and accordingly take action on the request detected malicious.

    Accepted values: LEARNING DISABLED / LEARNING ONLY / LEARN & MITIGATE

    Default: LEARNING DISABLED 

##### **Sampling Rate**
This option allows users to specify the rate of sampling of requests for learning. This allows anomaly based machine learning to generate baseline at the specified sampling rate.  

    Accepted values: Integer

    Default: 10

##### **Trigger Threshold**
Users can specify the minimum number of HTTP requests required per URL to enable learning mitigations. When the threshold is breached then it triggers is turned on for the learn URLs.

    Accepted values: Integer

    Default: 100000 

##### **Error Rate**
Users can specify the maximum allowed error rate from the source IP beyond which the IP is temporarily blacklisted.

    Accepted values: Integer

    Default: 0 

    Metrics: Minutes

##### **Drop Rate**
Users can specify the maximum allowed drop rate from the source IP beyond which the IP is temporarily blacklisted.

    Accepted values: Integer

    Default: 0 

    Metrics: Minutes

##### **IP Prefixes**
Users can specify the list of IPs.

    Accepted values: IP Prefixes 

    Default: Blank
