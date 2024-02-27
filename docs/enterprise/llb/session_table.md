---
sidebar_position: 7
---


# Session Table

Setting for Haltdos LLB

---

Session tables provides us information about the traffic that is being moved over the Haltdos LLB device. This feature helps users to get details about the inbound and outbound traffic details. These details contain the timestamp for the traffic movement. Traffic is either generated from the WAN or LA, both can be filtered here.

This tables contain column with timestamp, source IP, source port, destination IP, destination port, type of NAT (SNAT or DNAT) for each and every request.

Session table feature is by default configured in disable mode. To enable, we need to go to **Rules** > **Log Rules**. We need to create a new log rule in order to capture packet information. Users can refer [Log Rules](../llb/rules/snat.md) to configure log rule.

![llbsettings](/img/llb/v8/llb_session_table.png)

### **How to Use :**

1. Go to **Apps > LLB > Session Table**

2. Select **Session Table**.


