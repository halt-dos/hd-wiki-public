---
sidebar_position: 9
---

# Access Log Rules

These rules prevent Haltdos WAF from logging sensitive fields like password, etc. and adhere to your compliance policy

---

## Overview

These rules prevent Haltdos WAF from logging sensitive information like passwords, etc, and adhere to your compliance policy.

Log Rules provide the user with the functionality to hide certain fields or sensitive data from the access logs to avoid misuse and sensitive data leakage.

### How to Use:

1. Follow the links: **WAF > Zones > Listeners > Security Profiles > Rules > Access Log** 
2. Click on **Add Rule** and set relevant parameters described in the table below.
3. Click on **Save Changes**.

| SETTINGS     | ACCEPTED VALUES                                            | DEFAULT |
|--------------|------------------------------------------------------------|---------|
| Rule Name    | String                                                     | None    |
| Message      | String                                                     | None    |
| Specific URI | URI eg. /login                                             | None    |
| Location     | Choose from the predefined options                         | ALL     |
| Value        | Specify the value to be searched in the specified location | Blank   |


#### Description

**Rule Name**

Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

**Message**

Specify a rule message containing a detailed description to identify the rule which is to be created.

**Specific URI**

Specify the URI or regex ( If the URI Regex field is enabled) for which log rule will be applied.

By clicking on **+ Add Location** button, the end-user can add specify the location to be hidden from the access logs :

**Location**

Specify the location in the HTTP Header where the specified value will be searched

**Accepted Values**

- **ALL** - Select this if the specified value has to be searched in the entire HTTP Request
- **HEADERS** - Select this if the specified value has to be searched in the Headers part of the HTTP Header
-  **COOKIES** - Select this if the specified value has to be searched in the Cookies part of the HTTP Header
- **BODY** - Select this if the specified value has to be searched in the Body part of the HTTP Header
- **ARGS** - Select this if the specified value has to be searched in the Arguments section in the HTTP Header

**Value**

Specify the value to be searched in the specified location for the rule to evaluate the request.

**Add** 

Click on the Add button to add the location and values.
