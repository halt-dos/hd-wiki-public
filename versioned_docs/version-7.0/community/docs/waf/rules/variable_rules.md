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

![Variable Rule](/img/ce-waf/docs/variablerulescondition.png)

### Description

#### Rule Name
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

    Accepted values: String 

    Default: Blank  

#### Rule Message 
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: String 

    Default: Blank  

#### Rule Priority
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0.

    Accepted values: Integer 

    Default: 0  

#### Evaluation Phase
Users can set the evaluation phase either for request coming from end users or for response sending back to end users.

    Accepted values: Drop-Down 

    Default: Request  

#### Variable
User can select the variable which should be earlier created under variables.

    Accepted values: Drop-Down 

    Default: Blank  

#### Mutation action
Users can specify the mutation action.

    Accepted values: Drop-Down

    Default: SET          

#### Value
Users can specify the value for the rule.

    Accepted values: String 

    Default: None  

#### Condition
User can specify specific Condition in various parameter.

**Condition Phase**
User can specify the phase of the condition

    Accepted values: Drop-Down 

    Default: Request  
**Find Location**
User can specify the location

    Accepted values: Drop-Down 

    Default: Variable  

**Match Condition**
User can select the match condition.

    Accepted values: Drop-Down 

    Default: Pttern Exists  

**Match Value**
User can enter the match value

    Accepted values: String 

    Default: Blank  



