---
sidebar_position: 6
---

# Variables

### Overview
Under varaibles user can create user defiend variable by configuring it's scope and value, these variable can be further use in the WAF solution like in variable rule, behavior rule.  

![Variable](/img/ce-waf/docs/variable.png)  

### How to Use:
1. Go to **WAF** > **Variables**.
2. Click on **Add Variable** button.
3. Configure your settings.
4. Click **Save Changes**.  

| Parameters     | Accepted value |  Default |
|----------------|----------------|----------|
| Variable Name  | String         | Blank    |
| Variable Type  | Drop-down      | String   |
| Variable Scope | Drop-down      | Transaction    |
| Default Value  | String         | Blank    |
| Value Expiry  | Integers         | 1    |

### Description

#### Variable Name
Users can specify the user-friendly variable name.

#### Variable Type
Users can specify the variable type either it is string or integer.

#### Variable Scope
Users can specify the scope of the variable. Users can select any of the following: **GLOBAL**, **TRANSACTION**, **SESSION**, **CUSTOM**.

#### Default Value
Users can specify the default value for the variable.

#### Value Expiry
Users can specify the expiry for the variable in seconds.