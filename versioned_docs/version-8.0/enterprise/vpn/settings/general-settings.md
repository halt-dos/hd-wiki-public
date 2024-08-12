---
sidebar_position: 1
---

# General Settings

---

## Overview

General settings are used to set configure settings like authentications, TCP and UDP IP address as well as port etc.

![settings](/img/vpn/v8/docs/vpn_general.png)   

### How to Use: 
1. First go to **Stack** > **VPN** > **Settings** > **General**.
2. Configure the settings as per your requirements.
3. Click on **Save Changes**.

#### Description:

**Supported Authentication**  
Users can specify the supported authentication scheme. Users  can  select any one from the list mentioned below:
- **Username with Password**  
- **Client Certificate** - Haltdos allows users to set the client certificate to customize connectivity. Users can add certificates as per need. User can add certificate by clicking on add button, it will redirect user to client certificate page where they can add certificate.  
- **Active Directory/LDAP** - The Lightweight Directory Access Protocol is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an Internet Protocol network.  
- **PAM** - If your system supports Pluggable Authentication Modules (PAM), then Haltdos VPN will take advantage of it to password authenticate its users.  

**SSL Certificate**  
Specify SSL certificate for Encryption / Decryption. Reboot Required

    Accepted Value: Add SSL Certificate

    Default: Blank

**TLS Settings**  
Specify allowed TLS settings for negotiation with clients

    Accepted Value: Default/Normal / Support Legacy Client / High Performance /  Secure 256 bit key ciphers / Custom

    Default: Default/Normal

**Enforce DTLS Support**  

Specify to use DTLS for VPN connection.

    Accepted Value: Enable / Disable

    Default: Enable

**Enforce TLS Cipher** 

Specify to enforce TLS cipher for DTLS

    Accepted Value: Enable / Disable

    Default: Enable

**Domain**  
Specify Vpn Domain (eg. vpn.example.com)

    Accepted Value: Enter Domain (string)

    Default: Blank

**Dynamic Hostname**

Enable if hostname has dynamic DNS

    Accepted Value: Enable / Disable

    Default: Enable

**Max Concurrent Clients**

Specify allowed max concurrent clients

    Accepted Value: Integer

    Default: 500

**Max Session Per User**  

Specify max concurrent sessions per user

    Accepted Value: Integer

    Default: 5

**Enable MTU**  

Enable MTU discovery

    Accepted Value: Enable / Disable

    Default: Enable

**MTU Payload Size**  

Specify maximum transmission unit size

    Accepted Value: Integer

    Default: 1420

**Enable Compression**  

Specify enabling data compression

    Accepted Value: Enable / Disable

    Default: Enable

**Minimum Compression Length**  

Specify minimum size of packet for compression

    Accepted Value: Integer

    Default: 256


