---
sidebar_position: 4
---

# Redirection Rules

### Overview 
Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern.
   
![redirectional rules](/img/ce-waf/docs/redirection_rules.png)
   
### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Redirection Rules**.
3. Click on **Add Rule** and set relevant parameters described in the table below.
4. Click on **Save Changes**.

| Parameters| Accepted Values | Default
| ----------- | ----------- |-----------|
| Rule Name|String|None
Rule Message|Description for the rule in String format|None
Rule Priority|Integer|1
Match URL|Absolute URL path|None
Forward URL|Absolute URL path|None
Response Code|301, 302|302 - Temporary Redirect

![redirectional rules](/img/ce-waf/docs/redirectionrulescondition.png)
   
### Description

#### Rule Name
Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input.

#### Rule Message
The user can add a short description of the rule. The description would explain the purpose of the rule.

#### Rule Priority
User can set the priority of the rule.

#### Match URL
Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule.
The match URL should follow the format: [http(s)://www.(*).haltdos.io/(*)]

#### Forward URL
The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.
The forward URL should follow the format: [http(s)://(*).haltdos-1.io/(*)] 

#### Response Code
In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list.
   
**301** - Permanent Redirect 
   
**302** - Temporary Redirect