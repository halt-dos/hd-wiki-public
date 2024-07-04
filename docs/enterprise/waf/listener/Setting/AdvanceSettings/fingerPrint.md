---
sidebar_position: 1
---
#  Fingerprint 
User can specify fingerprint settings on this page for Listener

---

### Overview
Fingerprint Protection helps you quickly determine, manage, and mitigate automated requests. 

![fingerprint](/img/waf/v8/docs/fingerprint.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Advanced Settings** > **Fingerprint**
2. Configure your settings
3. Click **Save Changes**

### Description 

##### **Token Request URI**

Users can specify the URI for requesting a token. By default, it is /__verify/token/.

    Accepted values: String

    Default: /__verify/token/  

##### **Token Rotation Duration**

Users can specify the duration after which the token should be rotated. By default, it is 86400 seconds.

    Accepted values: Integer

    Default: 86400

##### **Token Error Margin Duration**

Users can specify the duration for error margin for validating token. By default, it is 60 seconds.

    Accepted values: Integer

    Default: 60 

##### **Token Name**

Users can specify the name of the token to be validated. By default, it is X-Bot-Token.

    Accepted values: String

    Default: X-Bot-Token 

##### **Allow Rooted Devices**

Users can specify enable it to allow rooted devices.
    Accepted values: Enable / Disable

    Default: Disable

##### **Allow Emulator**
Enable it to allow emulator devices.

    Accepted values: Enable / Disable

    Default: Disable 

##### **Bot Token Location**

Users can specify the location where the token is expected. By default, it is HEADER.

    Accepted values: HEADER / COOKIE / ARGS

    Default: HEADER 

##### **Token Encryption Key**

Users can specify the encryption key which will be used for token validation. By default, it is blank. To generate, click on Generate button and To download, click on the Download button.

    Accepted values: Select encryption key

    Default: Blank

##### **Fingerprint Expiry**

Specify the duration after which fingerprinting will be re-evaluated. By default, it is 86400 seconds.

    Accepted values: Integer

    Default: 86400

    Metrics: Seconds 

##### **User Session Location**

It is used to Specify the location where user session to track

    Accepted values: NONE / Cookie / Header / Argument / Body / Variable

    Default: NONE

