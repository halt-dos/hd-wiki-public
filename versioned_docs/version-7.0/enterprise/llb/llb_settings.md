---
sidebar_position: 1
---


# LLB Settings

Setting for Haltdos LLB

---

Link load balancing is a term that refers to the management of the traffic that is initiated within a local network that is destined to go out through one of a set of WAN connections. The link load balancer sits at the LAN-WAN boundary. It will redirect requests coming from the LAN segment that is destined to go out to the public Internet, by directing the traffic onto one of the various WAN connections.

![llbsettings](/img/llb/v7/docs/llb_settings.png)

### **How to Use :**

1. Go to **Apps > LLB**

2. Enable **Load Balancing**

3. Configure your setiings.

4. Add Interfaces

5. Click **Save Changes**

| SETTINGS                     | ACCEPTED VALUES                                | DEFAULT           |
|------------------------------|------------------------------------------------|-------------------|
| Enable Load Balancing        | Enables Load Balancing Accepted values: Boolen | False (Mandatory) |
| WAN Algorithm                | Drop Down                                      | Round Robin       |
| Connection Tuple Expiry      | Accepted Values: Integer                       | 10                |
| Connection Less Tuple Expiry | Accepted Values: Integer                       | 10                |
| Interface                    | Drop Down                                      | Empty             |
| Weight                       | Accepted Values: Integer                       | 100(Mandatory)    |


 ### **Description:**

##### **Enable Load Balancing**

This field allows the user to enable or disable the load balancer. By default, It's set on disable.

##### **WAN Algorithm**

This option species the WAN Load Balancing algorithm used to balance the load between multiple WAN links. Users can select the WAN algorithm from the drop-down menu. In Haltdos LLB  users get many WAN algorithms which are mentioned below.

**a) Round Robin:** The administrator assigns a weight to each WAN connection based on criteria of their choosing for their traffic-handling capability. If the WAN 1 connection is twice as better for data communication as WAN 2. then WAN 1 is to be given a double weight value in comparison to WAN 2.

**b) Source IP:** Source IP hash load balancing algorithm that combines source and destination IP addresses of the users and websites to generate a unique hash key. The key is used to allocate the client to a particular server. As the key can be regenerated if the session is broken, the client request is directed to the same server it was using previously.

**c) Bandwidth:** In the least bandwidth method Users are selected based on the WAN Link's bandwidth consumption i.e WAN connection that consumes the high bandwidth is selected (measured in Mbps).

**d) Sessions:** Session load balancing is a dynamic load balancing algorithm where user requests are distributed to the WAN connection with the least number of active connections at the time the user's request is received.

**Connection-Less Tuple Expiry**

When this Tuple is based on UDP protocol we can consider it a Connection-less tuple. This time specifies after how much time UDP or ICMP-based tuple should be closed. Users can specify the expiry of the connection-less tuple in seconds.

##### **Interface**

This option will show a list of all WAN links with their names along with their weight values.

##### **Weight**

This option allows the user to set the weight value for an interface. This is a static numerical weighting. Interface with higher ratings gets more requests sent to them.

![addinginterfaces](/img/llb/v7/docs/adding_interfaces.png)



