---
sidebar_position: 5
---

# Whitelist Rule
### Overview
A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.
Whitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations.
Here’s another use case: To reduce insider threat, a cyberattack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network.
   
![Whitelist Rule](/img/waf/v7/docs/whitelist.png)
### How to Use:
1. Go to **WAF** > **Listeners** > **Profiles** > **Rules** > **Whitelist Rules**.
2. Click on the Add Rule button and a pop-up box will open.
3. Configure the Fields that are present.
4. Click on save changes.
   
![Whitelist Rule](/img/waf/v7/docs/whitelist1.png)
   
| Parameters      | Accepted value |  Default       |
|-----------------|----------------|----------------|
| Rule Name       | String         | Blank          |
| Rule Message    | String         | Blank          |
| Rule Priority   | Integer        | 0              |
| URI             | String         | Blank          |
| Method          | Drop-down      | ALL            |
| Custom Rule IDs | String         | Blank          |
| Find Location   | Drop-Down      | Variable       |
| Find Parameter  | String         | Blank          |
| Match Condition | Drop-Down      | Pattern Exists |
| Match Value     | String         | Blank          |

### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

##### **URI**
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

##### **Method**
Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

##### **Custom Rule IDs**
Users are allowed to specify the rule/mitigation ID that needs to be whitelisted, so that action against that request will be allowed.

##### **Find Location**
Users can define the source location where this condition needs to be applied.

##### **Variable**
Users can select the variable.

##### **Match Condition**
The user can define the match condition for the parameter and match value.

##### **Match Value**
The user can define what value needs to be matched with the match condition.






