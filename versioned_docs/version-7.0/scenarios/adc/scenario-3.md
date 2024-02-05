# Scenario 3

SLB configuration under different Scenarios

---
Suppose company ABC is having two listeners example1.com and example2.com that are having two back-end server IPs 10.11.0.100/24 and 10.11.0.110/24 which are connected with the haltdos SLB using two links which are further bound with LACP  which logically become 1 interface with IP 10.11.0.11/24. The Production environment is protected with a firewall and to enhance security is separated with VLAN 10. The device is having a management IP of 15.2.2.10/24. Haltdos SLB device will be connected to the switch and should be configured with the same VLAN 10 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device will load balance between back-end servers as per the configuration specified.

![Diagram](/img/adc/v6/scenarios/scenario3-1.png)

**Step 1: Configuration of the management port**

![Diagram](/img/adc/v6/scenarios/scenario3-2.png)

**Step 2: Configuration of VLAN**

![Diagram](/img/adc/v6/scenarios/scenario3-3.png)

![Diagram](/img/adc/v6/scenarios/scenario3-4.png)
   
**Step 3: Configuration of the listener**
   
![Diagram](/img/adc/v6/scenarios/scenario3-5.png)

**Step 4: Verify the back-end server**

![Diagram](/img/adc/v6/scenarios/scenario3-6.png)






