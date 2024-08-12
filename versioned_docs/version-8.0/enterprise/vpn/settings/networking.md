---
sidebar_position: 2
---

# Networking

---

### Overview

Users are allowed to set network related configurations.

![vpngroup](/img/vpn/v8/docs/vpn_network1.png)  
  
![vpngroup](/img/vpn/v8/docs/vpn_network2.png)  


### How to Use:
1. Go to **Stack** > **VPN** > **Settings** > **Networking**.  
2. Configure the settings as per the requirement.  
3. Click on **Save Changes**.  

### Description:

**TCP Listening IP Address**  

Specify listening Virtual IP for TCP based connections

    Accepted Value: Ip

    Default: Blank

**TCP Port**  

Specify listening TCP port for VPN connections

    Accepted Value: String

    Default: 445

**Enable Proxy Protocol**  

Enable proxy protocol for TCP
 
    Accepted Value: Enable / Disable

    Default: Enable

**UDP Listening IP Address**  

Specify listening Virtual IP for UDP based connections

    Accepted Value: Integer

    Default: Blank

**UDP Port**  

Specify listening UDP port for VPN connections. Set 0 to disable

    Accepted Value: Integer

    Default: 445

**Keepalive Timeout**  

Specify keepalive timeout. Set 0 to disable

    Accepted Value: Integer

    Default: 3240

**Dead Peer Detection**

Specify timeout threshold for stale clients

    Accepted Value: Integer

    Default: 90

**Dead Mobile Peer Detection**  

Specify timeout threshold for stale mobile clients

    Accepted Value: Integer

    Default: 1800

**TCP Upgrade Timeout**  

Upgrade DTLS connection to TLS if no UDP traffic received for specific time.

    Accepted Value: Integer

    Default: 25

**Authentication Timeout**  

Specify timeout for authentication

    Accepted Value: Integer

    Default: 240

**Idle Timeout**  

Specify idle timeout for clients. Set 0 to disable

    Accepted Value: Integer

    Default: 1200

**Session Timeout**  
Specify session timeout for clients

    Accepted Value: Integer

    Default: 86400

**Mobile Idle Timeout**  
Specify session timeout for mobile clients

    Accepted Value: Integer

    Default: 2400

**Minimum Re-auth Time**  

Specify minimum re-auth time

    Accepted Value: Integer

    Default: 300

**Cookie Timeout**  

Specify cookie expiry

    Accepted Value: Integer

    Default: 300

**Tunnel All DNS queries**  

Enable tunneling all DNS queries over VPN

    Accepted Value: Enable / Disable

    Default: Enable

**DNS Servers**  

Specify list of DNS servers

    Accepted Value: Integer

    Default: Blank

**NBN Servers**  

Specify list of NBN Servers

    Accepted Value: Integer

    Default: Blank

**IPv4 Lease**  

Specify list of IPv4 for leasing to connecting clients

    Accepted Value: Integer

    Default: Blank

**IPv6 Lease**  

Specify list of IPv6 for leasing to connecting clients

    Accepted Value: Integer

    Default: Blank

**Enable System Routes**  

Enable advertising VPN server system routes
 
    Accepted Value: Enable / Disable

    Default: Enable
