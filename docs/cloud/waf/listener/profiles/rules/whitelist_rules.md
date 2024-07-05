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
   
### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

    Accepted values: String

    Default: Blank  

##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

    Accepted values: Description for the rule in String format

    Default: Blank  

##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0.
    
    Accepted values: Integer

    Default: 0  

##### **URI**
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

    Accepted values: Regex

    Default: Blank  

##### **Method**
Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: All  

##### **Custom Rule IDs**
Users are allowed to specify the rule/mitigation ID that needs to be whitelisted, so that action against that request will be allowed.

    Accepted values: Select custom rule ID

    Default: Blank 

##### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/enterprise/waf/listener/profiles/rules/conditions)

