# Upstream Rules 
You can switch between your server groups by creating upstream rules.

---

### Overview 

If a user has defined server groups and wants to use different groups depending upon different conditions then he can make use of Upstream Rules. For example, if a user wants its /API calls to be served by server-group "API" and console by "DEFAULT" then he can create a rule with a search pattern and search location as URL/Header/Cookie/Body/Arguments

![upstream rules](/img/waf/v7/docs/upstream.png)


![upstream rules](/img/waf/v7/docs/upstream1.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Rules** > **Upstream Rules**
2. Create rules with different conditions
3. Click on **Save Changes**

| Parameter | Accepted Values | Default
| ----------- | ----------- |--------- |
| Rule Name|String|Blank
Message|String|Blank
Rule Priority|Integer|1
Server Group|Existing server group|Blank
Find Location|URL/HEADER VAL/COOKIE VAL/BODY VAL/ARGS VAL|Blank
Match Condition|ARG.|Blank
Match Value|Regex|Blank

### Description
##### **Rule Name**

Users are allowed to specify a user-friendly name to identify the rule. The rule name takes alphanumeric input.

##### **Message**

The user can add a short description of the rule. The description would explain the purpose of the rule.

##### **Rule Priority** 

Users are allowed to set the priority of the rule. If two rules have the same priority, then selection will be random.

##### **Server Group**

Which server group should serve the request of this type. The server group configured will be serving requests specifically.

##### **Find Location** 

The block in which the search pattern will be searched like URL, Port, Header Val, Cookie Val, Body Val, Args Val.

##### **Match Condition**

Users can set the condition which was need to be followed by next field Match Value.

##### **Match Value**

The pattern to be searched in the request so that it can be forwarded to the mentioned server group.
