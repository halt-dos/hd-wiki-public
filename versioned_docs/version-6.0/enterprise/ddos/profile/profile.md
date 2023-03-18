# Profile

Configure profile level configurations

---

DDos Profile helps to differentiate the network by dividing the network into different segments based on IP address. This division helps you configure each segment as per your requirement and monitor the stats on particular network segment. By default, Root profile is created.

![network_profile](\img\ddos\v6\docs\ddos2.png)

![add_profile](\img\ddos\v6\docs\ddos3.png)

### **To configure the profile settings:**

1. **Stack > Resource > DDoS > Profiles** 

2. User can Add/Edit/Delete profiles

3. Click on Save and make the changes

| Settings       | Accepted Values  | Default    |
|----------------|------------------|------------|
| Profile Name   | String           | Blank      |
| Mode           | Drop Down        | Mitigation |
| Parent         | Drop Down        | Root       |
| Destination IP | Integer          | Blank      |

### **Description:**

##### **Profile Name**

Specify a name for the security profile

##### **Mode**

Specify the mode for the profile i.e. Mitigation or Bypass

##### **Parent**

Select the parent for the profile created

##### **Destination IP**

Specify the destination IP for the profile

#### **There are 3 operational modes to select:**

##### **Bypass Mode**

After selecting this mode all the DDoS mitigations for that profile will be bypassed.

##### **Learning Mode**

After selecting this mode, HaltDos will Learn the traffic pattern through its Machine Learning based mechanism. All the static mitigation as configured by the user will be in active mode.

##### **Mitigation Mode**

In this mode, all DDoS mitigations will be turned on including both Static and Dynamic mitigation.