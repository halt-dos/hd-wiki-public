---
sidebar_position: 4
---

# CDN Rules

Create custom rules for CDN.

---

**Overview**

This section allows you to customize how to handle HTTP requests.

**How to Use**

The process is quite intuitive.

1. Go to **CDN > Pullzones > Edge Rules**. 
2. Click on the Add Rule button.
3. Configure your Rule.
4. Click on Save.

| PARAMETERS         | ACCEPTED VALUES          | DEFAULT                 |
|--------------------|--------------------------|-------------------------|
| Rule Name          | String                   | None                    |
| Rule Action        | Choose from the dropdown | Block Request           |
| Match When         | Choose from the dropdown | Any Condition Fulfilled |
| Condition Location | Choose from the dropdown | None                    |
| Location Value     | String                   | None                    |
| Match Criteria     | Choose from the dropdown | None                    |
| Condition Value    | String                   | None                    |

**Rule Name**

This field allows you to specify a user-friendly name to the rule. Make sure it is alpha-numeric.

**Rule Action**

This field allows you to specify the action that you need to take for the Created Rule. Available actions:

- **Block Request**: Allows you to block the request as per the condition.
- **Force SSL**: Allows you to configure hostnames and automatically redirect HTTP to HTTPS requests.

:::note Note 
It protects you against content plagiarism and ensures that a secure connection is available for users.
:::

- **Change Origin**: Allows you to add an Origin URL on which all traffic is forwarded.

-**Change Cache Expiry**: Allow you to add a Cache Expiry Time in seconds. After that time, the cache session will get expired.

- **Redirect To URL**: Allows you to add a redirected URL on which all request will be redirected.

- **Add Request Header**: Allows you to add Header Name and Header Value.

- **Add Response Header**: Allows you to add a custom header in the response of the request served by the CDN.

**Match When**: Allows you to add a condition. Available options:

1. **Any condition fulfilled**: When any one of the mentioned conditions match.
2. **All conditions fulfilled**: When all of the mentioned conditions match.
3. **No conditions fulfilled**: When none of the condition match.

**Add Condition**

This action allows you to add multiple conditions based on the following parameters:

**Condition Location**

- Request URL
- Request Header
- Response Header
- Country Code (2 Letters)
- Remote IP
- File Extension

**Location Value**

It allows you to define the value of the location.

**Match Criteria**

These parameters have predefined values i.e. 

1. Matches Any: When any one of the mentioned condition value match.
2. Matches All : When all of the mentioned condition value match.
3. Matches None: When none of the condition value match.

**Condition Value**

It allows you to set the value for the located condition.

**Add** 

Click on this button to add the conditional configuration made.