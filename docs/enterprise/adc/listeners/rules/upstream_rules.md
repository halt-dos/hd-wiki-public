---
sidebar_position: 5
---

# Upstream Rule

---

If a user has defined server group and wants to use different groups depending upon different conditions then he can make use of Upstream Rules.

![Upstream rule](/img/adc/v8/docs/upstream_rule_1.png)

### How to Use:

1. Go to **Stack** > [**SLB**](../../../adc.md) > [**Listeners**](../listeners.md) > **Rules**.
2. Select the **Load Balancing Rules**.
3. Click **Add Rule** button.
4. Configure your settings. 
5. Click **Save Changes**.

### Description

##### **Rule Name **

User can specify the rule name.

```
    Accepted values: String

    Default: Blank 
```


##### **Rule Message**

User can specify the rule message.

```
    Accepted values: String

    Default: Blank 
```


##### **Rule Enabled**

Users can enable or disable the rule.

```
    Accepted values: Enabled / Disabled

    Default: Enabled
```


##### **Rule Priority**

User can specify the rule priority among other created rules in LB rules.

```
    Accepted values: Integer

    Default: 0 
```


##### **Server Group**

User can specify which server group to associate with this particular rule.

```
    Accepted values: List of Server Group

    Default: Blank 
```


#### Add Condition
The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/enterprise/adc/listeners/rules/conditions)
