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


### Description:

##### **Rule Name**

User can define the rule name.

```
    Accepted values: String

    Default: Blank 
```


##### **Rule Message**

User can define the rule message.

```
    Accepted values: String

    Default: Blank 
```


##### **Rule Priority**

User can define the rule priority among various other policy rules.

```
    Accepted values: Integer

    Default: 0
```


##### **Rule Action**

User can define what action needs to be taken in case this rule is being satisfied.

```
    Accepted values: String

    Default: Blank 
```


##### **Rule Condition**

![Policy Condition](/img/ddos/v7/docs/policy_condition.png)

### Description

##### **Find Location**

User can define the source location where this condition needs to be applied.

```
    Accepted values: Select source location

    Default: Blank 
```


##### **Find Parameter**

The user can define the parameter based on the location of the condition.

```
    Accepted values: String

    Default: Blank 
```


##### **Match Condition**

The user can define the match condition for the parameter and match value.

```
    Accepted values: String

    Default: Blank 
```


##### **Match Value**

The user can define what value needs to be matched with the match condition.

```
    Accepted values: String

    Default: Blank 
```

