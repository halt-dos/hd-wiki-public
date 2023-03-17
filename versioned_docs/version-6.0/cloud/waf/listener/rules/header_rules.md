---
sidebar_position: 3
---
# Header Rules

Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client.

---

## Overview

We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the webserver(back-end) as well as respond to the client.

### How to Use:

1. Follow the links: **WAF > Zones > Listeners > Rules > Header Rules**.

2. Click on **Add Rule** and set relevant parameters described below.

3. Click on **Save**.

#### Description

**Rule Name**: Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

**Message**: Specify a rule message containing a detailed description to identify the rule which is to be created.

**Change Response**: This field determines that the rule will update the request or response. If the toggle is enabled the rule will be applicable to response and if it is disabled then the rule will be applicable to request. 

**URI**: Specify the URI or regex for which rule will be applied. 

**Search Location**: This field determines whether the rule has to perform the action on headers/cookies/arguments value. The accepted values are:

HEADER_VAL: Rule will be applicable on the header value in the request or response.

COOKIE_VAL: Rule will be applicable to the cookie value in the request or response.

AGRS_VAL: Rule will be applicable to the argument value in the request or response.

**Rule Action**: The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:

1) ADD: This condition will allow adding a value at the specified location.

2) REMOVE: This condition will allow removing a value at the specified location.

3) OVERWRITE: This condition will allow overwriting a value at the specified location.

If the action is **ADD** then another field is required I.e., **Value** that will be added for the specified **Parameter**.

If the action is **REMOVE**, then the specified parameter is removed.

If the action is **OVERWRITE**, then two other fields are required first is **Search Pattern** (string/regex that should match the existing value) and Replace (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. 

Note: In order to escape the dollar($) character in the replace, add the dollar symbol twice.

**Parameter**: This field specifies the name of the header/cookie/ arguments on which action will be performed.

**Add Condition**: The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

| Condition Location | Search Location | Allowed |
|--------------------|-----------------|---------|
| Request            | Request         | True    |
| Request            | Response        | True    |
| Response           | Response        | True    |
| Response           | Request         | False   |

For adding a condition, the required fields are:

**Check Response**: This field determines that the condition will be checked on request/response parameters.

**Search Location**: This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:

HEADER_VAL: Rule will be applicable on the header value in the request or response.

COOKIE_VAL: Rule will be applicable to the cookie value in the request or response.

AGRS_VAL: Rule will be applicable to the argument value in the request or response. 

**Parameter**: This field specifies the name of the header/cookie/ arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition.

**Search Pattern**: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition.