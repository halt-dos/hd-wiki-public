---
sidebar_position: 2
---

# TCP Shield

---

TCP shield is defending mechanism protecting against TCP Flood attacks such as TCP SYN Flood, etc. 

![tcp shield](/img/ddos/v7/docs/35.png)

### **How to Use:**

1. **Stack > Resource > DDoS > Profile > Connection > TCP Shield**

2. Configure the settings

3. Click on Save Changes

| Settings                            | Accepted Values | Default |
|-------------------------------------|-----------------|---------|
| Enable Connection Shield            | Boolen          | False   |
| Connection Shield Trigger Threshold | Integer         | 1000    |
| Connection Shield Advertised Mss    | Integer         | 1460    |

### **Description:**

##### **ENABLE CONNECTION SHIELD**

Enable TCP connection proxy for protecting against TCP Flood attacks such as TCP SYN Flood, etc.

##### **CONNECTION SHIELD TRIGGER THRESHOLD**

If TCP connection proxy is enabled, specify the number of active connections after which the proxy will be enabled for all subsequent connection requests. Set 0 for enabling proxy for all connections.

##### **CONNECTION SHIELD ADVERTISED MSS**

TCP MSS field specified the largest segment size allowed in the connection. This configuration allows users to choose appropriate MSS values for their network.