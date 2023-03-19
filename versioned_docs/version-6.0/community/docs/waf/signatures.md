---
sidebar_position: 7
---
# Signatures

## Overview

Signatures contain rules that are evaluated for each request that passes through WAF. The rules offer protection from many different types of attacks for Web Service/API including OWASP top 10 as well as it can help users to specify the behavior for their application. The WAF has multiple types of Rules designed to target specific use cases.

### How to Use:
1. Log onto the Haltdos console then go to **WAF** > **Signatures**
2. You can change the status of the signature to **PROD** or **STAGED**.
3. Configurations will be deployed successfully.

| Parameters | Accepted value                                         |  Default |
|------------|--------------------------------------------------------|----------|
| Rule ID    | Integer                                                | None     |
| Type       | Type of rule                                           | None     |
| Name       | Name of the signature	                              | None     |
| Status     | Choose the status of the signature from the drop-down  | None     |


### Description

##### Rule Id
Predefined rule id for the signatures. The Id is unique for each rule.

##### Type
It specifies the type of signature like Firewall, Response, etc.

##### Name

It specifies the name of the signatures. The name describes the identity of the rule which helps the user understand what is the use of that rule.

##### Status

It specifies the status of the signature and can be set accordingly to PROD / STAGED.

