---
sidebar_position: 4
---

# Threat Feeds

Integration with 3rd party Threat Intelligence feeds

---

Haltdos solutions comes with Haltdos Threat Steam which provides periodic threat intel curated from open and paid sources for valid licensed customers. However, at times, customers may wish to also include custom 3rd party Threat Intel feeds for list of Bad Reputation IP addresses.

Custom threat intel can be pulled into Haltdos appliances from three sources: pull APIs, FTP or File upload. This section explains various options to include threat intel feeds into Haltdos products.

:::note Note
Only IPv4/IPv6 addresses / prefix having poor reputation is currently supported.
:::

![threat_feeds](/img/platform/v6/docs/threat_feeds1.png)

### How to Use:

1. Go to **Threat Intel**
2. Configure your settings
3. Click Save

| PARAMETERS          | DESCRIPTION                                                          | ACCEPTED VALUES | DEFAULT |
|---------------------|----------------------------------------------------------------------|-----------------|---------|
| Enable Telemetry    | Enable sending telemetry & attack information (anonymous) to Haltdos | Boolean         | False   |
| Threat Source       | Specify how to read threat source                                    | Dropdown        | Blank   |
| Upload Threat Intel | Click on the button to upload threat intel                           | Button          | NA      |

