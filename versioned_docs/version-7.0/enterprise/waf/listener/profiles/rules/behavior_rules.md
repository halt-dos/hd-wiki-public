---
sidebar_position: 7
---

# Behavior Rule
### Overview
The Behavior rule allows application owners to identify the malicious user intent with the help of the behavioral engine.
   
![Behavior Rule](/img/waf/v7/docs/behavior_rule.png)
   
### How to Use:
1. Follow the links: **WAF** > **Listener** > **Profiles** > **Rules** > **Behavior Rules**
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on **Save changes**.

   
### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: Blank  

##### **Rule Message**
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: Description for the rule in String format

    Default: Blank  

##### **Rule Priority**

It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

    Accepted values: Integer

    Default: 0  

##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. no action, drop, record, tarpit, temperory blacklist, etc.

    Accepted values: DROP / RECORD / BYPASSED / TMP_BLACKLIST / REDIRECT / SEND_CAPTCHA / SEND_CRYPTO_CHALLENGE / SEND_RESPONSE / SEND_RESPONSE_WITHOUT_CODE / SET_RESPONSE_CODE / TARPIT / NO_ACTION / SKIP_LEARNING / EMPTY_RESPONSE

    Default: Blank  

##### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/enterprise/waf/listener/profiles/rules/conditions)


