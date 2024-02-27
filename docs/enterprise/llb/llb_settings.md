---
sidebar_position: 1
---


# LLB Settings

Setting for Haltdos LLB

---

Link load balancing is a term that refers to the management of the traffic that is initiated within a local network that is destined to go out through one of a set of WAN connections. The link load balancer sits at the LAN-WAN boundary. It will redirect requests coming from the LAN segment that is destined to go out to the public Internet, by directing the traffic onto one of the various WAN connections.

![llbsettings](/img/llb/v8/llb_settings.png)

### **How to Use :**

1. Go to **Apps > LLB**

2. Configure your setiings.

3. Click **Save Changes**

| SETTINGS                     | ACCEPTED VALUES                                | DEFAULT           |
|------------------------------|------------------------------------------------|-------------------|
| Connection Tuple Expiry      | Accepted Values: Integer (Seconds)             | 600               |
| Connectionless Tuple Expiry  | Accepted Values: Integer (Seconds)             | 60                |
| Graceful Period On Startup   | Accepted Values: Integer (Seconds)             | 30                |
| Learning Sampling Percentage | Accepted Values: Integer (Percentage)          | 100               |
| Drop Sampling Percentage     | Accepted Values: Integer (Percentage)          | 100               |
| SSL Renegotiation Threshold  | Accepted Values: Integer (Seconds)             | 0                 |
| Scanning Threshold           | Accepted Values: Integer (Seconds)             | 0                 |

 ### **Description:**

##### **Connection Tuple Expiry**

Tuple refers to a set of five different values that comprise a Transmission Control Protocol/Internet Protocol (TCP/IP) connection. When a tuple is active but is not getting any response we can set ty time for such type of connection tuple. Users can specify the expiry of the connection tuple in seconds.

##### **Connectionless Tuple Expiry**

When this Tuple is based on UDP protocol we can consider it a Connection-less tuple. This time specifies after how much time UDP or ICMP-based tuple should be closed. Users can specify the expiry of the connection-less tuple in seconds.

##### **Graceful Period On Startup**

A grace period on startup is the amount of time required to gracefully start an interface or link a session is being closed.

##### **Learning Sampling Percentage**

It will help users to collect Learning packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos LLB solution collects the sample from the network traffic to learn its behavior.

##### **Drop Sampling Percentage**

It will help users to collect Drop packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos LLB solution collects the sample from the network traffic to analyze the dropped packet behavior.

##### **SSL Renegotiation Threshold**

In this field users can specify the maximum connection allowed to be established in a SSL negotiation. SSL renegotiation threshold value allow the number of connection can be made in one session.

##### **Scanning Threshold**

In this field, users can specify the threshold value in seconds of scanning threshold. The Haltdos LLB solution scan the traffic for defined interval of time for identifying active devices on a network.