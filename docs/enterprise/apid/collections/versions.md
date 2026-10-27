---
sidebar_position: 3
---

# Versions

Every scanned version of the source code.

---

### Overview

Every full repository scan creates one **version** of the collection, one for each scanned commit, newest first. The latest version is marked **LATEST**. Open a version to see its summary and inventory.

![Versions](/img/apid/collection_versions.png)

### How to Use:

1. Go to **Stack** > **APID** > **Collection** and select a collection.
2. Open the **Versions** tab.

| Column | Description |
| --- | --- |
| **Version** | Version number |
| **Commit** | The scanned commit |
| **Branch** | The scanned branch |
| **Repository** | The scanned repository |
| **Endpoints** | Number of APIs found in this version |
| **Changes vs Previous** | APIs added or removed compared with the previous version, or "No API changes" |
| **Scanned** | When the version was scanned |

The first version appears after the first full repository scan. The list can be exported to CSV.
