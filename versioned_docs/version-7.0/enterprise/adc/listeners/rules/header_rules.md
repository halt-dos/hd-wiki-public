---
sidebar_position: 2
---

# Header Rules

---

We have introduced Header rules by which application owners can manipulate request headers, cookies, in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header in the request to the web-server (back-end) as well as respond to the client.

![headerrules](/img/adc/v7/docs/headerrule.png)

#### How to Use:

1. Go to Stack > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) > **Rules**.
2. Select the **Header Rule**.
3. Click **Add Rule** button.
4. Configure your settings. 
5. Click **Save Changes**.

| SETTINGS        | ACCEPTED VALUE | DEFAULT            |
|-----------------|----------------|--------------------|
| Rule Name       | String         | Blank              |
| Rule Message    | String         | Blank              |
| Rule Enabled    | Boolean        | True               |
| Rule Priority   | Integer        | 0                  |
| Rule Action     | Drop-down      | Remove Request Header |
| Attribute Name  | String         | Blank              |
| Search Pattern  | String         | Blank              |
| Attribute Value | String         | Blank              |

### Rule Condition

![headerrules2](/img/adc/v7/docs/headerrule1.png)

| SETTINGS        | ACCEPTED VALUE | TYPE            |
|-----------------|----------------|-----------------|
| Find Location   | Drop-Down      | Source IP       |
| Find Parameter  | String         | Blank           |
| Match Condition | Drop-Down      | Match IP Prefix |
| Match Value     | String         | Blank           |
| Negation        | Drop-Down      | False           |

### Description:

##### **Find Location**

User can specify the location at which the header rule condition is being applied.

##### **Find Parameter**

The user can set the parameter value for the header rule condition.

##### **Match Condition**

The user can set the match condition for above set parameter value and location.

##### **Match Value**

The user can set the value that is matched with the condition set for particular rule condition. 

##### **Negation**

The user can also negate the rule condition.
