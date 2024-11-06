---
sidebar_position: 2
---

# SSL Settings
**SSL (Secure Sockets Layer)** and its successor, **TLS (Transport Layer Security)**, are protocols for establishing authenticated and encrypted links between networked computers. SSL offloading is the process of removing the SSL-based encryption from incoming traffic to relieve a web server of the processing burden of decrypting and/or encrypting traffic sent via SSL. 

---
![SSL Settings](/img/adc/v7/docs/sslsetting.png)
  
![SSL Settings2](/img/adc/v7/docs/sslsetting1.png)  
### How to Use:

1. Go to [**SLB**](/v7/enterprise/adc) > [**Listeners**](./listeners.md) > **SSL Settings**

2. Configure your settings.

3. Click **Save Changes**. 



**Configure the following parameters to set up the desired settings:**

### Description

##### **Enable SSL Offloading**

This option allows users to specify if the solution should offload SSL traffic. It helps to reduce burden of servers through the process of removing SSL encryption from incoming traffic.

```
    Accepted values: Enabled / Disabled

    Default: Disabled 
```


##### **SSL Certificate**

This option allows users to specify an SSL certificate for Encryption / Decryption. It authenticates the identity of the website and more secure. It assures users that you are using a authentic website.

```
    Accepted values: Select the uploaded SSL Certificate 

    Default: Blank   
```


##### **SSL Cipher Suites**

This option allows users to specify the security/compatibility of SSL with modern web browsers. It provides a set of algorithms and protocols to secure communication between client and server.

```
    Accepted values: Modern / Intermediate / Old / Custom 

    Default: Intermediate  
```


##### **SSL Session Caching**

This option allows users to specify the SSL session caching which helps to optimize and greatly improve performance through saving SSL sessions for a specific period of time until connection between client and server has been terminated.

```
    Accepted values: Integer 

    Max: 1000

    Min: 1

    Default: 10  
```


##### **SSL Session Timeout**

This option allows users to specify the SSL session timeout. This value is the amount of time given  before an SSL session expires.

```
    Accepted values: Integer 

    Max: 3600

    Min: 1

    Default: 5
```


##### **Client Certificate Verification**

This option allows users to specify if the solution should enable client certificate authentication. It provides security to encrypt data transfer so that cyber criminal cannot access, read or change the data.

```
    Accepted values: Enable / Disable

    Default: Enable 
```


##### **Client Certificate**

This option allows users to specify an SSL certificate for Client Authentication.

This option allows users to specify an SSL certificate for Client Authentication. It provides the identity of the connecting users. User can redirect at **Client Certificate** and add certificate.

```
    Accepted values: Select and add Client Certificate.

    Default: Blank 
```


##### **Certifcate Revocation List**

Users can specify client certificate revocation list.

```
    Accepted values: Select and add Revocation List

    Default: Blank 
```


##### **Client Certificate Raw Header**

Users can specify header name for forwarding raw SSL client certificate to upstream

```
    Accepted values: String

    Default: Blank 
```


##### **Client Certificate Fingerprint Header**

This option allows users to specify header names for forwarding SSL certificate fingerprints to be upstream.

```
    Accepted values: String

    Default: Blank 
```


##### **Client Certificate Issuer Header**

This option allows users to specify header names for forwarding SSL certificate Issuer to be upstream.

```
    Accepted values: String

    Default: Blank 
```


##### **Client Certificate Subject Header**

This option allows users to specify header names for forwarding SSL certificate Subject to be upstream.

```
    Accepted values: String

    Default: Blank 
```


##### **Client Certificate Serial Header**

This option allows users to specify header names for forwarding SSL certificate Serial to be upstream.

```
    Accepted values: String

    Default: Blank 
```


##### **Client Certificate Verify Header**

This option allows users to specify header names for forwarding SSL certificate verify to be upstream.

```
    Accepted values: String

    Default: Blank 
```


##### **Client Certificate Start Date Header**

This option allows users to specify header names for forwarding SSL certificate start date to be upstream.

```
    Accepted values: String

    Default: Blank 
```


##### **Client Certificate End Date Header**

This option allows users to specify header names for forwarding SSL certificate end date to be upstream.

```
    Accepted values: String

    Default: Blank 
```


##### **Invalid Client Certificate Action**

This option allows users to specify the action to be performed when client certificate verification fails. User can select any of the actions mentioned below;

```
    Accepted values: No Action / Redirect

    Default: No Action 
```


1. No Action : It means for invalid Client certificate, there will be no action taken
2. Redirect : It means for an invalid client certificate, there w

##### **Custom Page**

Users can specify the response page to be shown on client certificate verification failure.

```
    Accepted values: String

    Default: Blank 
```

