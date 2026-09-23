---
sidebar_position: 7
---


# Pattern Score

## Overview

Haltdos utilizes advanced packet scoring technology to detect and mitigate threats. Initially, the solution is deployed in learning mode, where it observes traffic patterns and behavior. After about two weeks, it shifts to mitigation mode, leveraging the learned attributes to minimize false positives while adapting to evolving traffic behavior. This continuous learning allows the system to adjust to changes in network traffic, ensuring long-term security.

By scoring each packet based on deep packet inspection and contextual analysis—such as traffic rate, behavior, and request timing—the system assigns lower scores to genuine traffic and higher scores to potential attack traffic. This adaptive traffic shaping prioritizes legitimate traffic while preventing anomalies and attacks, offering near-zero false positives and protection against zero-day threats.

![pattern_score](/img/llb/v8/llb_pattern_score.png)

![pattern_score](/img/llb/v8/llb_pattern_score_1.png)

### How to Use

1. Go to **Apps > LLB > Security > Pattern Score**

2. Configure the settings as per requirement.

3. Click on **Save Changes**.

Under the packet scoring section, users can configure what kind of severity level should be used while setting up the packet score.
In Haltdos Link Load Balancer solution, we provide packet score to all packets those are going through the solution. We have defined here three categories of packet scoring which can be customizable by the users. User can change the packet scoring mechanism from low, medium and high.
The low level indicates that packet scoring will be start from lower level.

### **Description:**

##### **TCP SYN PACKET WITH NO OPTIONS**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **OUT OF RANGE MSS**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **MSS IN NON-SYN PACKET**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **WINDOW SCALE IN NON-SYN PACKET**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TOP SOURCE PORT TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **SOURCE PORT ZERO**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **SOURCE PORT OUT OF RANGE**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TCP SEQUENCE NUMBER TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TCP SEQUENCE NUMBER ZERO**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TCP URGENT POINTER WITHOUT FLAG**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TCP ACK NUMBER WITHOUT FLAG**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TCP FLAGS TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **SUSPICIOUS TCP FLAG COMBINATIONS**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TCP RESERVED FLAGS**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TCP SUSPICIOUS WINDOW SIZE**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


#### **SOURCE PREFIX TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


#### **SUSPICIOUS CHECKSUM**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TCP URGENT POINTER TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **ICMP DESTINATION TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **SOURCE PREFIX TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **SUSPICIOUS CHECKSUM**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **TCP URGENT POINTER TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **ICMP DESTINATION TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```
    
##### **UDP DESTINATION TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **DNS DESTINATION TOP TALKER**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **DNS ANY QUERY**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


#### **DNS BAD ANSWER COUNT**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


#### **DNS BAD EDNS0 NAME**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **DNS BAD FLAGS**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **DNS BAD LENGTH**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **DNS BAD NAMESERVER COUNT**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **DNS BAD RETURN CODE**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **DNS EDNS0 WITH DO**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```


##### **DNS RARE QUERY TYPE**

Specify suspicion score as LOW, MEDIUM or HIGH

```
    Accepted values: LOW / MEDIUM / HIGH

    Default: LOW
```

