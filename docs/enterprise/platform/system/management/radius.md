---
sidebar_position: 2
---

# RADIUS

---

RADIUS (Remote Authentication Dial-In User Service) is a networking protocol that provides centralised authentication, authorization, and accounting (AAA) for users connecting to a network service. Haltdos supports RADIUS integration so that administrators can log in to the Management Console using credentials validated by your organisation's RADIUS server, instead of maintaining separate local passwords.

When RADIUS is enabled, login requests from users with [Login Mode](/enterprise/platform/stacks/members#login-mode) set to **RADIUS** are forwarded to the configured RADIUS server for authentication. If the server validates the credentials, access is granted based on the user's role in Haltdos.

:::note
For RADIUS authentication to work, the user must already exist under [**System > Management > Administrators**](./administrators) with **Login Mode** set to **RADIUS**. RADIUS only handles authentication — what the user can do inside Haltdos is still controlled by the role assigned to them in Administrators.
:::

![RADIUS](/img/platform/v8/docs/sys_radius.png)

---

#### How to Use:

1. Go to **System > Management > RADIUS**
2. Configure the settings as described below
3. Click **Save Changes**

---

### Description

**Enabled**

Enables or disables RADIUS authentication for the Haltdos Management Console. When disabled, any user with Login Mode set to RADIUS will not be able to log in.

```
Accepted values : Enable / Disable
Default         : Disable
```

---

**Endpoint**

The IP address or hostname of the RADIUS server that Haltdos will contact for authentication requests.

```
Accepted values : Valid IPv4 address or hostname
Default         : Blank
```

**Examples:**
- `172.16.0.254`

---

**Port**

The UDP port on which the RADIUS server is listening for authentication requests.

```
Accepted values : Integer (valid port range: 1–65535)
Default         : 1812
```

**Example:** `1812` — this is the standard RADIUS authentication port and works for most deployments. Change only if your RADIUS server is configured on a non-standard port.

---

**Secret Key**

A shared secret string configured on both the Haltdos appliance and the RADIUS server. This key is used to encrypt the communication between Haltdos (the RADIUS client) and the RADIUS server. Both sides must have the exact same key configured, otherwise authentication will fail.

```
Accepted values : String — alphanumeric and special characters allowed
Default         : Blank
```

---

**Authorization Protocol**

The underlying protocol used to carry the user's credentials to the RADIUS server during authentication.

```
Accepted values : CHAP / PAP
Default         : CHAP
```

| Protocol | How it works | When to use |
|---|---|---|
| **CHAP** (Challenge Handshake Authentication Protocol) | The password is never sent directly — instead, a hashed challenge-response is used. More secure | Recommended for most deployments |
| **PAP** (Password Authentication Protocol) | The password is sent as plaintext (though the RADIUS packet itself is encrypted). Simpler but less secure | Use only if your RADIUS server does not support CHAP |

---

**Timeout**

How long (in seconds) Haltdos waits for a response from the RADIUS server before considering the authentication attempt as failed.

```
Accepted values : Integer (in seconds)
Default         : 120
```

**Example:** `120` — if the RADIUS server does not respond within 120 seconds, the login attempt times out and the user sees an authentication failure. Reduce this value (e.g., `30`) if you want faster failure detection when the RADIUS server is unreachable.