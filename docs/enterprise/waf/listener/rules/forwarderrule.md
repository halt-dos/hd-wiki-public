---
sidebar_position: 7
---

# Forwarder Rules
These rules mask application exceptions and errors with custom pages.

---

### Overview 
A Forwarder Rule in the WAF defines a set of conditions under which custom error pages are displayed in response to specific HTTP error codes returned by backend applications. These rules allow administrators to override default server error responses with tailored messages or pages, enhancing user experience and security transparency.

![error rules](/img/waf/v8/docs/waf_error.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Rules** > **Error Rules**.
2. Click on **Add Rule** and set relevant parameters described in the table below.
3. Click on **Save Changes**.

### Description

##### **HTTP Response Codes**

HTTP error codes for which the custom error page needs to be shown. These are the response codes that the back-end sends in returns.

##### **Error Handling**

If this field is enabled, then the custom error page will be displayed. If it is disabled, then the default server error page will be displayed.

##### **Custom Error Page**

Select the desired custom error page which will be displayed when the specified error occurs. Or click the **Add** button which redirects to the custom pages screen to create a custom page and add HTML content and then select it from the drop-down list.

:::note Note
We can globally disable error handling from WAF in the operational settings under advanced settings that we will learn later in Operational Settings.
:::

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


##### **URI**

Specify the URI on which the tamper rule will be applied.

```
    Accepted values: URI

    Default: Blank  
```


Example /login

##### **Method**

Select the HTTP method for the rule to extract when matched with the request.

```
    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL  
```


##### **HTTP Response Codes**

User can mention the HTTP response code based on the custom error rule name.

```
    Accepted values: 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530

    Default: Blank  
```


##### **Rule Action**

Specifies the action to be executed when this is gets triggered

```
    Accepted values: No Action / Send Custom Response

    Default: No Action  
```

