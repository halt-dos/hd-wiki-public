---
sidebar_position : 12
---
# Log Rules
   
### Overview
   
These rules prevent Haltdos WAF from logging sensitive information like passwords, etc., and adhere to your compliance policy.  
 
![Log Rules](/img/waf/v8/docs/WAFproLogtRule.png)
   
### How to Use:
1. Follow the links: **WAF** > **Listeners** > **Profiles** > **Rules** > **Log Rules**
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on **Save Changes**.
   
### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

```
    Accepted values: String

    Default: Blank  
```


##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

```
    Accepted values: Description for the rule in String format

    Default: Blank  
```


##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

```
    Accepted values: Integer

    Default: 0  
```


##### **URI**
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

```
    Accepted values: Regex

    Default: Blank  
```


##### **Method**
Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

```
    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL  
```


#### Attribute

##### **Find Location**
Users can define the source location where this condition needs to be applied.

```
    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL  
```


##### **Find Parameter**
The user can define the parameter based on the location of the condition.

```
    Accepted values: String

    Default: Blank 
```


##### **Match Condition**
The user can define the match condition for the parameter and match value.

```
    Accepted values: None / Pattern Exist / Pattern Doesn't Exist / Equals / Not Equals 

    Default: Blank  
```


##### **Match Value**
The user can define what value needs to be matched with the match condition.

```
    Accepted values: String

    Default: Blank
```



