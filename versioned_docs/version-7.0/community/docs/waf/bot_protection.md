---
sidebar_position: 3
---
# Bot Protection

### Overview
Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. HaltDos Threat Stream TM provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic.

![Bot Protection](/img/ce-waf/docs/bot_protection.png)

### How To Use

1. Go to **WAF** > **Bot Protection**
2. Configure your setting
3. Click on save changes.

### Description

#### Allowed Crawlers
Specify the list of good crawlers by specifying their user agents. Such requests will be allowed.
Users are allowed to specify the ssl session caching

    Accepted values: User Agent 

    Default: Blank  

#### Bad Crawlers
Users are allowed to specify the list of bad crawlers by specifying their user agents. Such requests will be dropped.This field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers, their requests will be dropped.
Users are allowed to specify the ssl session caching

    Accepted values: User Agent 

    Default: Blank  

#### Bad Reputation Traffic
Users are allowed to specifies the action to perform on traffic from suspicious IPs reported by Haltdos Threat Stream TM.
Users are allowed to specify the ssl session caching

    Accepted values: NO ACTION / DROP

    Default: No Action  

