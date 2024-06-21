---
sidebar_position: 5
---

# SSL Offloading

---

In addition to DDoS mitigation, the Offload mechanism can be used for features like SSL offloading, WAF, DNS Server Protection, just add the TCP/UDP stream specifying the server IP, Source port and Destination port.

![offload_stream](\img\ddos\v7\docs\ssloffloading.png)

### How to Use

1. Go to **Apps > DDoS > SSL Offloading**

2. Add **Offload Stream** with specific configuration required

3. Click on **Save Changes**.

![offload_stream](\img\ddos\v7\docs\ssloffloading1.png)

### Description

##### **Virtual IP**

Users need to add the virtual IP address on which traffic will be received. This IP will be checked for all inbound traffic whether the request has this VIP in their destination IP location or not.

    Accepted values: String

    Default: Blank 
