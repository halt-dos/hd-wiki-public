---
sidebar_position: 1
---

# Endpoints

The hosts your traffic arrives at, and the collections attached to them.

---

### Overview

An **endpoint** is a host name, such as `api.example.com`, at which your traffic arrives. Attach collections to an endpoint so that APID knows which application the traffic belongs to. The Endpoints page lists every endpoint with the number of collections, APIs and URIs attached to it.

Click an endpoint name to open its details: [Overview](./overview.md), [Inventory](./inventory.md), [Vulnerabilities](./vulnerabilities.md), [Change Tracking](./change_tracking.md) and [Settings](./settings.md) (General, Collections and [DAST Scan](./dast_scan.md)).

![Endpoints](/img/apid/endpoints.png)

### How to Use:

1. Go to **Stack** > **APID** > **Endpoints**.
2. Click **Add endpoint** button.
3. Enter the domain.
4. Click **Add endpoint**.
5. Open the new endpoint and attach collections to it from [Settings](./settings.md).

![Add endpoint](/img/apid/add_endpoint.png)

To delete an endpoint, click the delete icon at the end of its row.

### Description:

##### **Domain**

The host that traffic arrives at, for example `api.example.com`.

```
    Accepted values: Domain name

    Default: Blank
```
