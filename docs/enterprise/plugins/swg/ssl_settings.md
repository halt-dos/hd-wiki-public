# SSL Settings

--- 

## Overview

SSL Settings provides comprehensive control over the handling of SSL/TLS encrypted traffic, ensuring secure and compliant communication. Administrators can configure the TLS key size to define the encryption strength and set minimum and maximum TLS versions for both client and server connections, allowing flexibility in maintaining compatibility with older systems while enforcing modern security standards. These options ensure that the SWG handles encrypted connections securely and in line with organizational policies.

![operational](/img/plugins/swg/swg_ssl.png)  

#### Description 

##### **Enable Upstream Certificate Verification:** 
Ensures that the upstream server’s SSL/TLS certificates are verified for authenticity.

    Accepted values: Enable / Disable

    Default: Disabled

##### TLS Key Size: 
Configures the key size for SSL/TLS certificates and Certificate Authorities (CAs), providing control over encryption strength.

    Accepted values: Integer

    Default: 2048

##### **Minimum TLS Version for Client Connections:**
Allows configuration of setting minimum TLS version for client connections.

    Accepted values: UNBOUNDED / SSL3 / TLS1 / TLS1_1 / TLS1_2 / TLS1_3

    Default: UNBOUNDED

##### **Maximum TLS Version for Client Connections:**
Allows configuration of setting maximum TLS version for client connections.

    Accepted values: UNBOUNDED / SSL3 / TLS1 / TLS1_1 / TLS1_2 / TLS1_3

    Default: TLS1_2

##### **Minimum TLS Version for Server Connections:**
Allows configuration of setting minimum TLS version for server connections.

    Accepted values: UNBOUNDED / SSL3 / TLS1 / TLS1_1 / TLS1_2 / TLS1_3

    Default: UNBOUNDED

##### **Maximum TLS Version for Server Connections:**
Allows configuration of setting maximum TLS version for server connections.

    Accepted values: UNBOUNDED / SSL3 / TLS1 / TLS1_1 / TLS1_2 / TLS1_3

    Default: TLS1_2