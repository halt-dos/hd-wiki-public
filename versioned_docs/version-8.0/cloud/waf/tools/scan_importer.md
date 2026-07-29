---
sidebar_position: 3
---
# Scan Importer

---

### Overview

Scan Importer is an API based tool provided in Haltdos WAF to pull scan results A security policy enforcement layer that prevents known vulnerabilities from being exploited.
Since the security enforcement layer analyzes transactions and intercepts attacks in transit, malicious traffic never reaches the web application with the virtual patch. Virtual patches prevent exploitation attempts from succeeding, even when no changes have been made to the application source code.

![Scan Importer](/img/waf/v8/docs/scanImporter.png)

### How to Use:

1. Go to **WAF** > **Tools** > **Scan Importer**
2. Configure your scanner settings.
3. Click on **save changes**

### Description

##### **Enabled**  
This option allows users to enable the scan importer.

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```
    
##### **Name**  
This option allows users to configure a user-friendly name for the scan rule.

```
    Accepted values: String

    Default: Blank
```
    
##### **Scan Tool**  
This option allows users to select the scanning tools from the list of tools provided.

```
    Accepted values: Acunetix (JSON) / BURP (XML) / OWASP Zap (JSON)

    Default: Acunetix (JSON)
```
    
##### **HTTP method**
This option allows users to select the HTTP method for the scanning requests. Users can select any HTTP method among GET, PUT, & POST.

```
    Accepted values: GET / POST / PUT

    Default: GET
```
    
##### **URL**

This option allows users to add the URL for the scan import request.

```
    Accepted values: URL
    
    Default: Blank
```
    
##### **Import Frequency**

This option allows users to set the scanning frequency. The scan will run on the mentioned frequency without any manual intervention.

```
    Accepted values: Select Frequency

    Default: Blank
```
    
##### **Next Run**

This option allows users to set the next time frequency for the next run.

```
    Accepted values: Integer

    Default: Blank
```
    
##### **Timezone**

This option allows users to set the timezone for the next run time.

```
    Accepted values: Select Timezone

    Default: Asia/Calcutta
```
    
#### **Attribute**

This option allows users to add username & password attributes for the API request. User can set the any of the following: **ARG, PARAM, HEADER, COOKIE**.

```
    Accepted values: Select SSL Cipher

    Default: Blank
```
    
##### **Attribute Type**

This option allows users to add multiple attribute to select which attribute should be used to authenticate the API request.

```
    Accepted values: ARG / PARAM / HEADER / COOOKIE

    Default: ARG
```
    
##### **Attribute Name**

This option allows users to select the attribute name.

```
    Accepted values: String

    Default: Blank
```
    
##### **Attribute Value**

This option allows users to set the attribute value.

```
    Accepted values: String

    Default: Blank
```
    



















