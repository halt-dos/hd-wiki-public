---
sidebar_position: 4
---

# Threat Intel

### Integration with 3rd party Threat Intelligence feeds

---

Haltdos solutions comes with Haltdos Threat Steam which provides periodic threat intel curated from open and paid sources for valid licensed customers. However, at times, customers may wish to also include custom 3rd party Threat Intel feeds for list of Bad Reputation IP addresses.

Custom threat intel can be pulled into Haltdos appliances from three sources: pull APIs, FTP or File upload. This section explains various options to include threat intel feeds into Haltdos products.

:::note Note
Only IPv4/IPv6 addresses / prefix having poor reputation is currently supported.
:::

![threat_feeds](/img/platform/v8/docs/tintel.png)

![threat_feeds](/img/platform/v8/docs/tintel2.png)

### How to Use:

1. Go to **System > Integration > Threat Intel**
2. Configure your settings
3. Click Save.
  
### Description:

**Enable**

  Select whether to Enable it or Disable it. 

```
    Accepted values: Enable / Disable

    Default: Disable 
```


**Intel Source Name**

  Enter the intel source name

```
    Accepted values: String

    Default: Blank 
```


**Stack**

Stack is selected here

```
    Accepted values: Select Stack

    Default: Blank 
```


**Task Occurrence**

Select number of times for the task occurence

```
    Accepted values: ONCE / MINUTE / HOUR / DAILY / WEEKLY / MONTHLY

    Default: ONCE 
```


**Next Run**

Select next run

```
    Accepted values: Select next run

    Default: Blank 
```


**Timezone**

Select Timezone from dropdown

```
    Accepted values: Select Timezone

    Default: Asia / Calcutta 
```


**Fetch Resources**

Select the fetch resources

```
    Accepted values: API / FTP

    Default: API 
```


**URL**

Select the type of URL and enter url

```
    Accepted values: GET / POST / PUT

    Default: GET
```


**Attributes Type**

Select type of attribute

```
    Accepted values: HEADER_VAL / ARGS_VAL / PARAM_VAL

    Default: Blank
```


**Name**

Select the attribute name

```
    Accepted values: String

    Default: Blank
```


**Value**

Enter the value 

```
    Accepted values: String

    Default: Blank
```


