---
sidebar_position: 1
---

# Networking

---

### Overview

Users are allowed to set network related configurations.

![vpngroup](/img/vpn/v6/docs/networking.png)  
  
![vpngroup](/img/vpn/v6/docs/networking2.png)  


### How to Use:
1. Go to **Stack** > **VPN** > **Settings** > **Networking**.  
2. Configure the settings as per the requirement.  
3. Click on **Save Changes**.  

### Description:

**Keepalive Timeout**  
Users can specify keepalive timeout. set 0 is disable.  

```
    Accepted values: Integer

    Default: 32400 
```


**Dead Peer Detection**  
Users can specify timeout threshold for the stale clients.  

```
    Accepted values: Integer

    Default: 90 
```


**Dead Mobile Peer Detection**  
Users can specify timeout threshold for the stale mobile clients.  

```
    Accepted values: Integer

    Default: 1800 
```


**Authentication Timeout**  
Users can specify timeout for the authentication.  

```
    Accepted values: Integer

    Default: 240 
```


**Idle Timeout**  
Users can specify idle timeout for the clients. set 0 to disable.  

```
    Accepted values: Integer

    Default: 1200 
```


**Mobile Idle Timeout**  
Users can specify session timeout for the mobile clients.  

```
    Accepted values: Integer

    Default: 2400
```


**Session Timeout**  
Users can specify session timeout for the clients.  

```
    Accepted values: Integer

    Default: 86400 
```


**Cookie Timeout**  
Users can specify the cookies expiry.  

```
    Accepted values: Integer

    Default: 300 
```


**Deny Roaming**  
Users can disable clients form connection from different IP address.  

```
    Accepted values: Enable / Disable

    Default: Disable 
```


**Tunnel All DNS Queries**  
Users can enable tunneling all DNS queries over VPN.  

```
    Accepted values: Enable / Disable

    Default: Enable 
```


**DNS Server**  
Users can specify the list of DNS servers.  

```
    Accepted values: IP

    Default: Blank 
```


**IPv4 Lease**  
Users can specify list of IPv4 for leasing to connecting clients.  

```
    Accepted values: IP

    Default: Blank 
```


**IPv6 Lease**  
Users can specify list of IPv6 for leasing to connecting clients.  

```
    Accepted values: IP

    Default: Blank 
```


**Max Send Buffer**  
Users can specify maximum allowed packets in out buffer.  

```
    Accepted values: Integer

    Default: 10 
```


**Enable System Route**  
Users can enable advertising VPN server system routes.

```
    Accepted values: Enable / Disable

    Default: Enable 
```

