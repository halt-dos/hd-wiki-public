---
sidebar_position: 4
---

# Rules

---

Haltdos GSLB supports various types of rules for users to configure GSLB as per their network requirements. Users can set GSLB Policy Rules to manage traffic and a custom type DNS Resolver.

![rules](/img/gslb/v6/docs/rules.png)

### How to Use:
1. Go to  **Stack** > **GSLB** > **Listener** > **Monitors**
2. Click **Add Rule** button.
3. Configure your settings.
4. Click **Save**.

### Rule Condition :-

| Setting | Accepted Value | Default
| ----------- | ----------- | ------ |
| Rule Name  | String | Blank (mandatory)
| Rule Message | String | Blank (mandatory) 
|Rule Priority | Integer |0
|Filter Type |Drop Down |ALL

### Condition :-

 Setting | Accepted Value | Default
| ----------- | ----------- | ------ |
| Condition Action  | Drop Down | Drop Request (mandatory)
| Parameter | Integer | Blank 
|Record Type| Drop Down |
|Values |Integers|Blank
| TTL | Integer | 

### Description:

**Rule Name**

This option allows the user to set a name for the rule.

**Rule Message** 

This option allows users to use specifies the custom message for the rule.

**Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritize

**Filter Type**

This option allow user to select filter type it can be PATTERN, SUFFIX, DOMAIN or ALL according to rule user want to set.

**Condition Action** 

This Option allows user to select what action user want to apply on the query. Following are the Option available for it 

 1. DROP Request :- Terminate query resolution and return SERVFAIL to the requestor.

 2. DENY :- Deny existence of names matching filter, i.e. reply NXDOMAIN authoritatively 

 3. ByPass Request :- The query will pass through without any blockage.

 4. Answer :- In this query will be answered as per user set it's rule. In this User also have select the record type and value also.

 5. Refuse :- Terminate query resolution and return REFUSED to the requestor.

 6. Forward :-  the resolver will forward the query to another DNS resolver for resolution. And for that User  have to write the Value.

 7. Force TCP :- Force requestor to use TCP 
    
**Value**

User have to mention IP address when condition action is Answer or Forward. 

**TTL (Time to Live)**

User can specify the time  duration of the Condition Action on the server in minutes, hour, day.
