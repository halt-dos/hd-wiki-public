---
sidebar_position: 5
---

# Upstream Rule

---

If a user has defined server group and wants to use different groups depending upon different conditions then he can make use of Upstream Rules.

![Upstream rule](/img/adc/v7/docs/upstream.png)

### How to Use:

1. Go to Stack > [**SLB**](../../../adc.md) > [**Listeners**](../../listeners/listeners.md) > **Rules**.
2. Select the **Load Balancing Rules**.
3. Click **Add Rule** button.
4. Configure your settings. 
5. Click **Save Changes**.

| SETTINGS       | ACCEPTED VALUE | DEFAULT |
|----------------|----------------|---------|
| Rule Name      | String         | Blank   |
| Rule Message   | String         | Blank   |
| Rule Enabled   | Boolean        | True    |
| Rule Priority  | Integer        | 1       |
| Server Group   | Drop-Down      | Blank   |

### Description

#### **Rule Name **

User can specify the rule name.

#### **Rule Message**

User can specify the rule message.

#### **Rule Enabled**

Users can enable or disable the rule.

#### **Rule Priority**

User can specify the rule priority among other created rules in LB rules.

#### **Server Group**

User can specify which server group to associate with this particular rule.

#### **Rule Condition**

![Upstream rule](/img/adc/v7/docs/upstreamrule1.png)

| SETTINGS        | ACCEPTED VALUE | DEFAULT         |
|-----------------|----------------|-----------------|
| Find Location   | Drop-Down      | Source IP       |
| Find Parameter  | String         | Blank           |
| Match Condition | Drop-Down      | Match IP Prefix |
| Match Value     | String         | Blank           |
| Negation        | Drop-Down      | False           |

#### Description

##### **Find Location**

User can define the source location where this condition needs to be applied.

##### **Find Parameter**

The user can define the parameter based on the location of the condition.

##### **Match Condition**

The user can define the match condition for the parameter and match value.

##### **Match Value**

The user can define what value needs to be matched with the match condition.

##### **Negation**

The user can define either to negate the condition for this rule or not.