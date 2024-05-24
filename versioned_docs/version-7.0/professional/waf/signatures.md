---
sidebar_position: 12
---



# Signatures


These are in-built rules of WAF

---

### Overview 
Signatures contain rules that are evaluated for each request that passes through WAF. The rules offer protection from many different types of attacks for Web Service/API including OWASP top 10 as well as it can help users to specify the behavior for their application. The WAF has multiple types of Rules designed to target specific use cases.

![signatures](/img/pro-waf/docs/signatures1.png)
![signatures](/img/pro-waf/docs/signatures2.png)
![signatures](/img/pro-waf/docs/signatures3.png)

## How to Use :
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **Signatures**
3. You can change the status of the signature to AUTO, PROD, STAGED, DISABLED.
4. Configurations will be deployed successfully.

### Description

##### **Rule ID**

Predefined rule ID for the signatures. The ID is unique for each rule.

    Accepted values: Integer

    Default: None  

##### **Type**

It specifies the type of signature like Firewall, Response, etc.

    Accepted values: Type of rule

    Default: None  

##### **Name**

It specifies the name of the signatures. The name describes the identity of the rule which helps the user understand what is the use of that rule.

    Accepted values: Name of Signature

    Default: None  

##### **Status**

It specifies the status of the signature and can be set accordingly to PROD, STAGED, DISABLED.

    Accepted values: Choose the status of the signature from the drop-down

    Default: Auto  

##### **Timestamp**

It specifies the date time stamp at which the rule has been updated.

    Accepted values: Date and Timestamp of the rule when last updated.

    Default: Blank  

##### **Requests**

It specifies the number of times request matched with the current rule while learning-enabled with the current security profile.

    Accepted values: Specifies the count of hits

    Default: Blank  

##### **Match**

It specifies the number of requests matched with the current rule in the current security profile.

    Accepted values: Specifies the count when the rule is matched.

    Default: Blank  

##### **Action**

It specifies the action need to perform on the current rule. In order to delete the rule, we can click on the delete button to remove certain rules in the current security profile.

We can reset learning by clicking the **Reset Learning** button at the top right of the page.

We can also update the rule status at once by selecting multiple rules. After clicking on the **Update Status** button, select desired status to update.

    Accepted values: Delete the rule

    Default: None  
