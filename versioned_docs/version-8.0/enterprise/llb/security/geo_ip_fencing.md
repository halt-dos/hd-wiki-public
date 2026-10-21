---
sidebar_position: 1
---

# Geo Ip Fencing

Geo Ip Fencing is an ability to filter out request coming from different geographical locations and taking actions to block the Country & IP address if required.

![geo_ip_fencing](/img/llb/v8/llb_geo_ip_fencing.png)

### **How to Use :**

1. Go to **Apps > LLB > Security > Geo Ip Fencing**.

2. Configure your settings.

3. Configure the rule conditions and click on save changes.

### **Description:**

#### Temporary Blacklist Duration

This option allows users to configure the time period for which misbehaving IP addresses will be suspended.

```
    Accepted values: Integer

    Default: 0
```


#### Bad Reputation Traffic

This option allows users to specify the action from the drop-down menu on incoming traffic coming from suspicious IPs. There are 4 actions that can be performed for the traffic generated from bad reputation sources;

```
    Accepted values: No Action / Record / Add Suspicion /  Drop

    Default: Blank
```


1. **No Action:** This option will be performed for the TOR traffic.
2. **Record:** This option will record all request coming from TOR IPs
3. **Add Suspicion:** This option will add suspicion for the packet, which will increase the packet scoring. The higher the packet score will tends to high chance of blocking that traffic.
4. **Drop:** This option will drop all the TOR traffic.

#### Tor Traffic

This option allows users to specify the action from the drop-down menu to be performed on incoming TOR Network traffic. There are 4 actions that can be performed for the traffic generated from the Tor gateways;

```
    Accepted values: No Action / Record / Add Suspicion /  Drop

    Default: Blank
```


##### **Inbound Blacklisted Countries**

This option allows users to select the list of Inbound countries from the drop-down list that will be permanently disallowed. 

```
    Accepted values: Select Countries

    Default: Blank
```


##### **Outbound Blacklisted Countries**

This option allows users to select the list of Outbound countries from the drop-down list that will be permanently disallowed.

```
    Accepted values: Select Countries

    Default: Blank
```


##### **Blacklisted IP Prefixes**

This option allows users to specify multiple IP prefixes or IP address (With CIDR /32) that will be permanently disallowed.

```
    Accepted values: IP Prefixes

    Default: Blank
```


##### **Whitelisted IP Prefixes**

This option allows users to specify multiple IP prefixes or IP address (With CIDR /32). Traffic to / from these IPs will permanently bypass all configured mitigation.

```
    Accepted values: IP Prefixes

    Default: Blank
```


##### **Blacklist Intel Feed**

This option allows users to configure and add custom threat intel to blacklist traffic generated from the IP addresses or prefixed.

```
    Accepted values: Select Intel feed

    Default: Blank
```


##### **Whitelist Intel Feed**

This option allows users to configure and add custom threat intel to whitelist traffic coming from those IP addresses or IP prefixes.

```
    Accepted values: Select Intel feed

    Default: Blank
```

