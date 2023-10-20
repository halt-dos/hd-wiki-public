---
sidebar_position: 5
---
# Variable Rules

---

## Overview

If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:

1. Form Validation: If a user wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped.

2. Rate Limit: Assume if a user wants to rate limit on a variable then, it can be done by storing a parameter from the Request/Response. For example, the "User-Agent" header stored in the variable can be used for Rate Limit. 

Note: Any parameter from the Request/Response can be stored in a variable.

### How to Use:

1. Go to **WAF > Zones > Listeners > Rules > Variable Rules**

2. Create rules with different conditions and **Save Changes**.

| PARAMETERS          | ACCEPTED VALUES          | DEFAULT |
|---------------------|--------------------------|---------|
| Rule Name           | String                   | None    |
| Rule Message        | String                   | None    |
| Rule Priority       | Integer                  | None    |
| URI                 | Existing server group    | None    |
| Scope               | Choose from the dropdown | GLOBAL  |
| Variable Extraction | Choose from the dropdown | SET     |
| Extraction Location | Choose from the dropdown | None    |
| Parameter Cast      | Choose from the dropdown | String  |
| Variable Name       | String                   | None    |
| Parameter           | String                   | None    |

#### Description

**Rule Name**

Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input.

**Message** 

The user can add a short description of the rule. The description would explain the purpose of the rule.

**Rule Priority** 

Set the priority of the rule. If two rules have the same priority, then selection will be random.

**URI** 

Enter the match URI for the rule. Any request coming to the specified URI will invoke this rule.   

**Scope** 

Select the scope where the rule will be applicable like Global/Transaction/Session. 

**Variable Extraction** 

Select from the dropdown like Set/Mutate/Request/Response.

**Extraction Location** 

Select the location from the dropdown like for Request Variables: URL, Header value, Cookie value, Body value, Body, Arguments value, and for Response Variables: Header value, Body.

**Parameter Cast** 

Select the type of parameter from the dropdown like String, Integer, XML, JSON, HTML. This defines the specific type of parameter for which the rule will be applicable.

**Variable Name** 

Enter the name of the variable to be set. The variable defined will be applicable for the rule.

**Parameter** 

Enter the parameter name to be used for Variable extraction.