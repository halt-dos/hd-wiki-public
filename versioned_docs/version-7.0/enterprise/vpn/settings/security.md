---
sidebar_position: 2
---

# Security

---

### Overview

User can set security related configuration under the security tab.

![security](/img/vpn/v6/docs/security.png)  


### How to Use:
1. Go to **Stack** > **VPN** > **Settings** > **Security**.  
2. Configure the settings as per requirement.  
3. Click on **Save Changes**  


| SETTINGS                             | ACCEPTED VALUES | DEFAULT         |
|--------------------------------------|-----------------|-----------------|
| TLS Settings                         | Drop Down       | Default/ Normal |
| Connection Limit                     | Decimal         | 100             |
| Max Client Tx Rate                   | Decimal         | 40              |
| Max Clinet Rx Rate                   | Decimal         | 40              |
| Minimum Re-Auth Time                 | Decimal         | 300             |
| Use SSL for Rekeying                 | Boolean         | Enable          |
| Temporary Blacklist Duration         | Decimal         |  1200           |
| Temporaray Blacklist Threshold Score | Decimal         | 80              |
| Incorrect Login Threshold            | Decimal         | 10              |


### Description:

**TLS Settings**  
Users can specify allowed TLS settings for negotiation with clients.  

**Connection Limit**  
Users can specify maximum allowed connections.  

**Max Client Rx Rate**  
Users can specify maximum allowed incoming bandwidth per client(kbps).  

**Max Client Tx Rate**  
Users can specify maximum allowed outgoing bandwidth per client(kbps).  

**Minimum Re-Auth Time**  
Users can specify time after which session key will be re-negotiated.  

**Use SSL for Rekeying**  
Users can use SSL for re-establishing session keys.  

**Temporary Blacklist Duration**  
Users can specify the duration for which misbehaving clients will be temporary blocked.  

**Temporary Blacklist Threshold Score**  
Users can specify threshold score before blocking clients temporarily.  

**Incorrect Login Threshold**  
Users can specify the score for failed login attempts.This will be used to compute the temporary blacklist score.  