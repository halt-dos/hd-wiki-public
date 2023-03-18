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


| SETTINGS                   | ACCEPTED VALUE | DEFAULT |
|----------------------------|----------------|---------|
| Keepalive Timeout          | Decimal        | 32400   |
| Dead Peer Detection        | Decimal        | 90      |
| Dead Mobile Peer Detection | Decimal        | 1800    |
| Authentication Timeout     | Decimal        | 240     |
| Idle Timeout               | Decimal        | 1200    |
| Mobile Idle Timeout        | Decimal        | 2400    |
| Session Timeout            | Decimal        | 86400   |
| Cookie Timeout             | Decimal        | 300     |
| Deny Roaming               | Boolean        | Disable |
| Tunnel All DNS Queries     | Boolean        | Enable  |
| DNS Server                 | IP address     | Blank   |
| IPv4 Lease                 | IP address     | Blank   |
| IPv6 Lease                 | IPv6 address   | Blank   |
| Max Send Buffer            | Decimal        | 10      |
| Enable System Route        | Boolean        | Enable  |

### Description:

**Keepalive Timeout**  
Users can specify keepalive timeout. set 0 is disable.  

**Dead Peer Detection**  
Users can specify timeout threshold for the stale clients.  

**Dead Mobile Peer Detection**  
Users can specify timeout threshold for the stale mobile clients.  

**Authentication Timeout**  
Users can specify timeout for the authentication.  

**Idle Timeout**  
Users can specify idle timeout for the clients. set 0 to disable.  

**Mobile Idle Timeout**  
Users can specify session timeout for the mobile clients.  

**Session Timeout**  
Users can specify session timeout for the clients.  

**Cookie Timeout**  
Users can specify the cookies expiry.  

**Deny Roaming**  
Users can disable clients form connection from different IP address.  

**Tunnel All DNS Queries**  
Users can enable tunneling all DNS queries over VPN.  

**DNS Server**  
Users can specify the list of DNS servers.  

**IPv4 Lease**  
Users can specify list of IPv4 for leasing to connecting clients.  

**IPv6 Lease**  
Users can specify list of IPv6 for leasing to connecting clients.  

**Max Send Buffer**  
Users can specify maximum allowed packets in out buffer.  

**Enable System Route**  
Users can enable advertising VPN server system routes.  