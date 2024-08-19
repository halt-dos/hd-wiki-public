---
sidebar_position: 7
---
# Rate Limit Rules
### Overview
Rate Limiting allows application owners to enforce rate limiting on some of the pages which affect their website performance.

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

    Accepted values: Description for the rule in String format.

    Default: None  

##### **Rule Priority**
Users are allowed to specify the priority for the rule for execution when matched with the request.

    Accepted values: Integer

    Default: 0  

##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, Temp Blacklist src IP, Tarpit Src IP etc.

    Accepted values: Drop & Record Request / Record Request / Bypass Request / Temprorary Blacklist Src IP / Send Captcha CHallenege

    Default: Record Request  

##### **Rate**
Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate.

    Accepted values: Integer
    
    Max: 1000000
    
    Min: 0
    
    Default: 10  

    Metric: Per Second

##### **Burst**
Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. 

    Accepted values: Integer
    
    Max: 1000000
    
    Min: 0
    
    Default: 20  

    Metric: Count

##### **Track Duration**
Users are allowed to specify the time duration for which the rule will limit the request.

    Accepted values: Integer
    
    Max: 3600
    
    Min: 0
    
    Default: 1  

    Metric: Second

##### **Increment On**
Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer.

    Accepted values: Request / Request-Size / Response-Size / Total Band Width

    Default: Request  

:::note Note
Always limit burst must be greater than or equal to limit rate.
:::

##### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/v7/professional/waf/rules/conditions)



