---
sidebar_position: 2
---

# Interface Groups

WAN Interfaces Settings 

---

Interface Group is a grouping mechanism of physical Interfaces configured on Link Load Balancer including LAN & WAN. Users can create, modify, delete interface groups, and set desired monitor types for each interface group.

High availability (HA) is the ability of a system to operate continuously without failure for a designated period of time. HA works to ensure a system meets an agreed-upon operational performance level. High availability (HA) is usually required in a system where there is high demand for a little downtime. Haltdos LLB has the option of a logical grouping of physical interfaces for a highly available WAN connectivity structure.

![adding_an_interface](/img/llb/v7/docs/interfaces.png)

### **How to Use:**

1. Go to **Apps > LLB > Interfaces**.

2. Configure your settings.

3. Click **Save**.

**Configurethe following parameters to set up the desired settings:**

### **Description:**

##### **Group Name**

It allows the user to add a Group Name.

    Accepted values: String

    Default: Blank 

##### **Physical Interfaces**

This option allows the user to select the Physical Interfaces

    Accepted values: Select the Physical Interfaces

    Default: Blank

##### **Monitor Type**

It allows the user to select the rule to monitor the terrific. This monitor rule can be added from **Monitors**.

    Accepted values: Select Monitor type

    Default: Blank 
