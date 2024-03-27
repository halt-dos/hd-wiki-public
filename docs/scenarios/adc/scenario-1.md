# Scenario 1

SLB configuration under different Scenarios

---

Suppose company ABC is having a listener Test.com which is having a back-end server IP 15.0.0.2/24 which need to be set on haltdos SLB device and the backend IP will be changed to 15.0.0.10 which is listener IP. The Production environment is protected with a firewall and to enhance security is separated with VLAN 10. The device is having a management IP of 15.2.2.10/24. Haltdos SLB device will be connected to the switch and should be configured with the same VLAN 10 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device will load balance between back-end servers as per the configuration specified.

![Diagram](/img/adc/v6/scenarios/scenario1-1.png)

**Step 1: Configuration of the management port**
   
![Diagram](/img/adc/v8/ethernet_1.png)

![Diagram](/img/adc/v8/ethernet_2.png)

![Diagram](/img/adc/v8/ethernet_3.png)

**Step 2: Configuration of VLAN**
Users need to mention the VLAN ID and mention the backend server IP address.

![Diagram](/img/adc/v8/vlan_1.png)

![Diagram](/img/adc/v8/vlan_2.png)

![Diagram](/img/adc/v8/vlan_3.png)

**Step 3: Configuration of Listener**

![Diagram](/img/adc/v8/listeners_2.png)

**Step 4: Verification of backend Server**

![Diagram](/img/adc/v8/listeners_1.png)














