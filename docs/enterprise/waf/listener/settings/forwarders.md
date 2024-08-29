# Forwarders

Forwarding Decrypted Application Traffic to Security Endpoint Devices

---

## Overview
User can set up multiple services of forwarding decrypted traffic of an application onboarded on Haltdos WAF to their security endpoint devices for further traffic inspection.

![Antivirus](/img/waf/v8/docs/forwarder.png)

### How To Use:
1. Go to **WAF** > **Listener** > **Settings** > **Forwarders**
2. Configure Forwarder Settings
3. Click on **Save Changes**

### Description

#### **Name**
This field specifies the name of the forwarder going to be configured.

#### **Forwarder Mode**
This field specifies the mode for sending decrypted traffic to the endpoint devices. There are three modes of forwarding decrypted traffic: Layer 2, Layer 3, ICAP.

    Accepted values: Layer 2 / Layer 3 / ICAP

    Default: LAYER 3

- **Layer 2** : Forwarding Decrypted Traffic directly to an Interface, if the security endpoint devices are configured in Transparent Mode.

- **Layer 3** : Forwarding Decrypted Traffic to Server IP and Port of the endpoint security.

- **ICAP** : Forwarding Decrypted Traffic to an ICAP server for further inspection.

#### **Server IP**
If the Forwarder Mode is set as **Layer 3** or **ICAP**, IP address must be configured to forward the traffic either directly or to the ICAP server.

    Accepted values: IP

    Default: Blank  

#### **Server Port**
If the Forwarder Mode is set as **Layer 3** or **ICAP**, we need to specify the server port to forward traffic.

    Accepted values: Port

    Default: 1334 (Port 1344 is the default ICAP port).

#### **Service Name**
If the Forwarder Mode is set as **ICAP**, we need to specify the name of the ICAP service to scan against antivirus.

    Accepted values: icap://< ip_address >/< name >/

    Default: Blank

#### **ICAP Method**
If the Forwarder Mode is set as **ICAP**, We need to specify the ICAP request method for traffic inspection. There are three modes for ICAP Method: **REQMOD**, **RESPMOD**, **OPTIONS**.

    Accepted values: Specify the request method for antivirus scanning.

    Default: REQMOD 

- **Request Modification Mode (REQMOD)**: Checks the contents of HTTP requests and uploaded files & content

- **Response Modification Mode (RESPMOD)**: Checks downloaded files and content

- **Options** : Reports the number of simultaneous connections that can be served

#### **ICAP Request Timeout**
If the Forwarder Mode is set as **ICAP**, we need to specify the timeout in milliseconds for request timeout. If an ICAP request has not been completed before the timeout, the connection to the client gets closed.

    Accepted values: Integer

    Default: 800  

    Metrics: milliSeconds