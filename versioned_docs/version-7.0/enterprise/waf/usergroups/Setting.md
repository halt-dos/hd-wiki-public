# Settings
User group access management 

---

## Overview

Haltdos Cloud provides multi-level RBAC access control over Stack. This allows owners to assign users with respective permissions on Haltdos Cloud.

![User Group](/img/waf/v7/docs/UsergroupUser.png)

### How To Use:
1. Go to **Apps** > **WAF**> **User Group** > Click on the group name
2. Configure the settings
3. Click on **Save Changes**

### Description

1. **Hide Credentials**:  
Users can specify either to enable it to strip the credential from the request (i.e. the Authorization header) before proxying it. Click on Group Name that has been added by user then Hide Credentials Boolean will be visible.

    Accepted values: Enable / Disable

    Default: Disable 

1. **Enable Key in Body**:  
Enable it to read the request body (if said request has one and its MIME type is supported) and try to find the key in it. Supported MIME types are application/www-form-urlencoded, application/json, and multipart/form-data

    Accepted values: Enable / Disable

    Default: Disable 

1. **Header Name**:  
Specify the name of header in which that client must send the authentication key

    Accepted values: String

    Default: Blank 
    

