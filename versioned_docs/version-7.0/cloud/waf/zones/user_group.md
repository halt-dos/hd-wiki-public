---
sidebar_position: 4
---
# User Group

You can create User Group and add users.

---

## Overview

User Group is a feature that is used for authenticating the APIs. A ‘Group of Users’ are Validated or Identified using specific Authorization like 

**Basic Auth**: Here the client passes their username and password in the HTTP request header for authentication.

**Key Auth**: API keys can be used to authenticate Web APIs. API keys work up to 10x faster than using username/password.

**JWT Token**: The client is authenticated and their identity confirmed through a request to the authentication server. Once the authentication server confirms the identity of the client, an access token (JWT) is generated. The client uses that token to access the protected resources published through API.

**HMAC**: HMAC (hash-based message authentication code) is used to verify that a request is coming from an expected source and the request has not tampered during transit.

**LDAP**: LDAP authentication involves verifying provided usernames and passwords by connecting with a directory service that uses the LDAP protocol.

### How to Use:

1. Go to **WAF > Zones  > User Group**

2. Configure your settings. 

3. Click **Save**. 

| SETTINGS            | ACCEPTED VALUES | DEFAULT    |
|---------------------|-----------------|------------|
| Group Name          | String          | Blank      |
| Authentication Type | Dropdown        | Basic Auth |

#### Description

**Settings**

Users can configure a user group setting to hide credentials.

| SETTINGS         | ACCEPTED VALUES | DEFAULT |
|------------------|-----------------|---------|
| Hide Credentials | Boolean         | False   |

**Users**

You can add users to a user group.

| SETTINGS     | ACCEPTED VALUES | DEFAULT |
|--------------|-----------------|---------|
| User Enabled | Boolean         | True    |
| Name         | String          | Blank   |
| User Name    | String          | Blank   |
| Password     | String          | Blank   |

