---
sidebar_position: 7
---

# Signatures
These are in-built rules of WAF.

### Overview 
Signatures contain rules that are evaluated for each request that passes through WAF. The rules offer protection from many different types of attacks for Web Service/API including OWASP top 10 as well as it can help users to specify the behavior for their application. The WAF has multiple types of Rules designed to target specific use cases.

#### Signature Capabilities  

These capabilities enable the WAF to effectively safeguard applications against a wide range of threats, ensuring a robust security posture tailored to the specific technologies in use.

##### **OS-Specific Targets:**

- UNIX / Linux
- Windows

##### **Framework-Specific Targets:**

- .NET
- Java
- PHP
- Struts2

##### **Vulnerability Protection:**

- SQL Injection
- Server-Side Inclusion (SSI)
- Cross-Site Scripting (XSS)
- Local File Inclusion (LFI)
- Remote File Inclusion (RFI)
- Insecure Object References
- Command Injection Vulnerabilities
- Remote Code Execution (RCE) Commands

![Signatures](/img/waf/v8/docs/WAFproSign.png)

## How to Use :
1. Go to **WAF** > **Listeners** > **Profiles** > **Signatures**
2. You can change the status of the signature to AUTO, PROD, STAGED, DISABLED.
3. Configurations will be deployed successfully.  

### Description
##### **Rule ID**

Predefined rule ID for the signatures. The ID is unique for each rule.

##### **Type**
It specifies the type of signature like Firewall, Response, etc.
##### **Name**

It specifies the name of the signatures. The name describes the identity of the rule which helps the user understand what is the use of that rule.

##### **Status**

It specifies the status of the signature and can be set accordingly to PROD, STAGED, DISABLED.

##### **Timestamp**

It specifies the date time stamp at which the rule has been updated.

##### **Requests**

It specifies the number of times request matched with the current rule while learning-enabled with the current security profile.

##### **Match**

It specifies the number of requests matched with the current rule in the current security profile.

##### **Action**

It specifies the action need to perform on the current rule. In order to delete the rule, we can click on the delete button to remove certain rules in the current security profile.

We can reset learning by clicking the **Reset Learning** button at the top right of the page.

We can also update the rule status at once by selecting multiple rules. After clicking on the **Update Status** button, select desired status to update.

:::note
The signatures are updated daily, and if the update fails, rollback of signatures will be performed automatically, without any manual intervention or any interruption in the traffic.
But if signatures need to be rolled back, you can do it manually via the [**Software Updates**](../../../platform/system/settings/software_updates.md).
:::