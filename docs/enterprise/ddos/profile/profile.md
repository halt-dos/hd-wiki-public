# Profile

Configure profile level configurations

---

DDos Profile helps to differentiate the network by dividing the network into different segments based on IP address. This division helps you configure each segment as per your requirement and monitor the stats on particular network segment. By default, Root profile is created.

![network_profile](/img/ddos/v8/ddos_network_profile_1.png)

![add_profile](/img/ddos/v8/ddos_network_profile_2.png)

### How to Use

1. Go to  **Apps > DDoS > Profiles** 
2. Configure Profile Settings.
3. Click on **Save Changes**

| Settings       | Accepted Values  | Default    |
|----------------|------------------|------------|
| Profile Name   | String           | Blank      |
| Mode           | Drop Down        | Bypass     |
| Parent         | Drop Down        | Blank      |
| Stateless Mode | Boolean          | FALSE      |
| Destination IP | Integer          | Blank      |

### Description

##### **Profile Name**

This field can be used to specify the new profile name. This name should be unique.

##### **Mode**

This option allows users to specify the mode for the profile i.e. Mitigation, Bypass, Record etc.

There are four operational modes to select from

- **Bypass**  
After selecting this mode all the DDoS mitigation for that profile will be bypassed.

- **Record**  
In this mode, all the mitigation & rule sets will monitor the traffic. No request will be dropped in the record mode. All requests get captured and forwarded in the form of a Record Event. After selecting this mode, Haltdos will Learn the traffic pattern through its Machine Learning based mechanism. All the static mitigation as configured by the user will be in active mode.

- **Record with SSLi**  
In this mode, all the mitigation & rule sets will monitor the traffic. This rule functions same as record mode but in this mode we also offload the traffic and do the inspection of the encrypted traffic.

- **Mitigation**  
In this mode, all DDoS mitigation will be turned on including both Static and Dynamic mitigation. When any request dropped by the any mitigation, it will be logged as an event and can be checked under **Incidents**

##### **Stateless Mode**

This option allows users to change the profile mode from stateful to stateless mode. By default, all the newly configure profiles are configured in stateful mode. DDoS profile with **stateful mode**, will track all connection states of the traffic that is being transferred over the Haltdos Anti DDoS device.If we enable the stateless mode, DDoS device will not track any connection.

:::note Note
To enable connection state tracking, we also need to enable [TCP Settings](/docs/enterprise/ddos/profile/connections/tcp_settings.md).
:::

##### **Parent**

This option allows users to select the parent profile for the profile created.

##### **Destination IP**

This option allows users to configure the destination IP. On the basis of destination IP traffic will be filtered and mitigation will be performed. Two profiles can not have same destination IP. This destination IP will only be checked for the Inbound traffic i.e. traffic coming from WAN and going towards LAN side.