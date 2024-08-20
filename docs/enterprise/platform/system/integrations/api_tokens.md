---
sidebar_position: 3
---

# API Tokens 

Generating API tokens for enabling API functionality

---

Haltdos platform is an API first solution supporting API access via JSON (RESTFul) or XML. To authenticate API requests, API tokens are needed. Access of these tokens can be restricted to READ ONLY or READ AND WRITE.

:::info
All API requests are **Authorization: Bearer `<TOKEN>`** header. Depending upon requirement, specify **Content-Type: application/xml** for XML and **Content-Type**: **application/json** for JSON output. If not Content-Type header is found, API will resort to JSON output. 
:::

<!-- ![apitokens](/img/platform/v8/docs/apiToken.png)

![apitokens](/img/platform/v8/docs/apiToken2.png) -->

### How to Use:

1. Go to **Stack** > **Integration** > **API Tokens**
2. Click on the button  Generate API token.
3. Configure your settings
4. Click **Save Changes**

### Description

##### **Token Name**  

This feature allows users to enter token name

    Accepted values: String

    Default: Blank 

##### **System Access**  

This feature allows users to enable/disable the system access

    Accepted values: String

    Default: Blank 

##### **Stack**  

This feature allows users to select stack 

    Accepted values: Select from list of stack

    Default: Blank 

##### **Token Access**  

This feature allows users to select Token Access

    Accepted values: ADMIN / READ / READ AND WRITE

    Default: ADMIN 
