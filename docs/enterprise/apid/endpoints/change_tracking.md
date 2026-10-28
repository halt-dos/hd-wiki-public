---
sidebar_position: 5
---

# Change Tracking

See how the APIs behind an endpoint change.

---

### Overview

Change Tracking shows what has changed in the APIs of the collections bound to the endpoint.

### How to Use:

1. Go to **Stack** > **APID** > **Endpoints** and select an endpoint.
2. Open the **Change Tracking** tab.
3. Select **Schema Drift** or **Zombie & Shadow**.

### Schema Drift

Changes to the schemas and versions of an API between two scans. The table shows the collection, the type of change, the method, the URI, the changes detected and when they were detected. Use the buttons at the top to show only **Schema changed**, **Version added** or **Version deprecated** events.

![Schema Drift](/img/apid/schema_drift.png)

### Zombie & Shadow APIs

APIs that fall outside the baseline of the collection.

| Type | Description |
| --- | --- |
| **Zombie** | The API is in the baseline, but there has been no traffic for it within the threshold period. |
| **Shadow** | The API receives live traffic and is not in the baseline, but is present in the source code. |
| **Rogue** | The API receives live traffic and is neither in the baseline nor in the source code. |

Click **Run detection** to look for these APIs now. The table shows the collection, type, method, URI, source, severity and baseline of every detected API, and can be exported to CSV.

![Zombie and Shadow APIs](/img/apid/zombie_shadow.png)
