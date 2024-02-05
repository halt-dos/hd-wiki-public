---
sidebar_position: 13
---

# Discovery 

### Overview 
Discovery displays all the parameters learned from the request i.e. headers, cookies, arguments. The learning can be deployed using Deploy Learning. Users can also upload a swagger file.

![Discovery](/img/waf/v7/docs/discovery1.png)

![Discovery](/img/waf/v7/docs/discovery2.png)
### How to Use:
1. Go to **WAF** > **Listener** > **Discovery**
2. Configure your settings
3. Click **Save Changes**

| Parameter| Description | Accepted Values | Default
| ----------- | ----------- | ----------- |----- |
| Add URI|Enter the URI|String|Blank
Regex |Enter the specific URI regex|Regex|Blank
Description|Enter the URI description|String|Blank
Method|Select the method |Drop-down|POST
Fixed URL|Enable it for fixed URL|Boolean|False
Parameter Name|Enter parameter name|String|Blank
Parameter Type|Select from the drop-down|Drop-down|Blank

###  Description
##### **HTTP Method**

Users are allowed to specify the HTTP method.

##### **Add URI**

Users can enter the URI.

##### **Regex**

Users can enter the specific URI regex.

##### **Description**

Users can enter the URI description.

##### **Method**

Users can select the method.

##### **Fixed URL**

Users can enable it for fixed URL.

##### **Parameter Name**

Users can enter parameter name.

##### **Parameter Type**

Users can select the parameter type from drop down menu.

