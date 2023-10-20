---
sidebar_position: 2
---



# Lets Encrypt Certificates


Certificates used for providing security for online communications.

---

## Overview

An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail.  
Haltdos platform supports SSL certificate management that allows customers to upload their existing SSL certificates or create new certificates using Let's Encrypt. The platform periodically checks the validity of the certificate and notifies users when the renewal is 2 weeks away from due date. If the certificate was created by Let's Encrypt, Haltdos platform automatically renews the certificate without requiring human intervention.  

![lets encrypt](/img/platform/v6/docs/lets_encrypt1.png)

### How to Use:  

1. Go to **Stack** > **Settings** > **SSL Certificates**
2. Configure your settings. 
3. Click **Save**. 

![lets encrypt](/img/platform/v6/docs/lets_encrypt.png)

Users can either upload a certificate or generate a new certificate with Let's Encrypt for their FQDN. For successfully generating Let's Encrypt certificate, you will have validate ownership of those domains. The solution supports 2-types of validations:

- **HTTP Validation for single domain certificate**
- **DNS Validation for wildcard certificate**

#### Generate Certificate
In order to generate a certificate, it's a three-step based process i.e.  
1. Order Certificate: Select the listener/zone for which you need to order the certificate.  
2. Verify Challenge: Verify the challenge for generating the certificate.  
3. Issue/Renew Certificate: Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly.  


:::note Note
Let's Encrypt certificate are valid for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above. This is applicable only for DNS validations. For certificates issued via HTTP validation, Haltdos automatically renews the certificates.
:::

**Step 1: Order Certificate**
1. Select the domain that we are aiming to issue for it.  
2. Click on Generate.  

**Step 2: Verify Certificate**
1. Select appropriate challenge option i.e. HTTP Challenge or DNS Challenge.
2. Click on Verify Challenge.
3. We have to wait at least 5 minutes duration in order to re-verify the certificate to change the status to update status.  
4. After 5 minutes, click on Verify Challenge.

**Step 3: Issue/Renew Certificate**
1. Click on Issue/Renew Certificate.

:::note Note
Certificate verification can fail if verification is not completed within stipulated time. For any issues, please contact support.
:::

| SETTINGS        | ACCEPTED VALUES | DEFAULT |
|-----------------|-----------------|---------|
| Certificate Name| String          | True    |
| Public Key      | String          | Blank   |
| Private Key     | String          | Blank   |

#### Description
**Certificate Name**: Specify a user-friendly name for the certificate. The name field takes alphanumeric input.  

**Public Key**: Enter the public key of the certificate. The public key is a digitally signed document that serves to validate the sender's authorization and name.  

**Private Key**: Enter the private key details. The private key is a separate file that's used in the encryption/decryption of data sent between your server and the connecting clients.  

:::note Note
It is recommended to add certificate chaining when uploading custom SSL certificates. To add certificate chaining, append the public key and the chain when uploading Public Key 
:::