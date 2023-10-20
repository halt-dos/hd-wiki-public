---
sidebar_position: 6
---

# Traffic Shaping

Traffic shaping is a powerful and flexible way to ensure quality of service and defend against bandwidth-abusing distributed denial-of- service (DDoS) attacks.

---

Traffic shaping is a computer network bandwidth management technique that delays some or all data-gram in line with a traffic profile to improve latency, optimize performance, or increase usable bandwidth for certain types of packets by delaying other types.

It support protocols IPv4, IPv6, TCP, UDP, ICMP, IGMP, DNS, SIP, SNMP, NTP, SMTP, IRC, FTP etc.

![traffic_shaping](/img/ddos/v7/docs/traffic1.png)

![traffic_shaping](/img/ddos/v7/docs/traffic2.png)

![traffic_shaping](/img/ddos/v7/docs/traffic3.png)

### How to Use

1. Go to **Apps > DDoS > Profile > Traffic Shaping**

2. Configure the settings.

3. Click on **Save Changes**

![traffic_shaping](/img/ddos/v7/docs/traffic4.png)


| Settings       | Accepted Values | Default |
|----------------|-----------------|---------|
| Inbound  Rate  | Integer(Mbps)   | 0       |
| Inbound Burst  | Integer(Mbps)   | 0       |
| Outbound Rate  | Integer(Mbps)   | 0       |
| Outbound Burst | Integer(Mbps)   | 0       |

### Description

##### **Inbound Rate**

User can specify the rate of Inbound network traffic which will be allowed for traffic shaping. Inbound rate value should not be exceed the Inbound burst value.

##### **Inbound Burst**

User can specify the burst of Inbound network traffic which will be allowed for traffic shaping. 

##### **Outbound Rate**

User can specify the rate of Outbound network traffic which will be allowed for traffic shaping. Outbound rate value should not be exceed the Outbound burst value.

##### **Outbound Burst**

User can specify the burst of Outbound network traffic which will be allowed for traffic shaping.

**Note**: Users are allowed to configure the traffic shaping for Global level as well as protocol based (ex. DNS, ICMP, HTTP, IPV4 etc).