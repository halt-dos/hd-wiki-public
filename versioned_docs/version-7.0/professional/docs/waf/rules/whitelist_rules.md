---
sidebar_position: 8
---

# Whitelist Rules
### Overview
A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.
Whitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations.
Here’s another use case: To reduce insider threat, a cyberattack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network.
   
![whitelist_rules](/img/pro-waf/docs/whitelist_rules1.png)
![whitelist_rules](/img/pro-waf/docs/whitelist_rules2.png)

### How to Use:

1. Log into the Haltdos WAF Professional edition web UI console.
2. Then to **Listeners** **Rules** > **Whitelist Rules**
3. Click on **Add Rule**.
4. Configure the rule and click on save changes.

### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

    Accepted values: String

    Default: Blank  

##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

    Accepted values: String

    Default: Blank  

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

    Accepted values: Integer

    Default: 0  

##### **URI**
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

    Accepted values: String

    Default: Blank  

##### **Method**
Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

    Accepted values: Drop-Down

    Default: All  

##### **Custom Rule IDs**
Users are allowed to specify the rule/mitigation ID that needs to be whitelisted, so that action against that request will be allowed.

    Accepted values: String

    Default: Blank  

##### **Find Location**
Users can define the source location where this condition needs to be applied.

    Accepted values: Drop-Down

    Default: Variable  

##### **Variable**
Users can select the variable.

    Accepted values: String

    Default: Blank  

##### **Match Condition**
The user can define the match condition for the parameter and match value.

    Accepted values: Drop-Down

    Default: Pattern Exists  

##### **Match Value**
The user can define what value needs to be matched with the match condition.

    Accepted values: String

    Default: Blank  
