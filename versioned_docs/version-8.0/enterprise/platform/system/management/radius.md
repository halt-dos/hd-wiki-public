---
sidebar_position: 2
---

# RADIUS

---

RADIUS (Remote Authentication Dial-In User Service) is a networking protocol that provides centralized authentication, authorization, and accounting (AAA) for users who connect to and use a network service.  

![users](/img/platform/v8/docs/sys_radius.png)

**How to Use:**

1. Go to **Management** then **RADIUS**.
2. Configure your settings
3. Click **Save Changes**

### Description

#### Enabled

Enable login through Radius Server

    Accepted Value : Enable / Disable

    Default : Disable

#### Endpoint

Specify the endpoint of Radius Server

    Accepted Value : String

    Default : Blank

#### Port

Specify the port of Radius Server

    Accepted Value : Port

    Default : Blank

#### Secret Key

Specify the secret key of Radius Server

    Accepted Value : String

    Default : Blank

#### Authorization Protocol

Select underlying protocol for Authenticating User

    Accepted Value : CHAP / PAP

    Default : Blank

#### Timeout

Specify the timeout of Radius Server

    Accepted Value : Integer

    Default : 30

