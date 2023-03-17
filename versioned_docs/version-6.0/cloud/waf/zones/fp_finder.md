---
sidebar_position: 5
---
# FP Finder

False Positive Finder

---

## **Overview**

It Identifies, stores all the rules matched by WAF, and generates False-Positive details for a specific listener so that you can identify the actual false positive generated.

| SETTINGS        | ACCEPTED VALUES | DEFAULT |
|-----------------|-----------------|---------|
| Matched Rules   | String          | Blank   |
| Matched URLs    | URL             | Blank   |
| Matched Payload | String          | Blank   |

#### **Description**

**Matched Rules**: Displays the rules for which False Positive is generated.

**Matched URLs**: Displays all matched URLs for the query. 

**Matched Payload**: Displays the payload matched for the query like Event Id, Variable, Content, Attack Type, Action.

We can further download all events matched based on the filter from the event page.