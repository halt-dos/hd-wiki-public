---
sidebar_position: 2
---

# Firewall Rules

### Overview
 A Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the violation of a rule and carries out the appropriate action that is configured by the User.

![Firewall Rule](/img/ce-waf/docs/firewall_rules.png)

The following actions are available to the User :
1. **DROP  & RECORD REQUEST** - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF.
2. **RECORD REQUEST** - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos.
3. **BYPASS REQUEST** - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF.
4. **REDIRECT** - If the request satisfies the rule, then the user is redirected to another page.
5. **NO ACTION** - If the request satisfies the rule, then no action will be performed on the current request.
   
![Firewall Condition](/img/ce-waf/docs/firewall_rules_condition.png)
   
### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Firewall Rules**.
3. Click on the Add Rule Button and a pop-up box will open.
4. Configure the fields that are present.
5. Click on Save Changes and the rule will be reflected.

| Parameters      | Accepted value |  Default       |
|-----------------|----------------|----------------|
| Rule Name       | String         | Blank          |
| Rule Message    | String         | Blank          |
| Rule Priority   | Integer        | 0              |
| URI             | Strng          | 1000           |
| Method          | Drop-down      | All            |
| Rule Action     | Drop-down      | Record Request |
| Find Location   | Drop-Down      | Variable       |
| Find Parameter  | String         | Blank          |
| Variable        | Drop-Down      | Blank          |
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

#### Rule Action
Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning.

#### Match Condition
This drop-down allows to set the match condition i.e. Pattern Match or Pattern Not Match for the request.

#### Match Pattern
Users are allowed to specify the keyword to match when the rule is invoked. The entered value can be a regex pattern.

#### Find Location
Users can define the source location where this condition needs to be applied.

**Find Location**

This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:

**Variable** Select if the specified users can select the variable.
   
**URL:** Select this if the specified value has to be searched in the URL part of the HTTP Header.
   
**Header Name:** Select this if the specified name has to be searched in the Headers part of the HTTP Header variables.
   
**Header Value:** Select this if the specified value has to be searched in the Headers part of the HTTP Header values.
   
**Headers:** Select this if the specified value has to be searched in the Headers part of the HTTP Header. 
   
**Cookie Name:** Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables. 
   
**Cookie Value:** Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values.
   
**Cookies:** Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies.
   
**Body Argument Name:** Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header. 
   
**Body Argument Value:** Select this if the specified value has to be searched in the values in the Body part of the HTTP Header.
   
**Body:** Select this if the specified value has to be searched in the Body part of the HTTP Header.
   
**Argument Name:** Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header.
   
**Argument Value:** Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header.
   
**Arguments:** Select this if the specified value has to be searched in the Arguments section in the HTTP Header.

#### Match Condition
The user can define the match condition for the parameter and match value.

#### Match Value
The user can define what value needs to be matched with the match condition.


