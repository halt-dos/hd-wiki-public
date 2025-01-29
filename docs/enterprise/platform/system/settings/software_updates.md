---
sidebar_position: 6
---

# Software Updates

Managing Intel and Software Updates via Haltdos Platform 

---

Updates allows users to view and manage the software updates of the Haltdos Platform. Users can see the information of each device managed by Haltdos Platform such as Instance Type, Intel Version, Binary Version etc.  

Using the Updates page, users can update their license, approve software updates or restore an update to rollback to a previous update.

![users](/img/waf/v8/docs/updates.png)


### Types of Update:

1. **Intel**: Intel Update is a consolidated list of Malicious IP addresses, Bad Bots, Tor IP addresses, Attack Signatures etc. Intel Update is fetched on a daily basis, as the threat intel is updated on daily basis and is automatically installed.

2. **Binary** (Software): Binary Update consists of the version upgrades or minor patches of the Haltdos Security Solutions. Depending upon the License, Binary updates is pulled by Haltdos Platform when available. To install these updates, Approval is necessary, so an **Approve Update** button shows up. Approval is necessary, since these updates belong to the security solution installed in the device managed by Haltdos Platform.

### How to use

1. **Update License**: On Update License, Haltdos Platform fetches the latest versions of Intel and Binary. Once the updates are fetched, Intel Update is installed automatically, but for the Binary Update, approval is necessay.  

2. **Upgrade License**: On Upgrade License, Haltdos Platform fetches the latest license. This is necessary, if the user has extended the validity of the license or if new features have been added to the license.  

3. **Restore Update** : On Restore Update, Users can rollback to the previous version of any update installed in the device managed by Haltdos Platform.