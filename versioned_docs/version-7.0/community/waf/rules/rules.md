
# Rules

### Overview
The rules are configurations that define how incoming requests and outgoing responses should be handled. These rules allow administrators to implement security measures, performance optimizations, and custom behaviors based on specific criteria. The configurable rules include:    
- [**Redirection Rules**](/community/waf/rules/redirection_rules)  
- [**Header Rules**](/community/waf/rules/header_rules) 
- [**Rate Limit Rules**](/community/waf/rules/rate_limit)
- [**Firewall Rules**](/community/waf/rules/firewall_rules)
- [**Whitelist Rules**](/community/waf/rules/whitelist_rules)
- [**Correlation Rules**](/community/waf/rules/correlation_rules)
- [**Variable Rules**](/community/waf/rules/variable_rules)
- [**Behaviour Rule**](/community/waf/rules/behavior_rules)

### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules**. 
3. Select the rule that has to be configured.


### Description

These rules work according to the **Request phase** or **Request/Respose Phase**.   

#### Request Handling Rules
Request Phase Rules in the Haltdos WAF CE serve as gatekeepers for incoming requests. Before reaching the server, requests are rigorously validated based on configured rule conditions. When the request aligns with the configured rule conditions then it will perform rule action accordingly i.e. terminate or allow to the server-side for further processing. Rules in which these Request handling condition are configured are:  
- **Redirection Rules**
- **Rate Limit Rules**
- **Firewall Rules**
- **Whitelist Rules**
- **Correlation Rules**
- **Behaviour Rules**


#### Request / Response Handling Rules
Rules operating during the Request/Response Phase are enforced after the generation of a request/response but before it passes through the Haltdos WAF CE. Requests/Respons originating from the Server/Client are subject to validation against predefined rule conditions. Only those requests meeting these conditions are permitted to perform rule action. Rules in which these Request/Response handling condition are configured are: 
- **Header Rules**
- **Variable**

