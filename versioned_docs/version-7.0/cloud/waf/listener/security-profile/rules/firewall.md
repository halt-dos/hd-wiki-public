---
sidebar_position: 2
---

# Firewall Rules

These rules (Negative Security Model) allow you to create custom security rules as per application logic

---

## Overview

A Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the violation of a rule and carries out the appropriate action that is configured by the User.

The following actions are available to the User :

1. **DROP REQUEST** - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF.

2. **RECORD REQUEST** - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos.

3. **BYPASS REQUEST** - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF.

4. **REDIRECT** - If the request satisfies the rule, then the user is redirected to another page.

5. **TEMPORARY BLACKLIST** - If the request satisfies the rule, then the user is temporarily blacklisted.

6. **SEND CHALLENGE** - If the request satisfies the rule, then the user receives a challenge like a captcha.

7. **SKIP LEARNING** - If the request satisfies the rule, then no learning will be performed on the current request.

8. **NO ACTION** - If the request satisfies the rule, then no action will be performed on the current request.

### How to Use:

1. Go to **WAF > Zones > Listeners > Security Profiles > Rules > Firewall Rules**

2. Click on the **Add Rule** Button and a pop-up box will open.

3. Configure the fields that are present.

4. Click on **Save Changes** and the rule will be reflected.

**Configurable Fields**

| PARAMETERS      | DESCRIPTION                                                          | ACCEPTED                                                         |
|-----------------|----------------------------------------------------------------------|------------------------------------------------------------------|
| Rule Name       | Name For the Configured Rule                                         | Name eg. Example Rule                                            |
| Rule Message    | Description For the Rule                                             | Brief Description eg. This Rule is used for Allowing Example API |
| Rule Priority   | Priority for the rule                                                | Integer                                                          |
| Rule Action     | Action that should be performed when the Rule Condition is Satisfied | Any action from the Drop Down List                               |
| Specific URI    | URI on which this Rule has to be applied                             | Valid URI eg. /login                                             |
| Method          | Choose from the dropdown (eg. Get)                                   | Drop Down List                                                   |
| Match Pattern   | The Pattern to be searched at the specified location.                | String                                                           |
| Match Condition | Choose from the dropdown (eg. pattern match)                         | Drop Down List                                                   |
| Location        | Location of the entity                                               | Any value from the Drop Down List                                |
| Value           | Value at the Location that has to be checked                         | The Value that you want to match at the specific location        |

#### Description

**Rule Name**

Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

**Rule Message**

Specify a rule message containing a detailed description to identify the rule which is to be created.

**Rule Priority**

Specify the priority for the rule for execution when matched with the request.

**Rule Action**

Specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning.

**Specific URI**

Specify the URI on which the firewall rule will be applied.

- **Example** /login

**Method**

Specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

**Match Pattern**

Specify the keyword to match when the rule is invoked. The entered value can be a regex pattern.

**Match Condition**

This dropdown allows to set the match condition i.e. Pattern Match or Pattern Not Match for the request.

**Add Location**

Specify the location and value for which the firewall rule will be applicable.


