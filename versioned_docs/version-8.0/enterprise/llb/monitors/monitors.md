# Monitor

Link monitoring in Haltdos LLB

---

Haltdos allows users to configure custom monitoring that can monitor the interface groups. These monitors check the health of the link to assist in efficient load balancing across multiple WAN links.

If any of the links are monitored and marked as down, the traffic will not redirect to the same link unless the link comes up and complete the pass threshold.

![adding_monitor](/img/llb/v8/llb_monitors.png)

### How to Use:

1. Go to **Stack >LLB > Monitors**.

2. Click **Add Monitor** button.

3. Configure your settings.

4. Click **Save**.

![monitor_settings](/img/llb/v8/llb_monitor_2.png)

### **Description:**

##### **Enabled**

This option allows to enable or disable monitor rule. by default, It is set to disable.

    Accepted values: Enabled / Disabled

    Default: Disabled 

##### **Monitor Name**

This option allows the user to set a name for his monitoring rule.

    Accepted values: String

    Default: Blank 

##### **Update Static Route**

It specifies if the static route should be updated upon failure.

    Accepted values: Enabled / Disabled

    Default: Disabled 

##### **Use IPv6**

It specifies if the monitor should use the IPv6 stack.

    Accepted values: Enabled / Disabled

    Default: Disabled 

##### **Monitor Type**

It specifies the health check type for monitoring. Users need to select the appropriate type of protocol to monitor the interfaces. By default, TCP is selected. Monitor can be configured for the mentioned protocols using the drop-down;


    Accepted values: TCP / ICMP / DNS / HTTP / HTTPS / SCRIPTS

    Default: TCP 

To enable monitor based on UDP, ARP or any other protocol, **CUSTOM SCRIPT** can be used.

##### **Query Server**

This option can only be seen when ICMP/TCP other protocol is selected in the **Monitor Type**. It allows the user to set the query server IP Address to which the monitor request will send.

    Accepted values: IP

    Default: Blank 

##### **Port**

It specifies the port number to connect the server when TCP protocol is selected in **Monitor Type**.

    Accepted values: Integer

    Default: 80 

##### **Check Interval**

This option allows the user to set a health check interval for monitoring the services in seconds. After the mentioned time period, defined monitor settings will be checked.

    Accepted values: Integer

    Default: 10 

##### **Timeout**

It specifies the timeout after which the monitoring will be marked failed. Users can specify the timeout in seconds.

    Accepted values: Integer

    Default: 1 

##### **Fail Threshold**

This option allows the user to set the integer values for the fail threshold limit. When an already set monitor threshold reaches the specified threshold, it will be marked down. Users can set the threshold on network activities like latency, packet drop, and jitter.

    Accepted values: Integer

    Default: 1

##### **Pass Threshold**

This option allows the user to set the integer values for the pass threshold limit. When the set monitor threshold reaches the specified threshold, it will be marked up.

    Accepted values: Integer

    Default: 1 

##### **Latency Threshold**

Latency is the time it takes for data to pass from one point on a network to another. This option specifies that Interface should be marked down if the latency threshold is breached. By default, the latency threshold is set to 0 which is its disable state.

    Accepted values: Integer

    Default: 0

##### **Jitter Threshold**

Jitter is when there is a time delay in sending data packets over your network connection. This option specifies that the interface should be marked down if the jitter threshold is breached. By default, it is set to 0 which is the disabled state.

    Accepted values: Integer

    Default: 0 

##### **Packet Loss Threshold**

Packet loss occurs when one or more packets of data traveling across a computer network fail to reach their destination. Packet loss is either caused by errors in data transmission, typically across wireless networks, or network congestion. It specifies interface should be marked down if the packet loss threshold is breached. Set 0 to disable.

    Accepted values: Integer

    Default: 0 
