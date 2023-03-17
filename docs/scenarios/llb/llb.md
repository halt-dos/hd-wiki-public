# Link Load Balancers (LLB)

LLB configuration under different Scenarios

---

**Haltdos LLB** is designed to manage traffic over multiple Internet Service Providers (ISP) or Wide Area Network (WAN) links. This enables you to subscribe to or provision multiple links, resulting in reduced risk of outages, additional bandwidth for peak events, and potential cost savings if your ISP uses billing tiers based on bandwidth rate or peak/off-peak hours. It roves Internet availability and response times across networks.  

In most cases, Users configure link load balancing for outgoing traffic. Outbound traffic might be user or server traffic that is routed from your local network through your ISP transit links, leased lines, or other WAN links to destinations on the Internet or WAN. You configure link policies that select the gateway for outbound traffic.
When the Haltdos LLB system receives outbound traffic that matches a source/destination/service tuple that you configure, it forwards it to an outbound gateway link according to system logic and policy rules that you specify.  

Here, we have created some scenarios to understand the basic configuration of the Haltdos LLB device.

[Scenario 1](scenario-1.md)​: Company ABC which is having an internal network of class A private IP addresses. The Company has 2 internet connections from the different service providers. One service provider is having a dynamic public IP address and the other is having a static public IP address.  

[Scenario 2](scenario-2.md)​: Company ABC which is having an internal network of class C private IP addresses. The Company has two internet connections from two different service providers. Both of the service providers are having different static IPs. The user wants to forward the internal traffic in a 75:25 ratio from both of the ISPs.  

[Scenario 3](scenario-3.md)​: Company ABC is having two WAN connections with two different service providers WAN1 & WAN2. Org. also have two LAN network for their internal communication. The user wants his traffic coming from LAN 1 should only be moved from the WAN 2 connection & traffic coming from LAN 2 should only be moved from the WAN 1 connection.  

[Scenario 4](scenario-4.md)​: Company ABC is having two ISPs with different service providers. The users want the traffic of some websites should be moved from the WAN 1 connection and some websites traffic should be moved from the WAN 2 connection.  

[Scenario 5](scenario-5.md)​: Company ABC, which is having two ISPs from two different service providers. The first ISP link is having IP from network 2.2.2.0/28 and other is having network ID of 3.3.3.0/28.The ISP link that is having static IP addresses  (2.2.2.2) handle all the DMZ traffic. Both ISPs are connected with LLB then there's one link which is connected to firewall. 
