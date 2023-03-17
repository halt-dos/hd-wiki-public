---
sidebar_position: 5
---

# Traffic Shaping

Traffic shaping is a powerful and flexible way to ensure quality of service and defend against bandwidth-abusing distributed denial-of- service (DDoS) attacks.

---

Traffic shaping is a computer network bandwidth management technique that delays some or all data-gram in line with a traffic profile to improve latency, optimize performance, or increase usable bandwidth for certain types of packets by delaying other types.

It support protocols IPv4, IPv6, TCP, UDP, ICMP, IGMP, DNS, SIP, SNMP, NTP, SMTP, IRC, FTP.

![traffic_shaping](\img\ddos\v6\docs\ddos18.png)

### **How to Use:**

1. **Stack > Resource > DDoS > Profile > Traffic Shaping**

2. Configure the settings.

3. Click on Save Changes

| Settings       | Accepted Values | Default |
|----------------|-----------------|---------|
| Inbound  Rate  | Integer(Mbps)   | 0       |
| Inbound Burst  | Integer(Mbps)   | 0       |
| Outbound Rate  | Integer(Mbps)   | 0       |
| Outbound Burst | Integer(Mbps)   | 0       |

### **Description:**

##### **Inbound Rate**

Specify allowed overall inbound traffic rate

##### **Inbound Burst**

Specify allowed overall inbound traffic burst

##### **Outbound Rate**

Specify allowed overall outbound traffic rate

##### **Outbound Burst**

Specify allowed overall outbound traffic burst