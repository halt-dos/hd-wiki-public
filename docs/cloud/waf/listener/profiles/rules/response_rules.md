---
sidebar_position: 6
---
# Response Filtering Rule
### Overview

Response Filtering is a feature of Haltdos WAF that allows application owners to filter responses from back-end application servers for HTTP requests on matching specified URL patterns.
   
![Response Rule](/img/waf/v8/docs/ResponseRule.png)
   
### How to Use:
1. Follow the links: **WAF** > **Listener** >  **Profiles** > **Rules** > **Response Rule**.
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on save changes.

### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

    Accepted values: String

    Default: Blank  

##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

    Accepted values: Description for the rule in String format

    Default: Blank  

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

    Accepted values: Integer

    Default: 0  

##### **URI**
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

    Accepted values: Regex

    Default: Blank  

##### **Method**
Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

    Accepted values:  ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL  

##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning.

    Accepted values: NO_ACTION / TMP_BLACKLIST / TARPIT / SEND_RESPONSE_WITHOUT_CODDE / EMPTY_RESPONSE / EMBED_FINGERPRINT / REPLACE / REPLACE_ALL

    Default: NO_ACTION  

##### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/enterprise/waf/listener/profiles/rules/conditions)
