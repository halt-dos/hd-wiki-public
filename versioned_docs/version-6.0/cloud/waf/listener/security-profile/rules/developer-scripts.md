---
sidebar_position: 8
---

# Developer Script

Developer Script provides a unique alternative approach for security that can deliver a useful additional layer of protection.

---

## Overview

Developer Script strategies will be implemented as a developer script rule. This rule is capable of customizing a script to interpret or managing specific requests.

The goal of the developer script is to deceive and manipulate the request on the basis of certain parameters inducing them to take actions that result in blocking the requests coming from them.

For the given URI, the developer script will be executed and if the condition matches the rule the appropriate action will be taken as per the rule. User can define their own logic which may not be present in the WAF rules and thus could mitigate the specific attack.

The developer script defines two phases:

1. **Request Phase**: This developer script is executed before sending the request to webservers.
2. **Response Phase**: This developer script is executed after getting the response from the webservers and before reaching the web client.

The script for this rule is written in Lua scripting language. In this, we define the Lua script which will be executed for the required phase. In order to perform the action, the script must return 1 (Numeric) as a value. We also provide some utility methods such as MD5, Base64 encoding, and much more. We can access the Nginx variable too. 

If somehow the script faces a compilation error, the script will fail to perform an action and the request will be processed.

The behavior of the script may vary for the following configurations:

1. If the Temporary Blacklist value is set to 0, then the script will be ignored.

2. If the action is set to No Action, then the script will be ignored.

3. If multiple scripts are matched for the request URI, then the first matched script will be executed and other scripts will be ignored.

### How to Use:

1. Go to **WAF > Zones > Listeners > Security Profiles > Rules > Developer Script Rules**

2. Click on **Add Rule** and set relevant parameters.

3. Click on Save Changes. 

| PARAMETERS    | ACCEPTED VALUES           | Default Value                                                    |
|---------------|---------------------------|------------------------------------------------------------------|
| Rule Name     | String                    | Name eg. Example Rule                                            |
| Rule Message  | String                    | Brief Description eg. This Rule is used for Allowing Example API |
| Rule Priority | Integer                   | 0                                                                |
| Rule Phase    | Choose from the drop-down | Request/Response                                                 |
| Rule Action   | Choose from the drop-down | RECORD/DROP/TEMPORARY BLACKLIST/BYPASS/SEND CHALLENGE/NO ACTION  |
| Specific URI  | URI                       | None                                                             |
| Script        | Lua language              | None                                                             |

#### Description:

**Rule Name**: Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

**Rule Message**: Specify a rule message containing a detailed description to identify the rule which is to be created.

**Rule Priority**: It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

**Rule Phase**: Specify the phase for the rule i.e. Request/Response while evaluating the request.

**Rule Action**: Action that should be performed when the Rule Condition is Satisfied. The valid values for action are:

- **DROP**: If the rule matches then drop the request.
- **RECORD**: If the rule matches then put the request in record mode.
- **BYPASS**: If the rule matches put the request in BYPASS mode.
- **TEMPORARY BLACKLIST**: If the rule matched temporarily blacklist the user IP. This will only work if you already have set a temporary blacklist duration else it will not be considered.
- **SEND CHALLENGE**: If the rule matches then send a captcha challenge to the user to validate the user is human or bot. And if the challenge fails then temporarily blacklist the user and if temp. Blacklist duration Is 0 then send him a challenge unless he passes the challenge, or the challenge duration expires.

**Specific URI**: Specify the specific URI for which the rule will evaluate the request.

**Script**: Specify the Lua script for the rule. The Lua script is a user-customized script that can be configured for mitigating real-time attacks.
