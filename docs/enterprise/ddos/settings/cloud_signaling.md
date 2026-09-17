---
sidebar_position: 4
---

# Cloud Signaling

A faster, automated approach to comprehensive DDoS Mitigation Enterprises need comprehensive, integrated protection from the data center edge to the service provider cloud. For example, when data center operators discover they are under a service-disrupting DDoS attack, they should be able to quickly mitigate the attack in the cloud by triggering a signal to upstream infrastructure of their provider’s network. 

![signaling_settings](/img/ddos/v7/docs/cloudsignaling.png)

### How to Use

1. Go to **Apps > DDoS > Cloud Signaling**
2. Add **Provider** and configure the details as per the requirement.
3. Click on **Save Changes**


### Description

##### **Enabled**

Enable to allow the signaling to operate.

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```


##### **Provider Name**

Specify the name of the upstream provider.

```
    Accepted values: String

    Default: Blank
```


##### **Signaling URL**

Specify API endpoint of upstream provider for sending cloud signal

```
    Accepted values: String

    Default: Blank
```


##### **Authentication User**

Specify password user credentials for interactive with upstream cloud signaling API

```
    Accepted values: String

    Default: Blank
```


##### **Authentication password**

Specify password credentials for interactive with upstream cloud signaling API

```
    Accepted values: String

    Default: Blank
```


##### **Signaling Trigger**

Specify the bandwidth threshold (in Mbps) beyond with a cloud signal that will be sent to the upstream provider

```
    Accepted values: Integer

    Default: 0
```


##### **Managed Object ID**

Specify unique customer ID provided by the upstream providers for further authentication

```
    Accepted values: Integer

    Default: 0
```


##### **IP Range**

Users can specify the IP range

```
    Accepted values: IP

    Default: Blank
```

### Implementation

Under normal operating conditions, legitimate traffic is routed through the Haltdos Anti-DDoS solution, where traffic is inspected and analyzed before being forwarded to the firewall and protected server farm.

In the event of a volumetric DDoS attack, the Haltdos Anti-DDoS solution detects the malicious traffic and triggers cloud signaling towards the ISP through API-based integration. The ISP then redirects the affected traffic towards its Scrubbing Centre/Clean Pipe infrastructure, where the malicious traffic is filtered and mitigated. The cleaned legitimate traffic is subsequently forwarded towards the protected infrastructure through the defined network path.

Once the DDoS attack subsides and traffic returns to normal levels, the traffic can be automatically or administratively routed back through the normal path, and the cloud signaling towards the ISP can be withdrawn.

![signaling_settings](/img/ddos/v8/ddos_cloud_signaling.png)

#### Traffic Flow

##### 1. Normal Traffic / Attack Detection

Clean traffic and incoming DDoS traffic reach the Haltdos Anti-DDoS solution, which analyzes the traffic and performs applicable DDoS detection and mitigation.

##### 2. Cloud Signaling to ISP

Upon detection of a volumetric DDoS attack requiring upstream scrubbing, Haltdos initiates cloud signaling/API communication with the ISP, requesting activation of the Clean Pipe/Scrubbing service.

##### 3. Traffic Diversion

The ISP redirects the affected traffic towards its Scrubbing Centre, where volumetric and malicious traffic is filtered.

##### 4. Clean Traffic Forwarding

After mitigation, the Scrubbing Centre forwards the legitimate/clean traffic towards the protected infrastructure through the configured network path.

##### 5. Return to Normal Operation

Once the attack subsides, the traffic is routed back through the normal path via the Haltdos Anti-DDoS solution, and the temporary ISP scrubbing/cloud signaling is withdrawn.
