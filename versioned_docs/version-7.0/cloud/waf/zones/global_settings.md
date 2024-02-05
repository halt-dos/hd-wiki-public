---
sidebar_position: 3
---
# Global Settings

---

## Overview

Global settings help to configure the settings whose scope is global. Here we have Global Whitelist Rules which would whitelist the mitigations globally irrespective of zone or listener.

**Global Whitelist Rules**

These are the whitelist rule which helps in whitelisting mitigations globally for all the zones and listener in the stack.

### How to Use:

1. Go to **WAF > Global Settings > Global Whitelist Rule**

2. Click on **Add Rule** button on the top right side.

3. Configure the fields. 

4. Click **Save Changes**. 

| SETTINGS  | ACCEPTED VALUES | DEFAULT |
|-----------|-----------------|---------|
| Rule Name | String          | Blank   |
| Message   | String          | Blank   |
| Location  | Dropdown        | Blank   |
| Value     | Regex           | Blank   |

#### Description

**Rule Name**: This field allows the user to give a name to the global whitelist rule.

**Message**: This field allows the user to enter some message or description for the rule.

**Location**: This is a dropdown to select the location where the rule will be applicable like Header, Cookie, Args, Body.

**Value**: This field allows you to enter the value for the location specified.


