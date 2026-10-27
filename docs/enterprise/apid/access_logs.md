---
sidebar_position: 5
---

# Access Logs

Raw requests received from your endpoints' access logs.

---

### Overview

Access Logs shows the individual requests that APID parsed from the access logs of your web servers and WAF. Use it to see exactly what was requested, by whom, and what the response was. Logs are received through the [Log Sensor](./sensors.md).

![Access Logs](/img/apid/access_logs.png)

### How to Use:

1. Go to **Stack** > **APID** > **Access Logs**.
2. Select an **Endpoint** and the time range.
3. Select the log source: **All**, **Haltdos WAF**, **Nginx**, **Apache**, **IIS** or **Tomcat**.
4. To find a request, search by URI, source IP or host.

For every request the table shows the timestamp, method, URI, status, host, source IP, origin and user agent.
