---
sidebar_position: 5
---

# Response Filtering

These rules filter responses from applications and prevent sensitive data leaks

---

## Overview

Response Filtering is a feature of Haltdos WAF that allows application owners to filter responses from backend application servers for HTTP requests on matching specified URL patterns.

### How to Use:

1. Follow the links: **WAF > Zones > Listener > Security Profiles > Rules > Response Filtering**.

2. Click on **Add Rule** and set relevant parameters described in the table below.

3. Click on **Save**.

| PARAMETERS   | ACCEPTED VALUES                           | DEFAULT   |
|--------------|-------------------------------------------|-----------|
| Rule Name    | String                                    | None      |
| Rule Message | Description for the rule in string format | None      |
| Match URI    | Relative URL path                         | None      |
| Rule Action  | Choose from the dropdown                  | NO ACTION |
| Search For   | String                                    | None      |
| Replace with | String                                    | None      |

#### Description

**Rule Name**

Specify a user-friendly name to identify the rule which is to be created. The rule name takes alpha-numeric input.

**Message**

The user can specify a short description of the rule. The description would explain the purpose of the rule.

**Match URI**

Specify the URI for which this rule will be applied. Any requests made on this URI triggers this rule and the respective response shall be filtered according to the rule.

The URI should be a relative URL and in the format: [/home/(*)]

**Rule Action**

Specify the different actions to be taken by the rule.

::: info
Replace : String to be replaced for specific HTTP response
Replace All : String to be replaced for all the HTTP response
Empty Response : Client will received as empty page in the response.
Temporary Blacklist : Temporarily blacklist the request 
Send Challenge : Captcha validation 
No Action : No action will be taken
:::

**Search For**

This specifies the value that will be replaced with the search pattern. In order to use the PCRE regex capture group from the search string, use dollar ($) with positions such as $1, $2. 

Note: In order to escape the dollar in the field, use the dollar twice consecutively such as $$.
