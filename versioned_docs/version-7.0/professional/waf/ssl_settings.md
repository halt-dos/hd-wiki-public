---
sidebar_position: 6
---



# SSL Settings


It provides functionality to support SSL offloading based on configurations.

---

### Overview

As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model.

![SSL Settings](/img/pro-waf/docs/ssl_settings.png)


### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **SSL Settings** 
3. Configure Your Settings 
4. Click **Save Changes**. 

### **Description**

##### **Upstream SSL Protocols**
Specify the SSL protocols to be used. If left empty, the default SSL protocol will be applied.

    Accepted values: SSLv2 / SSLv3 / TLSv1 / TLSv1.1 / TLSv1.2 / TLSv1.3

    Default: Blank  

For more information abt SSL Protocols, please refer to this link: [**SSL Protocols**](https://en.wikipedia.org/wiki/Transport_Layer_Security)

##### **Enable SSL Offloading**
This option specifies if the WAF should enable HTTPS traffic for the configured website.

    Accepted values: Enabled / Disabled

    Default: Disabled  

##### **SSL Certificate**
This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page

    Accepted values: Select the uploaded SSL Certificate 

    Default: Blank  

For more information about the SSL Certificate, Please refer to this link: [**SSL Certificate**](https://www.digicert.com/what-is-an-ssl-certificate)

##### **SSL Ciphers**
It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities — usually the client (a user's browser) and the web-server they're connecting to (your website). Users can select respective ciphers from the drop-down.

##### **SSL Ciphers Suites**
In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc.

    Accepted values: Modern / Intermediate / Old / Custom 

    Default: Intermediate  

For more information about Security/Server-Side TLS, please refer to this site: [**SSL Cipher Suites**](https://wiki.mozilla.org/Security/Server_Side_TLS)

##### **SSL Session Caching**
This option allows users to specify the number of SSL session cache for HTTPS requests on the listener.

    Accepted values: Decimal
    
    Max: 1000

    Min: 0
    
    Default: 10  

##### **SSL Session Timeout**
This option allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener.

    Accepted values: Decimal
    
    Max: 3600

    Min: 1
    
    Default: 5  
