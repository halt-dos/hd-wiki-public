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


### Description:

##### **Rule Name**

Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

    Accepted values: String

    Default: Blank  

##### **Message**

Specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: String

    Default: Blank  

##### **Rule Enabled**

Specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: Enabled / Disabled

    Default: Enabled  

##### **Rule Priority**

User can define the rule's priority among various other custom error rules.

    Accepted values: Integer

    Default: Blank  

##### **Rule Action**

The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:

    Accepted values: ADD HEADER / ADD COOKIE / OVERWRITE HEADER / OVERWRITE COOKIE / REMOVE HEADER / REMOVE COOKIE

    Default: REMOVE COOKIE 

1) **ADD:** This condition will allow adding a value at the specified location.

2) **REMOVE:** This condition will allow removing a value at the specified location.

3) **OVERWRITE:** This condition will allow overwriting a value at the specified location.

If the action is **ADD** then another field is required I.e., **Value** that will be added for the specified **Parameter**.

If the action is **REMOVE**, then the specified parameter is removed.

If the action is **OVERWRITE**, then two other fields are required first is **Search Pattern** (string/regex that should match the existing value) and **Replace** (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. 

:::note Note
 In order to escape the dollar($) character in the replace, add the dollar symbol twice.
:::

##### **Attribute Name**

Specify the attribute name which need to add/delete/overwrite with rule.

    Accepted values: String

    Default: Blank  

##### **Search Pattern**

Specify the attribute name which need to add/delete/overwrite with rule.

    Accepted values: String

    Default: Blank  

##### **Attribute Value**

Specify the attribute value which will be mentioned in the attribute.

    Accepted values: String

    Default: Blank  

