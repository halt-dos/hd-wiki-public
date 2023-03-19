---
sidebar_position: 10
---
# Deception Rules
   
### Overview
Deception strategies will be implemented as a deception rule. This rule is capable of generating and injecting deception data automatically into HTTP traffic.
The goal of deception is to deceive and manipulate attackers inducing them to take actions that result in blocking the requests coming from them.
The attacker should believe that fake parameters are genuine and really belong to the real application and should try to modify them in a malicious way.
   
The rule will have to do the following : 
Intercept HTTP responses of the original application and inject fake parameters before delivering the response to the client. The possible fake parameter values will try to have attractive names and values.
1. For GET requests, the parameters will be added to existing ```<a href>``` link values.
2. For POST requests, the parameters will be added as hidden input type parameters of existing forms.
   
![Deception Rule](/img/waf/v7/docs/deception_rule.png)
   
### How to Use:
1. Go to **WAF** > **Listener** > **Profiles** > **Rules** > **Deception Rules**.
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on save changes
   
| Parameters    | Accepted value |  Default |
|---------------|----------------|----------|
| Rule Name     | String         | Blank    |
| Rule Message  | String         | Blank    |
| Rule Priority | Integer        | 0        |
| URI           | String         | Blank    |
| Method        | Drop-down      | ALL      |
| Rule Action   | Drop-down      | Record   |
| Decoy URI     | String         | Blank    |
| Decoy Method  | Drop-down      | GET      |
| Fields        | String         | Blank    |
   
### Description
   
##### **Rule Name**
Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

##### **Rule Message**
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

##### **URI**
Users are allowed to specify the URI on which the tamper rule will be applied.

##### **Method**
Users are allowed to select the HTTP method for the rule to extract when matched with the request.

##### **Rule Action**
The following actions are available to the User-
   
1. **DROP & RECORD REQUEST** - If the Request to the subscribed domain matches the Firewall Rule, an event is generated, but the request will not be allowed through the WAF.
2. **RECORD REQUEST** - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos.
3. **TEMPORARY BLACKLIST SOURCE IP** - If the request satisfies the rule, then the user is temporarily blacklisted.
4. **TARPIT SRC.IP** - If the request satisfies the rule, the end-user IP will be tarpit.

##### **Decoy URI**
Users can specify the smoke URI for the rule. The smoke URI will be the one that could be used by attackers to attack.

##### **Decoy Methods**
Users can specify the HTTP methods for the rule to be created.

##### **Fields**
Users can specify the fields for which the rule will be applicable.

