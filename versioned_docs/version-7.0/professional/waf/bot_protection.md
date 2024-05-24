---
sidebar_position: 5
---



# Bot Protection 


Detect and Block malicious bots in real-time

---

###  Overview

Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. HaltDos Threat Stream TM provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic.

![bot_protection](/img/pro-waf/docs/bot_protection.png)

### How To Use
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **Bot Protection**
3. Configure the rule and click on save changes.

Configure the following parameters to set up the desired settings:

### Description

##### **Allowed Crawlers**
This field specifies the list of good crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Allowed Crawlers permits the crawlers to access the protected URL. 

    Accepted values: User Agent

    Default: Empty  

    E.g. Google Crawler  

    User-Agent: google  

##### **Bad Crawlers**
Users are allowed to specify the list of bad crawlers by specifying their user agents. Such requests will be dropped.This field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers, their requests will be dropped. Users are allowed to specify the ssl session caching

    Accepted values: User Agent  
    
    Default: Empty  

    E.g. Google Crawler  

    User-Agent: google  

 **Crawlers** refer to automated programs or scripts that browse the web to index content, gather information, or perform other automated tasks. 

##### **Bad Reputation Traffic**

Users are allowed to specifies the action to perform on traffic from suspicious IPs reported by Haltdos Threat Stream TM. Users are allowed to specify the ssl session caching

    Accepted values: NO ACTION / DROP / SEND CHALLENGE

    Default: NO ACTION  

- **NO ACTION** - don't perform any action  