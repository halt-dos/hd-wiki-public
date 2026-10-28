---
sidebar_position: 3
---

# Inventory

APIs seen on an endpoint, and the collections attached to it.

---

### Overview

The Inventory page lists the APIs that APID knows about for the endpoint. It has two views.

### How to Use:

1. Go to **Stack** > **APID** > **Endpoints** and select an endpoint.
2. Open the **Inventory** tab.
3. Select **Live traffic** or **Collections**.

### Live Traffic

APIs that the sensors have seen on this endpoint. For every API the table shows the URI, its methods, the number of hits, whether it is authenticated, its findings and when it was last seen.

![Inventory](/img/apid/inventory.png)

Use the filters to narrow the list:

| Filter | Description |
| --- | --- |
| **Method** | Show only APIs using a particular HTTP method |
| **Severity** | Show only APIs with findings of a particular severity |
| **Findings** | Show all APIs, or only those with findings |
| **Sort** | Sort by hits or other columns |

Click **Refresh** to reload the list, **Generate report** to create a report, or **Export CSV** to download the table.

### Collections

APIs that come from the collections attached to the endpoint, for example from source code. If no collection is attached, the page says so.

![Inventory Collections](/img/apid/inventory_collections.png)
