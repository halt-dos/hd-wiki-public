---
sidebar_position: 7
---

# Variable Rules

### Overview
If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:

Form Validation : If a user wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped

Note: Any parameter from the Request/Response can be stored in a variable.

![Variable Rule](/img/ce-waf/docs/variable_rule.png)

## How to use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Variable Rules**.
3. Create rules with different conditions.  
4. Click on **Save Changes**.  

| Parameters       | Accepted value |  Default |
|------------------|----------------|----------|
| Rule Name        | String         | Blank    |
| Rule Message     | String         | Blank    |
| Rule Priority    | Integer        | 0        |
| Evaluation Phase | Drop-Down      | Request  |
| Variable         | Drop-down      | Blank    |
| Mutation Action  | Drop-down      | SET      |
| Value            | String         | None     |
| Condition Phase  | Drop-down      | Request        |
| Find Location    | Drop-Down      | Variable       |
| Find Parameter   | String         | Blank          |
| Match Condition  | Drop-Down      | Pattern Exists |
| Match Value      | String         | Blank          |

![Variable Rule](/img/ce-waf/docs/variablerulescondition.png)

### Description

#### Rule Name
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

#### Rule Message 
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

#### Rule Priority
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0.

#### Evaluation Phase
Users can set the evaluation phase either for request coming from end users or for response sending back to end users.

#### Variable
User can select the variable which should be earlier created under variables.

#### Mutation action
Users can specify the mutation action.

#### Value
Users can specify the value for the rule.



