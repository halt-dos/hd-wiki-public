---
sidebar_position: 7
---

# Variable Rules

### Overview
If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:  

:::note
Note: Any parameter from the Request/Response can be stored in a variable.
:::
![Variable Rule](/img/ce-waf/docs/variable_rule.png)

## How to use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Variable Rules**.
3. Create rules with different conditions.  
4. Click on **Save Changes**.  

### Description

#### Rule Name
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: Blank  

#### Rule Message 
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: Description for the rule in String format

    Default: Blank  

#### Rule Priority
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0.

    Accepted values: Integer 

    Default: 0  

#### Variable
User can select the variable which should be earlier created under variables.

    Accepted values: Drop-Down 

    Default: Please Select 

#### Mutation action
Users can specify the mutation action.

    Accepted values: SET / DELETE / INCREMENT / DECREMENT

    Default: SET          

#### Value
Users can specify the value for the rule.

    Accepted values: String 

    Default: None  

#### Add Condition

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/community/docs/waf/rules/conditions)



