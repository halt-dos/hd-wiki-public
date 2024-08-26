---
sidebar_position: 4
---

# Redirectional Rules

These rules allow you to configure redirection for your application pages

---

### Overview 
Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern.

![Redirectional rules](/img/waf/v8/docs/waf_redirection.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Rules** > **Redirection Rules**.
2. Click on **Add Rule** and set relevant parameters described in the table below.
3. Click on **Save Changes**.

### Description

##### **Rule Name**

Specify a user-friendly name to identify the rule. The rule name takes alphanumeric input.

    Accepted values: String

    Default: Blank  

##### **Message**

The user can add a short description of the rule. The description would explain the purpose of the rule.

    Accepted values: String

    Default: Blank  

##### **Rule Priority**

User can set the priority of the rule.

    Accepted values: Integer

    Default: 0  

##### **Match URL**

Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule.

    Accepted values: URL

    Default: Blank  

The match URL should follow the format: [http(s)://www.(*).haltdos.io/(*)]

##### **Forward URL**

The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.

    Accepted values: URL

    Default: Blank  

The forward URL should follow the format: [http(s)://(*).haltdos-1.io/(*)] 

##### **Priority** 

Specify the priority for the rule for execution when matched with the request.

    Accepted values: Integer

    Default: 0  

##### **Response Code**

In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list.

    Accepted values: 301 - Permanent Redirect / 302 - Temporary Redirect / 307 - Temporary Redirect with body / 308 - Permanent Redirect with body

    Default: 0  

**301 - Permanent Redirect**

**302 - Temporary Redirect**