---
sidebar_position: 3
---

# Bot Protection


## Overview 

Bot protection protects your device from external malicious activities, authenticate from human activity and protect the customer from brute force login attempt and probing the applications.

![bot_protection](/img/ddos/v8/ddos_bot_protection.png)

### How to Use

1. Go to **Apps > DDoS > Bot Protection**
2. Configure the settings as per requirement.
3. Click on **Save Changes**


### Description

#### Temporary Blacklist Duration

This option allows users to configure the time period for which misbehaving IP addresses will be suspended.

    Accepted values: Integer

    Default: Blank

    Metrics: Seconds

#### Failed DNS Request Rate

This option, when enabled, helps users to safeguard against DNS based attack in which users tried to send non-existing domains resolving queries. If the rate exceeds this threshold, Haltdos will suspend the source IP for the time specified in Temporary Blacklist Duration.

    Accepted values: Integer

    Default: 0

#### Tor Traffic

This option allows users to specify the action from the drop-down menu to be performed on incoming TOR Network traffic. There are 4 actions that can be performed for the traffic generated from the Tor gateways;

    Accepted values: No Action / Record / Add Suspicion / Drop

    Default: Record

1. **No Action:** This option will be performed for the TOR traffic.
2. **Record:** This option will record all request coming from TOR IPs
3. **Add Suspicion:** This option will add suspicion for the packet, which will increase the packet scoring. The higher the packet score will tends to high chance of blocking that traffic.
4. **Drop:** This option will drop all the TOR traffic.


#### Bad Reputation Traffic

This option allows users to specify the action from the drop-down menu on incoming traffic coming from suspicious IPs. There are 4 actions that can be performed for the traffic generated from bad reputation sources;

    Accepted values: No Action / Record / Add Subscription / Drop

    Default: Record
    
1. **No Action:** This option will be performed for the TOR traffic.
2. **Record:** This option will record all request coming from TOR IPs
3. **Add Suspicion:** This option will add suspicion for the packet, which will increase the packet scoring. The higher the packet score will tends to high chance of blocking that traffic.
4. **Drop:** This option will drop all the TOR traffic.
