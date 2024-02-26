---
sidebar_position: 3
---
# SSL Settings

It provides functionality to support SSL offloading based on configurations

---

## Overview

It provides functionality to support SSL offloading based on configurations.

### How to Use:

1. Go to **WAF > Zones > Listeners > SSL Settings**

2. Configure your settings. 

3. Click **Save Changes**.

**Encrypt Traffic to Upstream**

This specifies WAF should re-encrypt traffic before sending it to the backend web application. 

Note: We can listen to non-HTTPS traffic and send as HTTPS traffic to the backend server.

**Enable SSL Offloading**

This specifies if the WAF should enable HTTPS traffic for the configured website.

**SSL Certificate**

This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the dropdown or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page.

**SSL Cipher Suites**

In order to secure or make ssl compatible with specific web browsers. Users can select from the dropdown i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc.

**SSL Ciphers**

It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities — usually the client (a user's browser) and the web server they're connecting to (your website). Users can select respective ciphers from the dropdown.


**SSL Protocols**

This field specifies the protocol to be used for selected custom ssl cipher.

**SSL Session Caching**

This field allows users to specify the number of SSL session cache for HTTPS requests on the listener. 

**SSL Session Timeout**

This field allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener.
