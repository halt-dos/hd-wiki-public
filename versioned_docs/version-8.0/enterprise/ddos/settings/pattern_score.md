---
sidebar_position: 6
---

# Pattern Score

---

## Overview

Haltdos utilizes advanced packet scoring technology to detect and mitigate threats. Initially, the solution is deployed in learning mode, where it observes traffic patterns and behavior. After about two weeks, it shifts to mitigation mode, leveraging the learned attributes to minimize false positives while adapting to evolving traffic behavior. This continuous learning allows the system to adjust to changes in network traffic, ensuring long-term security.

By scoring each packet based on deep packet inspection and contextual analysis—such as traffic rate, behavior, and request timing—the system assigns lower scores to genuine traffic and higher scores to potential attack traffic. This adaptive traffic shaping prioritizes legitimate traffic while preventing anomalies and attacks, offering near-zero false positives and protection against zero-day threats.

![pattern_score](/img/ddos/v8/ddos_pattern_score_1.png)

### How to Use

1. Go to **Apps > DDoS > Advance Settings > Pattern Score**

2. Configure the settings as per requirement.

3. Click on **Save Changes**.

![pattern_score](/img/ddos/v8/ddos_pattern_score_2.png)

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


Under the packet scoring section, users can configure what kind of severity level should be used while setting up the packet score.
In Haltdos Anti DDoS solution, we provide packet score to all packets those are going through the Anti DDoS solution. We have defined here three categories of packet scoring which can be customizable by the users. User can change the packet scoring mechanism from low, medium and high.
The low level indicates that packet scoring will be start from lower level and 

