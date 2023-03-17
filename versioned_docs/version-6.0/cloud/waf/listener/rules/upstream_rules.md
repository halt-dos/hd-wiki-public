---
sidebar_position: 6
---
# Upstream rules

You can switch between your server groups by creating upstream rules.

---

## Overview

If a user has defined **server groups** and wants to use different groups depending upon different conditions then he can make use of Upstream Rules. For example, if a user wants its /API calls to be served by server-group "API" and console by "DEFAULT" then he can create a rule with a search pattern and search location as URL/Header/Cookie/Body/Arguments.

### How to Use:

1. Go to **WAF > Zones > Listeners > Rules > Upstream Rules**

2. Create rules with different conditions and **Save Changes** 

| PARAMETERS      | ACCEPTED VALUES                             | DEFAULT |
|-----------------|---------------------------------------------|---------|
| Rule Name       | String                                      | Blank   |
| Message         | String                                      | Blank   |
| Rule Priority   | Integer                                     | 1       |
| Server Group    | Existing server group                       | Blank   |
| Search Location | URL/HEADER VAL/COOKIE VAL/BODY VAL/ARGS VAL | Blank   |
| Search Pattern  | Regex                                       | Blank   |

#### Description

**Rule Name** 

Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input.

**Message** 

The user can add a short description of the rule. The description would explain the purpose of the rule.

**Rule Priority** 

Set the priority of the rule. If two rules have the same priority, then selection will be random.

**Server Group**

Which server group should serve the request of this type. The server group configured will be serving requests specifically.

**Search Location** 

The block in which the search pattern will be searched like URL, Port, Header Val, Cookie Val, Body Val, Args Val.

**Search Pattern** 

The pattern to be searched in the request so that it can be forwarded to the mentioned server group.

