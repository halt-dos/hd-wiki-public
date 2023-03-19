---
sidebar_position: 3
---

# Bot Protection

---

## Overview 

Bot protection protects your device from external malicious activities, authenticate from human activity and protect the customer from brute force login attempt and probing the applications.

![bot_protection](\img\ddos\v7\docs\botprotection.png)

### How to Use

1. Go to **Apps > DDoS > Bot Protection**
2. Configure the settings as per requirement.
3. Click on **Save Changes**

| Parameters                   | Accepted Values  | Type      |
|------------------------------|------------------|-----------|
| Temporary Blacklist Duration | Integer Values   | 0         |
| Failed DNS Request Rate      | Integer Values   | 0         |
| Tor Traffic                  | Drop Down        | No Action |
| Bad Reputation Traffic       | Drop Down        | No Action |

### Description

#### Temporary Blacklist Duration

That time for which misbehaving IP addresses will be suspended.

#### Failed DNS Request Rate

If the rate exceeds this threshold, HaltDos will suspend the source IP for the time specified in Temporary Blacklist Duration.

#### Tor Traffic

Specify the action from the drop-down menu to be performed on incoming TOR Network traffic.

#### Bad Reputation Traffic

Specify the action from the drop-down menu on incoming traffic coming from suspicious IPs.