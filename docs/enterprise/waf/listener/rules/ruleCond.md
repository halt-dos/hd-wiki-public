---
sidebar_position: 9
---

# Rule Condition


### Add Condition


This enables users to define conditions that are directly tied to the rules. These conditions act as prerequisites, mandating that certain condition must be met before a particular rule action can take effect. Essentially, users can establish requirements regarding the interactions between the system and external entities, ensuring that the rule is only enforced when these conditions are satisfied. This feature provides users with a powerful means of fine-tuning the behavior of the system, allowing for precise control over when and how rules are applied based on the context of request and response interactions.

![header rules](/img/ce-waf/docs/headerrulescondition.png)

For adding a condition, the required fields are:

#### Condition Phase

This field determines that the condition will be checked on request/response parameters.

    Accepted values: Request / Response

    Default: Request 

#### Find Location

This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:

- **URL:** Select this if the specified value has to be searched in the URL part of the HTTP Header.
   
- **HTTP Scheme:** Select this if the specified value has to be searched in the 
   
- **Country:** Select if specified value has to be search as source country.
   
- **Header Name:** Select this if the specified name has to be searched in the Headers part of the HTTP Header variables.
   
- **Header Value:** Select this if the specified value has to be searched in the Headers part of the HTTP Header values.
   
- **Headers:** Select this if the specified value has to be searched in the Headers part of the HTTP Header. 
   
- **Cookie Name:** Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables. 
   
- **Cookie Value:** Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values.
   
- **Cookies:** Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies.
   
- **Body Argument Name:** Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header. 
   
- **Body Argument Value:** Select this if the specified value has to be searched in the values in the Body part of the HTTP Header.
   
- **Body:** Select this if the specified value has to be searched in the Body part of the HTTP Header.
   
- **Argument Name:** Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header.
   
- **Argument Value:** Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header.
   
- **Arguments:**  Select this if the specified value has to be searched in the Arguments section in the HTTP Header.
   
- **Variable:** Users can select the specific variable that has to be find.
   
- **SRC IP:**  Select if specified value has to be search as source IP.
   
- **Client Browser:** Select if specified value has to be search as client browser.
   
- **Client OS:** Select if specified value has to be search as client OS.
   
- **Client Device:**  Select if specified value has to be search as client device.

#### Find Parameter
The user can define the parameter based on the location of the condition.

    Accepted values: String 

    Default: Blank  

##### **URI**
Users are allowed to specify the URI.

    Accepted values: Regex

    Default: Blank

##### **Method**
Users are allowed to specify the method for the rule.

    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL

For more information regarding HTTP method, please refer to this link: [**HTTP Method**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

##### **HTTP Response Code**

    Accepted values: 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530

    Default: NONE 

##### **Rule Action**
Users are allowed to specify the rule action. Users can select either to take no action or send custom response.

    Accepted values: NO ACTION / SEND CUSTOM RESPONSE

    Default: NO ACTION 

##### **Custom Error Page**
Users are allowed to select the custom error page from the drop-down list.

    Accepted values: Custom Error Page

    Default: Blank

#### Variable
The Request / Responses shared by WAF stored in the form of variable for further uses.

#### Match Condition

The user can define the match condition for the parameter and match value.

    Accepted values: Pattern Exists / Pattern Not Exists / Variable Expression / Minimum Value / Maximum Value / Minimum Length / Maximum Length / Equals / Not Equals / Less Than / Less Than Equal / Greater Than / Greater Than Equal

    Default: Any from above 

#### Match Value

The user can define what value needs to be matched with the match condition.

    Accepted values: Integer / String

    Default: Blank   
