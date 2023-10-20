---
sidebar_position: 3
---

# Rate Limiting

These rules restrict over-usage of your application by throttling requests on matching users.

---

## Overview

Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance.

:::caution
Manual configuration of rate limit rules is risky for adminstrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior.
:::

### How to Use:

1. Follow the links: **WAF > Zones > Listener > Security Profiles > Rules > Rate Limit Rule**
2. Click on **Add Rule** and set relevant parameters described in the table below.
3. Click on **Save Changes**.

| PARAMETERS     | ACCEPTED VALUES                           | DEFAULT |
|----------------|-------------------------------------------|---------|
| Rule Name      | String                                    | None    |
| Message        | Description for the rule in String format | None    |
| Match URI      | Relative URL path                         | None    |
| Limit Rate     | Integer                                   | 10      |
| Limit Burst    | Integer                                   | 20      |
| Limit Duration | Integer                                   | 1       |
| Rule Action    | Choose from the dropdown                  | RECORD  |
| Limit On       | Select from a pre-defined dropdown        | None    |

#### Description

**Rule Name**

Specify a user-friendly name for the rule which helps in identifying the rule. The rule name takes alpha-numeric input.

**Message**

The user can specify a short description of the rule. The description would explain the purpose of the rule.

**Match URI**

Specify the URI for which this rule will be applied. Any requests made on this URI triggers this rule and the respective response shall be filtered according to the rule.

The URI should be a relative URL and in the format: [/home/(*)]

**Limit Rate**

Specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate.

**Limit Burst**

Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. 

**Limit Duration**

Specify the time duration for which the rule will limit the request.

**Rule Action**

Specify the type of action to be taken such as Drop, Record, Temporary Blacklist, Send Challenge.

**Limit On**

Specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer.

:::note Note
Always limit burst must be greater than or equal to limit rate.
:::
