# Scenario 4

LLB configuration under different Scenarios

---
Suppose, ABC org. is having two WAN connections with static and DHCP configured WAN IPs. Some of the websites are not accessible from WAN 1. The user wants traffic for those domains should always move from WAN 2.

For example, let's assume the user is having two LAN connections and two WAN connections with static IP addresses. LAN 1 is using the 10.0.0.0/24 subnetwork and LAN 2 is using the 10.0.10.0/24 subnetwork. some of the LAN 2 host devices are not able to access a few website from WAN 1 which is DHCP enabled WAN Interface, so they want the IP traffic for that website should move from WAN 1 which is having static pubic IP of 15.0.23.36/30 . We have to create some policy-based routing.

![Diagram](/img/llb/v6/scenarios/scenario4-1.png)

As per the previous scenarios, we have already discussed how can one configure WAN/LAN links ( Refer Scenario 1 & Scenario 2 )

### Steps

**Step 1: Add a Policy based rule**

For example, we assume a website that is not accessible from WAN 1 is  having public IP address 151.0.12.11.

![Diagram](/img/llb/v6/scenarios/scenario4-2.png)

In this way, we can set up the rule for website traffic that should be come in and go out from other WAN link.























