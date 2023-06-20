---
sidebar_position: 9
---
# Log Rules
   
### Overview
   
These rules prevent Haltdos WAF from logging sensitive information like passwords, etc., and adhere to your compliance policy. 

![log_rules](/img/pro-waf/docs/log_rules1.png)
![log_rules](/img/pro-waf/docs/log_rules2.png)
   
### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **Rules** > **Log Rules**
3. Click on **Add Rule**.
4. Configure the rule and click on save changes.
   
| Parameters      | Accepted value |  Default       |
|-----------------|----------------|----------------|
| Rule Name       | String         | Blank          |
| Rule Message    | String         | Blank          |
| Rule Priority   | Integer        | 0              |
| URI             | String         | Blank          |
| Method          | Drop-down      | ALL            |
| Find Location   | Drop-Down      | Variable       |
| Find Parameter  | String         | Blank          |
| Match Condition | Drop-Down      | Pattern Exists |
| Match Value     | String         | Blank          |
   
### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

##### **URI**
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

##### **Method**
Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

##### **Find Location**
Users can define the source location where this condition needs to be applied.

##### **Find Parameter**
The user can define the parameter based on the location of the condition.

##### **Match Condition**
The user can define the match condition for the parameter and match value.

##### **Match Value**
The user can define what value needs to be matched with the match condition.



