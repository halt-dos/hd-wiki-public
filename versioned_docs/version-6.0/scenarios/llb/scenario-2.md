# Scenario 2

LLB configuration under different Scenarios

---

Suppose, there is a company ABC which is having an internal network of 192.168.1.0/24. ABC company has two internet connections from two different service providers. one service provider is having static public IP of 131.21.26.35/30 and the second is having a static public IP address 103.25.26.32/32. Apart from this customer also wants to forward the internal traffic in a 75:25 ratio from both of the ISPs.

**Haltdos LLB** is placed in between CPE and PE routers so that data traffic first arrives on **Haltdos LLB** then forwards the traffic to the relevant LAN link as per the policy specified.


![Diagram](/img/llb/v6/scenarios/scenario1-1.png)

### Steps

**Step 1 : Configuration of LAN Connection**

Go to Stack > Instances > Network > Ethernet. The User first needs to configure the LAN interface. Users can refer Ethernet configuration guide.

![Diagram](/img/llb/v6/scenarios/scenario1-2.png)

**Step 2 : Configuration of Static WAN 1 Connection**

Users first need to move to Stack > Instances > Network > Ethernet. Select the WAN port from the link and configure the link as per the requirements. In the case of static WAN, connection users need to configure route and route policies to ensure the proper network connectivity. Users can refer Ethernet configuration guide.
For static WAN IP configuration Users need to mention some route policies which are mentioned below. 
Users first move to the Stack > Instances > Network > Routing Table and create a routing table.

![Diagram](/img/llb/v6/scenarios/scenario1-3.png)

1. **Creating Routes:** User: Users need to create a route policy as per the specified settings.

![Diagram](/img/llb/v6/scenarios/scenario1-5.png)

2. **Creating Routing Policy:** Users will need to move to Stack > Instances > Network > Ethernet and select the WAN interface with static IP and configure the route and routing policies settings as mentioned below.

![Diagram](/img/llb/v6/scenarios/scenario1-6.png)

**Step 4 : Creating Interface groups**

Interface Group is a grouping mechanism of physical Interfaces configured on Link Load Balancer including LAN & WAN. Users can follow the guide for Interface Groups.

![Diagram](/img/llb/v6/scenarios/scenario1-7.png)

**Step 5 : Add the interface to the LLB settings page.**
After adding the interface into the interface group, we need to add an interface into LLB settings. The need to go to Stack > LLB >Settings and click on Add Interface option and fill in details and save changes. Users can also refer to this guide: [LLB Settings](/products/llb/llb_settings).

![Diagram](/img/llb/v6/scenarios/scenario1-8.png)

![Diagram](/img/llb/v6/scenarios/scenario1-9.png)

![Diagram](/img/llb/v6/scenarios/scenario1-10.png)

**Step 6: Configuring SNAT**
The user needs to configure the SNAT so that natting could be performed. The user needs to move to Go to Stack > LLB > Rules > SNAT then configure the SNAT as per the org. requirements. Users can refer to this guide: Source NAT.

![Diagram](/img/llb/v6/scenarios/scenario1-11.png)

In this way, the user can set up the basic [**Haltdos LLB**](/products/llb) configuration with two ISP connections.