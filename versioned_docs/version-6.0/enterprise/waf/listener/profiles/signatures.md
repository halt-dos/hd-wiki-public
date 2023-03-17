---
sidebar_position: 7
---

# Signatures
These are in-built rules of WAF.

## Overview 
Signatures contain rules that are evaluated for each request that passes through WAF. The rules offer protection from many different types of attacks for Web Service/API including OWASP top 10 as well as it can help users to specify the behavior for their application. The WAF has multiple types of Rules designed to target specific use cases.

![Signatures](/img/waf/v6/docs/signatures.png)

## How to Use :
1.Go to **WAF** > **Listeners** > **Security Profiles** > **Rules** > **Signatures**
2.You can change the status of the signature to AUTO, PROD, STAGED, DISABLED.
3.Configurations will be deployed successfully.

| Parameters | Accepted Values | Default
| ----------- | ----------- |--------- |
| Rule Id|Integer|None
Type|Type of rule|None
Name|Name of the signature|None
Status|Choose the status of the signature from the drop-down|Auto
Timestamp|Date and Timestamp of the rule when last updated.|Blank
Requests|Specifies the count of hits |Blank
Match|Specifies the count when the rule is matched.|Blank
Action|Delete the rule |None

## Description
1.**Rule Id:**

Predefined rule id for the signatures. The Id is unique for each rule.

2.**Type:**

It specifies the type of signature like Firewall, Response, etc.

3.**Name:**

It specifies the name of the signatures. The name describes the identity of the rule which helps the user understand what is the use of that rule.

4.**Status:**

It specifies the status of the signature and can be set accordingly to PROD, STAGED, DISABLED.

5.**Timestamp:**

It specifies the date time stamp at which the rule has been updated.

6.**Requests:**

It specifies the number of times request matched with the current rule while learning-enabled with the current security profile.

7.**Match**

It specifies the number of requests matched with the current rule in the current security profile.

8.**Action:**

It specifies the action need to perform on the current rule. In order to delete the rule, we can click on the delete button to remove certain rules in the current security profile.

We can reset learning by clicking the **Reset Learning** button at the top right of the page.

We can also update the rule status at once by selecting multiple rules. After clicking on the **Update Status** button, select desired status to update.