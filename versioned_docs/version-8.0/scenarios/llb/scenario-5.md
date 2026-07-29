# Scenario 5

LLB configuration under different Scenarios

---

Suppose, there is a organization which is having two ISPs from two different service providers. The first ISP link is having IP from network 2.2.2.0/28 and other is having network ID of 3.3.3.0/28.The ISP link that is having static IP addresses  (2.2.2.2) handle all the DMZ traffic.
Both ISPs are connected with LLB then there's one link which is connected to firewall. The connectivity between firewall and LLB have network of 172.16.2.0/16, firewall has IP 172.16.2.10 and 172.16.2.20 which respectively forward traffic to DMZ and LAN. 

Firewall later connected with DMZ and LAN network which have their own networks respectively 192.168.100.0/24 and 172.16.10.0/16.

![Diagram](/img/llb/v6/scenarios/scenario6-1.png)

### Steps to Configure

1. **Port IP Configuration:** 
We need to configure 1 port as per mentioned diagram. WAN ports will be configured as static ports with static route and policies. LAN ports can be configured for mentioned IP without configuring any static route or policies.

 - **WAN 1 IP Configuration:**
We need to go to Stack > Instance > Network > Ethernet and select the interface. Now, we can configure IP address, name-server and other details as per our requirement.

![Diagram](/img/llb/v6/scenarios/scenario6-2.png)

 - **WAN 2 IP Configuration:**
We need to go to Stack > Instance > Network > Ethernet and select the interface. Now, we can configure IP address, name-server and other details as per our requirement.

![Diagram](/img/llb/v6/scenarios/scenario6-3.png)

 - **LAN IP Configuration:**
We need to go to Stack > Instance > Network > Ethernet and select the interface. Now, we can configure IP address, name-server and other details as per our requirement.

![Diagram](/img/llb/v6/scenarios/scenario6-4.png)

2. **Interface Group Configuration:** 
User can add multiple group of interfaces. They need to go to Stack > LLB Interfaces.

![Diagram](/img/llb/v6/scenarios/scenario6-5.png)

![Diagram](/img/llb/v6/scenarios/scenario6-6.png)

3. **LLB Configuration:**
We can pass the interface group and enable global load balancing by selecting this option.

![Diagram](/img/llb/v6/scenarios/scenario6-7.png)

![Diagram](/img/llb/v6/scenarios/scenario6-8.png)

4. **SNAT Rule Configuration:** 
We need to Stack > LLB > Rules > Source NAT. We can configure as per our requirement then click on save changes.

![Diagram](/img/llb/v6/scenarios/scenario6-9.png)

5. **DNAT Rule Configuration:**
We need to go to stack > LLB > Rule > DNAT Rule. Click on add rule button and after configuring you can save and functional the rule by clicking on save changes button.

![Diagram](/img/llb/v6/scenarios/scenario6-10.png)

6. **Policy Route Configuration:**
We need to go to Stack > LLB > Rule > Policy Route. Click on Add Rule button and after configuring you can save and functional the rule by clicking on save changes button.

![Diagram](/img/llb/v6/scenarios/scenario6-11.png)

In this way, we can configure the LLB in given scenario.

