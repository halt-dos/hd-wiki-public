---
sidebar_position: 8
---

# Integration

Share what APID learns with a web application firewall.

---

### Overview

An integration sends information from APID to a WAF, so that the WAF protects your APIs based on what APID has discovered. The summary at the top shows the total number of integrations, how many are connected or failed, and how many endpoints and rules were shared with WAFs. The list shows every integration with its WAF, shares, sync interval, status and last sync.

![Integration](/img/apid/integration.png)

### How to Use:

1. Go to **Stack** > **APID** > **Integration**.
2. Click **Add integration** button.
3. Configure your settings.
4. Click **Save integration**.

![Add integration](/img/apid/add_integration.png)

### Description:

##### **Name**

Name shown in the list.

```
    Accepted values: String

    Default: Blank
```

##### **WAF**

Which firewall receives the information.

```
    Accepted values: HaltDOS WAF, External WAF

    Default: HaltDOS WAF
```

##### **WAF Listener**

The listener on this stack that is protected.

```
    Accepted values: Listener

    Default: Blank
```

##### **Share Endpoints**

Send discovered APIs so that the WAF only allows known ones.

```
    Accepted values: Enabled, Disabled

    Default: Enabled
```

##### **Virtual Patching**

Turn found vulnerabilities into protective rules.

```
    Accepted values: Enabled, Disabled

    Default: Disabled
```

##### **Share Incidents**

Pass APID incidents to the WAF.

```
    Accepted values: Enabled, Disabled

    Default: Enabled
```

##### **Sync**

How often the information is sent.

```
    Accepted values: Interval

    Default: Every hour
```

##### **Enabled**

Pause the integration without deleting it.

```
    Accepted values: Enabled, Disabled

    Default: Enabled
```
