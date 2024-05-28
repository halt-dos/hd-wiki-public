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

##### **Name**

It specifies the name of the signatures. The name describes the identity of the rule which helps the user understand what is the use of that rule.

    Accepted values: Name of Signature

    Default: None  

##### **Status**

It specifies the status of the signature and can be set accordingly to PROD, STAGED, DISABLED.

    Accepted values: PROD / STAGED / DISABLED

    Default: PROD 

:::note Note
Selecting any particular name will shows the detailed information about it. 
:::
