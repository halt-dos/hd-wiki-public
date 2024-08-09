---
sidebar_position: 3
---

# Syslog

Integration with Syslog Server for monitoring Haltdos appliances

---

**Syslog** stands for **System Logging Protocol** and is a standard protocol used to send system log or event messages to a specific server, called a **Syslog server**. It is primarily used to collect various device logs from several different machines in a central location for monitoring and review.

**Haltdos** supports integration with 3rd party Syslog service for sending real-time alerts. All logs in **Haltdos** are written in CEF format. The body of the log entry itself is JSON format. This allows simple integration with monitoring tools such as SIEM solutions without the need for writing custom parsers.

:::info
It is recommended to configure Syslog (if available) for centralized monitoring of all Haltdos appliances
:::

![syslog](/img/platform/v8/docs/syslog_new_ui.png)

### How to Use:

1. Go to **Stack > Settings > Integration > Syslog**.
2. Configure your settings
3. Click **Save Changes**

### Description:

**Syslog Export Enabled**

This option allows users to enable or disable exporting Syslog to an external server.

    Accepted values: Enable / Disable

    Default: Blank 

**Protocol**

This option allows the user to select the protocol type on which the Syslog server is running. Users can select either TCP or UDP.

    Accepted values: UDP

    Default: UDP 

**Host Name**

This option helps the user to mention the IP address or the hostname of the external backup server on which the Syslog service is exporting the log details.

    Accepted values: String

    Default: Blank 

**Syslog Server Port**

This option allows the users to mention the port number to communicate with Syslog server.

    Accepted values: Integer

    Default: Blank 

