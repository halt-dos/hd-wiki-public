---
sidebar_position: 3
---

# Password Policy

Password policy for securing user access on Haltdos solutions

---

Haltdos platform allows administrators to configure password policy as per organization's compliances. To avoid weak passwords, administrators can configure fine grained user password policy to ensure secure access to Haltdos appliances. Password policy also supports password rotation, no repeat passwords, etc. to assist administrators enforce compliance.

![password](/img/platform/v6/docs/password_policy1.png)

**How to Use:**

1. Go to **Password Policy**
2. Configure your settings
3. Click Save

| PARAMETERS                 | DESCRIPTION                                                                                      | ACCEPTED VALUES | DEFAULT |
|----------------------------|--------------------------------------------------------------------------------------------------|-----------------|---------|
| Enabled                    | Enable organization specific password policy                                                     | Boolean         | False   |
| Minimum Length             | Specify the minimum length of password.                                                          | Integer         | 6       |
| Password Expiry            | Specify the expiry duration of password after which a new password must be set to access HaltDos | Integer         | 90      |
| Contain Uppercase          | Specify if the password must compulsory contain upper case characters                            | Boolean         | True    |
| Contain LowerCase          | Specify if the password must compulsory contain lower case characters                            | Boolean         | True    |
| Contain Special Characters | Specify if the password must compulsory contain special characters                               | Boolean         | True    |
| Contain Numbers            | Specify if the password must compulsory contain numbers                                          | Boolean         | True    |

