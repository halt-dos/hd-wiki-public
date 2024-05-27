---
sidebar_position: 6
---
# Firewall Rules

### Overview
 Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the some regular pattern if it found those configured pattern then according to the rule condition it specifies which traffic is allowed or denied.


The following actions are available to the User :
1. **DROP  & RECORD REQUEST** - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF.
2. **RECORD REQUEST** - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos.
3. **BYPASS REQUEST** - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF.
4. **TEMPORARY BLACKLIST SOURCE IP** - If the request satisfies the rule, then the user is temporarily blacklisted.
5. **REDIRECT** - If the request satisfies the rule, then the user is redirected to another page.
6. **SEND CAPTCHA CHALLENGE** - If the request satisfies the rule, then the user receives a challenge like a captcha.
7. **SEND RESPONSE WITH STATUS CODE** - If the request satisfies the rule, a custom HTML response will be returned with a status code.
8. **SEND CUSTOM RESPONSE** - If the request satisfies the rule, a custom HTML response will be returned.
9. **CHANGE RESPONSE CODE** - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back.
10. **TARPIT SRC. IP** -  If the request satisfies the rule, the end-user IP will be tarpit.
11. **NO ACTION** - If the request satisfies the rule, then no action will be performed on the current request.
12. **SKIP LEARNING** - If the request satisfies the rule, then no learning will be performed on the current request.
13. **SEND EMPTY RESPONSE** - If the request satisfies the rule, the end-user will get empty response / blank page in return.

![firewall_rules](/img/pro-waf/docs/firewall_rules1.png)
![firewall_rules](/img/pro-waf/docs/firewall_rules2.png)

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **Rules** > **Firewall Rules**
3. Click on **Add Rule**.
4. Configure the rule and click on save changes.

### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: Blank  

##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

    Accepted values: String

    Default: Description for the rule in String format  

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

    Accepted values: Integer

    Default: 0  

##### **URI**
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

    Accepted values: URI

    Default: None  

##### **Method**
Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: All  

##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning.

    Accepted values:  Record Request / DROP & RECORD REQUEST / BYPASS REQUEST / TEMPORARY BLACKLIST SRC IP / REDIRECT / SEND CAPCHA CHALLENEGE / SEND RESONSE WITH STATUUS CODE / SEND CUSTOM RESPONSES / CHANGE RESPONSE CODE / NO ACTION / SEND EMPTY RESPONSES

    Default: Record Request  

##### **Match Condition**
This drop-down allows to set the match condition i.e. Pattern Match or Pattern Not Match for the request.

    Accepted values: Pattern Match / Pattern not Match

    Default: Pattern Match  

##### **Match Pattern**
Users are allowed to specify the keyword to match when the rule is invoked. The entered value can be a regex pattern.

    Accepted values: String

    Default: None  

#### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/professional/waf/rules/conditions)













