---
sidebar_position: 11
---

# Account

Configure the current user profile

---

Account option in the system menu provides an opportunity to the users that they can change or configure the currently 


![Account](/img/platform/v7/docs/account.png)

### How to Use:
1. Log into the Haltdos Web UI console.
2. Click on user icon on right top of the screen.
3. Go to **System > Account**.
4. Configure the settings and click on save changes.

| Parameter                 | Accepted Value | Default Values    |
|---------------------------|----------------|-------------------|
| Username                  | String         | haltdos           |
| Email                     | email          | admin@haltdos.com |
| Name                      | String         | Administrator     |
| Default Stack             | Drop-down      | Default Stack     |
| Two Factor Authentication | Boolean        | Disabled          |

### Description

##### **Username**
Users can check what is the current username.

##### **Email**
Users are allowed to check and re-configure the email for the account. All the alerting will be performed to user using the mentioned email.

##### **Name**
This option allows users to configure the name for the account.

##### **Current Stack**
This option allows users to check and change the current stack. This option is only applicable when there are two or more stacks installed in the system.

##### **Two Factor Authentication**
This option allows users to configure or enable the two factor authentication for the user. 

If user enable two factor authentication for their account they will be given two option mentioned below;

1. Using OTP - This method requires email configuration. Users can refer [Email](/docs/enterprise/platform/system/email.md) documentation to configure the email. When user add two-factor authentication using OTP method, user will receive an OTP on logging into the server.

![OTP](/img/platform/v7/docs/accountotp.png)

2. Using TOTP - This method allows user to get verification code on the third party authenticator app like google authenticator/ Microsoft authenticator. Once user select the TOTP option in the drop-down, a QR code will appear. This QR code will be used to authenticate the requests. Once users are done with registration on authenticator app, they need to add verification code on the Haltdos Web UI console in order to save the configuration.

![TOTP](/img/platform/v7/docs/accounttotp.png)