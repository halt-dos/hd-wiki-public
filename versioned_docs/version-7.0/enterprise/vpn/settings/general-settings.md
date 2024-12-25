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

#### Description:

**Supported Authentication**  
Users can specify the supported authentication scheme. Users  can  select any one from the list mentioned below:

```
    Accepted values: Username with Password / Client Certificate / Active Directory/LDAP / PAM

    Default: Client Certificate 
```


- **Username with Password**  
- **Client Certificate** - Haltdos allows users to set the client certificate to customize connectivity. Users can add certificates as per need. User can add certificate by clicking on add button, it will redirect user to client certificate page where they can add certificate.  
- **Active Directory/LDAP** - The Lightweight Directory Access Protocol is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an Internet Protocol network.  
- **PAM** - If your system supports Pluggable Authentication Modules (PAM), then Haltdos VPN will take advantage of it to password authenticate its users.  

**Hostname**  
Users are allowed to specify the hostname (eg. vpn.exmaple.com).  

```
    Accepted values: String

    Default: Blank 
```


**Certificate Authority**  
Users are allowed to specify the certificate authority associated with VPN.  

```
    Accepted values: Select Certificate Authority

    Default: Blank 
```


**TCP Listening IP Address**  
Users are allowed to specify the listening virtual IP for TCP based connections.  

```
    Accepted values: IP

    Default: Blank 
```


**TCP Port**  
Users are allowed to specify listening TCP port for VPN connections.  

```
    Accepted values: Integer

    Default: Blank 
```


**UDP Listening IP Address**  
Users are allowed to specify the listening virtual IP for UDP based connections.  

```
    Accepted values: IP

    Default: Blank 
```


**UDP Port**  
Users are allowed to specify listening UDP port for VPN connections.  

```
    Accepted values: Integer

    Default: Blank 
```


**Max Concurrent Clients**  
Users are allowed to set maximum concurrent clients.  

```
    Accepted values: Integer

    Default: Blank 
```


**Max Session Per User**  
Users can specify the maximum sessions per user.  

```
    Accepted values: Integer

    Default: Blank 
```


**Enable MTU**  
Users can enable the MTU discovery.  

```
    Accepted values: Enable / Disable

    Default: Disable 
```


**Enable Compression**  
User can enable data compression.  

```
    Accepted values: Enable / Disable

    Default: Enable 
```


**Minimum Compression Length**  
Users can specify minimum size of packet for compression.

```
    Accepted values: Integer

    Default: Blank 
```

