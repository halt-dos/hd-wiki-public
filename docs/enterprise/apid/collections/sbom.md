---
sidebar_position: 4
---

# SBOM

The libraries and components that an application is built from.

---

### Overview

The **Software Bill of Materials (SBOM)** lists every library and framework used by the collection's services, together with its version, ecosystem and known vulnerabilities. The SBOM is created automatically by a repository scan, or it can be imported. The summary at the top shows the number of components (total, direct and indirect) and the vulnerabilities (affected components, critical and high).

![SBOM](/img/apid/collection_sbom.png)

### How to Use:

1. Go to **Stack** > **APID** > **Collection** and select a collection.
2. Open the **SBOM** tab.
3. To add your own SBOM, click **Import SBOM** button.
4. Select the file and click **Import**.

![Import SBOM](/img/apid/import_sbom.png)

Use the search box to find a component or license, the **Ecosystem** and **Dependency** filters to narrow the list, and **Vulnerable** to show only the components with known vulnerabilities. Click **Generate report** to create a report, or **Export CSV** to download the list.

### Description:

##### **File**

A CycloneDX JSON document, such as the output of cdxgen. The page shows the latest import.

```
    Accepted values: CycloneDX JSON file

    Default: Blank
```
