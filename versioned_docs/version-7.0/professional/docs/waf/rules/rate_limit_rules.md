---
sidebar_position: 7
---
# Rate Limit Rules
### Overview
Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance.

![rate_limit_rules](/img/pro-waf/docs/rate_limit_rules1.png)
![rate_limit_rules](/img/pro-waf/docs/rate_limit_rules2.png)
![rate_limit_rules](/img/pro-waf/docs/rate_limit_rules3.png)

**Warning** Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior.

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then to **Listeners** > **Rules** > **Rate Limit Rules**
3. Click on **Add Rule**.
4. Configure the rule and click on save changes.

### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: None  

##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

    Accepted values: String

    Default: None  

##### **Rule Priority**
Users are allowed to specify the priority for the rule for execution when matched with the request.

    Accepted values: Integer

    Default: 0  

##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, Temp Blacklist src IP, Tarpit Src IP etc.

    Accepted values: Drop-Down

    Default: Record Request  

##### **Limit Rate**
Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate.

    Accepted values: Integer

    Default: 10  

##### **Limit Burst**
Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. 

    Accepted values: Integer

    Default: 20  

##### **Limit Duration**
Users are allowed to specify the time duration for which the rule will limit the request.

    Accepted values: Integer

    Default: 1  

##### **Limit On**
Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer.

    Accepted values: Drop-Down

    Default: Request  

:::note Note
Always limit burst must be greater than or equal to limit rate.
:::
##### **Condition Phase**
This drop-down allows to set the match condition i.e. request or response for the request.

    Accepted values: Drop-Down

    Default: Request  

##### **Find Location**
Users can define the source location where this condition needs to be applied.

    Accepted values: Drop-Down

    Default: Variable  

##### **Find Parameter**
The user can define the parameter based on the location of the condition.

    Accepted values: String

    Default: Blank  

##### **Match Condition**
The user can define the match condition for the parameter and match value.

    Accepted values: Drop-Down

    Default: Pattern Exists  

##### **Match Value**
The user can define what value needs to be matched with the match condition.


    Accepted values: String

    Default: Blank  




