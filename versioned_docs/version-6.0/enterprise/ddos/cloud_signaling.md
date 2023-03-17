---
sidebar_position: 5
---

# Cloud Signaling

---

A Faster, Automated Approach to Comprehensive DDoS Mitigation Enterprises need comprehensive, integrated protection from the data center edge to the service provider cloud. For example, when data center operators discover they are under a service-disrupting DDoS attack, they should be able to quickly mitigate the attack in the cloud by triggering a signal to upstream infrastructure of their provider’s network. 

![signaling_settings](\img\ddos\v6\docs\ddos24.png)

### **How to Use:**

1. **Stack > Resource > DDoS > Signaling**

2. Add provider and Mention the details as per the requirements

3. Click on Save Provider

| Settings                | Accepted Values  | Default |
|-------------------------|------------------|---------|
| Provider Name           | String           | Empty   |
| Enabled                 | Boolean          | False   |
| Signalling URL          | String           | Empty   |
| Authentication User     | String           | Empty   |
| Authentication Password | String           | Empty   |
| Signalling Trigger      | Integer          | 0       |
| Managed Object IDs      | Integer          | Empty   |
| IP Range                | Integer          | Empty   |

### **Description:**

**Provider Name**

Specify the name of the upstream provider

**Enabled**

Enable to allow the signaling to operate.

**Signaling URL**

Specify API endpoint of upstream provider for sending cloud signal

**Authentication User**

Specify password user credentials for interactive with upstream cloud signaling API

**Authentication password**

Specify password credentials for interactive with upstream cloud signaling API

**Signaling Trigger**

Specify the bandwidth threshold (in Mbps) beyond with a cloud signal that will be sent to the upstream provider

**Managed Object ID**

Specify unique customer ID provided by the upstream providers for further authentication

**IP Range**

Specify the IP range