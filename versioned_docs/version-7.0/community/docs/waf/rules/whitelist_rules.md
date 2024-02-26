---
sidebar_position: 5
---

# Whitelist Rules

## Overview
A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.
Whitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations.
Here’s another use case: To reduce insider threat, a cyber attack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network.
   
![Whitelist Rule](/img/ce-waf/docs/whitelisting_rule.png)

### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Whitelist Rules**.
3. Click on the Add Rule button and a pop-up box will open.
4. Configure the Fields that are present.
5. Click on save changes.
   
![Whitelist Rule](/img/ce-waf/docs/whitelisting_rule2.png)
   
| Parameters      | Accepted value |  Default       |
|-----------------|----------------|----------------|
| Rule Name       | String         | Blank          |
| Rule Message    | String         | Blank          |
| Rule Priority   | Integer        | 0              |
| URI             | String         | Blank          |
| Method          | Drop-down      | ALL            |
| Custom Rule IDs | String         | Blank          |
| Find Location   | Drop-Down      | Variable       |
| Find Parameter  | String         | Blank          |
| Match Condition | Drop-Down      | Pattern Exists |
| Match Value     | String         | Blank          |
   
### Description

#### Rule Name
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

#### Rule Message
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

#### Rule Priority
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

#### URI
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

#### Method
Users are allowed to specify the HTTP method on which the rule will be applied i.e. ANY, GET, POST, PUT, DELETE, HEAD, OPTIONS.

#### Custom Rule IDs
Users are allowed to specify the rule/mitigation id that needs to be whitelisted so that action against that request will be allowed.

#### Find Location

This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:

**URL:** Select this if the specified value has to be searched in the URL part of the HTTP Header.
   
**Header Name:** Select this if the specified name has to be searched in the Headers part of the HTTP Header variables.
   
**Header Value:** Select this if the specified value has to be searched in the Headers part of the HTTP Header values.
   
**Headers:** Select this if the specified value has to be searched in the Headers part of the HTTP Header. 
   
**Specific Header Value Data** 
   
**Cookie Name:** Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables. 
   
**Cookie Value:** Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values.
   
**Cookies:** Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies.
   
**Specific Cookie Value Data** 
   
**Body Argument Name:** Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header. 
   
**Body Argument Value:** Select this if the specified value has to be searched in the values in the Body part of the HTTP Header.
   
**Body:** Select this if the specified value has to be searched in the Body part of the HTTP Header.
   
**Argument Name:** Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header.
   
**Argument Value:** Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header.
   
**Arguments:**  Select this if the specified value has to be searched in the Arguments section in the HTTP Header.

#### Variable
Users can select the variable.

#### Match Condition
The user can define the match condition for the parameter and match value.

#### Match Value
The user can define what value needs to be matched with the match condition.