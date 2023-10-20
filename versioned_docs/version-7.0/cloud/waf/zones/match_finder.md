---
sidebar_position: 6
---
# Match Finder

---

## Overview

It Identifies, stores all the rules matched by WAF and generates match finder details for a specific or all listener so that you can identify all matched rule for the listener by listing of the events.

| SETTINGS     | ACCEPTED VALUES | DEFAULT |
|--------------|-----------------|---------|
| Event ID     | String          | Blank   |
| Matched Rule | String          | Blank   |
| URI          | URL             | Blank   |
| Zone         | String          | Blank   |
| Payload      | String          | Blank   |
| Action       | Button          | Blank   |

#### Description

**Event ID**: Displays the event ID logged for the certain request found to malicious.

**Matched Rule**: Displays all matched rule id for the query. 

**URI**: Displays the matching URI for the current event.

**Zone**: Displays the zone/sub-domain name that belongs to it.

**Payload**: Displays the payload matched for the current event.

**Action**: It specifies the action to be taken. To whitelist current event rules, click on the Whitelist button.

We can further download all events matched based on the filter from the event page.