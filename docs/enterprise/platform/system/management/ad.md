---
sidebar_position: 2
---

# LDAP

Integration with organizaion's active directory for user management.

---

Haltdos Platform supports integration with Active directory authentication mechanism. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the AD server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their AD credential.

:::info Info
If your organization is using Active Directory (AD), it is recommended to integrate Haltdos solutions for user management with AD.
:::

![activedirectory](/img/platform/v8/docs/ldap.png)

**How to Use:**

1. Go to  **Administrator** (Present at the Top Right Side)
2. Click **System**
3. Click **User Setting**
4. Select **Active Directory**
5. Configure  **Active Directory Settings**
6. Click **Save Changes**

 ### Description

##### **Active Directory Authentication Enabled**
Enable login through Active Directory

    Accepted values: Enable / Disable

    Default: Disable 

##### **Endpoint**
Specify the endpoint of Active Directory.	

    Accepted values: String

    Default: Blank 

##### **Domain**
Specify the domain of Active Directory.	

    Accepted values: String

    Default: haltdos 

##### **RootdN**
Specify the RootdN of Active Directory

    Accepted values: String

    Default: haltdos 
