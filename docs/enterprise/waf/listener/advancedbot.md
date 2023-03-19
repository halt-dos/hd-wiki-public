---
sidebar_position: 9
---
# Advanced Bot
User can specify advanced bot settings on this page for Listener

---

### Overview
Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Advance bot settings in order to ensure advanced bot protection.

![advancedbot](/img/waf/v7/docs/advancebot1.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Advanced Settings** > **Bot Settings**
2. Configure your settings
3. Click **Save Changes**

| Parameter | Accepted Values | Default
| ----------- | ----------- | -------- |
| Token Request URI|String|/__verify/token/
Token Rotation Duration|Integer|60
Token Error Margin Duration|Integer|60
Token Name|String|X-Bot-Token
Allow Rooted Devices| Enable it to allow rooted devices.Boolean| Off
Allow Emulator| Enable it to allow emulator devices. Boolean| Off
​Bot Token Location|Drop-down|HEADER
Token Encryption Key|Drop-down|Blank
CSRF Cookie Expiry|Integer|0
CSRF Token Validity|Integer|60
Captcha Failed Threshold|Integer|3
Captcha Unanswered Threshold|Integer|3
Tarpit Delay|Integer|5
Tarpit Duration|Integer|300
Fingerprint Expiry|Integer|86400|

![advancedbot](/img/waf/v7/docs/advancebot2.png)

### Description 

##### **Token Request URI**

Users can specify the URI for requesting a token. By default, it is /__verify/token/.

##### **Token Rotation Duration**

Users can specify the duration after which the token should be rotated. By default, it is 86400 seconds.

##### **Token Error Margin Duration**

Users can specify the duration for error margin for validating token. By default, it is 60 seconds.

##### **Token Name**

Users can specify the name of the token to be validated. By default, it is X-Bot-Token.

##### **Allow Rooted Devices**

Users can specify enable it to allow rooted devices.

##### **Allow Emulator**
Enable it to allow emulator devices.


##### **Bot Token Location**

Users can specify the location where the token is expected. By default, it is HEADER.

##### **Token Encryption Key**

Users can specify the encryption key which will be used for token validation. By default, it is blank. To generate, click on Generate button and To download, click on the Download button.

##### **CSRF Cookie Expiry**

Users can specify the expiry time of the CSRF cookie in seconds. Set 0 to disable CSRF. This value is dependent on the profile CSRF setting that should be enabled to perform mitigation.

##### **CSRF Token Validity**

Users can specify the grace time period in seconds for which CSRF token will be allowed.

##### **Captcha Failed Threshold**

Users can specify the captcha failed threshold count.

##### **Captcha Unanswered Threshold**

Users can specify the captcha unanswered threshold.

##### **Tarpit Delay**

Users can specify the tarpit delay.

##### **Tarpit Duration**

Users can specify the tarpit duration.

:::note 
Tarpit delay and tarpit duration are two different values. For example, user has created a rule of rate limiting of 5mbps and resultant it'll tarpit the end user IP for the tarpit delay of 5 seconds and tarpit duration is set to 10 minutes. It means the end user IP will be got a tarpit delay for 5 seconds for next 10 minutes. After the time end user's IP will be free from tarpit delay and will start getting normal response from WAF device.
:::

##### **Fingerprint Expiry**

Specify the duration after which fingerprinting will be re-evaluated. By default, it is 86400 seconds.