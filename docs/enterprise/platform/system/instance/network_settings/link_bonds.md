---
sidebar_position: 3
---

# Link Bonds

Link Aggregating of Ethernet NICs for high throughput and reliability

---

Aggregating two or more links to achieve one fat link brings a number of advantages, in short more bandwidth. Haltdos appliances (physical or virtual instanes) support Link bonding that combines multiple NICs that are running in Active-Active or Active-Passive scenarios.

![linkbonds](/img/platform/v8/docs/linkBonds.png)

## How to Use:

1. Go to **Stack > Instances > Network > Link Bonds**
2. Configure your settings
3. Click **Save Changes**


### Description

##### **Name**

Enter name for the bond

    Accepted values: String

    Default: Blank 

##### **Group Name**

Enter the group name for the bond

    Accepted values: String

    Default: Blank 

##### **Interfaces**

Select Interface

    Accepted values: String

    Default: Blank 

##### **Mode**

Select Mode

    Accepted values: Balance RR / Active Passive / Balance XOR / Boardcast / Vlan / Balance TLB / Balance TLB

    Default: Balance RR 

##### **LACP Rate**

LACP (Link Aggregation Control Protocol) rate is a setting used in network bonding to control how often LACP packets (LACPDUs) are sent between the devices participating in the link aggregation. 

    Accepted values: Default / Fast / Slow

    Default: Default 

##### **MII Monitoring Interval**

It is used to enter MII Monitoring Interval

    Accepted values: Integer

    Default: 0 

##### **Minimum Links**

It will show the minimum link

    Accepted values: Integer

    Default: 0 

##### **Transmit Hash Policy**

Select Transmit Hash Policy

    Accepted values: DEFAULT / LAYER2 / LAYER34 / LAYER23 / ENCAP23 / ENCAP34

    Default: DEFAULT 

##### **Aggregation Selection Mode**

Select the Aggregation Selection Mode

    Accepted values: DEFAULT / STABLE / BANDWIDTH / COUNT

    Default: DEFAULT 

##### **Slaves Activated**

It is one of the physical network interfaces that is part of the bonded interface.

    Accepted values: Enable / Disable

    Default: Disable 

##### **ARP Interval**

The ARP (Address Resolution Protocol) interval is used to check how frequently ARP requests are sent to check the status of the slave interfaces.

    Accepted values: Integer

    Default: 0 

##### **ARP Targets**

ARP targets are specific IP addresses to which ARP (Address Resolution Protocol) requests are sent to monitor the status and health of the network links.

    Accepted values: String

    Default: Blank 

##### **ARP Validation**

RP (Address Resolution Protocol) validation is a process used in network bonding to ensure the health and connectivity of slave interfaces by sending ARP requests to specified targets. 

    Accepted values: DEFAULT / NONE / ACTIVE / BACKUP / ALL

    Default: DEFAULT 

##### **ARP Verification**

ARP (Address Resolution Protocol) verification in network bonding is a mechanism used to monitor the health and status of network interfaces.

    Accepted values: Select the ARP Verification

    Default: Default

##### **Up Delay**

up delay is a parameter that specifies the amount of time, in milliseconds, to wait before marking a slave interface as up (operational) after it has been detected as being active again.

    Accepted values: Integer

    Default: 0 

##### **Down Delay**

Down delay is a parameter that specifies the amount of time, in milliseconds, to wait before marking a slave interface as down (non-operational) after it has been detected as being inactive or having failed.

    Accepted values: Integer

    Default: 0 

##### **MAC Policy**

MAC policy refers to the method used to distribute outgoing traffic across the bonded slave interfaces based on the MAC (Media Access Control) addresses of the traffic. 

    Accepted values: DEFAULT / NONE / ACTIVE / FOLLOW

    Default: DEFAULT 

##### **Gratuitous ARP Count**

Gratuitous ARP Count in network bonding specifies the number of gratuitous ARP (Address Resolution Protocol) requests that the bonding driver will send when the bonded interface is brought up or when a change occurs in the bond’s configuration. 

    Accepted values: Integer

    Default: 1

##### **Packet Per Slave**

A parameter that specifies the maximum number of packets that should be sent through a single slave interface before switching to another slave.

    Accepted values: String

    Default: 1 

##### **Primary Selection Policy**

It determines how the primary (or active) slave interface is selected and managed within the bonded interface. 

    Accepted values: DEFAULT / ALWAYS / BETER / FAILURE

    Default: DEFAULT 

##### **Reset IGMP**

Time Interval to reset the IGMP(Internet Group Management Protocol)

    Accepted values: Integer

    Default: 0 

##### **Learn Interval**

Shows the Learn Interval

    Accepted values: Integer

    Default: 1 

##### **Default Primary**

Set Default Primary

    Accepted values: String

    Default: Blank 
