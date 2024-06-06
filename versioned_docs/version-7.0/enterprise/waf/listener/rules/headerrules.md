# Header Rules
Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client.

---

### Overview 
We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client.

![header rules](/img/waf/v7/docs/header_rule.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Rules** > **Header Rules**.
2. Click on **Add Rule** and set relevant parameters described below.
3. Click on **Save Changes**

### Description

##### **Rule Name**

Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

    Accepted values: String

    Default: Blank 

##### **Message**

Specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: String

    Default: Blank 

##### **Rule Priority**

User can define the rule's priority among various other custom error rules.

    Accepted values: Integer

    Default: 0 

##### **URI**

Specify the URI or regex for which rule will be applied. 

    Accepted values: Regex

    Default: Blank 

##### **Method**

Select the HTTP method for the rule to validate when matched with the request.

    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL 

##### **Evaluation Phase**

Select the evaluation phase for the rule i.e. Request or Response.

    Accepted values: Request Phase / Response Phase

    Default: Request Phase  

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

##### **Attribute Value**

Specify the attribute value which will be mentioned in the attribute.

    Accepted values: String

    Default: Blank 

##### **Parameter**

This field specifies the name of the header/cookie/ arguments on which action will be performed.

    Accepted values: String

    Default: Blank 

##### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/enterprise/waf/listener/profiles/rules/conditions)
