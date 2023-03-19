---
sidebar_position: 4
---

# SSL Offloading

---

In addition to DDoS mitigation, the Offload mechanism can be used for features like SSL offloading, WAF, DNS Server Protection, just add the TCP/UDP stream specifying the server IP, Source port and Destination port.

![offload_stream](\img\ddos\v6\docs\ddos23.png)

### **How to Use:**

1. **Stack > Resource > DDoS > Profile > Offload**

2. Add Offload with specific configuration required.

3. Click on Save Changes

| Settings      | Accepted Values | Default |
|---------------|-----------------|---------|
| Server IP     | String          | Blank   |
| Listening IP  | String          | Blank   |
| Forwarding IP | String          | Blank   |

### **Description:**

##### **Server IP**

Specify the IP address

##### **Listening Port**

Specify listening port for offloading

##### **Forwarding Port**

Specify forwarding port for offloading