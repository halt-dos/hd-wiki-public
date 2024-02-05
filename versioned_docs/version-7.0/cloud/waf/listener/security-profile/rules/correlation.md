---
sidebar_position: 6
---

# Correlation Rules

---

## Overview

Correlation rules support using compounding logic to make more advanced rules that address your security needs. For example, "(Condition 1 and Condition 2)" means that if Condition 1 and Condition 2 are met, WAF should take the action that's specified in the correlation rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses and might specify to block traffic from a certain IP address, and only if a certain browser is being used. 

### How to Use:

1. Follow the links: **WAF > Zones > Listener > Security Profiles > Rules > Correlation Rules**.

2. Click on **Add Rule** and set relevant parameters described in the table below.

3. Click on **Save**.

| PARAMETERS    | ACCEPTED VALUES                           | DEFAULT |
|---------------|-------------------------------------------|---------|
| Rule Name     | String                                    | Blank   |
| Rule Message  | Description for the rule in string format | Blank   |
| Rule Priority | Integer                                   | 0       |
| Rule Action   | Dropdown                                  | RECORD  |
| Rule Id       | Specify the rule id                       | Blank   |
| Match         | Specify the condition                     | Match   |

#### Description

**Rule Name**: Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

**Rule Message**: Specify a rule message containing a detailed description to identify the rule which is to be created. 

**Rule Priority**: It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

**Rule Action**: Action that should be performed when the Rule Condition is Satisfied. The valid values for action are: 
- **DROP**: If the rule matches then drop the request. 
- **RECORD**: If the rule matches then put the request in record mode. 
- **BYPASS**: If the rule matches put the request in BYPASS mode 
- **TEMPORARY BLACKLIST**: If the rule matched temporarily blacklist the user IP. This will only work if you already have set a temporary blacklist duration else it will not be considered. 
- **SEND CHALLENGE**: If the rule matches then send a captcha challenge to the user to validate the user is human or bot. And if the challenge fails then temporarily blacklist the user and if temp. Blacklist duration Is 0 then send him a challenge unless he passes the challenge, or the challenge duration expires. 
- **SKIP LEARNING**: If the rule matches then learning will not be performed on the request. 

**Add Rule Condition**: By clicking on **Add Rule Condition** button, the end-user can add specify the location to be whitelisted. At least, one location is mandatory for this rule. 

**Rule ID**: Specify the rule Id for which condition should be created. 

**Match**:  Check whether the rule should be matched or not matched. 