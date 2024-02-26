---

sidebar_position: 6

---

# Global Whitelist

---

### Overview

Global settings help to configure the settings whose scope is global. Here we have Global Whitelist Rules which would whitelist the mitigations globally irrespective of zone or listener.


![Global Whitelist Rules](/img/waf/v7/docs/global_whitelist.png)


### Global Whitelist Rules

These are the whitelist rule which helps in whitelisting mitigations globally for all the zones and listener in the stack.

**How to Use:**

1. Go to **WAF** > **Global Whitelist** > **Global Whitelist Rule**
2. Click on **Add Rule** button.
3. Configure the Fields
4. Click **Save Changes**

![Global Whitelist Condition ](/img/waf/v7/docs/global_whitelist_condition.png)

## Description

**Rule Name**  
Users can specify the rule name.

**Rule Message**  
Users can specify a user-friendly message

**Rule Priority**  
Users can specify the priority of the rule. Rule with less priority will be followed first.

**URI**  
Users can specify the URI ( Uniform Resource Identifier )for the rule as per the requirement.

**Method**  
Users can specify the HTTP method which should be followed for the rule.

**Custom Rule ID**  
Users can specify the custom rule ID which was triggered or for which rule the user is setting up the whitelist rule.

**Find Location**  
Users can define the source location where this condition needs to be applied.

**Find Parameter**  
The user can define the parameter based on the location of the condition.

**Match Condition**  
The user can define the match condition for the parameter and match value.

**Match Value**  
The user can define what value needs to be matched with the match condition.