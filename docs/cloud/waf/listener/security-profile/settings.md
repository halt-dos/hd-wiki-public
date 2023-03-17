---
sidebar_position: 2
---

# Settings

Set the information (such as Application Server, OS etc.) about the application differently for each Security Profile

---

## Overview

Settings in Security Profile are used to specify all the settings for your **WEBSITE/WEB SERVICE/WEB SOCKET** applications. It enables the protection and invokes signature rules specific to the settings configured for the application.


### How to Use:

1. Go to **WAF** > **Zones** > **Listener** > **Security Profiles** > **Settings**.

2. Configure your settings.

3. Click **Save**.

| Parameters                    | Accepted Values | Default    |
|-------------------------------|-----------------|------------|
| Operational Mode              | Dropdown        | Mitigation |
| Paranoia Level                | Dropdown        | Low        |
| Application Type              | Dropdown        | Website    |
| Application Framework         | Dropdown        | Drupal     |
| Application Language          | Dropdown        | Java       |
| Application Server            | Dropdown        | IIS        |
| Application Database          | Dropdown        | MYSQL      |
| Application OS                | Dropdown        | Windows    |
| User Groups                   | String          | Blank      |
| Temporary Blacklist Duration  | Integer         | Blank      |

#### Description

**Operational Mode**

This field specifies the operational mode for a specific security profile. Different operational modes are:

- **MITIGATION**: In this mode, all the mitigations & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped.

- **BYPASSED**: In this mode, all the requests get bypassed without any filtration of mitigations & rule sets.

- **RECORD**: In this mode, all the mitigations & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event.

| SETTINGS         | ACCEPTED VALUES                           | DEFAULT    |
|------------------|-------------------------------------------|------------|
| Operational Mode | Choose from the dropdown (ex. MITIGATION) | MITIGATION |

**Paranoia Level**

Paranoia level configures the severity in which HTTP requests should be allowed. It lets you disable certain rules to minimize several false positives that they may encounter.

Note: Higher paranoia can also result in false positives.

Haltdos WAF comes with four Security Paranoia Levels:

- **LOW**: Adequate security level to defend almost all web applications from generic exploits. Recommended security level to ensure the least disruption from false positives.

- **MEDIUM**: A slightly higher level of security to block nearly all web application exploits. It might result in some false positives.

- **HIGH**: A more paranoid approach to web security. It delivers a higher number of false positives.

- **UNDER ATTACK**: The most paranoid defensive security method. It blocks sufficient legitimate requests to your site.

| SETTINGS       | ACCEPTED VALUES                    | DEFAULT |
|----------------|------------------------------------|---------|
| Paranoia Level | Choose from the dropdown (ex. LOW) | LOW     |

**Application Type**

Specify the type of application ( i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems.

**Application Framework**

An application framework or web framework is a software framework. It supports web applications (such as web resources, web services, and web APIs) development. It delivers a standard method to build and deploy web applications on the world wide web. Specify the application framework type used by the configured website.

**Application Language**

It is a formal language used to create a software program. It includes a set of instructions, commands, and other syntaxes. Primarily used in programming to implement algorithms. Specify the programming language type used by the configured website.

**Application Server**

The Backend Server is the server on which the configured website is running. It receives requests from clients and includes the logic to send data back to the client. It comprises a database that stores all of the data for the application. Specify the backend server type used by the configured website.

**Application Database**

An Application database is a computer program. Its prime aim is to enter and retrieve information from the computerized database. Specify the application database type used by the configured website.

**Application OS**

An operating system (OS) is a low-level software system. It manages the basic functions of a computer, including computer hardware and software resources. It delivers basic services for computer programs. Specify the operating system type used by the configured website.

**User Groups**

Create a user group for operating the API gateway. Detailed information can be found using this link **User Group**.

**Temporary Blacklist Duration**

The time duration for which a malicious IP is suspended by WAF is specified here. The WAF Rules and Web Policy use this value. 
