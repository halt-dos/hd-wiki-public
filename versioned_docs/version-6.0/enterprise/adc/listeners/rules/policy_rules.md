---
sidebar_position: 4
---

# Policy Rules

---

Policy rule is the feature of Haltdos SLB that allows application owners to set various policy rules based on their  requirements. 

![Policy rule](/img/adc/v6/docs/policyrule.png)

### How to Use:

1. Go to Stack > [**SLB**](/adc/docs) > [**Listeners**](../../listeners/) > **Rules**.

2. Select the **Policy Rule**.

3. Click **Add Rule** button.

4. Configure your settings. 

5. Click Save Changes.

| SETTINGS      | ACCEPTED VALUE | DEFAULT      |
|---------------|----------------|--------------|
| Rule Name     | String         | Blank        |
| Rule Message  | String         | Blank        |
| Rule Enabled  | Boolean        | False        |
| Rule Priority | Integer        | 0            |
| Rule Action   | Drop Down      | Drop Request |

#### Description:

#### Rule Name

User can define the rule name.

#### Rule Message

User can define the rule message.

#### Rule Enabled

Users can enable and disable the rule.

#### Rule Priority

User can define the rule priority among various other policy rules.

#### Rule Action

User can define what action needs to be taken in case this rule is being satisfied.

### Rule Condition

![Policy rule2](/img/adc/v6/docs/policyrule2.png)

| SETTINGS        | ACCEPTED VALUE | DEFAULT   |
|-----------------|----------------|-----------|
| Find Location   | Drop-Down      | Source IP |
| Find Parameter  | String         | Blank     |
| Match Condition | Drop-Down      | Contains  |
| Match Value     | String         | Blank     |
| Negation        | Drop-Down      | True      |

### Description:

#### Find Location

User can define the source location where this condition needs to be applied.

#### Find Parameter

The user can define the parameter based on the location of the condition.

#### Match Condition

The user can define the match condition for the parameter and match value.

#### Match Value

The user can define what value needs to be matched with the match condition.

#### Negation

The user can define either to negate the condition for this rule or not.