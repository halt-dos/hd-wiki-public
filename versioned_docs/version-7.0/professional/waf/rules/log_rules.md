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
   
### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

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

    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: All  


##### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/v7/professional/waf/rules/conditions)



