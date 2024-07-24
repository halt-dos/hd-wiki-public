---
sidebar_position: 6
---

# Upstream Rules 
You can switch between your server groups by creating upstream rules.

---

### Overview 

If a user has defined server groups and wants to use different groups depending upon different conditions then he can make use of Upstream Rules. For example, if a user wants its /API calls to be served by server-group "API" and console by "DEFAULT" then he can create a rule with a search pattern and search location as URL/Header/Cookie/Body/Arguments

![upstream rules](/img/waf/v8/docs/waf_upstream.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Rules** > **Upstream Rules**
2. Create rules with different conditions
3. Click on **Save Changes**

### Description
  
##### **Rule Name**

Users are allowed to specify a user-friendly name to identify the rule. The rule name takes alphanumeric input.

    Accepted values: String

    Default: Blank  

##### **Message**

The user can add a short description of the rule. The description would explain the purpose of the rule.

    Accepted values: String

    Default: Blank  

##### **Rule Priority** 

Users are allowed to set the priority of the rule. If two rules have the same priority, then selection will be random.

    Accepted values: Integer

    Default: 0  

##### **Server Group**

Which server group should serve the request of this type. The server group configured will be serving requests specifically.

    Accepted values: Select Server Group

    Default: Blank  

#### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/v8/enterprise/waf/listener/rules/ruleCond)
