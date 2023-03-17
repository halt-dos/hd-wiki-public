---
sidebar_position: 1
---

# General Settings

For inspect the packet

---

General settings evaluates the data part and the header of a packet that is transmitted through an inspection point, weeding out any non-compliance to protocol, spam, viruses, intrusions, and any other defined criteria to block the packet from passing through the inspection point.

![general_setting](\img\ddos\v6\docs\ddos4.png)

### **How to Go:**

1. **Stack > Resource > DDoS > Profile > General Settings**

2. Enable/Disable the settings

3. Click on Save Changes.

| Settings                    | Accepted Values | Default |
|-----------------------------|-----------------|---------|
| Protocols                   | Integer         | Blank   |
| Graceful Startup Period     | Integer         | 30      |
| SSL Renegotiation Threshold | Integer         | 0       |
| Anti-Scanning Threshold     | Integer         | 5       |

### **Description:**

##### **Protocol**

Select the protocol name for inspection of the packets

##### **Graceful Startup Period**

Specify the time till which Connection mitigations trigger will wait before starting mitigation on startup (in seconds)

##### **SSL Renegotiation Threshold**

Users can specify the maximum allowed SSL negotiations in a connection.

##### **Anti-Scanning Threshold**

Users can specify thresholds in pps to block network scanning attempts.