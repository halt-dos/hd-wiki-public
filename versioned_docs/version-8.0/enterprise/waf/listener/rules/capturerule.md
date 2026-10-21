---
sidebar_position: 8
---

# Capture Rules
The Capture Rule in Haltdos WAF handles SSL key logging during HTTPS communication.
  

---

### Overview 
The WAF can record the session keys (also known as pre-master secrets) used during the SSL/TLS handshake for HTTPS traffic.

SSL key log files can be extracted using generated keys, which are derived based on multiple parameters such as IP address, geo-location, and other configurable conditions. The log generation process is tailored to the specific criteria defined by the user. These keys, exchanged between the client and server during the SSL/TLS handshake, are used to encrypt and decrypt data in a secure session. Logging them enables decryption of HTTPS traffic later for purposes such as analysis, debugging, or security inspection.

![capture rules](/img/waf/v8/docs/captureruleconf.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Rules** > **Capture Rules**.
2. Click on **Add Rule** and set relevant parameters described in the table below.
3. Click on **Save Changes**.

### Description

- The WAF can record the session keys (also known as pre-master secrets) used during the SSL/TLS handshake for HTTPS traffic.

- The WAF should only log SSL keys selectively, based on specific rules or conditions.

- If the WAF is set to log SSL keys for every connection, it can be very risky because it allows all encrypted data to be decrypted, and if those logs are ever leaked or misused, sensitive information could be exposed 

:::note Note
User can refer to the [KB-1070](/kb/waf/kb-1070) for complete configuration,
:::

##### **Rule Name**

Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

```
    Accepted values: String

    Default: Blank  
```


##### **Rule Message**

Specify a rule message containing a detailed description to identify the rule which is to be created.

```
    Accepted values: String

    Default: Blank  
```


##### **Rule Priority**

Specify the priority for the rule for execution when matched with the request.

```
    Accepted values: Integer

    Default: 0  
```

Refer to [Rule Condition](/enterprise/waf/listener/rules/ruleCond) to configure the condition.
