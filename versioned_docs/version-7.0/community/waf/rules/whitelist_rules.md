---
sidebar_position: 5
---

# Whitelist Rules

## Overview
Whitelist Rules are rules that tells the WAF to skip evaluation of specified built-in signature or custom rule under certain conditions.
   
![Whitelist Rule](/img/ce-waf/docs/whitelisting_rule.png)

### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Whitelist Rules**.
3. Configure the Fields that are present.
4. Click on save changes.
   
### Description

#### Rule Name
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: Blank  

#### Rule Message
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

    Accepted values: Description for the rule in String format

    Default: Blank  

#### Rule Priority
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

    Accepted values: Integer 

    Default: 0  

#### URI
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

    Accepted values: URI 

    Default: Blank  

#### Method
Users are allowed to specify the HTTP method on which the rule will be applied i.e. ANY, GET, POST, PUT, DELETE, HEAD, OPTIONS.

    Accepted values: Any / Get / Post / Put / Delete / Patch / Head / Options  

    Default: Any  

#### Custom Rule IDs
Users are allowed to specify the rule/mitigation id that needs to be whitelisted so that action against that request will be allowed.

    Accepted values: String / Integer

    Default: Blank  

#### Add Condition

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/community/docs/waf/rules/conditions)
