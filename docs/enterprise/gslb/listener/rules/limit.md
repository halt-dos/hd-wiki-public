---
sidebar_position: 4
---

# Limit Rules

---

## Overview

Limit Rules in Haltdos GSLB enable administrators to control DNS query traffic by setting restrictions on query rates, bursts, and tracking durations. These rules help mitigate traffic spikes, prevent abuse, and maintain optimal performance by defining thresholds for query handling. Limit Rules are flexible, allowing configuration based on specific Fully Qualified Domain Names (FQDNs) or other criteria to ensure network stability and security.


![rules](/img/gslb/v8/limit_rule.png)

### How to Use:
1. Go to  **Apps** > **GSLB** > **Listener** > **Monitors**
2. Click **Add Rule** button.
3. Configure your settings.
4. Click **Save**.

### Description:

**Rule Name**

This option allows the user to set a name for the rule.

```
    Accepted values: String

    Default: Blank 
```


**Rule Message** 

This option allows users to use specifies the custom message for the rule.

```
    Accepted values: String

    Default: Blank 
```


**Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritize

```
    Accepted values: Integer

    Default: 0 
```


**Enabled**

Determines whether the limit rule is active or inactive.

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```


**Query Rate** 

Specifies the maximum number of queries allowed per second.


```
    Accepted values: String

    Default: 200
```


**Query Burst** 

Defines the maximum burst of queries allowed above the rate limit.

```
    Accepted values: String

    Default: 300
```


**Track Duration (sec)** 

Sets the duration for which query rates are tracked to enforce limits.

```
    Accepted values: String

    Default: 600
```


**Limit On** 

Specifies the criteria (e.g., FQDN or IP) to apply the limit rule.


```
    Accepted values: String

    Default: Blank
```


**Limited FQDN** 

Indicates the specific Fully Qualified Domain Name (FQDN) to which the rule applies.

```
    Accepted values: String

    Default: 300
```

