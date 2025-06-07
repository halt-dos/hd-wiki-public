---
sidebar_position: 7
---

# Forwarder Rule
---

### Overview 
A Forwarder Rule in the WAF defines a set of conditions under which a request is routed towards the backend server and can also be configured to mirror or tap the request, allowing it to be simultaneously shared with another monitoring or logging service without interrupting the original flow.

![error rules](/img/waf/v8/docs/forwarder_rule.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Rules** > **Forwarder Rules**.
2. Click on **Add Rule** and set relevant parameters described in the table below.
3. Click on **Save Changes**.

### Description

Forwarder Rules in the WAF define the logic for directing incoming HTTP requests based on specified conditions such as IP address, URI, method, or headers. Their primary function is to forward these requests to designated backend servers. Additionally, these rules can enable the same request to be duplicated and sent to multiple backend systems simultaneously — for example, forwarding the original request to the application server while also routing a copy to a logging or monitoring service. This ensures both request delivery and enhanced visibility or processing by other systems, forming the foundation of how traffic is intelligently routed and shared across services in a controlled manner.

##### **Rule Name**

Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

```
    Accepted values: String

    Default: Blank  
```


##### **Rule Message**

Specify a rule message containing a detailed description to identify the rule which is to be created.

```
    Accepted values: String

    Default: Blank  
```


##### **Rule Priority**

Specify the priority for the rule for execution when matched with the request.

```
    Accepted values: Integer

    Default: 0  
```


##### **IP Address**

Specify the IP Address on which the forwader rule will be applied.

```
    Accepted values: URI

    Default: Blank  
```

Refer to [Rule Condition](/enterprise/waf/listener/rules/ruleCond) to configure the condition.