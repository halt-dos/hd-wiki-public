---
sidebar_position: 3
---
# Bot Settings

User can specify advanced bot settings on this page for Listener

---

Users can configure below advanced bot settings for Listener.

### How to Use:

1. Go to **WAF > Zones > Listeners > Advanced Settings > Bot Settings**

2. Configure your settings

3. Click Save

| PARAMETERS                  | ACCEPTED VALUES                                                                                | DEFAULT          |
|-----------------------------|------------------------------------------------------------------------------------------------|------------------|
| Token Request URI           | Specify the URI for requesting a token.
Accepted values: String                                | /__verify/token/ |
| Token Rotation Duration     | Specify the duration for the error margin for validating the token.
Accepted values: Integer   | 60               |
| Token Error Margin Duration | Specify the duration for the error margin for validating the token.
Accepted values: Integer   | 60               |
| Token Name                  | Specify the name of the token to be validated.
Accepted values: String                         | X-Bot-Token      |
| Bot Token Location          | Specifies the location where the token is expected
Accepted values: Drop-down                  | HEADER           |
| Token Encryption Key        | Specify the encryption key which will be used for token validation
Accepted values: Drop-down  | Blank            |
| CSRF Cookie Expiry          | Specify the expiry time of the CSRF cookie in seconds. Set 0 to disable CSRF                   | 0                |
| CSRF Token Validity         | Specify the grace time period in seconds for which CSRF token will be allowed.                 | 60               |
| Fingerprint Expiry          | Specify the duration after which fingerprinting will be re-evaluated.
Accepted values: Integer | 86400            |

#### Description

**Token Request URI**: Specify the URI for requesting a token. By default, it is /__verify/token/.

**Token Rotation Duration**: Specify the duration after which the token should be rotated. By default, it is 86400 seconds.

**Token Error Margin Duration**: Specify the duration for error margin for validating token. By default, it is 60 seconds.

**Token Name**: Specify the name of the token to be validated. By default, it is X-Bot-Token.

**Bot Token Location**: Specifies the location where the token is expected. By default, it is HEADER.

**Token Encryption Key**: Specify the encryption key which will be used for token validation. By default, it is blank. To generate, click on Generate button and To download, click on the Download button.

**CSRF Cookie Expiry**: Specify the expiry time of the CSRF cookie in seconds. Set 0 to disable CSRF. This value is dependent on the profile CSRF setting that should be enabled to perform mitigation.

**CSRF Token Validity**: Specify the grace time period in seconds for which CSRF token will be allowed.

**Fingerprint Expiry**: Specify the duration after which fingerprinting will be re-evaluated. By default, it is 86400 seconds.

Note: These settings can be used for Advance Bot protection.