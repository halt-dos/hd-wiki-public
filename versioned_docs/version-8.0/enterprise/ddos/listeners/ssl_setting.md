---
sidebar_position: 3
---

# SSL Settings
It provides functionality to support SSL offloading based on configurations.

---

## Overview

As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model.


![ssl_setting](/img/ddos/v7/docs/ssl.png)

### How to Use

1. Go To **Apps > DDoS > Listeners > SSL Settings** 
2. Configure the Settings as per requirement.
3. Click on **Save Changes**.

### Description

##### **Enable SSL Offloading**

This option helps users to enable SSL offloading for the listener. After enabling the SSL offloading, user should add a valid SSL certificates using **SSL Certificate** option.

    Accepted values: Enable / Disable

    Default: Disable

:::note Note
**We can listen to non-HTTPS traffic and send it as HTTPS traffic to the back end server using the settings options.**
:::

##### **SSL Certificate**
This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page

    Accepted values: Select the uploaded SSL Certificate 

    Default: Blank

For more information about the SSL Certificate, Please refer to this link: [**SSL Certificate**](https://www.digicert.com/what-is-an-ssl-certificate)


##### **SSL Ciphers Suites** 
In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc.

    Accepted values: Modern / Intermediate / Old / Custom 

    Default: Blank

For more information about Security/Server-Side TLS, please refer to this site: [**SSL Cipher Suites**](https://wiki.mozilla.org/Security/Server_Side_TLS)

##### **SSL Session Caching**
This option allows users to specify the number of SSL session cache for HTTPS requests on the listener.

    Accepted values: Integer 

    Max: 1000

    Min: 1

    Default: 10

##### **SSL Session Timeout**
This option allows users to specify the SSL session timeout in minutes for each SSL handshake timeout listener. If any request will not be able to complete the handshake in the given time, it will be dropped.

    Accepted values: Integer 

    Max: 3600

    Min: 1

    Default: 5
