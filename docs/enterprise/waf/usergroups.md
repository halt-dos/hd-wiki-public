---
sidebar_position: 2
---

# User Groups
User group access management 

---

### Overview

Haltdos Cloud provides multi-level RBAC access control over Stack. This allows owners to assign users with respective permissions on Haltdos Cloud.

![User Group](/img/waf/v8/docs/usergroups.png)

### How to configure User Groups:

1. Go to **Apps** > **WAF** > **User Group**
2. Click on **Add Group** 
3. Configure your settings
4. Click on **Save Changes**

### Description

##### **Group Name**  
Users can specify the user-friendly group name as per the need.

    Accepted Value : String

    Default Value : Blank

##### **Authentication Type**
Users can set the type of authentication used for the user group. Users can select from the below-mentioned authentication methods:

    Accepted Value : Basic Auth, Key Auth, JWT, HMAC, LDAP, NTLM

    Default Value : Basic Auth

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

##### **User Group Settings**

Users can customize the user group settings and modify credentials for the users added to the user group.

##### **How To configure User Group Settings:**

1. Go to **Apps** > **WAF**> **User Groups** > Click on the group name
2. Configure the Settings based on Authentication Type
3. Click on **Save Changes**

1. **Hide Credentials**:
Users can specify either to enable it to strip the credential from the request (i.e. the Authorization header) before proxying it. Click on Group Name that has been added by user then Hide Credentials Boolean will be visible.

    Accepted Value : Boolean

    Default Value : False

##### How To add Users:

1. Go to **Apps** > **WAF**> **User Groups** > Click on the User Group name in which you want to add user
2. Click on **Add User**
2. Configure the Settings based on Authentication Type
3. Click on **Save Changes**

##### Description

**User enabled**:  
  
Users can enable or disable users as per the requirement.

    Accepted Value : Boolean

    Default Value : True

**Name**:  
  
Users can specify the name of the users for identification purposes.

    Accepted Value : String

    Default Value : Blank

**User Name**:  
  
Users can specify the username for the user.

    Accepted Value : String

    Default Value : Blank

**Password**:  
  
Users can specify the password for a user of either **LDAP** or **BASIC AUTH** Authentication Type

    Accepted Value : String

    Default Value : Blank

**Secret**:  
  
Users can specify the secret when Authentication Type is **HMAC**. The configured secret is used for hashing messages between client and HMAC server.

    Accepted Value : String

    Default Value : Blank

**Algorithm**:  
  
Users can specify the algorithm to be used from the following ones, if the Authentication Type is **JWT**, to specify the algorithm being used for signing the JWT Tokens.

    Accepted Value : HS256 , HS512 , RS256 , RS512.

    Default Value : HS256

**Key**:  
  
Users can specify the key when Authentication Type is **JWT** to decode the payload that contains the user claims.

    Accepted Value : String

    Default Value : Blank

