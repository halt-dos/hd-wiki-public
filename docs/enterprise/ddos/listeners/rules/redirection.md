---
sidebar_position: 2
---

# Redirection Rules

These rules allow you to configure redirection for your application pages

---

## Overview 
Redirection Rules is a feature of Haltdos DDOS that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern.

![Redirection](/img/ddos/v7/docs/redirection.png)

### How to Use

1. Go to **Apps** > **DDOS** > **Listeners** > **Rules** > **Redirection Rules**.

2. Click on **Add Rule** and set relevant parameters described in the table below.

3. Click on **Save Changes**.

| Parameters| Accepted Values | Default
| ----------- | ----------- |-----------|
| Rule Name|String|None
| Rule Message|Description for the rule in String format|None
| Rule Priority|Integer|1
| Match Criteria|Absolute URL path|None
| Forward URL|Absolute URL path|None
| Response Code|301, 302|302 - Temporary Redirect


### Description

##### **Rule Name**
Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: Blank

##### **Message**
The user can add a short description of the rule. The description would explain the purpose of the rule.

    Accepted values: String

    Default: Blank

##### **Rule Priority**
User can set the priority of the rule.

    Accepted values: Integer

    Default: Blank

##### **Match Criteria**
Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule.

    Accepted values: Absolute URL

    Default: Blank

The match URL should follow the format: [http(s)://www.(*).haltdos.io/(*)]

##### **Forward URL**
The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.
The forward URL should follow the format: [http(s)://(*).haltdos-1.io/(*)]

    Accepted values: Absolute URL

    Default: Blank 

##### **Response Code**
In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list.

    Accepted values: 301 / 302

    Default: 302

 - 301 - Permanent Redirect 
 - 302 - Temporary Redirect