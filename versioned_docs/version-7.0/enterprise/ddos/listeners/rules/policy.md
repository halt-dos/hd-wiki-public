---
sidebar_position: 4
---
# Policy Rules

---
### Overview

Policy rule is the feature of Haltdos DDOS that allows application owners to set various policy rules based on their  requirements. 

![Polic Rule](/img/ddos/v7/docs/policy_rule.png)

### How to Use:

1. Go to **DDOS** > **Listeners** > **Rules** > **Policy Rules**.

2. Select the **Policy Rule**.

3. Click **Add Rule** button.

4. Configure your settings. 

5. Click Save Changes.

| SETTINGS      | ACCEPTED VALUE | DEFAULT      |
|---------------|----------------|--------------|
| Rule Name     | String         | Blank        |
| Rule Message  | String         | Blank        |
| Rule Priority | Integer        | 0            |
| Rule Action   | Drop Down      | Drop Request |

### Description:

##### **Rule Name**

User can define the rule name.

##### **Rule Message**

User can define the rule message.

##### **Rule Priority**

User can define the rule priority among various other policy rules.

##### **Rule Action**

User can define what action needs to be taken in case this rule is being satisfied.

##### **Rule Condition**

![Policy Condition](/img/ddos/v7/docs/policy_condition.png)

| SETTINGS        | ACCEPTED VALUE | DEFAULT   |
|-----------------|----------------|-----------|
| Find Location   | Drop-Down      | Source IP |
| Find Parameter  | String         | Blank     |
| Match Condition | Drop-Down      | Contains  |
| Match Value     | String         | Blank     |

### Description

##### **Find Location**

User can define the source location where this condition needs to be applied.

##### **Find Parameter**

The user can define the parameter based on the location of the condition.

##### **Match Condition**

The user can define the match condition for the parameter and match value.

##### **Match Value**

The user can define what value needs to be matched with the match condition.