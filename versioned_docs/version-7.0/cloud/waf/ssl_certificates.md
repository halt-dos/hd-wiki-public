---
sidebar_position: 4
---
# SSL Certificates

Certificates used for providing security for online communications.

---

## Overview

An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail.

### How to Use:

1. Go to **Stack > Certificates**

2. Configure your settings. 

3. Click **Save**. 

Users can either upload a certificate or generate a new certificate for their domain defined as Zones.

**Upload  Certificate**

| SETTINGS         | ACCEPTED VALUES | DEFAULT |
|------------------|-----------------|---------|
| Certificate Name | String          | True    |
| Public Key       | String          | Blank   |
| Private Key      | String          | Blank   |

#### Description

**Certificate Name**: Specify a user-friendly name for the certificate. The name field takes alphanumeric input.

**Public Key**: Enter the public key of the certificate. The public key is a digitally signed document that serves to validate the sender's authorization and name.

**Private Key**: Enter the private key details. The private key is a separate file that's used in the encryption/decryption of data sent between your server and the connecting clients.

**Generate Certificate**

In order to generate a certificate, it's a three-step based process i.e.

1) Order Certificate: Select the listener/zone for which you need to order the certificate.

2) Verify Challenge: Verify the challenge for generating the certificate.

3) Issue/Renew Certificate: Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly.

Note: Issued certificate is for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above.

**Step 1: Order Certificate**

1) Select the domain that we are aiming to issue for it.

2) Click on **Generate**.

**Step 2: Verify Certificate**

1) Select appropriate challenge option i.e. **HTTP Challenge** or **DNS Challenge**.

2) Click on **Verify Challenge**.

3) We have to wait at least **5 minutes** duration in order to re-verify the certificate to change the status to update status.  

4) After 5 minutes, click on **Verify Challenge**.

**Step 3: Issue/Renew Certificate**

1) Click on Issue/Renew Certificate.

After submission,  the certificate will be issued and added in the Certificates section.

Note: Certificate verification can be failed.  For any issues, please contact support. 