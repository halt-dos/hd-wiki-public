# Redirectional Rules

These rules allow you to configure redirection for your application pages

---

### Overview 
Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern.

![Redirectional rules](/img/waf/v7/docs/redirection_rule.png)

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

    Accepted values: String

    Default: Blank 

##### **Match URL**

Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule.

    Accepted values: String

    Default: Blank 

The match URL should follow the format: [http(s)://www.(*).haltdos.io/(*)]

##### **Forward URL**

The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.
The forward URL should follow the format: [http(s)://(*).haltdos-1.io/(*)] 

    Accepted values: String

    Default: Blank 


##### **Response Code**

In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list.

    Accepted values: String

    Default: Blank 

**301 - Permanent Redirect**

**302 - Temporary Redirect**

##### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/enterprise/waf/listener/profiles/rules/conditions)