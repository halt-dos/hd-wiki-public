---
sidebar_position: 2
---

# Geo Filtering

---

### Overview

Geo Filtering is an ability to filter out request coming from different geographical locations and taking actions to block the Country & IP address if required. In the Geo-filtering settings, we can configure Blacklisted Countries, Blacklisted IP Prefixes, and Whitelisted IP Prefixes.

![geo_filtering](/img/ddos/v7/docs/geofiltering.png)

### How to Use

1. Go to **Apps > DDoS > Geo Filtering**

2. Configure the settings as per requirement.

3. Click on **Save Changes**.

| Settings                | Accepted Values      | Default   |
|-------------------------|----------------------|-----------|
| Blacklisted Countries   | Countries            | Drop Down |
| Blacklisted IP Prefixes | IP Address with CIDR | Blank     |
| Whitelisted IP Prefixes | IP Address with CIDR | Blank     |
| Blacklist Intel Feed | Drop-down | Blank     |
| Whitelisted Intel Feed | Drop-down | Blank     |

### Description

##### **Blacklisted Countries**

This option allows users to select the list of countries from the drop-down list that will be permanently disallowed. The geo traffic blocking can be performed globally or per profile based. User need to check [Profile](/docs/enterprise/ddos/profile/general_settings.md) documents to configure profile based geo-blocking. 

##### **Blacklisted IP Prefixes**

This option allows users to specify multiple IP prefixes or IP address (With CIDR /32) that will be permanently disallowed.

##### **Whitelisted IP Prefixes**

This option allows users to specify multiple IP prefixes or IP address (With CIDR /32). Traffic to / from these IPs will permanently bypass all configured mitigation.

##### **Blacklist Intel Feed**
This option allows users to configure and add custom threat intel to blacklist traffic generated from the IP addresses or prefixed. Users can use [IP feeds](/docs/enterprise/platform/stacks/resource_content/custom_scripts.md) option to add the IP feed later that can be added under this field using drop-down.


##### **Whitelist Intel Feed**
This option allows users to configure and add custom threat intel to whitelist traffic coming from those IP addresses or IP prefixes. Users can use [IP feeds](/docs/enterprise/platform/stacks/resource_content/custom_scripts.md) option to add the IP feed later that can be added under this field using drop-down.