---
title: "Platform Members | Haltdos Enterprise"
description: "Manage platform users, roles, permissions, and access control for secure administration across Haltdos Enterprise deployments."
---

# Members

---

## Overview

Members defines which users have access to a Stack and what level of access they have. Haltdos uses **Role-Based Access Control (RBAC)** — every user on a Stack is assigned a role that controls what they can view and modify.

This is separate from the System-level Administrator accounts. Members are Stack-scoped users. An Administrator created under **System > Management > Administrators** can access the entire appliance; a Stack Member can only access the Stacks they are invited to.

![Members](/img/platform/v8/docs/member1.png)

![Members](/img/platform/v8/docs/member2.png)


---

## How to Use

1. Go to **Stack > Members**
2. Click **Invite Members**
3. Fill in the user's details and assign their role
4. Click **Save Changes**

The invited user will receive login credentials and can access the Stack based on their assigned permissions.

---

## Field Reference

### Name

The display name for this member.

```
Accepted values : String (alphanumeric, spaces allowed)
Default         : Blank (required field)
```

**Example:** `Pratyush Tester`, `Prashant Admin`, `Read-Only Auditor`

---

### Login Mode

Controls how this user authenticates when logging in. Choose based on your organization's authentication infrastructure.

```
Accepted values : SYSTEM / LDAP / RADIUS / TACACS
Default         : SYSTEM
```

| Mode | How it works | When to use |
|---|---|---|
| **SYSTEM** | Username + password stored locally on the Haltdos appliance | Default for standalone deployments; no external auth server needed |
| **LDAP** | User authenticated against an LDAP/Active Directory server | When your org uses AD/LDAP for centralized identity management |
| **RADIUS** | User authenticated against a RADIUS server | Network-centric orgs; supports 2FA via RADIUS |
| **TACACS** | User authenticated via TACACS+ protocol | Common in network device management environments |

:::info
For LDAP, RADIUS, and TACACS modes to work, the respective server must first be configured under **System > Management > LDAP / RADIUS / TACACS**. Without that configuration, login will fail for those modes.
:::

---

### Username

The login identifier for this user. Must be unique within the appliance.

```
Accepted values : String (alphanumeric, underscores, hyphens; no spaces)
Default         : Blank (required field)
```

**Example:** `pratyush.srivastava`, `tester_01`, `test.user`

---

### Email

The user's email address. Used for:
- Alarm notifications (if Enable Notification is ON for this member)
- Password reset communications

```
Accepted values : Valid email address (format: user@domain.com)
Default         : Blank (required field)
```

---

### Enable Login

Controls whether this member can currently log in to the platform. Disabling this does not delete the member — it simply prevents authentication.

```
Accepted values : Enable / Disable
Default         : Disable
```

:::tip
Use this to temporarily suspend access without deleting the user account. For example, when an employee is on leave or during an access review.
:::

---

### Stack Level Permission

When enabled, grants this member the same permission level across all resources within the Stack (all listeners, zones, apps).

```
Accepted values : Enable / Disable
Default         : Disable
```

When **disabled**, you can configure per-resource access using the **Custom Permission** section below, giving different access levels to different listeners or apps within the same Stack.

---

## Custom Permission

Custom permissions let you grant a user access to specific resources within the Stack rather than everything.

### Resource

The specific resource (Listener, Zone, or App) this permission applies to.

```
Accepted values : Any resource configured in the current Stack
Default         : ALL
```

### Access Level

The level of access for the selected resource.

```
Accepted values : Admin / Read & Write / Read Only
Default         : Admin
```

| Access Level | What the user can do |
|---|---|
| **Admin** | Full control: add, edit, delete configurations; invite/remove members |
| **Read & Write** | Can view and modify configurations, but cannot manage members |
| **Read Only** | Can only view configurations and analytics; cannot make any changes |

**Testing tip:** Always verify a new member's access with the lowest privilege needed first, then escalate if required.

### Enable Notification

Whether this member receives alarm notifications for this resource.

```
Accepted values : Enable / Disable
Default         : Disable
```

:::info
Enabling notifications here is necessary but not sufficient. SMTP must also be configured under **System > Integrations > SMTP**. Without SMTP, no emails are sent regardless of this setting.
:::

---

## Permission Roles Explained

### Owner
- Full control over the Stack: add/edit/delete all configuration, manage all members
- Can invite and remove other members including Admins
- **Warning:** If the last Owner removes themselves from the Stack, the Stack will have no Owner. Recovery requires contacting Haltdos Support.

### Member
- Can add, edit, and delete configurations on the Stack, Apps, and Listeners they have access to
- Can remove their own membership
- Cannot manage other members' permissions

### Observer
- View-only access to the Stack, Apps, and Listeners
- Cannot make any configuration changes
- Can remove their own membership

---

## Multi-Stack Access

A single user account can be granted access to multiple Stacks. In a clustered setup, if a user with the same **username and email** is added to a second Stack (even with different permission levels), they automatically gain access to that Stack using their existing credentials.

When a new user is added to a Stack, their initial password is determined by the **Default Password** field in **System > Security > Password Policy**. They should change this on first login.

---