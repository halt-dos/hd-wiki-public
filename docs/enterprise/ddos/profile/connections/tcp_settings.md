---
sidebar_position: 1
---

# TCP Settings

Overview

---

In DDoS connection, you can configure Connection based protocols which will regulate the payload length, number of inbound & outbound connections, out of order drops, TCP ports, FIN time wait, TCP connection Proxy threshold & advertised MSS.

![](/img/ddos/v7/docs/tcpsetting.png)

### **How to Use:**

1. **Stack > Resource > DDoS > Profile > Connection**

2. Configure the settings

3. Click on Save Changes

![](/img/ddos/v7/docs/tcpsetting1.png)

### **TCP Settings:**

| Settings                                | Accepted Values  | Default  |
|-----------------------------------------|------------------|----------|
| TCP                                     | Boolean          | False    |
| Max Inbound concurrent connections      | Integer          | 1000000  |
| Max Outbound concurrent connections     | Integer          | 1000000  |
| Max Connections Per Source              | Integer          | 0        |
| Out of order drops                      | Integer          | False    |
| Window size validation                  | Boolean          | False    |
| Payload Length Misbehaviour Threshold   | Integer          | 0        |
| Minimum payload length                  | Integer          | 0        |
| Allow beyond max connections            | Boolean          | False    |
| Limit Tracking Connections on Ports     | Integer          | Blank    |
| Connection FIN Time Wait                | Integer          | 10       |
| Connection proxy                        | Boolean          | False    |
| Connection proxy trigger threshold      | Integer          | 0        |
| Connection proxy advertised MSS         | Integer          | 1460     |

### **Agressive AGING**

![tcp_aging](/img/ddos/v7/docs/tcp_aging.png)

### **Description:**

##### **TCP**

Enable/Disable validation checks for IPv4/ IPv6 packets

##### **Payload Length Misbehaviour Threshold**

Specify the threshold limit for misbehaviour. IP address breaching the threshold is temporarily blacklisted

##### **Minimum payload length**

Specify minimum payload length of packets in TCP connection

##### **Allow beyond max connection**

Specify if new TCP flows should be allowed beyond the max

##### Note:- If Enabled, the new flows beyond the limit will not be tracked

##### **Max Inbound concurrent connections**

Sets the maximum inbound concurrent TCP connections to allow

##### **Max Outbound concurrent connections**

Sets the maximum outbound concurrent TCP connections to allow

##### **Max Connections Per Source**

Specify the max concurrent connections from a single source IP address

##### **Out of order drops**

Specify if system should drop TCP packets not belonging to a TCP flow

##### **Window size validation**

Specify if system should drop invalid window size header in TCP flow

##### **Graceful Startup period**

Specify the time till which Connection mitigations trigger will wait before starting mitigation on startup (in seconds)

##### **Limit Tracking Connections on Ports**

Specify TCP port(s) that will be tracked for flow monitoring

##### **Connection FIN Time Wait**

This field specifies the time duration for tracking TCP connections after graceful termination. This allows any unsent packets to be transmitted without getting dropped

##### **Connection proxy**

Enable TCP connection proxy for protecting against TCP Flood attacks such as TCP SYN Flood, etc

##### **Connection Proxy Trigger Threshold**

Specify the number of concurrent flows beyond with Connection Proxy should be enabled for subsequent concurrent TCP flows

##### Note:  Applicable only when Connection Proxy is enabled

##### **Connection proxy advertised MSS**

Specify the connection proxy advertised MSS

##### **Aggressive Aging Settings:**

| Settings                       | Accepted Values | Default |
|--------------------------------|-----------------|---------|
| Aging Enable                   | Boolen          | False   |
| Connection Time Out            | Integer         | 30      |
| Incomplete Connection Time Out | Integer         | 30      |

### **Description:**

##### **Aggresive Aging Settings**

##### **Aging Enabled**

Enable Aggressive Aging for protecting against TCP Connection flood attacks

##### **Connection Timeout**

Time after which the established inbound TCP connection will be considered stale and will be scheduled for deletion

##### **Incomplete connection timeout**

Specify the half open TCP connection timeout