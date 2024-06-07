---
sidebar_position: 4
---

# Policy Rules

---

Policy rule is the feature of Haltdos SLB that allows application owners to set various policy rules based on their  requirements. 

![Policy rule](/img/adc/v7/docs/policyrule.png)

### How to Use:

1. Go to Stack > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) > **Rules**.
2. Select the **Policy Rule**.
3. Click **Add Rule** button.
4. Configure your settings. 
5. Click **Save Changes**.

| SETTINGS      | ACCEPTED VALUE | DEFAULT      |
|---------------|----------------|--------------|
| Rule Name     | String         | Blank        |
| Rule Message  | String         | Blank        |
| Rule Enabled  | Boolean        | True         |
| Rule Priority | Integer        | 0            |
| Evaluation Phase | Drop-down        | Request Phase            |
| Rule Action   | Drop Down      | Drop Request |

### Description

##### **Rule Name**

User can define the rule name.

    Accepted values: String

    Default: Blank 

##### **Rule Message**

User can define the rule message.

    Accepted values: String

    Default: Blank 

##### **Rule Enabled**

Users can enable and disable the rule.

    Accepted values: Enable / Disable

    Default: Enable 

##### **Rule Priority**

User can define the rule priority among various other policy rules.

    Accepted values: Integer

    Default: 0 

##### **Evaluation Phase**

Users are allowed to specify the phase for the rule i.e. Request/Response while evaluating the request.

    Accepted values: Request Phase / Response Phase

    Default: Request Phase 

#### Rule Action

User can define what action needs to be taken in case this rule is being satisfied.

    Accepted values: Integer

    Default: 0 

#### **Add Condition**
The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: **Conditions**
