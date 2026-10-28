---
sidebar_position: 11
pagination_prev: null
---

# API Discovery & Security (APID)

---

**Haltdos APID** helps you find every API running in your environment and check it for security weaknesses. Most organizations have APIs that are poorly documented, forgotten, or deployed without the security team knowing. APID builds an up-to-date inventory of these APIs and tests them, so that nothing is left unprotected.

APID is available from the stack menu: go to **Stack** > **APID**.

### Benefits of Haltdos APID

- **API Discovery from Source Code**

APID reads your Git repositories and automatically lists the API endpoints defined in the code, without any manual documentation work.

- **Dependency Security**

APID prepares a Software Bill of Materials (SBOM) for each application and matches its third-party libraries against known vulnerabilities.

- **Shadow and Zombie API Detection**

Sensors watch real traffic. APIs that receive traffic but are missing from your documented inventory (shadow APIs), and documented APIs that no longer receive traffic (zombie APIs), are identified.

- **Vulnerability Scanning**

DAST scans test a running application for common web vulnerabilities, with or without logging in, on a schedule that you define.

- **CI/CD Integration**

Pull requests can be checked before risky changes are merged.

- **WAF Integration**

Discovered APIs, vulnerabilities and incidents can be shared with a web application firewall to protect your APIs automatically.

### Key Terms

| Term | Description |
| --- | --- |
| **Endpoint** | A host name (domain) at which your traffic arrives, for example `api.example.com`. Collections are attached to an endpoint. |
| **Collection** | A group of APIs that belong to one application. Discovered APIs, dependencies and findings are organized under a collection. |
| **Sensor** | A component that learns about APIs from live traffic or access logs. |
| **DAST Scan** | A vulnerability scan of a running application, configured for each endpoint. |

New to APID? Follow the [Getting Started](./apid/getting_started.md) guide to set everything up step by step.

### Navigating Haltdos APID

| Section | Description |
| --- | --- |
| [**Endpoints**](./apid/endpoints/endpoints.md) | Add the hosts that receive your traffic and see their overview, inventory, vulnerabilities, changes and scan settings |
| [**Collection**](./apid/collections/collections.md) | Manage collections, their source code repository, SBOM and dependency findings |
| [**Sensors**](./apid/sensors.md) | Choose where APID learns about traffic from |
| [**Incidents**](./apid/incidents.md) | Dropped and recorded rule matches, upstream errors and server health changes |
| [**Access Logs**](./apid/access_logs.md) | Individual requests parsed from the access logs of your servers |
| [**Reports**](./apid/reports.md) | PDF reports of completed vulnerability scans |
| [**Suggestions**](./apid/suggestions.md) | Recommended fixes and next steps |
| [**Integration**](./apid/integration.md) | Share what APID learns with a web application firewall |
