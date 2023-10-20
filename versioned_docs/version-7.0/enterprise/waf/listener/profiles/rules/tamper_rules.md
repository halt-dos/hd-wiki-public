---
sidebar_position: 8
---

# Tamper Rules
   

### Overview
   
The Tamper rule is a feature of Haltdos WAF that provides encryption for the user input fields to protect from browser based malware stealing user's credentials, It also validates hidden input fields.
   
![Tamper Rule](/img/waf/v7/docs/temper_rule.png)
   
### How to Use:
1. Follow the links: **WAF** > **Listener** >  **Profiles** > **Rules** > **Tamper Rules**
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on save changes.

| Parameters       | Accepted value |  Default       |
|------------------|----------------|----------------|
| Rule Name        | String         | Blank          |
| Rule Message     | String         | Blank          |
| Rule Priority    | Integer        | 0              |
| Tamper Action    | Drop-down      | Encrypt        |
| Rule Action      | Drop-down      | Record Request |
| URI              | String         | Blank          |
| Method           | Drop-down      | ALL            |
| Evaluation Phase | Drop-down      | Response Phase |
| Extract From     | Drop-down      | Body Name      |
| Parameter        | String         | Blank          |

![Tamper Rule](/img/waf/v7/docs/temper_rule1.png)
### Description 

##### **Rule Name**
Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

##### **Rule Message**
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

##### **Tamper Action**
Users are allowed to specify the tamper action to be taken for the request matched.

##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. Drop & Record Request, Record Request, Bypass Request, Temporary Blacklist Src IP, Redirect, Send Challenge, Send Response, Tarpit Src IP, No Action, Skip Learning, Send Empty Response.


### Attribute Extraction

##### **URI**
Users are allowed to specify the URI on which the tamper rule will be applied.
 - **example** - /login

##### **Method**
Users are allowed to select the HTTP method for the rule to extract when matched with the request.

##### **Evaluation Phase**
Users are allowed to select the evaluation phase for the rule i.e. Request or Response.

##### **Extract From **
Users are allowed to select the location from where you want to extract the attribute i.e. Field, Cookie, Header, Body, HTML.

##### **Parameter**
Users are allowed to specify the parameter which will be used for the rule for extraction.

### **Attribute Validation**

##### **URI**
Users are allowed to specify the URI on which the tamper rule will be applied.

##### **Method**
Users are allowed to select the HTTP method for the rule to validate when matched with the request.

##### **Evaluation Phase**

Users are allowed to select the evaluation phase for the rule i.e. Request or Response.

##### **Extract From**
Users are allowed to select the location from where you want to validate the attribute i.e. Header, Cookie, Body, Argument Name or Value.

##### **Parameter**

Users are allowed to specify the parameter which will be used for the rule for extraction.





