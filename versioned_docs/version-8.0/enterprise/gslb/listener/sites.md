---
sidebar_position: 2
---

# Sites

---

## Overview

Sites is used for monitoring and managing network endpoints (like servers or services) within the Haltdos GSLB setup. This setup allows administrators to define how multiple sites are monitored, ensuring optimal performance and reliability across different locations.

![listener](/img/gslb/v8/sites.png)

### How to Use:
1. Go to  **Stack** > **GSLB** > **Listener** > **Sites**
2. Click **Add Sites** button.
3. Configure the sites configuration.
4. Click on **Save Changes**
5. Sites configuration will be saved.

#### **Site Id**

It Auto generated Site Id.

```
    Accepted values: String

    Default: Blank
```


#### **Site Enabled**

Indicates whether the site is active and operational.

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```


#### **Site Name**

Represents the unique identifier or title of the site, used to distinguish it from others and refer to it throughout the system or application.

```
    Accepted values: String

    Default: Blank
```


#### **Site Address**

Refers to the IP address or domain name assigned to the site, utilized for monitoring and communication purposes within the system.

```
    Accepted values: String

    Default: Blank
```


#### **Monitor Type**

Defines the method or tool used for monitoring the site, such as ping, HTTP, or custom checks, to ensure its functionality and performance.

```
    Accepted values: TCP / HTTP / HTTPS / SSL HELLO / ICMP / SCRIPT

    Default: TCP
```


#### **Health Check Interval**

Determines the time interval (in seconds) between consecutive health checks performed to monitor the site's status and availability.

```
    Accepted values: String

    Default: 10
```


#### **Fail Threshold**

Sets the number of consecutive failed health checks required to consider the site as unhealthy or down.

```
    Accepted values: String

    Default: Blank
```


#### **Pass Threshold**

Defines the number of consecutive successful health checks needed to mark the site as healthy or operational.

```
    Accepted values: String

    Default: 1
```


#### **Port**

Specifies the network port number used for communication with the site or service being monitored.

```
    Accepted values: String

    Default: 80
```


#### **Timeout**

Refers to the maximum duration (in seconds) to wait for a response during a health check before considering the site or service as unresponsive.

```
    Accepted values: String

    Default: 1
```