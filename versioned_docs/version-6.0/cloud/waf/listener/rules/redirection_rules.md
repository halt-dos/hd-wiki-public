---
sidebar_position: 4
---
# Redirection Rules

These rules allow you to configure redirection for your application pages

---

## Overview

Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern.

### How to Use:

1. Follow the links: **WAF > Zones > Listeners > Rules > Redirection Rules**.

2. Click on **Add Rule** and set relevant parameters described in the table below.

3. Click on **Save Changes**.

| PARAMETERS    | ACCEPTED VALUES                           | DEFAULT                  |
|---------------|-------------------------------------------|--------------------------|
| Rule Name     | String                                    | None                     |
| Message       | Description for the rule in String format | None                     |
| Match URL     | Absolute URL path                         | None                     |
| Forward URL   | Absolute URL path                         | None                     |
| Priority      | Integer                                   | 1                        |
| Response Code | 301, 302                                  | 302 - Temporary Redirect |

#### Description

**Rule Name**

Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input.

**Message**

The user can add a short description of the rule. The description would explain the purpose of the rule.

**Match URL**

Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule.

The match URL should follow the format: [http(s)://www.(*).haltdos.io/(*)]

**Forward URL**

The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.

The forward URL should follow the format: [http(s)://(*).haltdos-1.io/(*)] 

**Priority**

Specify the priority for the rule for execution when matched with the request.

**Response Code**

In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list.

301 - Permanent Redirect 

302 - Temporary Redirect
