# Variable Rules

### Overview
If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:

1. Form Validation : If a user wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped

:::note Note
Any parameter from the Request/Response can be stored in a variable.
:::

![variable rule](/img/waf/v7/docs/variablerule.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Rules** > **Variable Rules**
2. Create rules with different conditions
3. Click on **Save Changes**

| Parameters | Accepted Values | Default
| ----------- | ----------- |---------- |
| Rule Name|String|None
Rule Message|String|None
Rule Priority|Integer|None
Evaluation Phase|Drop-down|Request
Variable|Drop-down|Blank
Mutation Action|Drop-down|SET
Value|String|None

![variable rules](/img/waf/v7/docs/variablerule1.png)

### Description
##### **Rule Name** 

Users are allowed to specify a user-friendly name to identify the rule. The rule name takes alphanumeric input.

##### **Rule Message** 

The user can add a short description of the rule. The description would explain the purpose of the rule.

##### **Rule Priority**

Set the priority of the rule. If two rules have the same priority, then selection will be random.

##### **Evaluation Phase**

Users can set the evaluation phase either for request coming from end users or for response sending back to end users.

##### **Variable**

User can select the variable which should be earlier created under variables.

##### **Mutation action**

Users can specify the mutation action.

##### **Value**

Users can specify the value for the rule.

##### **Condition Phase**

User can define the condition phase

##### **Find Location**

User can define the source location where this condition needs to be applied

##### **Match condition**

User can select the condition which was previously mentioned in the drop-down.

##### **Match Value**

User can mention the value which should be matched.