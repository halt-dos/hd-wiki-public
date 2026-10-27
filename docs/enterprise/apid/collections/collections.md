---
sidebar_position: 1
---

# Collections

Group the APIs of an application together.

---

### Overview

A **collection** groups the APIs of one application. Map hosts to it to start discovery. Everything APID learns about those APIs, such as endpoints, dependencies and vulnerabilities, is shown under the collection. The Collection page lists every collection with its number of endpoints, risk, vulnerabilities and sensitive data, and its shadow baseline.

![Collections](/img/apid/collections.png)

### How to Use:

1. Go to **Stack** > **APID** > **Collection**.
2. Click **New collection** button.
3. Enter the collection name.
4. Click **Add collection**.
5. Open the collection to attach its source code repository from [Settings](./settings.md).

![New collection](/img/apid/new_collection.png)

Use **Filter by collection name** to search the list. Click a collection to open its [Overview](./overview.md), [Versions](./versions.md), [SBOM](./sbom.md), [Findings](./findings.md) and [Settings](./settings.md).

### Description:

##### **Collection Name**

A name to identify the collection.

```
    Accepted values: String

    Default: Untitled collection
```

##### **Shadow Baseline**

Decides which list of APIs is treated as the known list when [shadow and zombie APIs](../endpoints/change_tracking.md) are detected. It is selected for each collection from the list. **Auto** lets APID choose the best available source, which is normally the source code repository or an imported Postman collection.

```
    Default: Auto
```
