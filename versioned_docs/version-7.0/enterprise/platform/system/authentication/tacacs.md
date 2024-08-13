---
sidebar_position: 2
---

# TACACS server

Integration with organizaion's TACACS+ server for user management.

---

Haltdos Platform supports integration with AAA authentication mechanism with TACACS+ Server.

The goal of TACACS+ is to provide a methodology for managing multiple network access points from a single management service. AAA stands for authentication, authorization, and accounting. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the TACACS+ server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their credential configured on TACACS+ server.


:::info Info
If your organization is using AAA authentication, it is recommended to integrate Haltdos solutions for user management with Active Directory.
:::

![activedirectory](/img/platform/v7/docs/tacacs.png)

### How to Use:

1. Log into the Haltdos Web UI console.
2. Click on user icon on right top of the screen.
3. Go to **System > Remote Authentication > TACACS+ Server**.
4. Configure the settings and click on save changes.

### Description

##### **Enabled**

This option enables users to enable or disable the TACACS+ authentication.

    Accepted values: Enable / Disable

    Default: Disable 

##### **Endpoint**

This option allows users to set the endpoint or the TACACS+ server IP address on which Haltdos Console will send authentication requests.

    Accepted values: IP

    Default: Blank 

##### **Port**

This option allows users to set the port number that is being used at TACACS+ server mentioned above. By default, TACACS+ server is set to listen on port 49.

    Accepted values: Integer

    Default: 49 

##### **Secret Key**

This option allows user to set the secret key which will be used while communicating with the TACACS+ server.

    Accepted values: Password phrase

    Default: Blank 

##### **Authorization Protocol**

This option allows users to configure the authentication protocol for the TACACS+ server. This option contains mainly three protocols:

    Accepted values: ASCII / PAP / CHAP

    Default: PAP 

1. **ASCII**- ASCII is a simple authentication protocol where the client sends its username and password in plain text to the server for authentication.

2. **PAP** - PAP is a basic authentication protocol where the client sends its username and password in plain text to the server for authentication in a PAP protocol packet.

3. **CHAP** - CHAP is a more secure authentication protocol compared to PAP. It uses a three-way handshake process to authenticate the client with a challenge-response mechanism.

##### **Timeout**

    Accepted values: Integer

    Default: 5000 

    Unit: millisecond

This option allows users to configure the request timeout for the request. If any authentication response from TACACS+ server will be delayed from the mentioned timeout, it will be discarded.

### TACACS Script/Attributes

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

    Accepted Values: String - Comma separated value

    Example : LICENSE_1, LICENSE_2

#### 3. emailId

This argument is optional and only required for user-groups with the reporting feature enabled. It works in conjunction with the "disable_report" argument to manage reporting capabilities.

    Accepted Values: User Email

    Example : test@haltdos.com 

#### 4. access

This mandatory argument specifies the user-access role required for successful authorization. Users can log in with only one user-access role at a time.

    Accepted Values: VISIBLE / OBSERVER / MEMBER

    Example : OBSERVER 

1. **VISIBLE**- Users with this role can only view certain information but cannot execute any commands or make any changes.  

2. **OBSERVER**- Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.  

3. **MEMBER**- Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given.

#### 5. disable_report

Used to disable report for user.  

**true** - Disable mail report  
**false** - Enable mail report

    Accepted Values: true / false

    Example : False 

This field is optional.

##### 1. Below is a sample script to login with **MEMBER** access with enable report.

    authority: USER
    stacks: SAD56SDBC
    emailId: test@haltdos.com
    access: MEMBER
    disable_report: false

##### 2. Below is a sample script to login with **OBSERVER** access with enable report.

    authority: USER
    stacks: ADDFG56SBC
    access: OBSERVER

##### 3. Below is a sample script to login with **ADMIN** access with enable report.

    authority: ADMIN
    stacks: WAFYAW24B
    emailId: test@haltdos.com
    access: MEMBER
    disable_report: false



