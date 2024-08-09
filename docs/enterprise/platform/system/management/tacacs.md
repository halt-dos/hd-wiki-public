---
sidebar_position: 4
---

# TACACS server

Integration with organizaion's Tacacs+ server for user management.

---

Haltdos Platform supports integration with AAA authentication mechanism with Tacacs+ Server.

The goal of TACACS+ is to provide a methodology for managing multiple network access points from a single management service. AAA stands for authentication, authorization, and accounting. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the tacacs+ server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their credential configured on tacacs+ server.


:::info Info
If your organization is using AAA authentication, it is recommended to integrate Haltdos solutions for user management with AD.
:::

![activedirectory](/img/platform/v8/docs/tacacs.png)

### How to Use:

1. Log into the Haltdos Web UI console.
2. Click on user icon on right top of the screen.
3. Go to **System > Remote Authentication > TACACS+ Server**.
4. Configure the settings and click on save changes.

### Description

##### **Enabled**

This option enables users to enable or disable the tacacs+ authentication.
Endpoint.

    Accepted values: Enable / Disable

    Default: Disable 

##### **Endpoint**

This option allows users to set the endpoint or the tacacs+ server IP address on which Haltdos Device will send authentication requests.

    Accepted values: IP

    Default: Blank 

##### **Port**

This option allows users to set the port number for the port number that is being used at tacacs+ server mentioned above. By default, tacacs+ server set to listen on port 49.

    Accepted values: Integer

    Default: Blank 

##### **Secret Key**

This option allows users to set the secret key which will be used while communicating the TACACS+ server.

    Accepted values: Password Phrase

    Default: Blank 

##### **Authorization Protocol**

This option allows users to configure the authentication protocol for the TACACS+ server. This option contains mainly two protocols;

    Accepted values: ASCII / PAP / CHAP

    Default: ASCII 

1. **ASCII**- ASCII is a simple authentication protocol where the client sends its username and password in plain text to the server for authentication.

2. **PAP** - PAP is a basic authentication protocol where the client sends its username and password in plain text to the server for authentication in a PAP protocol packet.

3. **CHAP** - CHAP is a more secure authentication protocol compared to PAP. It uses a three-way handshake process to authenticate the client with a challenge-response mechanism.

##### **Timeout**

    Accepted values: Integer

    Default: 30 
    
    Timeout: milliSeconds 

This option allows users to configure the request timeout for the request. If any authentication response from TACACS+ server will be delayed from the mentioned timeout, it will be discarded.

### TACACS Script/Attributes

The TACACS+ script is used for authorization purposes and should be configured on an AAA server. This process determines what actions or roles a user is allowed to perform on a Haltdos solution device after they have been authenticated by the AAA server. Typically, this is done by sending an authorization request to a TACACS+ server, which then decides if the user has the necessary permissions to log in to the Haltdos GUI console.

There are various arguments that need to be configured on the authorization server (AAA server);  


| Attributes      | Mandatory |
| ----------- | ----------- |
| authority      | Yes       |
| stacks | yes    |
| emailId   | No        |
| access   | Yes     |
| disable_report | No    |

##### 1. **authority**
This argument determines the user type and is necessary for successful authorization on the portal. Users can log in with two modes: **USER or ADMIN**. The value of this argument is correlated with the "access" argument values. Providing this argument is mandatory for successful authorization.

##### 2. **stacks**  
This mandatory argument is used to authorize license or stack details. It represents the license ID of the Haltdos solution and is crucial for validating that the authorization request originates from a validly licensed device.

    Accepted Values: SYNTAX - Comma seprated value

    Example : <LICENSE_1>[LICENSE_2] 

##### 3. **emailId**
This argument is optional and only required for user-groups with the reporting feature enabled. It works in conjunction with the "disable_report" argument to manage reporting capabilities.

    Accepted Values: User Email

    Example : test@haltdos.com 

##### 4. **access**
This mandatory argument specifies the user-access role required for successful authorization. Users can log in with only one user-access role at a time.

    Accepted Values: VISIBLE / OBSERVER / MEMBER

    Example : OBSERVER 

- VISIBLE- Users with this role can only view certain information but cannot execute any commands or make any changes.

- OBSERVER- Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.

- MEMBER- Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given.

##### 5. **disable_report**
Used to disable report for user.

    true - Disable mail report
    false - Enable mail report

**1. Below is a sample script to login with MEMBER access with enable report.**

    authority: USER
    stacks: SAD56SDBC
    emailId: test@haltdos.com
    access: MEMBER
    disable_report: false

**2. Below is a sample script to login with OBSERVER access with enable report.**

    authority: USER
    stacks: ADDFG56SBC
    access: OBSERVER

**3. Below is a sample script to login with ADMIN access with enable report.**

    authority: ADMIN
    stacks: WAFYAW24B
    emailId: test@haltdos.com
    access: MEMBER
    disable_report: false

The above-mentioned scripts/attributes need to be configured on the authorization server. This ensures that when any user tries to log in to the Haltdos Management Console, the request will be authenticated, authorized, and accounted for by the AAA server.

In this process, an authentication request will be generated from the Haltdos solution to the AAA server, which will then authenticate the request and respond back to the Haltdos solution device. After authentication, the Haltdos device will generate an authorization request to the AAA server. In response, the AAA server should return the necessary attributes to complete the authorization. Based on the values received from the AAA server, the Haltdos device will approve login access.