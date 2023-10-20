---
sidebar_position: 1
---

# Header Rules

### Overview 
We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client.
   
![header rules](/img/ce-waf/docs/header_rules.png)
   
### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Header Rules**.
3. Click on **Add Rule** and set relevant parameters described below.
4. Click on **Save Changes**

### Description

#### Rule Name

Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

#### Message

Specify a rule message containing a detailed description to identify the rule which is to be created.

#### Rule Priority

User can define the rule's priority among various other custom error rules.

#### HTTP URI

Specify the URI or regex for which rule will be applied. 

#### HTTP Method

Select the HTTP method for the rule to validate when matched with the request.

#### Rule Action
The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:

1) **ADD:** This condition will allow adding a value at the specified location.

2) **REMOVE:** This condition will allow removing a value at the specified location.

3) **OVERWRITE:** This condition will allow overwriting a value at the specified location.

If the action is **ADD** then another field is required I.e., **Value** that will be added for the specified **Parameter**.

If the action is **REMOVE**, then the specified parameter is removed.

If the action is **OVERWRITE**, then two other fields are required first is **Search Pattern** (string/regex that should match the existing value) and **Replace** (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. 

**Note:** In order to escape the dollar($) character in the replace, add the dollar symbol twice.

#### Evaluation Phase

Select the evaluation phase for the rule i.e. Request or Response.

#### Attribute Name

Specify the attribute name which need to add/delete/overwrite with rule.

#### Attribute Value

Specify the attribute value which will be mentioned in the attribute.

#### Parameter

This field specifies the name of the header/cookie/ arguments on which action will be performed.

#### Add Condition

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

![header rules](/img/ce-waf/docs/headerrulescondition.png)

For adding a condition, the required fields are:

#### Condition Phase

This field determines that the condition will be checked on request/response parameters.

#### Find Location

This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:

**URL:** Select this if the specified value has to be searched in the URL part of the HTTP Header.
   
**HTTP Scheme:** Select this if the specified value has to be searched in the 
   
**Country:** Select if specified value has to be search as source country.
   
**Header Name:** Select this if the specified name has to be searched in the Headers part of the HTTP Header variables.
   
**Header Value:** Select this if the specified value has to be searched in the Headers part of the HTTP Header values.
   
**Headers:** Select this if the specified value has to be searched in the Headers part of the HTTP Header. 
   
**Cookie Name:** Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables. 
   
**Cookie Value:** Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values.
   
**Cookies:** Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies.
   
**Body Argument Name:** Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header. 
   
**Body Argument Value:** Select this if the specified value has to be searched in the values in the Body part of the HTTP Header.
   
**Body:** Select this if the specified value has to be searched in the Body part of the HTTP Header.
   
**Argument Name:** Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header.
   
**Argument Value:** Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header.
   
**Arguments:**  Select this if the specified value has to be searched in the Arguments section in the HTTP Header.
   
**Variable:** Users can select the specific variable that has to be find.
   
**SRC IP:**  Select if specified value has to be search as source IP.
   
**Client Browser:** Select if specified value has to be search as client browser.
   
**Client OS:** Select if specified value has to be search as client OS.
   
**Client Device:**  Select if specified value has to be search as client device.

#### Parameter

This field specifies the name of the header/cookie/ arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition.

#### Match Condition

The user can define the match condition for the parameter and match value.

#### Match Value

The user can define what value needs to be matched with the match condition.

