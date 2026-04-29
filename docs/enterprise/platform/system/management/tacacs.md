---
sidebar_position: 4
---

# TACACS

---

TACACS+ (Terminal Access Controller Access-Control System Plus) is a protocol used to control who can log into the Haltdos Management Console and what they are allowed to do after logging in. It separates authentication (who are you?), authorization (what can you do?), and accounting (what did you do?) — commonly referred to as **AAA**.

When TACACS+ is enabled, Haltdos sends the login credentials to an external TACACS+ server. The server authenticates the user and returns authorization attributes that determine the user's access level inside Haltdos.

In this process, an authentication request will be generated from the Haltdos solution to the AAA server, which will then authenticate the request and respond back to the Haltdos solution device. After authentication, the Haltdos device will generate an authorization request to the AAA server. In response, the AAA server should return the necessary attributes to complete the authorization. Based on the values received from the AAA server, the Haltdos device will approve login access.

There are various arguments that need to be configured on the authorization server (AAA server), as mentioned below.


| Authorization Attribute | Mandatory |
| ----------------------- | --------- |
| authority               | Yes       |
| stacks                  | Yes       |
| emailId                 | No        |
| access                  | Yes       |
| disable\_report         | No        |

---

## How to Use

1. Go to **Management** > **TACACS**
2. Configure the TACACS server settings (see Field Descriptions below)
3. Click **Save Changes**
4. Go to **Management** > **Administrators** and add a new administrator with **Login Mode** set to `TACACS`
5. Log out and log back in using the TACACS username and password

---

## Field Descriptions

![TACACS Settings Page](/img/platform/v8/docs/tacacs.png)

### Enabled

Enable or disable login through the TACACS+ server. When enabled, users with Login Mode set to TACACS in the Administrators section will be authenticated via the TACACS+ server.

```
Accepted Values: Enable / Disable
Default: Disable
```

### Endpoint

The IP address or hostname of your TACACS+ server.

```
Accepted Values: IP address or hostname
Example: 172.16.0.124
Default: Blank
```

### Port

The port on which the TACACS+ server is listening. The standard port for TACACS+ is **49**.

```
Accepted Values: Integer
Example: 49
Default: Blank
```

:::note
TACACS+ uses port **49** by default. This is different from RADIUS which uses port 1812. Ensure the TACACS+ server is configured to listen on the same port entered here.
:::

### Secret Key

A shared secret key configured on both the Haltdos device and the TACACS+ server. This key is used to encrypt communication between them. Both sides must use the **exact same** secret key, or authentication will fail.

```
Accepted Values: String
Default: Blank
```

:::caution
The Secret Key must match exactly between Haltdos and the TACACS+ server configuration. A mismatch will cause all TACACS+ logins to fail with an authentication error.
:::

### Authorization Protocol

The protocol used to send the user's password to the TACACS+ server during authentication.

```
Accepted Values: CHAP / PAP
Default: Blank
```

- **PAP (Password Authentication Protocol)** — Sends the password in plain text. Simpler to configure but less secure.
- **CHAP (Challenge Handshake Authentication Protocol)** — Uses a challenge-response mechanism. The password is never sent directly. More secure than PAP.

:::note
The protocol selected here must match the password type defined for the user in the TACACS+ server configuration file. If the user is defined with `chap = cleartext "password"` on the server, then CHAP must be selected in Haltdos.
:::

### Timeout

The time (in milliseconds) Haltdos will wait for a response from the TACACS+ server before considering the login attempt failed.

```
Accepted Values: Integer
Example: 5000 (5 seconds)
Default: Blank
Metric: Milliseconds
```

---

### Description

The scripts/attributes mentioned below need to be configured on the authorization server. This ensures that when any user tries to log in to the Haltdos Management Console, the request will be authenticated, authorized, and accounted for by the AAA server based upon the above script/attribute.

#### 1. authority

This argument determines the user type which is necessary for successful authorization on the portal. Users can log in with two modes: USER or SYSTEM. The value of this argument is correlated with the "access" argument values. Providing this argument is mandatory for successful authorization.
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
    Accepted Values: VISIBLE / READ / READ_WRITE / ADMIN
    Example : READ
```

1. **READ**- Users with this role can only view certain information but cannot execute any commands or make any changes.  
2. **READ_WRITE**- Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.  
3. **ADMIN**- Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given.
#### 5. disable_report
Used to disable report for user.  
**true** - Disable mail report  
**false** - Enable mail report

```
    Accepted Values: true / false
    Example : False 
```

This field is optional.
##### 1. Below is a sample script to login with **READ** access with enable report.
```
    authority: USER
    stacks: SAD56SDBC
    emailId: test@haltdos.com
    access: READ
    disable_report: false
```

##### 2. Below is a sample script to login with **READ_WRITE** access with enable report.
```
    authority: USER
    stacks: ADDFG56SBC
    access: READ_WRITE
    disable_report: false
```
##### 3. Below is a sample script to login with **ADMIN** access with enable report.
```
    authority: SYSTEM
    stacks: WAFYAW24B
    emailId: test@haltdos.com
    access: ADMIN
    disable_report: false
```

## Connection to Other Features

| Feature | Relationship |
| ------- | ------------ |
| **Management > Administrators** | Every TACACS+ user must also be added here with Login Mode set to TACACS. The username must match exactly. |
| **Stack License ID** | The `stacks` attribute in the TACACS+ server must contain your Haltdos stack license ID. |
| **Email Integration** | If `emailId` and `disable_report: false` are configured, the Email integration must be set up under System > Integrations > Email for report delivery to work. |

---