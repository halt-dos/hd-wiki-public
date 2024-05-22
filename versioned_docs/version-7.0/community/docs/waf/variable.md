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

### Description

#### Variable Name
Users can specify the user-friendly variable name.

    Accepted values: String / Integer 

    Default: Blank  

#### Variable Type
Users can specify the variable type either it is string or integer.

    Accepted values: String / Integer

    Default: String 

#### Variable Scope
Users can specify the scope of the variable. Users can select any of the following: **GLOBAL**, **TRANSACTION**, **SESSION**, **CUSTOM**.

    Accepted values: Global / Transaction /  Session / Custom

    Default: Transaction  

#### Extraction Location
Users can specify the location of the extraction

    Accepted values: URL / Header Value / Cookie Value / Argument Value / Body Value

    Default: Blank  

#### Default Value
Users can specify the default value for the variable.

    Accepted values: String 

    Default: Blank  

#### Value Expiry
Users can specify the expiry for the variable in seconds.

    Accepted values: Integer 

    Default: 1  

    Metric: Seconds
