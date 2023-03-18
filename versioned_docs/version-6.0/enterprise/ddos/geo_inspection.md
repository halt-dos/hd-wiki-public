---
sidebar_position: 2
---

# Geo Inspection

Overview

---

Geo Filtering is an ability to filter out request coming from different geographical locations and taking actions to block the Country & IP address if required. In the Geo-filtering settings, we can configure Blacklisted Countries, Blacklisted IP Prefixes, and Whitelisted IP Prefixes.

![geo_filtering](\img\ddos\v6\docs\ddos21.png)

### **How to Use:**

1. **Stack > Resource > DDoS > Geo Filtering**

2. Configure the settings as per requirement.

3. Click on Save to change the settings.

| Settings                | Accepted Values      | Default   |
|-------------------------|----------------------|-----------|
| Blacklisted Countries   | Countries            | Drop Down |
| Blacklisted IP Prefixes | IP Address with CIDR | Blank     |
| Whitelisted IP Prefixes | IP Address with CIDR | Blank     |

### **Description:**

##### **Blacklisted Countries**

Select the list of countries from the drop-down list that will be permanently disallowed

##### **Blacklisted IP Prefixes**

Specify multiple IP prefixes that will be permanently disallowed

##### **Whitelisted IP Prefixes**

Specify multiple IP prefixes. Traffic to / from these IPs will permanently bypass all configured mitigations