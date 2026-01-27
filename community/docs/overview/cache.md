---
sidebar_position: 3
---

# CACHE

The **Overview** page provides a consolidated view of analytics for the **CACHE application**.  
It presents key performance, traffic, and protocol-level metrics to help users understand cache behavior, request patterns, bandwidth usage, and connection activity at a glance.

This page is configuration-driven and dynamically populated based on available metrics.

---

## Cache Traffic & Performance Overview

### Incoming Bandwidth

This area chart shows the **average inbound bandwidth usage** over time.

- Metric: Received bytes (`n_rx_bytes`)
- Aggregation: Average
- Unit: Bytes
- Scope: Cache listener traffic

**What it indicates:**  
How much data is being received by the cache over time, helping identify traffic trends and spikes.

---

### Bandwidth Summary

This summary widget displays **total bandwidth usage** split into:

- **Incoming bandwidth (RX)** – total bytes received
- **Outgoing bandwidth (TX)** – total bytes transmitted

**What it indicates:**  
Overall data flow handled by the cache, useful for capacity planning and traffic analysis.

---

### HTTP Requests

This area chart represents **HTTP request activity** over time.

It includes:
- **Total requests** (`n_req`)
- **Dropped requests** (`n_req_drop`)

**What it indicates:**  
Request load on the cache and the rate at which requests are being dropped.

---

### Cache Hits

This summary widget displays the **total number of cache hits**.

- Metric: Cache hit count (`n_cache_hit`)
- Aggregation: Total
- Unit: Requests

**What it indicates:**  
Effectiveness of caching. Higher cache hits typically indicate better cache utilization and reduced backend load.

---

### Top HTTP Methods

This summary section shows request distribution by **HTTP method**, including:

- GET
- POST
- PUT
- DELETE
- HEAD

**What it indicates:**  
The nature of traffic handled by the cache, such as read-heavy or write-heavy workloads.

---

### HTTP Status Codes

This summary widget displays request outcomes categorized by **HTTP status code groups**:

- 1XX – Informational
- 2XX – Successful
- 3XX – Redirection
- 4XX – Client errors
- 5XX – Server errors

**What it indicates:**  
Response behavior and overall request health through the cache.

---

### TCP Connections

This area chart shows TCP connection behavior over time, including:

- **Connection rate** (`n_session_rate`)
- **Concurrent connections** (`n_conn_conn`)

**What it indicates:**  
Connection load and concurrency handled by the cache, useful for understanding traffic bursts and connection pressure.

---

## One-Line Summary

This dashboard provides a high-level view of cache traffic, bandwidth usage, request behavior, protocol distribution, and connection activity—helping users monitor performance and understand how traffic flows through the cache layer.
