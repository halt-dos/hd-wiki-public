---

sidebar_position: 6

---

# Whitelist

---

### Overview

Global settings help to configure the settings whose scope is global. Here we have Global Whitelist Rules which would whitelist the mitigations globally irrespective of zone or listener.


![Global Whitelist Rules](/img/waf/v8/docs/whitelist.png)


### Global Whitelist Rules

These are the whitelist rule which helps in whitelisting mitigations globally for all the zones and listener in the stack.

**How to Use:**

1. Go to **WAF** > **Global Whitelist** > **Global Whitelist Rule**
2. Click on **Add Rule** button.
3. Configure the Fields
4. Click **Save Changes**

## Description

**Rule Name**  
Users can specify the rule name.

    Accepted values: String

    Default: Blank 

**Rule Message**  
Users can specify a user-friendly message

    Accepted values: String

    Default: Blank 

**Rule Priority**  
Users can specify the priority of the rule. Rule with less priority will be followed first.

    Accepted values: Integer

    Default: Blank 

**URI**  
Users can specify the URI ( Uniform Resource Identifier )for the rule as per the requirement.

    Accepted values: Regex

    Default: Blank 

**Method**  
Users can specify the HTTP method which should be followed for the rule.

    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL 

**Custom Rule ID**  
Users can specify the custom rule ID which was triggered or for which rule the user is setting up the whitelist rule.

    Accepted values: String

    Default: Blank 

