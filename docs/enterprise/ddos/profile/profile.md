# Profile

Configure profile level configurations

---

DDos Profile helps to differentiate the network by dividing the network into different segments based on IP address. This division helps you configure each segment as per your requirement and monitor the stats on particular network segment. By default, Root profile is created.

![network_profile](/img/ddos/v7/docs/profiles.png)

![add_profile](/img/ddos/v7/docs/profiles1.png)

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

#### Profile Name

Specify a name for the security profile

#### Mode

Specify the mode for the profile i.e. Mitigation or Bypass etc

#### Parent

Select the parent for the profile created

#### Destination IP

Specify the destination IP for the profile

#### Operational Modes

There are four operational modes to select

- **Bypass Mode**  
After selecting this mode all the DDoS mitigations for that profile will be bypassed.

- **Record Mode**  
In this mode, all the mitigations & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event.

- **Learning Mode**  
After selecting this mode, HaltDos will Learn the traffic pattern through its Machine Learning based mechanism. All the static mitigation as configured by the user will be in active mode.

- **Mitigation Mode**  
In this mode, all DDoS mitigations will be turned on including both Static and Dynamic mitigation.