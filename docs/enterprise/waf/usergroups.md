---
sidebar_position: 2
---

# User Groups

---

## Overview

Haltdos WAF provides the capability of configuring User Groups at WAF Level, which adds an authentication layer at WAF. Once a usergroup is created and configured in the Operational Settings of Security Profile, WAF will check against the configured users for authentication, and if authentication fails, the request gets blocked at the WAF level.

![User Group](/img/waf/v8/docs/usergroups_main.png)

### How to configure User Groups:

1. Go to **Apps** > **WAF** > **User Group**
2. Click on **Add Group** 
3. Configure your settings
4. Click on **Save Changes**

| Parameter           | Accepted Values | Default Values |
|---------------------|-----------------|----------------|
| Group Name          | String          | Blank          |
| Authentication Type | Drop Down       | Basic Auth     |

### Description

#### **Group Name**  
Users can specify the user-friendly group name as per the need.

#### **Authentication Type**
Users can set the type of authentication used for the user group. Users can select from the below-mentioned authentication methods:

1. **Basic Auth**:  
Basic Authentication is a method for users to provide a username and password when making a request for access. The method is used by the request’s recipient to verify users’ identity and rights to access a resource.

2. **Key Auth**:  
Key authentication is used to solving the problem of authenticating the keys of the person (say "person B") to whom some other person ("person A") is talking to or trying to talk to.

3. **JWT**:  
JSON-based standard for passing claims between parties in web application environments JSON Web Token (JWT) is a proposed Internet standard for creating data with optional signature.

4. **HMAC**:  
HMAC (Hash-based Message Authentication Code) is a type of message authentication code (MAC) that is acquired by executing a cryptographic hash function on the data (that is) to be authenticated and a secret shared key.

5. **LDAP**:  
Lightweight Directory Access Protocol (LDAP) is an internet protocol that works on TCP/IP, used to access information from directories.

6. **NTLM**:  
NTLM (NT LAN Manager) is an authentication protocol used to verify users' identity over a network. It operates through a challenge-response mechanism and is mostly used by legacy systems or non-domain-joined devices.

7. **RADIUS**:  
RADIUS (Remote Authentication Dial-In User Service) authentication is a protocol used to centrally manage and authenticate users' access to networks by verifying credentials against a central server.

8. **SSO**:
Single Sign-On (SSO) is an authentication process that allows users to access multiple applications or services with one set of login credentials, enhancing convenience and security by reducing the need to log in multiple times across platforms.

#### User Group Settings

Users can customize the user group settings and modify credentials for the users added to the user group.

##### How To configure User Group Settings:

1. Go to **Apps** > **WAF**> **User Groups** > Click on the group name
2. Configure the Settings based on Authentication Type
3. Click on **Save Changes**

| Parameter        | Accepted Values | Default Values |
|------------------|-----------------|----------------|
| Hide Credentials | Boolean         | 0              |

##### Description  

1. **Hide Credentials**:
Users can specify either to enable it to strip the credential from the request (i.e. the Authorization header) before proxying it. Click on Group Name that has been added by user then Hide Credentials Boolean will be visible.

### How To add Users:

1. Go to **Apps** > **WAF**> **User Groups** > Click on the User Group name in which you want to add user
2. Click on **Add User**
2. Configure the Settings based on Authentication Type
3. Click on **Save Changes**

| Parameter        | Accepted Values | Default Values |
|------------------|-----------------|----------------|
| User enabled     | Boolean         | 1              |
| Name             | String          | Blank          |
| User Name        | String          | Blank          |
| Password         | String          | Blank          |
| Secret           | String          | Blank          |
| Algorithm        | Drop Down       | HS256          |
| Key              | String          | Blank          |

#### Description

1. **User enabled**:
Users can enable or disable users as per the requirement.

2. **Name**:
Users can specify the name of the users for identification purposes.

3. **User Name**:
Users can specify the username for the user.

4. **Password**:
Users can specify the password for a user of either **LDAP** or **BASIC AUTH** Authentication Type

5. **Secret**:
Users can specify the secret when Authentication Type is **HMAC**. The configured secret is used for hashing messages between client and HMAC server.

6. **Algorithm**:
Users can specify the algorithm to be used from the following ones, if the Authentication Type is **JWT**, to specify the algorithm being used for signing the JWT Tokens.

- **HS256**
- **HS512**
- **RS256**
- **RS512**

7. **Key**:
Users can specify the key when Authentication Type is **JWT** to decode the payload that contains the user claims.

