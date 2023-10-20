---
sidebar_position: 7
---

# Behavior Rule
### Overview
The Behavior rule is a feature of Haltdos WAF that that allows application owners to identify the malicious user intent with the help of the behavioral engine.
   
![Behavior Rule](/img/waf/v7/docs/behavior_rule.png)
   
### How to Use:
1. Follow the links: **WAF** > **Listener** > **Profiles** > **Rules** > **Behavior Rules**
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on **Save changes**.
   
| Parameters      | Accepted value |  Default       |
|-----------------|----------------|----------------|
| Rule Name       | String         | Blank          |
| Rule Message    | String         | Blank          |
| Rule Priority   | Integer        | 0              |
| Rule Action     | Drop-down      | Record Request |
| Variable Name   | Drop-down      | Blank          |
| Condition       | Drop-down      | PATTERN EXIST  |
| Condition Value | String         | Blank          |
   
### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

##### **Rule Message**
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

##### **Rule Priority**

It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. no action, drop, record, tarpit, temperory blacklist, etc.

##### **Variable Name**
Users are allowed to specify the name of the variable for the rule.

##### **Condition**
Users are allowed to specify the condition from the drop-down menu.

##### **Condition Value**
Users are allowed to specify the condition value for the rule.

