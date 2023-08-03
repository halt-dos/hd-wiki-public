---
sidebar_position: 4
---

# E-Mail

Integration with E-Mail Service

---

Haltdos Platform supports integration with Email Services via SMTP to send alerts and notifications to registered users. This section describes various SMTP settings for the integration of Haltdos solutions with your existing email provider.

:::note Note
It is recommended to integrate Haltdos solutions with SMTP for receiving timely alerts and notifications.
:::

![E-Mail](/img/platform/v7/docs/emaill.png)

### How to Use:
1. Go to **System** (Present at the Top Right Side)
2. Select **E-Mail**
3. Configure E-Mail Settings
4. Click **Save Changes**

![E-Mail](/img/platform/v7/docs/emailll.png)


### Description

##### **Enable Email Notifications**  
This feature allows users to enable notification via emails. By default, this option is set to disable.  

##### **Email Server**  
This feature allows users to mention the email server details. Users can add the  hostname or IP address of the mail server  

##### **Server Port**  
This feature allows users to set the port number to connect to the mail server.  

##### **Connection Timeout**  
This feature allows users to set a timeout for the email server. By default, it is set to 0 which is the disabled state.  

##### **Socket Timeout**  
This feature allows users to set a timeout for the email server. By default, it is set to 0 which is the disabled state.  

##### **Enable Auth**  
This feature allows the user to set the authentication to the email server. By default, it is set to disable.  

##### **Email Address**  
This feature allows users to set their email address for authenticating to the mail server.  

##### **Email Password**  
This feature can only be used when the Email Auth option is set to enabled. Users are allowed to set their email password for authenticating to the email server.  

##### **Technical Support**  
This feature enables users to get Haltdos technical support on critical alerts.  

##### **Encryption Protocol**  
This option allows users to set specific types of encryption protocols to use when connecting to an email Server.  

##### **DSN Response**
DNS is a query/response protocol. The client queries information in a single UDP request. This request is followed by a single UDP reply from the DNS server. DNS uses UDP port 53 to connect to the server.  

##### **DSN Notify**
User can Specify when to send delivery status notification (DSN)

##### **Enable EHLO**
The EHLO command initiates the SMTP session conversation. The client greets the server and introduces himself. As a rule, EHLO is attributed with an argument that specifies the domain name or IP address of the SMTP client. This option allows users to enable the EHLO command.  

##### **Start TLS**  
Transport Layer Security (TLS) encrypts data sent over the Internet to ensure that eavesdroppers and hackers are unable to see what you transmit which is particularly useful for private and sensitive information such as passwords, credit card numbers, and personal correspondence  

##### **Enable 8-bit Mime**  
This feature allows users to connect to the older version of the Email server.  

##### **Enable Partial Email**  
Partial mails allow large objects to be delivered as several mail messages and automatically joined by the receiving client. This mechanism can be used when intermediate transport agents, such as SMTP servers, are limiting the size of individual emails that can be sent.  

##### **Enable UserSet**  
This option allows users to enable UserSet to use the RSET command instead of NOOP while sending emails.  

##### **Enable Quit Wait**  
This option allows users to gracefully terminate connections with the Email Server.  