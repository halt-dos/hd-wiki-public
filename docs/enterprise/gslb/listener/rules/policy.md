---
sidebar_position: 1
---

# Policy Rules

---

## Overview

Policy Rules provide a robust mechanism for fine-tuning DNS behavior, ensuring enhanced network performance and security

![rules](/img/gslb/v8/policy_rule.png)

### How to Use:
1. Go to  **Apps** > **GSLB** > **Listener** > **Monitors**
2. Click **Add Rule** button.
3. Configure your settings.
4. Click **Save**.

### Description:

**Rule Name**

This option allows the user to set a name for the rule.

```
    Accepted values: String

    Default: Blank 
```


**Rule Message** 

This option allows users to use specifies the custom message for the rule.

```
    Accepted values: String

    Default: Blank 
```


**Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritize

```
    Accepted values: Integer

    Default: 0 
```


**Filter Type**

This option allow user to select filter type it can be PATTERN, SUFFIX, DOMAIN or ALL according to rule user want to set.

```
    Accepted values: ALL / PATTERN / SUFFIX / DOMAIN

    Default: ALL 
```

### Condition

**Condition Action** 

User can select the condition action.

```
    Accepted values: DROP Request / DENY / ByPass Request / Answer / Refuse / Forward / Force TCP

    Default: DROP Request 
```


This Option allows user to select what action user want to apply on the query. Following are the Option available for it 

 1. DROP Request :- Terminate query resolution and return SERVFAIL to the requestor.

 2. DENY :- Deny existence of names matching filter, i.e. reply NXDOMAIN authoritatively 

 3. ByPass Request :- The query will pass through without any blockage.

 4. Answer :- In this query will be answered as per user set it's rule. In this User also have select the record type and value also.

 5. Refuse :- Terminate query resolution and return REFUSED to the requestor.

 6. Forward :-  the resolver will forward the query to another DNS resolver for resolution. And for that User  have to write the Value.

 7. Force TCP :- Force requestor to use TCP 
    
