---
sidebar_position: 1
---

# SSL Certificates

---

## Overview

An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail.

Haltdos platform supports SSL certificate management that allows customers to upload their existing SSL certificates or create new certificates using Let's Encrypt. The platform periodically checks the validity of the certificate and notifies users when the renewal is 2 weeks away from due date. If the certificate was created by Let's Encrypt, Haltdos platform automatically renews the certificate without requiring human intervention. 


### How to Use:

1. Go to **Stack > Resources > SSL Certificates**
2. Configure your settings. 
3. Click Save. 


![ssl_certificates](/img/platform/v7/docs/ssl_certi_newui.png)

Users can either upload a certificate or generate a new certificate with Let's Encrypt for their FQDN. For successfully generating Let's Encrypt certificate, you will have validate ownership of those domains. The solution supports 2-types of validations:

![ssl_certificate](/img/platform/v7/docs/export_certificate.png)

- HTTP Validation for single domain certificate
- DNS Validation for wildcard certificate

**Generate Certificate**

In order to generate a certificate, it's a three-step based process i.e.

1. Order Certificate: Select the listener/zone for which you need to order the certificate.
2. Verify Challenge: Verify the challenge for generating the certificate.
3. Issue/Renew Certificate: Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly.

:::note Note
Let's Encrypt certificate are valid for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above. This is applicable only for DNS validations. For certificates issued via HTTP validation, Haltdos automatically renews the certificates.
:::

**Step 1: Order Certificate**

1. Select the domain that we are aiming to issue for it.
2. Click on **Generate**.

**Step 2: Verify Certificate**
1. Select appropriate challenge option i.e. **HTTP Challenge or DNS Challenge**.
2. Click on **Verify Challenge**.
3. We have to wait at least **5 minutes** duration in order to re-verify the certificate to change the status to update status.  
4. After 5 minutes, click on **Verify Challenge**.

**Step 3: Issue/Renew Certificate**
1. Click on Issue/Renew Certificate.

:::note Note
Certificate verification can fail if verification is not completed within stipulated time.  For any issues, please contact support. 
:::

**Upload  Certificate**

To upload custom certificates, follow the steps below:

| SETTINGS         | ACCEPTED VALUE | DEFAULT |
|------------------|----------------|---------|
| Scope            | Drop-down      | Blank   |
| Certificate Name | String         | Blank   |
| Public Key       | String         | Blank   |
| Private Key      | String         | Blank   |

#### Description:

**Scope**

Users can defind the scope of the certificate.

**Certificate Name**

User can specify the userfriendly name for the certificate.

**Public Key**

User can specify the public key of certificate.

**Private Key**

User can specify the private key of certificate.

**Export Certificate**

User can download the SSL certificate.

**PFX Certificate**

A PFX (Personal Information Exchange) certificate is a digital certificate designed to authenticate and secure network communications, particularly for web servers, email systems, and other online services.  
To upload PFX Certificate the user need to add the following:
- Certificate PFX File
- Certificate Password

**PEM Certificate**

A PEM (Privacy-Enhanced Mail) certificate is a digital certificate frequently used to secure network communications, especially for web servers and email systems.  
To upload PEM Certificate the user need to add the following:
- Public Certificate File
- Intermediate Certificate File
- CA Bundle File
- Private Key File


After submission,  the certificate will be issued and added in the Certificates section.