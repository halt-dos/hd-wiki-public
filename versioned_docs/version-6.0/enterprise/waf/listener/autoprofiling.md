---
sidebar_position: 11
---

# Auto Profiling 

## Overview 
Auto Profiling displays all the parameters learned from the request i.e. headers, cookies, arguments. The learning can be deployed using Deploy Learning. Users can also upload a swagger file.

![Auto Profiling](/img/waf/v6/docs/autoprofiling.png)

## How to Use:
1.Go to **WAF** > **Listener** > **Auto Profiling**

2.Configure your settings

3.Click **Save Changes**

| Parameter| Description | Accepted Values | Default
| ----------- | ----------- | ----------- |----- |
| Add URI|Enter the URI|String|Blank
Regex |Enter the specific URI regex|Regex|Blank
Description|Enter the URI description|String|Blank
Method|Select the method |Drop-down|POST
Fixed URL|Enable it for fixed URL|Boolean|False
Parameter Name|Enter parameter name|String|Blank
Parameter Type|Select from the drop-down|Drop-down|Blank

##  Description
1.**Add URI**:

Users can enter the URI.

2.**Regex**:

Users can enter the specific URI regex.

3.**Description**:

Users can enter the URI description.

4.**Method**:

Users can select the method.

5.**Fixed URL**:

Users can enable it for fixed URL.

6.**Parameter Name**:

Users can enter parameter name.

7.**Parameter Type**:

Users can select the parameter type from drop down menu.

