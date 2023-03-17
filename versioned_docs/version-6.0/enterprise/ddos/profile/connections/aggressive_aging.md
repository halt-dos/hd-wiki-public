---
sidebar_position: 3
---

# Aggressive Aging

---

The Aggressive aging feature is used to set the age value for non-responsive established & non-established connections.

![](\img\ddos\v6\docs\ddos13.png)

### **How to Use:**

1. **Go to Stack > DDoS > Profile > Connection > -Aggressive Aging**

2. Configure the settings

3. Click on Save Changes

| Parameter                               | Accepted Values | Default |
|-----------------------------------------|-----------------|---------|
| Inbound Aging Enabled                   | Boolen          | 0       |
| Inbound Connection Time Out             | Integer         | 600     |
| Inbound Incomplete Connection Time Out  | Integer         | 30      |
| Outbound Aging Enabled                  | Boolen          | 0       |
| Outbound Connection Time Out            | Integer         | 600     |
| Outbound Incomplete Connection Time Out | Integer         | 30      |

### **Description:**

##### **INBOUND AGING ENABLED**

Enable Connection Timeout

##### **INBOUND CONNECTION TIMEOUT**

Specify the TCP connection timeout

##### **INBOUND INCOMPLETE CONNECTION TIMEOUT**

Specify the half-open TCP connection timeout

##### **OUTBOUND AGING ENABLED**

Enable Connection Timeout

##### **OUTBOUND CONNECTION TIMEOUT**

Specify the TCP connection timeout

##### **OUTBOUND INCOMPLETE CONNECTION TIMEOUT**

Specify the half-open TCP connection timeout