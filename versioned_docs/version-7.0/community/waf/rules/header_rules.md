---
sidebar_position: 2
---

# Header Rules

### Overview 
Header Rules allows to manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client.
   
![header rules](/img/ce-waf/docs/header_rules.png)
   
### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Header Rules**.
3. Click on **Add Rule** and set relevant parameters.
4. Click on **Save Changes**

### Description

#### Rule Name

Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: Blank  

#### Message

Specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: Description for the rule in String format

    Default: Blank  

#### Rule Priority

User can define the rule's priority among various other custom error rules.

    Accepted values: Integer 

    Default: 0  

#### HTTP URI

Specify the URI or regex for which rule will be applied. 

    Accepted values: URI 

    Default: Blank  

#### HTTP Method

Select the HTTP method for the rule to validate when matched with the request.

    Accepted values: Any / Get / Post / Put / Delete / Patch / Head / Options 

    Default: Any
  
For more information regarding HTTP method, please refer to this link: [**HTTP Method**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) 

#### Evaluation Phase

Select the evaluation phase for the rule i.e. Request or Response.

    Accepted values: Request Phase / Response Phase 

    Default: Request Phase  

For more information regarding Request and Respose Phase, please refer to this link: [**Request/Respons Phase**](/community/waf/rules/)

#### Rule Action
The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:

1) **ADD:** This condition will allow adding a value at the specified location.

2) **REMOVE:** This condition will allow removing a value at the specified location.

3) **OVERWRITE:** This condition will allow overwriting a value at the specified location.

If the action is **ADD** then another field is required I.e., **Value** that will be added for the specified **Parameter**.

If the action is **REMOVE**, then the specified parameter is removed.

If the action is **OVERWRITE**, then two other fields are required first is **Search Pattern** (string/regex that should match the existing value) and **Replace** (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. 

**Note:** In order to escape the dollar($) character in the replace, add the dollar symbol twice.

#### Attribute Name

Specify the attribute name which need to add/delete/overwrite with rule.

    Accepted values: String / Integer

    Default: Blank  

#### Attribute Value

Specify the attribute value which will be mentioned in the attribute.

    Accepted values: String

    Default: Blank  

#### Parameter

This field specifies the name of the header/cookie/ arguments on which action will be performed.

#### Add Condition

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/community/docs/waf/rules/conditions)

