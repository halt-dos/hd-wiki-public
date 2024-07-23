---
sidebar_position: 11
---
# Script Rule
   
### Overview
Developer Script strategies will be implemented as a developer script rule. This rule is capable of customizing a script to interpret or managing specific requests. The goal of the developer script is to deceive and manipulate the request on the basis of certain parameters inducing them to take actions that result in blocking the requests coming from them.
   
For the given URI, the developer script will be executed and if the condition matches the rule the appropriate action will be taken as per the rule. User can define their own logic which may not be present in the WAF rules and thus could mitigate the specific attack.

![Script Rule](/img/waf/v8/docs/scriptRules.png)
   
The developer script defines two phases:
1. **Request Phase**: This developer script is executed before sending the request to web-servers.
2. **Response Phase**: This developer script is executed after getting the response from the web servers and before reaching the web client.  

The script for this rule is written in Lua scripting language. In this, we define the Lua script which will be executed for the required phase. In order to perform the action, the script must return 1 (Numeric) as a value. We also provide some utility methods such as MD5, Base64 encoding, and much more. We can access the Nginx variable too.  

If somehow the script faces a compilation error, the script will fail to perform an action and the request will be processed.  
The behavior of the script may vary for the following configurations:  

1. If the Temporary Blacklist value is set to 0, then the script will be ignored.
2. If the action is set to No Action, then the script will be ignored.
3. If multiple scripts are matched for the request URI, then the first matched script will be executed and other scripts will be ignored.

### How to Use:
1. Go to **WAF** > **Listeners** > **Profiles** > **Rules** > **Developer Script Rules**  
2. Click on Add Rule and set relevant parameters.  
3. Click on **Save Changes**.  
   
### Description 

##### **Rule Name**
Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: Blank

##### **Rule Message**
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: Description for the rule in String format

    Default: Blank  

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

    Accepted values: Integer

    Default: 0

##### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/v8/cloud/waf/listener/profiles/rules/ruleCond)