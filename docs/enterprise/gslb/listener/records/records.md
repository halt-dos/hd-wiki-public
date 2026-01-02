---
sidebar_position: 6
---

# Records

---

## Overview

Records are used to manage and distribute traffic across multiple geographically distributed servers or data centers. These records are typically DNS-based and define how client requests are resolved to specific server IPs or locations, ensuring optimal performance, reliability, and load distribution.

![listener](/img/gslb/v8/sites.png)

### How to Use:
1. Go to  **Stack** > **GSLB** > **Listener** > **Sites**
2. Click **Add Sites** button.
3. Configure the sites configuration.
4. Click on **Save Changes**
5. Sites configuration will be saved.


:::note Note
When a zone is created it further get classified in 2 record **SOA** and **A record**
:::

#### Configuration

**Record Name**

The unique identifier or label assigned to a DNS record within a zone. It is used to specify the name associated with the record.

```
    Accepted values: String

    Default: Blank
```


**Zone**

Represents the DNS zone in which the record resides. A zone is a domain or subdomain that contains DNS records.

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```


**Record Type**

Defines the type of DNS record being created, such as A, AAAA, CNAME, or MX. This specifies the purpose or functionality of the record.

```
    Accepted values: A / AAAA / CAA / CNAME / CERT / PTR / MX / TXT / SRV / NS / SOA

    Default: A
```


**TTL**

Specifies the duration (in seconds) that a DNS record is cached by a DNS resolver before it needs to be refreshed.

```
    Accepted values: 2 Minute / 5 Minute / 10 Minute / 30 Minute / 1 Hour / 6 Hours / 12 Hours / 1 Day

    Default: 2 Minute
```


**LB Algorithm**


```
    Accepted values: Least Connection / Least Response Time / Proximity / Round Robin / None

    Default: None
```


#### Record Values

**Site**

Select the site

```
    Accepted values: Default / Local

    Default: Default
```

**Weight**

Enter the weight

```
    Accepted values: String

    Default: Blank
```


**Record Values**

Enter the Record Values

```
    Accepted values: String

    Default: Blank
```


#### Record Conditions


**Location**

Select location 

```
    Accepted values: Source IP / Destination / Destination Port

    Default: 1
```


**Priority**

Enter the priority

```
    Accepted values: String

    Default: 80
```


**Negate**

Specifies whether the condition should be inverted (e.g., match all except the specified value).

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```


**Condition**

Defines the specific condition used for matching requests.

```
    Accepted values: Note Equals / Equals

    Default: Blank
```


**Values**

The specific data used for the condition, such as a range of IPs or port numbers.

```
    Accepted values: String

    Default: Blank
```


**Site**

Refers to the maximum duration (in seconds) to wait for a response during a health check before considering the site or service as unresponsive.

```
    Accepted values: Default / LOCAL

    Default: Default
```