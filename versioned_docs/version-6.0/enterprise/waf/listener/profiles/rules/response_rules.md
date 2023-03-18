---
sidebar_position: 6
---
# Response Rule
### Overview

Response Filtering is a feature of Haltdos WAF that allows application owners to filter responses from back-end application servers for HTTP requests on matching specified URL patterns.
   
![Response Rule](/img/waf/v6/docs/response_rule.png)
   
### How to Use:
1. Follow the links: **WAF** > **Listener** >  **Profiles** > **Rules** > **Response Rule**.
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on save changes.
   
![Response Rule](/img/waf/v6/docs/response_rule2.png)
   
| Parameters    | Accepted value |  Default  |
|---------------|----------------|-----------|
| Rule Name     | String         | Blank     |
| Rule Message  | String         | Blank     |
| Rule Priority | Integer        | 0         |
| URI           | String         | Blank     |
| Method        | Drop-down      | ALL       |
| Rule Action   | Drop-down      | No Action |
| Condition Phase | Drop-down      | Request        |
| Find Location   | Drop-Down      | Variable       |
| Find Parameter  | String         | Blank          |
| Match Condition | Drop-Down      | Pattern Exists |
| Match Value     | String         | Blank          |

### Description

#### Rule Name
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

#### Rule Message
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

#### Rule Priority
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

#### URI
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

#### Method
Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

#### Rule Action
Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning.

#### Condition Phase
This drop-down allows to set the match condition i.e. request or response for the request.

#### Find Location
Users can define the source location where this condition needs to be applied.

#### Find Parameter
The user can define the parameter based on the location of the condition.

#### Match Condition
The user can define the match condition for the parameter and match value.

#### Match Value
The user can define what value needs to be matched with the match condition.
