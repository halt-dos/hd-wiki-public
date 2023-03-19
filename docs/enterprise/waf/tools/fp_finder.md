---
sidebar_position: 2
---

# False Positive Finder
---

## Overview

It Identifies, stores all the rules matched by WAF, and generates False-Positive details for a specific listener so that you can identify the actual false positive generated.
   
![FP Finder](/img/waf/v7/docs/false_positive.png)


### How to Use:
1. Go to **Apps** 
2. Select **WAF**  > Click **Tools** > **False Positive Finder**
3. Configure the settings 
4. Click on **Export**

### Description

**Matched Rules**

It displays the rules for which False Positive is generated.

**Impacted URLs**

It displays all matched URLs for the query.

**Blocked Payload**

It displays the payload matched for the query like Event Id, Variable, Content, Attack Type, Action.
We can further download all events matched based on the filter from the event page.

