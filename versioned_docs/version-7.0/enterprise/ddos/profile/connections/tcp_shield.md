---
sidebar_position: 2
---

# TCP Shield

---

TCP shield is defending mechanism protecting against TCP Flood attacks such as TCP SYN Flood, etc. 

![tcp shield](/img/ddos/v7/docs/tcpshield1.png)

### **How to Use:**

1. **Stack > Resource > DDoS > Profile > Connection > TCP Shield**

2. Configure the settings

3. Click on Save Changes

### **Description:**

##### **ENABLE CONNECTION SHIELD**

Enable TCP connection proxy for protecting against TCP Flood attacks such as TCP SYN Flood, etc.

    Accepted values: Enable / Disable
    
    Default: 1000

##### **CONNECTION SHIELD TRIGGER THRESHOLD**

If TCP connection proxy is enabled, specify the number of active connections after which the proxy will be enabled for all subsequent connection requests. Set 0 for enabling proxy for all connections.

    Accepted values: Integer
    
    Default: 1000

##### **CONNECTION SHIELD ADVERTISED MSS**

TCP MSS field specified the largest segment size allowed in the connection. This configuration allows users to choose appropriate MSS values for their network.

    Accepted values: Integer
    
    Default: 1460
