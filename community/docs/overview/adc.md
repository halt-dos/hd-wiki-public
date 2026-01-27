---
sidebar_position: 2
---

# ADC

The **Overview** page provides a consolidated view of analytics for the **ADC (Application Delivery Controller)** application.  
It presents traffic distribution, request trends, mitigation activity, response behavior, bot traffic insights, and security visibility for the configured backend services.

All widgets on this page are dynamically populated based on available metrics.

---

## Traffic Geography & Sources

### Country Heatmap

This map visualizes **global traffic distribution** based on request volume per country.

- Displays traffic from up to 251 countries
- Countries are highlighted based on traffic intensity
- Supports top-talker analysis

**What it indicates:**  
Geographical origin of traffic reaching the backend services.

---

### Top Countries

This table lists the **top countries generating traffic** toward the configured backend.

- Ranked by request count
- Displays top 10 countries
- Supports country-level aggregation

**What it indicates:**  
Which countries contribute the most traffic to the application.

---

## Traffic & Mitigation Trends

### Requests

This area chart shows the **total number of incoming requests** over time.

- Metric source: Traffic metrics
- Unit: Requests

**What it indicates:**  
Overall traffic volume handled by the ADC.

---

### Incidents

This area chart represents **mitigated or dropped requests** over time.

- Metric source: Mitigation metrics
- Unit: Requests

**What it indicates:**  
Security enforcement activity and mitigation trends.

---

### Traffic Summary

This summary widget provides a combined view of:

- Total requests
- Dropped requests
- Incoming bandwidth (RX)
- Outgoing bandwidth (TX)
- Bandwidth saved due to mitigation

**What it indicates:**  
High-level traffic flow and mitigation impact on bandwidth usage.

---

## Attack & Source Analysis

### Top Attack Sources

This table lists **top source IPs triggering mitigations**.

- Ranked by number of incidents
- Includes country lookup
- Displays top 10 sources

**What it indicates:**  
IP addresses responsible for the most blocked or mitigated traffic.

---

### Top Source IPs

This table displays **top traffic-generating IP addresses**, regardless of intent.

- Ranked by request volume
- Includes country lookup
- Displays top 10 sources

**What it indicates:**  
Highest-volume traffic sources accessing the application.

---

## Response & Protocol Behavior

### HTTP Response Status

This summary widget shows request outcomes categorized by **HTTP status codes**:

- 1XX – Informational
- 2XX – Successful
- 3XX – Redirection
- 4XX – Client errors
- 5XX – Server errors

**What it indicates:**  
Overall response behavior and request health.

---

### Top HTTP Methods

This summary shows the **most frequently used HTTP methods**.

- Displays top methods based on request volume
- Supports top-talker analysis

**What it indicates:**  
Nature of traffic patterns, such as read-heavy or write-heavy workloads.

---

## Bot Traffic Analysis

### Bot vs Human Requests

This area chart compares **bot traffic versus human traffic** over time.

- Bot requests
- Human requests

**What it indicates:**  
Traffic composition and bot activity trends.

---

### Bot Categories

This table shows **bot traffic categorized by bot type**, including:

- Known bad bots
- Discovered bad bots
- Suspicious bots
- Good bots

- Supports dynamic metrics
- Ranked by request count

**What it indicates:**  
Breakdown of bot activity and bot classification effectiveness.

---

## Security Visibility

### OWASP 2021 Incidents

This summary widget displays **security incidents mapped to OWASP Top 10 (2021)** categories.

- Dynamically populated
- Grouped by OWASP classification
- Unit: Incidents

**What it indicates:**  
Types of application-level threats detected by the ADC.

---

## One-Line Summary

This dashboard provides a comprehensive view of ADC traffic flow, geographic distribution, mitigation activity, response behavior, bot traffic insights, and OWASP-based security visibility, enabling effective monitoring and operational decision-making.
