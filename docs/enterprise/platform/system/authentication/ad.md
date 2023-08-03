---
sidebar_position: 1
---

# Active Directory

Integration with organizaion's active directory for user management.

---

Haltdos Platform supports integration with Active directory authentication mechanism. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the AD server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their AD credential.

:::info Info
If your organization is using Active Directory (AD), it is recommended to integrate Haltdos solutions for user management with AD.
:::

![activedirectory](/img/platform/v7/docs/active_direct.png)

**How to Use:**

1. Go to  **Administrator** (Present at the Top Right Side)
2. Click **System**
3. Click **User Setting**
4. Select **Active Directory**
5. Configure  **Active Directory Settings**
6. Click **Save Changes**

| PARAMETERS                | DESCRIPTION                               | ACCEPTED VALUES | DEFAULT |
|---------------------------|-------------------------------------------|-----------------|---------|
| Active Directory Authentication Enabled | Enable login through Active Directory     | Boolean         | False   |
| Endpoint                  | Specify the endpoint of Active Directory. | String          | Blank   |
| Domain                    | Specify the domain of Active Directory.   | String          | Blank   |
| RootdN                    | Specify the RootdN of Active Directory    | String          | Blank   |

 