---
sidebar_position: 11
---
# Script Rule
   
### Overview
Developer Script strategies will be implemented as a developer script rule. This rule is capable of customizing a script to interpret or managing specific requests. The goal of the developer script is to deceive and manipulate the request on the basis of certain parameters inducing them to take actions that result in blocking the requests coming from them.
   
For the given URI, the developer script will be executed and if the condition matches the rule the appropriate action will be taken as per the rule. User can define their own logic which may not be present in the WAF rules and thus could mitigate the specific attack.

![Script Rule](/img/waf/v7/docs/script_rule.png)
   
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

| Parameters       | Accepted value |  Default      |
|------------------|----------------|---------------|
| Rule Name        | String         | Blank         |
| Rule Message     | String         | Blank         |
| Rule Priority    | Integer        | 0             |
| URI              | String         | Blank         |
| Method           | Drop-down      | ALL           |
| Evaluation Phase | Drop-down      | Request Phase |
| Rule Action      | Drop-down      | Record        |
| Script           | Lua Language   | Blank         |
   
### Description 

##### **Rule Name**
Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

##### **Rule Message**
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

##### **URI**
Users are allowed to specify the URI on which the tamper rule will be applied.

##### **Method**
Users are allowed to select the HTTP method for the rule to extract when matched with the request.

##### **Evaluation Phase**
Users are allowed to select the evaluation phase for the rule i.e. Request or Response.

##### **Rule Action**
The following actions are available to the User:  

1. **NO ACTION** - If the request satisfies the rule, then no action will be performed on the current request.
2. **DROP & RECORD REQUEST** - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF.
3. **RECORD REQUEST** - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos.
4. **BYPASS REQUEST** - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF.
5. **REDIRECT** - If the request satisfies the rule, then the user is redirected to another page.
6. **SEND RESPONSE WITH STATUS CODE** - If the request satisfies the rule, a custom HTML response will be returned with a status code.
7. **SEND CUSTOM RESPONSE** - If the request satisfies the rule, a custom HTML response will be returned.
8. **CHANGE RESPONSE CODE** - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back.
9. **SEND CAPTCHA CHALLENGE** - If the request satisfies the rule, then the user receives a challenge like a captcha.
10. **TARPIT SRC. IP** - If the request satisfies the rule, the end-user IP will be tarpit.
11. **TEMPORARY BLACKLIST SRC IP**: If the rule matched temporarily blacklist the user IP. This will only work if you already have set a temporary blacklist duration else it will not be considered.
12. **SKIP LEARNING** -If the request satisfies the rule, then no learning will be performed on the current request.  