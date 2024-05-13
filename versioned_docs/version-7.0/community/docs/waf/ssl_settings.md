---
sidebar_position: 1
---

# SSL Settings


### Overview
It provides functionality to support SSL offloading based on configurations. As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model.
   
![SSL Settings](/img/ce-waf/docs/ssl_settings.png)
   
### How to Use:
1. Go To **WAF** > **SSL Settings**
2. Configure your Settings
3. Click **Save Changes**

#### Description

##### Enable SSL Offloading
Users are allowed to specify if the solution should offload SSL traffic.

    Accepted values: Enable/Disable 

    Default: Disable  


##### SSL Certificate
Users are allowed to specify SSL certificate for Encryption / Decryption.

    Accepted values: Drop-Down 

    Default: Blank  


##### SSL Cipher Suites
Users are allowed to specify the security / compatibility of SSL with modern web browsers.

    Accepted values: Drop-Down 

    Default: Intermediate  


##### SSL Session Caching
Users are allowed to specify the ssl session caching

    Accepted values: Integer 

    Default: 10  


##### SSL Session Timeout
Users are allowed to specify the ssl session timeout.
Users are allowed to specify the ssl session caching

    Accepted values: Integer 

    Default: 5  

