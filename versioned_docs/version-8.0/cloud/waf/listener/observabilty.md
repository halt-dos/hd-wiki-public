---
sidebar_position: 13
---

# Observabilty 

### Overview 
Discovery displays all the parameters learned from the request i.e. headers, cookies, arguments. The learning can be deployed using Deploy Learning. Users can also upload a swagger file.

![Discovery](/img/waf/v8/docs/observabilty1.png)

![Discovery](/img/waf/v8/docs/observabilty2.png)
### How to Use:
1. Go to **WAF** > **Listener** > **Discovery**
2. Configure your settings
3. Click **Save Changes**

###  Description

##### **HTTP Method**

Users are allowed to specify the HTTP method.

    Accepted values: GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: 10 

##### **Add URI**

Users can enter the URI.

    Accepted values: URI

    Default: 10 

##### **Regex**

Users can enter the specific URI regex.

    Accepted values: Regex

    Default: 10 

##### **Description**

Users can enter the URI description.

    Accepted values: String

    Default: Blank 

##### **Fixed URL**

Users can enable it for fixed URL.

    Accepted values: Enable / Disable

    Default: Disable 

##### **Parameter Name**

Users can enter parameter name.

    Accepted values: String

    Default: Blank 

##### **Parameter Type**

Users can select the parameter type from drop down menu.

    Accepted values: INTEGER / STRING / DECIMAL_POINTS / URL / URL_OR_IP_ADDRESS / PATH / IP_ADDRESS / NOT_HTML / FILE / XML / JSON / EMAIL / PHONE_NUMBER / CREDIT_CARD / AADHAR_NUMBER / SOCIAL_SECURITY_NUMBER

    Default: None

##### **Parameter Description**

Users have to mention the parameter description.

    Accepted values: String

    Default: Blank
