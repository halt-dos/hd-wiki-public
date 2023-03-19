# Scenario 2

SLB configuration under different Scenarios

---

Suppose company ABC is having a listener example.com which is having a back-end server IP 14.2.2.10/24 which needs to be set on **Haltdos SLB** device and the backend IP will be changed to 14.2.2.20 which is listener IP. The Production environment is protected with a firewall and to enhance security is separated with VLAN 20. The device is having a management IP of 14.2.3.10/24. Haltdos SLB device will be connected to the switch using two ports which need to be bound with LACP protocol and then should be configured with the same VLAN 20 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device can load balance the end-user requests between back-end servers as per the configuration specified.

![Diagram](/img/adc/v6/scenarios/scenario2-1.png)

**Step 1: Configuration of the management port**

![Diagram](/img/adc/v6/scenarios/scenario2-2.png)

**Step 2: Configuration of LACP Link Bond**

![Diagram](/img/adc/v6/scenarios/scenario2-3.png)

**Step 3: Configuration of VLAN**

![Diagram](/img/adc/v6/scenarios/scenario2-4.png)

**Step 3: Configuration of the listener**

![Diagram](/img/adc/v6/scenarios/scenario2-5.png)

**Step 4: Verify the backend server**

![Diagram](/img/adc/v6/scenarios/scenario2-6.png)








































