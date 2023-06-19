---
sidebar_position: 2
---

# API Tokens 

Generating API tokens for enabling API functionality

---

Haltdos platform is an API first solution supporting API access via JSON (RESTFul) or XML. To authenticate API requests, API tokens are needed. Access of these tokens can be restricted to READ ONLY or READ AND WRITE.

:::info
All API requests are **Authorization: Bearer `<TOKEN>`** header. Depending upon requirement, specify **Content-Type: application/xml** for XML and **Content-Type**: **application/json** for JSON output. If not Content-Type header is found, API will resort to JSON output. 
:::
![apitokens](/img/platform/v7/docs/api_token_newui.png)

### How to Use:

1. Go to **Stack** > **Integration** > **API Tokens**
2. Click on the button  Generate API token.
3. Configure your settings
4. Click **Save Changes**

| PARAMETERS       | DESCRIPTION                                | ACCEPTED VALUES | DEFAULT        |
|------------------|--------------------------------------------|-----------------|----------------|
| Token Name       | Enter a name for the token                 | String          | Blank          |
| Token Access           | Select the scope of access for the token   | Dropdown        | Read And Write / Read Only |
| Scope            | Displays the scope of access for the token | NA              | NA             |
| Token            | Displays the token generated               | NA              | NA             |
| Action           | Let's copy and delete the token            | NA              | Icon           |

