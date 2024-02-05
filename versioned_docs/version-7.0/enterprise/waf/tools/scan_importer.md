---
sidebar_position: 5
---
# Scan Importer

---

### Overview

Scan Importer is an API based tool provided in Haltdos WAF to pull scan results A security policy enforcement layer that prevents known vulnerabilities from being exploited.
Since the security enforcement layer analyzes transactions and intercepts attacks in transit, malicious traffic never reaches the web application with the virtual patch. Virtual patches prevent exploitation attempts from succeeding, even when no changes have been made to the application source code.

![Scan Importer](/img/waf/v7/docs/scanimporter.png)

### How to Use:

1. Go to **WAF** > **Tools** > **Scan Importer**
2. Configure your scanner settings.
3. Click on **save changes**

| Parameter        | Accepted Value | Default Values |
|------------------|----------------|----------------|
| Enabled          | Boolean        | False          |
| Name             | String         | Blank          |
| Scan Tool        | Drop-down      | Blank          |
| HTTP Method      | Drop-down      | GET            |
| URL              | String         | Blank          |
| Import Frequency | String         | Blank          |
| Next Run         | Drop-down      | Current Time   |
| Time zones        | Drop-down      | Africa/Abidjan |

### Description

##### **Enabled**
This option allows users to enable the scan importer.

##### **Name**

This option allows users to configure a user-friendly name for the scan rule.

##### **Scan Tool**

This option allows users to select the scanning tools from the list of tools provided.

##### **HTTP method**
This option allows users to select the HTTP method for the scanning requests. Users can select any HTTP method among GET, PUT, & POST.

##### **URL**

This option allows users to add the URL for the scan import request.

##### **Import Frequency**

This option allows users to set the scanning frequency. The scan will run on the mentioned frequency without any manual intervention.

##### **Next Run**

This option allows users to set the next time frequency for the next run.

##### **Timezone**

This option allows users to set the timezone for the next run time.

#### **Attribute**

This option allows users to add username & password attributes for the API request. User can set the any of the following: **ARG, PARAM, HEADER, COOKIE**.


##### **Attribute Type**

This option allows users to add multiple attribute to select which attribute should be used to authenticate the API request.

##### **Attribute Name**

This option allows users to select the attribute name.

##### **Attribute Value**

This option allows users to set the attribute value.




















