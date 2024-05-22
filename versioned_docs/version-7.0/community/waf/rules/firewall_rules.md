---
sidebar_position: 4
---

# Firewall Rules

### Overview
 Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the some regular pattern if it found those configured pattern then according to the rule condition it specifies which traffic is allowed or denied.

![Firewall Rule](/img/ce-waf/docs/firewall_rules.png)
   
### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Firewall Rules**.
3. Configure the fields that are present.
4. Click on Save Changes and the rule will be reflected.

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

    Default: 1000  

#### Method
Users are allowed to specify the HTTP method on which the rule will be applied i.e. ANY, GET, POST, PUT, DELETE, HEAD, OPTIONS.

    Accepted values: Any / Get / Post / Put / Delete / Patch / Head / Options

    Default: Any  

#### Rule Action
Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning.

    Accepted values: Drop & Record Request / Record Request / Bypass Request / Redirect / No Action.

    Default: Record Request  

1. **DROP  & RECORD REQUEST** - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF.
2. **RECORD REQUEST** - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos.
3. **BYPASS REQUEST** - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF.
4. **REDIRECT** - If the request satisfies the rule, then the user is redirected to another page.
5. **NO ACTION** - If the request satisfies the rule, then no action will be performed on the current request.

#### Add Condition

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/community/docs/waf/rules/conditions)
