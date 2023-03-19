---
sidebar_position: 4
---

# Antivirus

Get your files scanned before you upload them using antivirus

---

## Overview 

Our WAF provides the facility of in-built antivirus. Also, the user can set up their own antivirus and use it with hdPlatform. If someone tries to upload a malicious file, then AV scan will stop it from getting uploaded and will generate an event as AV Scan drops.

**Antivirus Mode**

- **DISABLED**: Files will not get scanned if the mode is disabled.
- **INTERNAL**: In-built antivirus will be used to scan files.
- **EXTERNAL**: If an ICAP (Internet Content Adaptation Protocol) server is already configured for antivirus, then it can be used by providing the details on this screen.  

### How to Use:

1. Go to **WAF** > **Zones** > **Listener** > **Security Profiles** > **Antivirus**.

2. Configure your settings.

3. Click **Save**.

Parameter | Description |Accepted Values  | Default Values | 
| ----------- | ----------- | ----------- | ----------|
| Antivirus Modes | Specify mode for antivirus scan against all uploaded files (if any). | DISABLED/INTERNAL/EXTERNAL | DISABLED |
| ICAP Server IP | Specify the IP address for the ICAP server to send a request for an antivirus scan. | IP | Blank |
| ICAP Server Port | Specify ICAP server port to connect.| Port | 1334 |
| ICAP Service Name | Specify ICAP service name to scan against anti-virus. | icap://< ip_address >/< name >/ | Blank |
| ICAP Method| String | Specify the request method for antivirus scanning.| REQMOD | REQMOD |
| ICAP Request Timeout | Specify the timeout in millisecond for request timeout. | Integer (Seconds) | 800 |
| ICAP Header Name | Specify the ICAP header key to search value against it.| HEADER NAME | Blank |
| ICAP Header Value | Specify ICAP header value regex to scan and drop if the key exists. | HEADER NAME | Blank |

#### Description
 
**Antivirus Mode:**  This field specifies the mode for antivirus scan against all uploaded files (if any). There are three modes for Antivirus: Disabled, Internal, External.  

**ICAP Server IP:**  If we use External Antivirus mode then an ICAP server is configured for antivirus, then it can be used by providing the IP address for the ICAP server to send requests for antivirus scans.  

**ICAP Server Port:** The client initiates the session by sending request messages over a TCP/IP connection to a passively waiting ICAP server on a designated port. For External Antivirus mode, We need to specify the ICAP server port to connect (Port 1344 is the default ICAP port).  

**ICAP Service Name:** For External Antivirus mode, We need to specify the name of the ICAP service to scan against antivirus.  

**ICAP Method:** For External Antivirus mode, We need to specify the ICAP request method for antivirus scanning. In REQMOD mode, the ICAP request MUST contain an encapsulated HTTP request.  

**ICAP Request Timeout:** For External Antivirus mode, We need to specify the timeout in milliseconds for request timeout. If an ICAP request has not completed before the timeout, the connection to the client gets closed.  

**ICAP Header Name:** For External Antivirus mode, We need to specify the ICAP header key to search value against it. The request line specifies the ICAP resource that is being requested. Header fields follow with information, such as cache control and preview size. The header fields end with a blank line followed by the message body.  

**ICAP Header Value:** For External Antivirus mode, We need to specify the ICAP header value regex to scan and drop if the key exists.  