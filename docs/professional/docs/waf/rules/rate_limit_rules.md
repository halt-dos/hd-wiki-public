---
sidebar_position: 7
---
# Rate Limit Rules
### Overview
Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance.

![rate_limit_rules](/img/pro-waf/docs/v7/rate_limit_rules1.png)
![rate_limit_rules](/img/pro-waf/docs/v7/rate_limit_rules2.png)
![rate_limit_rules](/img/pro-waf/docs/v7/rate_limit_rules3.png)

**Warning** Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior.

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then to **Listeners** > **Rules** > **Rate Limit Rules**
3. Click on **Add Rule**.
4. Configure the rule and click on save changes.


| Parameters      | Accepted value |  Default       |
|-----------------|----------------|----------------|
| Rule Name       | String         | None           |
| Rule Message    | String         | None           |
| Rule Priority   | Integer        | 0              |
| Rule Action     | Drop-down      | Record request |
| Rate            | Integer        | 10             |
| Burst           | Integer        | 20             |
| Track Duration  | Integer        | 1              |
| Increment on    | Drop-down      | Requests       |
| Condition Phase | Drop-down      | Request        |
| Find Location   | Drop-Down      | Variable       |
| Find Parameter  | String         | Blank          |
| Match Condition | Drop-Down      | Pattern Exists |
| Match Value     | String         | Blank          |

### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

##### **Rule Priority**
Users are allowed to specify the priority for the rule for execution when matched with the request.

##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, Temp Blacklist src IP, Tarpit Src IP etc.

##### **Limit Rate**
Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate.

##### **Limit Burst**
Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. 

##### **Limit Duration**
Users are allowed to specify the time duration for which the rule will limit the request.

##### **Limit On**
Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer.

:::note
Always limit burst must be greater than or equal to limit rate.
:::
##### **Condition Phase**
This drop-down allows to set the match condition i.e. request or response for the request.

##### **Find Location**
Users can define the source location where this condition needs to be applied.

##### **Find Parameter**
The user can define the parameter based on the location of the condition.

##### **Match Condition**
The user can define the match condition for the parameter and match value.

##### **Match Value**
The user can define what value needs to be matched with the match condition.





