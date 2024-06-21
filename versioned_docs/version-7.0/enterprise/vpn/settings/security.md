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

### Description:

**TLS Settings**  
Users can specify allowed TLS settings for negotiation with clients.  

    Accepted values: Integer

    Default: Default/ Normal 

**Connection Limit**  
Users can specify maximum allowed connections.  

    Accepted values: Integer

    Default: 100 

**Max Client Rx Rate**  
Users can specify maximum allowed incoming bandwidth per client(kbps).  

    Accepted values: Integer

    Default: 40 

**Max Client Tx Rate**  
Users can specify maximum allowed outgoing bandwidth per client(kbps).  

    Accepted values: Integer

    Default: 40 

**Minimum Re-Auth Time**  
Users can specify time after which session key will be re-negotiated.  

    Accepted values: Integer

    Default: 300 

**Use SSL for Rekeying**  
Users can use SSL for re-establishing session keys.  

    Accepted values: Enable / Disable

    Default: Enable 

**Temporary Blacklist Duration**  
Users can specify the duration for which misbehaving clients will be temporary blocked.  

    Accepted values: Integer

    Default: 1200 

**Temporary Blacklist Threshold Score**  
Users can specify threshold score before blocking clients temporarily.  

    Accepted values: Integer

    Default: 80 

**Incorrect Login Threshold**  
Users can specify the score for failed login attempts.This will be used to compute the temporary blacklist score.

    Accepted values: Integer

    Default: 10 
