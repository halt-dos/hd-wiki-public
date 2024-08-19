---
sidebar_position: 6
---

# Rate Limit Rules

---
### Overview
Rate Limiting is a feature of Haltdos SLB that allows application owners to enforce rate limiting on some of the pages which affect their website performance.

#### How to Use:

1. Go to **Stack** > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) > **Rules**.
2. Select the **Rate Limit Rules**.
3. Click **Add Rule** button.
4. Configure your settings. 
5. Click **Save Changes**

![Rate Limit rule](/img/adc/v8/docs/rate_limit_1.png)

![Rate limit rule](/img/adc/v8/docs/rate_limit_2.png)

### Description:

##### **Rule Name**

The user can define the rule name.

    Accepted values: String

    Default: Blank 

##### **Rule Message**

The user can define the rule message.

    Accepted values: String

    Default: Blank

##### **Rule Enabled**

Users can enable or disable the rule.

    Accepted values: Enabled / Disabled

    Default: Enabled 

##### **Rule Priority**

The user can define the rule priority for this particular rule among various other rules in Rate Limit Rules.

    Accepted values: Integer

    Default: 0 

##### **Rule Action**

The user can define what action needs to be taken when this rule condition is matched.

    Accepted values: Drop & Record Request / Record Request / Bypass Request / Temprorary Blacklist Src IP / Send Captcha CHallenege

    Default: Record Request

##### **Max Rate**

The user can define the request rate for the page

    Accepted values: Integer

    Max: 1000000

    Min: 0

    Default: 10  

    Metric: Per Second 

##### **Track Limit**

The user can define the track limit in order to track if the rate is exceeding the limit or not.

    Accepted values: Integer

    Max: 1000000

    Min: 0

    Default: 20  

    Metric: Count

##### **Track Duration**

Specify the time duration for which the rule will limit the request.

    Accepted values: Integer

    Max: 3600

    Min: 0

    Default: 1  

    Metric: Second 

#### Add Condition

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/enterprise/adc/listeners/rules/conditions)

