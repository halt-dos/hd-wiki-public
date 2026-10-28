---
sidebar_position: 5
---

# Findings

Known vulnerabilities in the libraries an application uses.

---

### Overview

Software Composition Analysis (SCA) checks the components of the [SBOM](./sbom.md) against databases of known vulnerabilities. The summary shows the total number of findings and how many are Critical, High, Low or None. Use the severity buttons and the date range to filter the list.

![Findings](/img/apid/collection_findings.png)

### How to Use:

1. Go to **Stack** > **APID** > **Collection** and select a collection.
2. Open the **Findings** tab.

Each finding shows the severity, the CVE or finding name, the affected component, the CVSS score, the version in which it is fixed and a description. Click **Generate report** to create a report, or **Export CSV** to download the list.

To keep the findings current, schedule dependency scanning in [Settings](./settings.md).
