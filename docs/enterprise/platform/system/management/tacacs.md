---
sidebar_position: 4
---

# TACACS

---

The TACACS+ script is used for authorization purposes and should be configured on an AAA server. This process determines what actions or roles a user is allowed to perform on a Haltdos solution device after they have been authenticated by the AAA server. Typically, this is done by sending an authorization request to a TACACS+ server, which then decides if the user has the necessary permissions to log in to the Haltdos GUI console.

In this process, an authentication request will be generated from the Haltdos solution to the AAA server, which will then authenticate the request and respond back to the Haltdos solution device. After authentication, the Haltdos device will generate an authorization request to the AAA server. In response, the AAA server should return the necessary attributes to complete the authorization. Based on the values received from the AAA server, the Haltdos device will approve login access.

There are various arguments that need to be configured on the authorization server (AAA server), as mentioned below.


| Authorization Attribute      | Mandatory |
| ----------- | ----------- |
| authority      | Yes       |
| stacks | yes    |
| emailId   | No        |
| access   | Yes     |
| disable_report | No    |

### Description

The scripts/attributes mentioned below need to be configured on the authorization server. This ensures that when any user tries to log in to the Haltdos Management Console, the request will be authenticated, authorized, and accounted for by the AAA server based upon the above script/attribute.

#### 1. authority

This argument determines the user type which is necessary for successful authorization on the portal. Users can log in with two modes: USER or ADMIN. The value of this argument is correlated with the "access" argument values. Providing this argument is mandatory for successful authorization.
#### 2. stacks
This mandatory argument is used to authorize license or stack details. It represents the **license ID** of the Haltdos solution and is crucial for validating that the authorization request originates from a validly licensed device.
```
    Accepted Values: String - Comma separated value
    Example : `<LICENSE_1>,<LICENSE_2>`
```
#### 3. emailId
This argument is optional and only required for user-groups with the reporting feature enabled. It works in conjunction with the "disable_report" argument to manage reporting capabilities.
```
    Accepted Values: User Email
    Example : test@haltdos.com 
```

#### 4. access
This mandatory argument specifies the user-access role required for successful authorization. Users can log in with only one user-access role at a time.
```
    Accepted Values: VISIBLE / OBSERVER / MEMBER
    Example : OBSERVER 
```

1. **VISIBLE**- Users with this role can only view certain information but cannot execute any commands or make any changes.  
2. **OBSERVER**- Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.  
3. **MEMBER**- Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given.
#### 5. disable_report
Used to disable report for user.  
**true** - Disable mail report  
**false** - Enable mail report

```
    Accepted Values: true / false
    Example : False 
```

This field is optional.
##### 1. Below is a sample script to login with **MEMBER** access with enable report.
```
    authority: USER
    stacks: SAD56SDBC
    emailId: test@haltdos.com
    access: MEMBER
    disable_report: false
```

##### 2. Below is a sample script to login with **OBSERVER** access with enable report.
```
    authority: USER
    stacks: ADDFG56SBC
    access: OBSERVER
```
##### 3. Below is a sample script to login with **ADMIN** access with enable report.
```
    authority: ADMIN
    stacks: WAFYAW24B
    emailId: test@haltdos.com
    access: MEMBER
    disable_report: false
```