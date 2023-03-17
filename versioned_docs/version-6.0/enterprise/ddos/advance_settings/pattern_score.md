---
sidebar_position: 1
---

# Pattern Score

---

### **Overview**

In today’s networks, cyber-attacks cause damage or theft and disrupt services with enormous economic and financial impacts. Software implementations cannot meet performance goals; a combination of software and hardware can be more effective for high-performance pattern matching. Packet content scanning at high speed has become extremely important due to its applications in network security, network monitoring, and traffic management in general. 

Haltdos supports pattern scoring on the behalf of the behavior of the packet.

![](\img\ddos\v6\docs\ddos27.png)

![](\img\ddos\v6\docs\ddos28.png)

### **How to Use:**

1. **Stack > Resource > DDoS > Advance Settings > Pattern Score**

2. Conifgure the settings.

3. Click on Save Changes.

![](\img\ddos\v6\docs\ddos29.png)

| Parameter                        | Accepted Values   | Description                                    |
|----------------------------------|-------------------|------------------------------------------------|
| TCP SYN PACKET WITH NO OPTIONS   | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| OUT OF RANGE MSS                 | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| MSS IN NON-SYN PACKET            | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| WINDOW SCALE IN NON-SYN PACKET   | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| TOP SOURCE PORT TOP TALKER       | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| SOURCE PORT ZERO                 | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| SOURCE PORT OUT OF RANGE         | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| TCP SEQUENCE NUMBER TOP TALKER   | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| TCP SEQUENCE NUMBER ZERO         | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| TCP URGENT POINTER WITHOUT FLAG  | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| TCP ACK NUMBER WITHOUT FLAG      | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| TCP FLAGS TOP TALKER             | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| SUSPICIOUS TCP FLAG COMBINATIONS | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| TCP RESERVED FLAGS               | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| TCP SUSPICIOUS WINDOW SIZE       | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| SOURCE PREFIX TOP TALKER         | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| SUSPICIOUS CHECKSUM              | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| TCP URGENT POINTER TOP TALKER    | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| ICMP DESTINATION TOP TALKER      | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| UDP DESTINATION TOP TALKER       | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS DESTINATION TOP TALKER       | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS ANY QUERY                    | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS BAD ANSWER COUNT             | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS BAD EDNS0 NAME               | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS BAD FLAGS                    | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS BAD LENGTH                   | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS BAD NAMESERVER COUNT         | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS BAD RETURN CODE              | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS EDNS0 WITH DO                | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |
| DNS RARE QUERY TYPE              | LOW, MEDIUM, HIGH | Specify suspicion score as LOW, MEDIUM or HIGH |


![](\img\ddos\v6\docs\ddos30.png)