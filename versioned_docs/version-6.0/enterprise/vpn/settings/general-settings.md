---
sidebar_position: 0
---

# General Settings

---

## Overview

General settings are used to set configure settings like authentications, TCP and UDP IP address as well as port etc.

![settings](/img/vpn/v6/docs/general1.png)  

![settings](/img/vpn/v6/docs/general2.png)  

### How to Use: 
1. First go to **Stack** > **VPN** > **Settings** > **General**.
2. Configure the settings as per your requirements.
3. Click on **Save Changes**.


| SETTINGS                  | ACCEPTED VALUES | DEFAULT |
|---------------------------|-----------------|---------|
| Supported Authentication  | Drop Down       | Blank   |
| Hostname                  | String          | Blank   |
| Certificate Authority     | Dropdown        | Blank   |
| TCP Listening IP Address  | IP Address      | Blank   |
| TCP Port                  | Decimal         | 443     |
| UDP Listening IP Address  | IP Address      | Blank   |
| UDP Port                  | Decimal         | 443     |
| Max Concurrent Clients    | Decimal         | 500     |
| Max Session Per User      | Decimal         | 5       |
| Enable MTU                | Boolean         | Disable |
| Enable Compression        | Boolean         | Enable  |
| Minium Compression Length | Decimal         | 256     |


#### Description:

**Supported Authentication**  
Users can specify the supported authentication scheme. Users  can  select any one from the list mentioned below:
- **Username with Password**  
- **Client Certificate** - Haltdos allows users to set the client certificate to customize connectivity. Users can add certificates as per need. User can add certificate by clicking on add button, it will redirect user to client certificate page where they can add certificate.  
- **Active Directory/LDAP** - The Lightweight Directory Access Protocol is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an Internet Protocol network.  
- **PAM** - If your system supports Pluggable Authentication Modules (PAM), then Haltdos VPN will take advantage of it to password authenticate its users.  

**Hostname**  
Users are allowed to specify the hostname (eg. vpn.exmaple.com).  

**Certificate Authority**  
Users are allowed to specify the certificate authority associated with VPN.  

**TCP Listening IP Address**  
Users are allowed to specify the listening virtual IP for TCP based connections.  

**TCP Port**  
Users are allowed to specify listening TCP port for VPN connections.  

**UDP Listening IP Address**  
Users are allowed to specify the listening virtual IP for UDP based connections.  

**UDP Port**  
Users are allowed to specify listening UDP port for VPN connections.  

**Max Concurrent Clients**  
Users are allowed to set maximum concurrent clients.  

**Max Session Per User**  
Users can specify the maximum sessions per user.  

**Enable MTU**  
Users can enable the MTU discovery.  

**Enable Compression**  
User can enable data compression.  

**Minimum Compression Length**  
Users can specify minimum size of packet for compression.  