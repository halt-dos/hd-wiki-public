---
sidebar_position: 1
---

# E-Mail

### Integration with E-Mail Service

---

Haltdos Platform supports integration with Email Services via SMTP to send alerts and notifications to registered users. This section describes various SMTP settings for the integration of Haltdos solutions with your existing email provider.

:::note Note
It is recommended to integrate Haltdos solutions with SMTP for receiving timely alerts and notifications.
:::

![E-Mail](/img/platform/v8/docs/email.png)

![E-Mail](/img/platform/v8/docs/email2.png)

### How to Use:
1. Go to **System > Integration**
2. Select **E-Mail**
3. Configure E-Mail Settings
4. Click **Save Changes**

### Description

##### **Enable Email Notifications**  
This feature allows users to enable notification via emails. By default, this option is set to disable.  

    Accepted values: Enable / Disable

    Default: Disable 

##### **Email Server**  
This feature allows users to mention the email server details. Users can add the  hostname or IP address of the mail server  

    Accepted values: String

    Default: Blank 

##### **Server Port**  
This feature allows users to set the port number to connect to the mail server.  

    Accepted values: Integer

    Default: Blank 

##### **Connection Timeout**  
This feature allows users to set a timeout for the email server. By default, it is set to 0 which is the disabled state.  

    Accepted values: Integer

    Default: Blank 

##### **Socket Timeout**  
This feature allows users to set a timeout for the email server. By default, it is set to 0 which is the disabled state.  

    Accepted values: Integer

    Default: Blank 

##### **Enable Auth**  
This feature allows the user to set the authentication to the email server. By default, it is set to disable.  

    Accepted values: Enable / Disable

    Default: Enable 

##### **Email Address**  
This feature allows users to set their email address for authenticating to the mail server.  

    Accepted values: String

    Default: Blank 

##### **Email Password**  
This feature can only be used when the Email Auth option is set to enabled. Users are allowed to set their email password for authenticating to the email server.  

    Accepted values: String

    Default: Blank 

##### **Technical Support**  
This feature enables users to get Haltdos technical support on critical alerts.  

    Accepted values: Enable / Disable

    Default: Disable 

##### **Encryption Protocol**  
This option allows users to set specific types of encryption protocols to use when connecting to an email Server.  

    Accepted values: Select Protocol

    Default: TLS 

##### **DSN Response**
 
 DSN is an automated email informing the sender of another message about delivery problem.  

    Accepted values: Full Message/Headers Only/None

    Default: None 

##### **DSN Notify**
User can Specify when to send delivery status notification (DSN)

    Accepted values: Success/Failure/Delay/None

    Default: None 

##### **Enable EHLO**
The EHLO command initiates the SMTP session conversation. The client greets the server and introduces himself. As a rule, EHLO is attributed with an argument that specifies the domain name or IP address of the SMTP client. This option allows users to enable the EHLO command.  

    Accepted values: Enable / Disable

    Default: Disable 

##### **Start TLS**  
Transport Layer Security (TLS) encrypts data sent over the Internet to ensure that eavesdroppers and hackers are unable to see what you transmit which is particularly useful for private and sensitive information such as passwords, credit card numbers, and personal correspondence  

    Accepted values: Enable / Disable

    Default: Enable 

##### **Enable 8-bit Mime**  
This feature allows users to connect to the older version of the Email server.  

    Accepted values: Enable / Disable

    Default: Enable 

##### **Enable Partial Email**  
Partial mails allow large objects to be delivered as several mail messages and automatically joined by the receiving client. This mechanism can be used when intermediate transport agents, such as SMTP servers, are limiting the size of individual emails that can be sent.  

    Accepted values: Enable / Disable

    Default: Enable 

##### **Enable UserSet**  
This option allows users to enable UserSet to use the RSET command instead of NOOP while sending emails.  

    Accepted values: Enable / Disable

    Default: Disable 

##### **Enable Quit Wait**  
This option allows users to gracefully terminate connections with the Email Server.  

    Accepted values: Enable / Disable

    Default: Enable 
