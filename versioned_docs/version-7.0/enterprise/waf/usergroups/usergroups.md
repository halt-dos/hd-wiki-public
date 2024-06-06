# User Groups
User group access management 

---

## Overview

Haltdos Cloud provides multi-level RBAC access control over Stack. This allows owners to assign users with respective permissions on Haltdos Cloud.

![User Group](/img/waf/v7/docs/usergroup.png)

### How to Use:

1. Go to **Apps** > **WAF** > **User Group**
2. Click on **Add Group** 
3. Configure your settings
4. Click on **Save Changes**

### Description

##### **Group Name**  
Users can specify the user-friendly group name as per the need.

    Accepted values: String

    Default: Blank 

##### **Authentication Type**
Users can set the type of authentication used for the user group. Users can select from the below-mentioned authentication methods:

    Accepted values: Basic Auth / Key Auth / JWT / HMAC / LDAP

    Default: Basic Auth

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

#### User Group Settings

Users can customize the user group settings and add/delete/change credentials for the users added to the user group.

![User Group](/img/platform/v7/docs/usergroup.png)
