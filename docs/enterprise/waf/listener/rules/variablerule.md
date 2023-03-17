# Variable Rules

## Overview
If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:

1. Form Validation : If a user wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped

**Note:** Any parameter from the Request/Response can be stored in a variable.

![variable rule](/img/waf/v6/docs/variablerules.png)

## How to use:
1.Go to **WAF** > **Listeners** > **Rules** > **Variable Rules**

2.Create rules with different conditions

3.Click on **Save Changes**

| Parameters | Accepted Values | Default
| ----------- | ----------- |---------- |
| Rule Name|String|None
Rule Message|String|None
Rule Priority|Integer|None
Evaluation Phase|Drop-down|Request
Variable|Drop-down|Blank
Mutation Action|Drop-down|SET
Value|String|None

![variable rules](/img/waf/v6/docs/variablerulescondition.png)

## Description
1.**Rule Name:** 

Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input.

2.**Rule Message:** 

The user can add a short description of the rule. The description would explain the purpose of the rule.

3.**Rule Priority :**

Set the priority of the rule. If two rules have the same priority, then selection will be random.

4.**Evaluation Phase:**

Users can set the evaluation phase either for request coming from end users or for response sending back to end users.

5.**Variable:**

User can select the variable which should be earlier created under variables.

6.**Mutation action:**

Users can specify the mutation action.

7.**Value:**

Users can specify the value for the rule.

8.**Condition Phase:**

User can define the condition phase

9.**Find Location:**

User can define the source location where this condition needs to be applied

10.**Match condition:**

User can select the condition which was previously mentioned in the drop down.

11.**Match Value:**

User can mention the value which should be matched.