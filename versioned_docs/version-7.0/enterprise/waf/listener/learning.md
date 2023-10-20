---
sidebar_position: 12
---

# Learning
Enable Machine Learning in WAF

---

### Overview 

Haltdos’s security is adaptive through automated learning and can make policy recommendations by learning about application behavior, which can make it easier for security teams to manage policies. Administrators retain full control over the activation and deactivation of each ruleset, with the opportunity to screen for false-positive before committing to production.

This module also defends against 0-day attacks by assigning suspicion score to every request based on anomaly based machine learning techniques. The learning requires creation of baseline during normal operations to understand user and application behavior for every URL. Once the baseline has been set, the WAF solution starts to look for anomalous patterns and block malicious 0-day attacks. As an adaptive solution, the learning continues at the set sampling rate to improve the baseline for dynamic web applications.

![learning](/img/waf/v7/docs/learning.png)

### How to Use:

1. Go to **WAF** > **Listeners** > **Learning**
2. To configure your settings. 
3. Click **Save Changes**.

| Parameter | Accepted Values| Default
| ----------- | ----------- |--------|
| Learning Mode|Drop-down|Learning Disabled
Sampling Rate|Integer|10
Trigger Threshold |Integer|100000
Error Rate|Integer|5
Drop Rate|Integer|5
IP Prefixes|Integer|Blank

### Description:

##### **Learning Mode**

This option specifies the learning mode to enable/disable Machine Learning. When enabled it will start learning the requests and store all the required information and accordingly take action on the request detected malicious.

##### **Sampling Rate**

This option allows users to specify the rate of sampling of requests for learning. This allows anomaly based machine learning to generate baseline at the specified sampling rate.

##### **Trigger Threshold**

Users can specify the minimum number of HTTP requests required per URL to enable learning mitigations. When the threshold is breached then it triggers is turned on for the learn URLs.

##### **Error Rate**

Users can specify the maximum allowed error rate from the source IP beyond which the IP is temporarily blacklisted.

##### **Drop Rate**

Users can specify the maximum allowed drop rate from the source IP beyond which the IP is temporarily blacklisted.

##### **IP Prefixes**

Users can specify the list of IPs.