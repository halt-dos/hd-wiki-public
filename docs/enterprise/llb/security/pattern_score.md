---
sidebar_position: 7
---


# Pattern Score

## Overview

In today’s networks, cyber-attacks cause damage or theft and disrupt services with enormous economic and financial impacts. Software implementations cannot meet performance goals; a combination of software and hardware can be more effective for high-performance pattern matching. Packet content scanning at high speed has become extremely important due to its applications in network security, network monitoring, and traffic management in general. 

Haltdos supports pattern scoring on the behalf of the behavior of the packet.

![pattern_score](/img/llb/v8/llb_pattern_score.png)

### How to Use

1. Go to **Apps > LLB > Security > Pattern Score**

2. Configure the settings as per requirement.

3. Click on **Save Changes**.

![pattern_score](/img/llb/v8/llb_pattern_score_1.png)

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
In Haltdos Link Load Balancer solution, we provide packet score to all packets those are going through the solution. We have defined here three categories of packet scoring which can be customizable by the users. User can change the packet scoring mechanism from low, medium and high.
The low level indicates that packet scoring will be start from lower level and 