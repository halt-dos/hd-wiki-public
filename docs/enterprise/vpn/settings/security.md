---
sidebar_position: 3
---

# Security

---

### Overview

User can set security related configuration under the security tab.

![security](/img/vpn/v8/docs/vpn_security1.png) 

![security](/img/vpn/v8/docs/vpn_security2.png)  


### How to Use:
1. Go to **Stack** > **VPN** > **Settings** > **Security**.  
2. Configure the settings as per requirement.  
3. Click on **Save Changes**  

### Description:

**Connection Limit**  

Specify max allowed connections per milli-second

    Accepted Value: Integer

    Default: 100
```


**Max Client RX Rate**  

Specify maximum allowed incoming bandwidth per client (Kbps)

    Accepted Value: Integer

    Default: 4000
```


**Max Client TX Rate**  

Specify maximum allowed outgoing bandwidth per client (Kbps)

    Accepted Value: Integer

    Default: 40000
```


**Minimum Re-Auth Time**  

Specify list of IPv4 for leasing to connecting clients

    Accepted Value: Integer

    Default: 300
```


**Use SSL for Rekeying**  

Use SSL for re-establishing session keys

    Accepted Value: Enable / Disable

    Default: Enable
```


**Re-validate Connection cipher key**  

Specify interval to refresh cipher keys. Set 0 to disable

    Accepted Value: Integer

    Default: 172800
```


**Predictable IPs**  

Specify to use predictable IP for VPN network

    Accepted Value: Enable / Disable

    Default: Enable
```


**Rekey Method**  

Users can specify maximum allowed connections.  

    Accepted Value: SSL / NEW TUNNEL

    Default: SSL
```


**Max Send Buffer**

Specify max allowed packets in out buffer. Increase for throughput

    Accepted Value: Integer

    Default: 10
```


**Persist Cookie**  
Specify to use persist session cookie

    Accepted Value: Enable / Disable

    Default: Enable
```


**Deny Roaming**

Disables clients from connection from different IP address

    Accepted Value: Enable / Disable

    Default: Disable
```


**Temporary Blacklist Duration**  
Specify duration for which misbehaving clients will be temporarily blocked

    Accepted Value: Integer

    Default: 1200
```


**Temporary Blacklist Threshold Score**  
Specify threshold score before blocking clients temporarily

    Accepted Value: Integer

    Default: 80
```


**Incorrect Password Score**  

Specify the score for failed login attempt. This will be used to compute temporary blacklist score

    Accepted Value: Integer

    Default: 10
```

