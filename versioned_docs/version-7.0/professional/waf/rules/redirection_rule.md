---
sidebar_position: 3
---
# Redirectional Rules

These rules allow you to configure redirection for your application pages

---

### Overview 
Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern.

![redirection_rule](/img/pro-waf/docs/redirection_rules1.png)
![redirection_rule](/img/pro-waf/docs/redirection_rules2.png)

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **Rules** > **Redirection Rules**.
3. Click on **Add Rule** and set relevant parameters described in the table below.
4. Click on **Save Changes**.


### Description

##### **Rule Name**

Specify a user-friendly name to identify the rule. The rule name takes alphanumeric input.

    Accepted values: String

    Default: None  

##### **Message**

The user can add a short description of the rule. The description would explain the purpose of the rule.

    Accepted values: Description for the rule in String format

    Default: None  

##### **Rule Priority**

User can set the priority of the rule.

    Accepted values: Integer

    Default: 1  

##### **Match URL**

Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule.

The match URL should follow the format: [http(s)://www.(.*).example.com/(.*)]

    Accepted values: URL

    Default: None  

##### **Forward URL**

The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.
The forward URL should follow the format: [http(s)://$1.example.com/$2] 

    Accepted values: URL

    Default: None  

##### **Priority** 

Specify the priority for the rule for execution when matched with the request.

##### **Response Code**

In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list.

    Accepted values: 301, 302

    Default: 302 - Temporary Redirect  

**301 - Permanent Redirect**

**302 - Temporary Redirect**