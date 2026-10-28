---
sidebar_position: 2
---

# Overview

Charts of the vulnerabilities, APIs and traffic of an endpoint.

---

### Overview

The Overview page summarizes what APID has learned about an endpoint during the selected time range. Use the date range selector to change the period (for example Past 1 Hour, Today, This Week, This Month or a Custom Range), the refresh button to reload, and the **Collection** filter to look at one collection only. **Auto 10s** refreshes the charts automatically every 10 seconds. Every chart can be shown as a table or downloaded.

### How to Use:

1. Go to **Stack** > **APID** > **Endpoints** and select an endpoint.
2. Open the **Overview** tab.
3. Select **Vulnerability Summary**, **API Summary** or **Traffic Summary**.

### Vulnerability Summary

Top OWASP tags, vulnerability types and vulnerability severities.

![Vulnerability Summary](/img/apid/overview_vulnerability.png)

### API Summary

Top URIs, methods, authentication types, languages, content types and sources of the APIs.

![API Summary](/img/apid/overview_api.png)

### Traffic Summary

Top URIs, user agents, source IP addresses, countries, matched rules, browsers, devices and operating systems of the requests.

![Traffic Summary](/img/apid/overview_traffic.png)

:::note
The charts are built from the traffic that is attributed to the collections attached to the endpoint. If no collection is attached to the endpoint, the charts stay empty. See [Settings](./settings.md).
:::
