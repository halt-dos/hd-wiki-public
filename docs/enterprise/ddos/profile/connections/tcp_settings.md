---
sidebar_position: 1
---

# TCP Settings

Overview

---

In DDoS connection, you can configure Connection based protocols which will regulate the payload length, number of inbound & outbound connections, out of order drops, TCP ports, FIN time wait, TCP connection Proxy threshold & advertised MSS.

![](/img/ddos/v8/securityprofile_tcp_settings_1.png)

### **How to Use:**

1. **Stack > Resource > DDoS > Profile > Connection**

2. Configure the settings

3. Click on Save Changes

![](/img/ddos/v8/securityprofile_tcp_settings_2.png)

### **TCP Settings:**

| Settings                                | Accepted Values  | Default  |
|-----------------------------------------|------------------|----------|
| TCP                                     | Boolean          | False    |
| Max Inbound Concurrent Connections      | Integer          | 1000000  |
| Max Outbound Concurrent Connections     | Integer          | 1000000  |
| Max Connections Per Source              | Integer          | 0        |
| Inbound Out of order Threshold          | Integer          | 10       |
| Outbound Out of order Threshold         | Integer          | 1000     |
| Window size validation                  | Boolean          | False    |
| Limit Tracking Connections on Ports     | Integer          | Blank    |
| Connection FIN Time Wait                | Integer          | 10       |
| Payload Length Misbehavior Threshold    | Integer          | 0        |
| Minimum payload length                  | Integer          | 0        |
| Minimum Initial Payload Time Window     | Integer          | 0        |
| Minimum Initial Payload Threshold       | Integer          | 0        |

### **Description:**

##### **TCP**

User can Enable/Disable the validation to check for TCP connection. By enabling it Haltdos Anti-DDoS solution will monitor the TCP traffic.

##### **Max Inbound concurrent connections**

User can specify the maximum inbound concurrent TCP connections an application can handle.

##### **Max Outbound concurrent connections**

User can specify the maximum outbound concurrent TCP connections an application can handle

##### **Max Connections Per Source**

User can specify the maximum TCP connections established by any source IP address with the application server, when the application is not under attack. Set 0 to disable mitigation

##### **Inbound Out of order Threshold**

User can specify the maximum number of Out of order TCP packets can be allowed for Inbound traffic

##### **Outbound Out of order Threshold**

User can specify the maximum number of Out of order TCP packets can be allowed for Outbound traffic

##### **Window size validation**

User can Enable/Disable the validation to drop invalid window size header in TCP flow. If the validation is enable Haltdos Anti-DDoS solution monitor the window size header in TCP flow according to configured policies, if not it will bypass it.

##### **Limit Tracking Connections on Ports**

User can specify the TCP port(s) that will be tracked and monitored in network flow. In this filed user can define particular ports need to be monitored, if there is no input Haltdos Anti-DDoS solution will by default monitor every ports.

##### **Connection FIN Time Wait**

User can specify the time duration for tracking TCP connections after graceful termination. This field allows any unsent packets to be transmitted without getting dropped.

##### **Payload Length Misbehavior Threshold**

User can specify the consecutive threshold value to limit the misbehavior of IP address. If an IP address breaches the threshold value that IP will temporarily blacklisted

##### **Minimum payload length**

User can specify the minimum payload length of packets in TCP connection. If any TCP packet breaches the threshold it will trigger the Payload misbehavior mitigation and packet will be dropped

##### **Minimum Initial Payload Time Window**

User can specify the minimum time window(in milli-seconds) for evaluating minimum initial payload threshold

##### **Minimum Initial Payload Threshold**

User can specify the minimum threshold value(bytes) of Initial Payload length for post connection. If the threshold value breaches it will trigger the Initial data timeout mitigation