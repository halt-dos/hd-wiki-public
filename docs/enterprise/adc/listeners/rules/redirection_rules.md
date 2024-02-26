---
sidebar_position: 3
---

# Redirection Rules

---

Redirection Rules is a feature of Haltdos SLB that allows application owners to redirect a request to another URL, temporarily or permanently on matching a particular URL pattern.

![Redirection rule](/img/adc/v8/docs/redirection_rule.png)

#### How to Use:

1. Go to Stack > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) > **Rules**.
2. Select the **Redirection Rules**.
3. Click **Add Rule** button.
4. Configure your settings. 
5. Click **Save Changes**.

| SETTINGS       | ACCEPTED VALUE | DEFAULT                 |
|----------------|----------------|-------------------------|
| Rule Name      | String         | Blank                   |
| Rule Message   | String         | Blank                   |
| Rule Enabled   | Boolean        | True                    |
| Rule Priority  | Integer        | 1                       |
| Match Criteria | String         | Blank                   |
| Forward URL    | String         | Blank                   |
| Response Code  | Drop-Down      | 302 -Temporary Redirect  |

### Description:

##### **Rule Name**

User can specify the rule name for redirection rule

##### **Rule Message**

User can specify message that specifies the purpose for this particular rule. 

##### **Rule Priority**

The user can specify the priority for this particular rule.

##### **Match Criteria**

The user can specify the URL that needs to be redirected.

##### **Forward URL**

The user can specify the URL where the match URL needs to be redirected.

##### **Response Code**

The user can specify the response code as temporary or permanent redirect.