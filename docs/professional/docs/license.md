---
sidebar_position: 7
---
# License

Versioning, Patch management and installation of updates and upgrades

---

## Overview

From time to time, Haltdos pushes updates consisting of performance, security, features and patches to all valid licensed solutions. This module lists the current deployed version on all Haltdos appliances and list of patches available for upgrade.

![license](/img/pro-waf/docs/v7/license.png)

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Select **License** from the sidebar menu.
3. Configure Your Settings 
4. Click **Save Changes** 

### Types of Updates

- **Intel Updates**: These are periodic updates that provide Global threat intel curated from multiple sources (OSINT, Paid sources, Community feeds from Haltdos deployments & Academia collaborations). The computed threat intel comprise Geo IP feeds, IP Reputation feeds (Botnet, Cnc, Spammers, etc.), Tor IP feeds, Phishing & Spam content, Anonymous Proxies, etc. 

- **Software Updates**: These are bug fixes and security patches that can be carried out by end user at appropriate date / time with or without OEM support.

- **Software Upgrades**: These are major releases that will require OEM support for upgrade and installation


### Steps to update Solutions:

:::note Note
1. All updates are staggered deployments and should be carried out during off-hours to ensure smooth event-less update.
2. As always, Haltdos support is there to help. We recommend raising ticket to Haltdos support for assisting you in installation and commissioning of the latest patches in your Haltdos appliances.
:::

| PARAMETERS       | DESCRIPTION                                        | VALUES       |
|------------------|----------------------------------------------------|--------------|
| License          | Displays the License ID                            | Alphanumeric |
| Build Version    | Displays the current Build version of the instance | Integer      |
| Intel Version    | Displays the current Intel version of the instance | Integer      |
| Check For Update | Click on the button to check for an update         | Button       |