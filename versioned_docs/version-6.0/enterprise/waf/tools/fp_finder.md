---
sidebar_position: 2
---

# FP Finder
### Overview
It Identifies, stores all the rules matched by WAF, and generates False-Positive details for a specific listener so that you can identify the actual false positive generated.
   
![FP Finder](/img/waf/v6/docs/fp_finder.png)


### How to Use:
1. Go to WAF > FP Finder
2. Click on the Run Query button on the top right side.

### Description

#### Matched Rules
It displays the rules for which False Positive is generated.

#### Affected URLs
It displays all matched URLs for the query.

#### Impacting Payload
It displays the payload matched for the query like Event Id, Variable, Content, Attack Type, Action.
We can further download all events matched based on the filter from the event page.

