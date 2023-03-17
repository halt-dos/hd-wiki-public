---
sidebar_position: 1
---

# SNMP

---

## Overview

Simple Network Management Protocol (SNMP) is an application–layer protocol defined by the Internet Architecture Board (IAB) in RFC1157 for exchanging management information between network devices. It is a part of Transmission Control Protocol⁄Internet Protocol (TCP⁄IP) protocol suite.

#### How SNMP works

SNMP on haltdos devices communicate with a network management system to relay status information and configuration changes. The NMS provides a single interface from which administrators can issue batch commands and receive automatic alerts.

SNMP relies on the concept of an MIB to organize how information about device metrics gets exchanged. The MIB is a formal description of a network device's components and status information.

SNMP uses a blend of pull and push communications between network devices and the network management system. Haltdos devices that communicate through SNMP respond to it by delivering protocol data units, commonly known as SNMP GET requests. All of these communications are recorded, and network monitoring software uses them to obtain SNMP data. Network admins can track the data value they specify using these queries.

![snmp](/img/platform/v6/docs/snmp1.png)

### How to Use:

1. Go to **Stack > Instances > (Select Instance) > Network > SNMP**
2. Configure your settings.
3. Click on save changes.

| SETTINGS              | ACCEPTED VALUES | DEFAULT              |
|-----------------------|-----------------|----------------------|
| SNMP Client Name      | String          | Blank                |
| SNMP Version          | Drop Down       | SNMPv1               |
| SNMP Port             | Integer         | 161                  |
| SNMP  Community       | String          | default              |
| Enable SNMP Trap      | Boolean         | False                |
| Manager Address       | Integer         | Blank                |
| Manager Port          | Integer         | 162                  |
| Trap Type             | Drop Down       | Link Detection       |
| SNMP Username         | String          | Blank                |
| SNMP Security Level   | Drop Down       | Auth but no Privacy  |
| SNMP Auth Protocol    | Drop Down       | MD5                  |
| SNMP Auth Password    | String          | Blank                |
| SNMP Privacy Protocol | Drop Down       | DES                  |
| SNMP Privacy Password | String          | Blank                |

#### Description

**SNMP Client Name** 

User can specify the SNMP client name.

**SNMP Version**

User can select the SNMP version.

**SNMP Port**

User can specify the SNMP port number used for communication.

**SNMP Commnunity**
Users can specify the SNMP community details. SNMP community details only need in case of SNMP v1 and v2.

**Enable SNMP Trap**

Users can enable or disable to send SNMP Trap data. SNMP Trap is an asynchronous alert sent by the agent to the SNMP manager to indicate a significant event, such as an error or failure, has occurred.

**Manager Address**

Users can specify the SNMP manager address. When any event occurs, SNMP Trap alert will be sent to this manager IP address.

**Manager Port**

Users can specify the SNMP manager port number. By default the port used for communution to manager is 162.

**Trap Type**

User can specify the SNMP trap type.

**SNMP Username**

User can specify the SNMP Username. 

**SNMP Security Level**

Users can specify the SNMP security level. Users can select any from following three options.

- No Auth and No Privacy
- Auth but No Privacy
- Auth and Privacy

**SNMP Auth Protocol**

Users can specify the authentication protocol used to communicate between SNMP manager and agent.

**SNMP Auth Password**

Users can specify the auth password used to communicate between SNMP manager and agent.

**SNMP Privacy Protocol**

Users can specify the privacy protocol used to communicate between SNMP manager and agent.

**SNMP Privacy Password**

Users can specify the password used to communicate between SNMP manager and agent.
