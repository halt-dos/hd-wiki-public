# Scenario 3

LLB configuration under different Scenarios

--- 
Suppose, Org. is having two WAN connections with two different service providers WAN1 & WAN2. WAN 1 is having a DHCP configuration and other WAN 2 is having static WAN IP. Org. also has two LAN networks for their internal communication. The user wants his traffic coming from LAN 1 should only be moved from the WAN 2 connection & traffic coming from LAN 2 should only be moved from the WAN 1 connection.

For example, WAN 2 is having DHCP configured and WAN 1 is having a static IP configuration of 145.23.36.36/30 . The client is using network 10.0.0.0/24 in LAN 1 and 192.168.1.0/24 in LAN 2.


![Diagram](/img/llb/v6/scenarios/scenario3-1.png)

The user wants his traffic from LAN 1 should be moved from WAN 2 and traffic from LAN 2 should be moved from LAN 1.

As per the previous scenarios, we have already discussed how can one configure WAN/LAN links ( Refer Scenario 1 & Scenario 2 )

The user wants to move traffic from LAN 1 to WAN 2 & traffic from LAN 2 should be moved from WAN 1.

### Steps

**Step 1 : Create a fixed routing rule**

As per the requirements we need to create a policy-based rule to move LAN 1 traffic from the WAN 2 outgoing interface and one policy-based rule to move LAN 2 traffic from WAN. Users can refer to the Policy Routing guide.

![Diagram](/img/llb/v6/scenarios/scenario3-2.png)

![Diagram](/img/llb/v6/scenarios/scenario3-3.png)


In this way, the user can set up the basic Haltdos LLB with 2 LANs and 2 WANs. The traffic from LAN is moving through WAN 2 and traffic from LAN 2 is moving through WAN 1.

