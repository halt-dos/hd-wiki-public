---
sidebar_position: 1
---

# Email Settings

---

### Overview

Users are allowed to set network related configurations.

![Email](/img/vpn/v8/docs/email-setting1.png)  
  
![Email](/img/vpn/v8/docs/email-setting2.png)  


### How to Use:
1. Go to **Stack** > **VPN** > **Integration** > **Email settings**.  
2. Configure the settings as per the requirement.  
3. Click on **Save Changes**.  

### Description:

**Enable Notifications**  

Enable notification via Email
 
    Accepted Value: Enable / Disable

    Default: Enable
```


**Email Server**  

Specify Email Server hostname or IP address

    Accepted Value: String

    Default: Blank
```


**Server Port**  

Specify the port to connect to Email Server
 
    Accepted Value: Integer

    Default: 0
```


**Connection Timeout**  

Specify connection timeout to Email Server. Set 0 to disable timeout

    Accepted Value: Integer

    Default: 0
```


**Socket Timeout**  

Specify socket timeout to Email Server. Set 0 to disable timeout

    Accepted Value: Integer

    Default: 0
```


**Enable Authentication**  

Enable authentication to connect to smtp server
 
    Accepted Value: Enable / Disable

    Default: Enable
```


**Email Address**

Specify email address for authenticating to Email Server

    Accepted Value: String

    Default: Blank
```


**Email Password**  

Specify the password of email address for authenticating to Email Server

    Accepted Value: String

    Default: Blank
```


**Technical Support**  

Enable notification to Haltdos technical support on critical alerts
 
    Accepted Value: Enable / Disable

    Default: Enable
```


**Encryption Protocol**  

Specify type of encryption protocol to use when connecting to Email Server

    Accepted Value: SSL / TLS / NONE

    Default: SSL
```


**DSN Response**  

Specify type of delivery status notification (DSN) response on delivery failure

    Accepted Value: Full Message / Header only / None

    Default: None
```


**DSN Notify**

Specify when to send delivery status notification (DSN)

    Accepted Value: Success / Failure / None

    Default: None
```


**Enable EHLO**  

Specify session timeout for mobile clients
 
    Accepted Value: Enable / Disable

    Default: Disable
```


**Start TLS**  

Upgrade to SSL/TLS when connecting to Email Server
 
    Accepted Value: Enable / Disable

    Default: Disable
```


**Enable 8-bit Mime**  

Enable 8-bit mime to connect to older version of Email Server
 
    Accepted Value: Enable / Disable

    Default: Disable
```


**Enable Partial Email**  

Allow sending partial emails
 
    Accepted Value: Enable / Disable

    Default: Disable
```


**Enable UserSet**  

Enable UserSet to use RSET command instead of NOOP while sending email
 
    Accepted Value: Enable / Disable

    Default: Disable
```


**Enable Quit Wait**  

Enable to gracefully terminate connection with Email Server
 
    Accepted Value: Enable / Disable

    Default: Disable
```

