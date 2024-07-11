---
sidebar_position: 3
---

# Certificate Authorities

---

A certificate authority (CA) is a trusted entity that issues Secure Sockets Layer (SSL) certificates. These digital certificates are data files used to cryptographically link an entity with a public key. Web browsers use them to authenticate content sent from web servers, ensuring trust in content delivered online.

![certificate_auth](/img/platform/v7/docs/certificate_auth.png)

### How to Use:

1. Go to **Stack > Resources  > Certificate Authorities**.
2. Select the **Add Certificate Authority.**
3. Configure your settings. 
4. Click **Save Changes.**

#### Description:

**CA Name**

Users can specify the name of the certificate name.

    Accepted values: String

    Default: Blank 

**Scope**

It specifies the particular desired resources on which user wants to create certificate. 

    Accepted values: Select Scope

    Default: Blank 

**Organization**

Users can specify the name of the organization 

    Accepted values: String

    Default: Blank 

**Common Name**

Users can specify the name of the Domain Name. 

    Accepted values: String

    Default: Blank 

**Note** - Under **Content** Public Key and Private Key will be generated. User have configure Certificate Authority details and Click **Generate Certificate**, public and private key (pem format) will be generated.