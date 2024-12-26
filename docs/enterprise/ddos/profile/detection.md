---
sidebar_position: 3
---

# Detection



Detection is a process to analyze the network traffic in which packets are monitored in different fields. 

#### How Haltdos Detection Works

User can set custom threshold values according to their network requirement. Detection is used to set the Alarm so that if any threshold value get breach user received an alert alarm for that.

![ddos_detection_alarm_type](/img/ddos/v8/securityprofile_detection_thresholds.png)

![ddos_detection_alarm_type](/img/ddos/v7/docs/detection1.png)

![ddos_detection_alarm_type](/img/ddos/v7/docs/detection2.png)

![ddos_detection_alarm_type](/img/ddos/v7/docs/detection3.png)

### How to Use

1. Go to **Apps > DDoS > Profile > Detection**

2. Configure the settings

3. Click on **Save Changes**

| Detection                            | Type          | Threshold           | Anomaly Level       | Consecutive Threshold    | Actions   |
|--------------------------------------|---------------|---------------------|---------------------|--------------------------|-----------|
| Inbound Connection Flood (cps)       | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound DNS Flood (bps)              | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound Generic Flood (bps)          | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound Generic Flood (pps)          | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound HTTP Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound HTTP Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound ICMP Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound ICMP Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound IGMP Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound IGMP Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound IPv4 Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound IPv4 Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound IPv4 Fragmented Flood (pps)  | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound IPv6 Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound IPv6 Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound IPv6 Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound IPv6 Fragmented Flood (pps)  | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound NTP Flood (bps)              | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound NTP Flood (pps)              | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound SIP Flood (bps)              | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound SIP Flood (pps)              | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound SNMP Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound SNMP Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound TCP ACK Flood (pps)          | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound TCP FIN Flood (pps)          | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound TCP Flood (bps)              | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound TCP Flood (pps)              | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound TCP RST Flood (pps)          | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound TCP SYN Flood (pps)          | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound UDP Flood (bps)              | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Inbound UDP Flood (pps)              | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound Connection Flood (cps)      | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound DNS Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound DNS Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound Generic Flood (bps)         | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound Generic Flood (pps)         | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound HTTP Flood (bps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound HTTP Flood (pps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound ICMP Flood (bps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound ICMP Flood (pps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound IGMP Flood (bps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound IGMP Flood (pps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound IPv4 Flood (bps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound IPv4 Flood (pps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound IPv4 Fragmented Flood (pps) | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound IPv6 Flood (bps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound IPv6 Flood (pps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound IPv6 Fragmented Flood (pps) | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound NTP Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound NTP Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound SIP Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound SIP Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound SNMP Flood (bps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound SNMP Flood (pps)            | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound TCP ACK Flood (pps)         | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound TCP FIN Flood (pps)         | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound TCP Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound TCP Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound TCP RST Flood (pps)         | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound TCP SYN Flood (pps)         | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound UDP Flood (bps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |
| Outbound UDP Flood (pps)             | Threshold     | 0                   |  --                 | 0                        | Edit      |

![ddos_detection_alaram_type](/img/ddos/v7/docs/ddosdetection.png)

![ddos_detection_alaram_type](/img/ddos/v7/docs/ddosdetection1.png)


### Description

##### Alarm Name

This field contains the name of Alarm which user choose to edit

```
    Accepted values: Integer

    Default: 1
```


##### Alarm Type

In this field user can choose what type of alarm they want to set. In Haltdos there are two type of Alarm types

```
    Accepted values: Threshold / Anomaly

    Default: 1
```


1. Threshold
2. Anomaly

##### 1. Threshold

##### Threshold

User can specify the threshold value(in bps/pps according to the alarm type) which help in monitoring the network. If the set threshold value is breached user will get the alert alarm.

##### Consecutive Threshold

In this field user can specify the consecutive value of threshold. Consecutive Threshold counts the breach attempts, if the breach attempts match with the input value alert alarm will be generated. By specifying this filed user can avoid false alerting.
