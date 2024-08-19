---
sidebar_position: 1
---

# Redirection Rules

### Overview 
Redirection Rules allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern.
   
![redirectional rules](/img/ce-waf/docs/redirection_rules.png)
   
### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Redirection Rules**.
3. Click on **Add Rule** and set relevant parameters.
4. Click on **Save Changes**.

   
### Description

#### Rule Name
Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: None  

#### Rule Message
The user can add a short description of the rule. The description would explain the purpose of the rule.

    Accepted values: Description for the rule in String format 

    Default: None  

#### Rule Priority
User can set the priority of the rule.

    Accepted values: Integer 

    Default: 1  

#### Match URL
Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule.
The match URL should follow the format: [http://www.(.*).example.com/(.*)]

    Accepted values: String / Regular Expression

    Default: None  

#### Forward URL
The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.
The forward URL should follow the format: [https://$1.example.com/$2] 

    Accepted values: String / Regular Expression

    Default: None  

#### Response Code
In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list.
   
**301** - Permanent Redirect 
   
**302** - Temporary Redirect

    Accepted values: 301, 302 

    Default: 302- Temprorary Redirect  

#### Add Condition

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/v7/community/waf/rules/conditions)