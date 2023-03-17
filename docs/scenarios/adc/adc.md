---
pagination_prev: null
---

# Application Delivery Controller

ADC configuration under different Scenarios

---

**Haltdos SLB** is a technology that distributes high-traffic sites among several servers. Glossary Server Load Balancing Definition Server Load Balancing (SLB) is a technology that distributes high traffic sites among several servers using network-based hardware or software-defined appliance.  

In most cases, users configure the SLB for multiple back-end servers. Users can configure SLB for single as well as multiple back-end listeners.  

Here, we have created some scenarios to understand the basic configuration of the **Haltdos SLB** device.

[Scenario 1](scenario-1.md): Company ABC is having listener example.com which is connected to back-end server IP 15.0.0.2/24. The company has VLAN 10 for the production environment which is connected to the SLB port and the SLB device also has a management IP that is in a different VLAN 20.  

[Scenario 2](scenario-2.md): Company ABC is having listener example.com which is connected to back-end server IP 14.2.2.10/24. The company has VLAN 20 for the production environment which is connected to the SLB  device and the SLB device is having management IP 14.2.3.10/24. The links that are connected to the switch are virtually bound with LACP.  

[Scenario 3](scenario-3.md): Company ABC is having two listeners example1.com and example2.com which are connected to back-end server IP 10.11.0.100/24 and 10.11.0.110/24. Organization has given two separate wires from switch to haltdos device which is further bind and logically act as a single link on which we have configured IP 10.11.0.11​/24. The connection to the back-end server is having VLAN 10 and another backend server is connected through VLAN 20. The connection is by virtually binding two cables from the SLB device and switch.  