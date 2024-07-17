---
sidebar_position: 2
---

# TACACS server

Integration with organizaion's Tacacs+ server for user management.

---

Haltdos Platform supports integration with AAA authentication mechanism with Tacacs+ Server.

The goal of TACACS+ is to provide a methodology for managing multiple network access points from a single management service. AAA stands for authentication, authorization, and accounting. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the tacacs+ server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their credential configured on tacacs+ server.


:::info Info
If your organization is using AAA authentication, it is recommended to integrate Haltdos solutions for user management with AD.
:::

![activedirectory](/img/platform/v7/docs/tacacs.png)

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

    Accepted values: Password phrase

    Default: Blank 

##### **Authorization Protocol**

This option allows users to configure the authentication protocol for the TACACS+ server. This option contains mainly two protocols;

    Accepted values: ASCII / PAP / CHAP

    Default: PAP 

1. **ASCII**- ASCII is a simple authentication protocol where the client sends its username and password in plain text to the server for authentication.

2. **PAP** - PAP is a basic authentication protocol where the client sends its username and password in plain text to the server for authentication in a PAP protocol packet.

3. **CHAP** - CHAP is a more secure authentication protocol compared to PAP. It uses a three-way handshake process to authenticate the client with a challenge-response mechanism.

##### **Timeout**

    Accepted values: Integer

    Default: 5000 

This option allows users to configure the request timeout for the request. If any authentication response from TACACS+ server will be delayed from the mentioned timeout, it will be discarded.

### Tacacs Script

Tacacs Script is used for authority purpose, this is a process of determining what actions a user is allowed to perform on a Haltdos Solution Device after they have been authenticated by AAA Server. This is typically done by sending an authorization request to a TACACS+ server which then decides if the user has the necessary permissions for login in Haltdos GUI Console.  
  
There are various arguments and there values in the tacacs script that are mentioned below:  

#### 1. authority

User authority to define user type.  
- **ADMIN** - Gives Administrator Permissions if the user
login with Admin Creditionals
- **USER** - Normal User can enter user creditionals to get acceess, after that the user have to select access role from 3 catogries: **VISIBLE** / **OBSERVER** / **MEMBER**.

This is a mandatory field. 

#### 2. stacks

Define license IDs where user access allowed.  

    Accepted Values: SYNTAX - Comma seprated value

    Example : <LICENSE_1>[LICENSE_2] 

This is a manadatory field.

#### 3. emailId

User Email for altering.

    Accepted Values: User Email

    Example : test@haltdos.com 

This field is optional.

#### 4. access

User Access role.

    Accepted Values: VISIBLE / OBSERVER / MEMBER

    Example : OBSERVER 

1. **VISIBLE**- Users with this role can only view certain information but cannot execute any commands or make any changes.  

2. **OBSERVER**- Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.  

3. **MEMBER**- Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given.

This is a mandatory field.

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


