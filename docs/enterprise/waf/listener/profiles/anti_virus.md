---
sidebar_position: 3
---

# Antivirus
Inspect files on upload for malicious content

---

## Overview

Haltdos WAF provides the facility of real time scanning files on file uploads for any malicious content. These help in blocking of web-shell attacks or malwares. If anyone tries to upload a malicious file, the antivirus will scan the file, and if its detected to be malicious, WAF will stops it from getting uploaded by dropping the request and it will be shown in the [Incidents](../../incidents.md) Section as AV Scan drops.

![Antivirus](/img/waf/v8/docs/WAFprofileantivirus.png)

### Antivirus Mode 

**Disabled**: Files will not get scanned if the mode is disabled.

**Internal**: In-built antivirus will be used to scan files.

**External**: If an ICAP (Internet Content Adaptation Protocol) server is already configured for antivirus, then it can be used by providing the details on this screen.

### How To Use:
1. Go to **WAF** > **Listener** > **Profiles** > **Antivirus**
2. Configure your setting 
3. Click on **Save Changes**

### Description

##### **Antivirus Mode**
This field specifies the mode for antivirus scan against all uploaded files (if any). There are three modes for Antivirus: Disabled, Internal, External.

```
    Accepted values: DISABLED / INTERNAL / EXTERNAL

    Default: DISABLED  
```


##### **ICAP Server IP**
If we use External Antivirus mode then an ICAP server is configured for antivirus, then it can be used by providing the IP address for the ICAP server to send requests for antivirus scans.

```
    Accepted values: IP

    Default: Blank  
```


##### **ICAP Server Port**
The client initiates the session by sending request messages over a TCP/IP connection to a passively waiting ICAP server on a designated port. For External Antivirus mode, We need to specify the ICAP server port to connect (Port 1344 is the default ICAP port).

```
    Accepted values: Port

    Default: 1334  
```


##### **ICAP Service Name**
For External Antivirus mode, We need to specify the name of the ICAP service to scan against antivirus.

```
    Accepted values: icap://< ip_address >/< name >/

    Default: Blank
```


##### **ICAP Method**
For External Antivirus mode, We need to specify the ICAP request method for antivirus scanning. In REQMOD mode, the ICAP request MUST contain an encapsulated HTTP request.

```
    Accepted values: Specify the request method for antivirus scanning.

    Default: REQMOD 
```


##### **ICAP Request Timeout**
For External Antivirus mode, We need to specify the timeout in milliseconds for request timeout. If an ICAP request has not been completed before the timeout, the connection to the client gets closed.

```
    Accepted values: Integer

    Default: 800  
```


    Metrics: milliSeconds

##### **ICAP Header Name**
For External Antivirus mode, We need to specify the ICAP header key to search value against it. The request line specifies the ICAP resource that is being requested. Header fields follow with information, such as cache control and preview size. The header fields end with a blank line followed by the message body.

```
    Accepted values: String (HEADER NAME)

    Default: Blank  
```


##### **ICAP Header Value**
For External Antivirus mode, We need to specify the ICAP header value regex to scan and drop if the key exists.

```
    Accepted values: String (HEADER NAME)

    Default: Blank
```

