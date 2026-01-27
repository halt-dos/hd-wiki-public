---
sidebar_position: 9
---

# SLB

The overview page provides the **HOME dashboard configuration for SLB (Server / Software Load Balancer)**.
It describes **what SLB metrics are shown, how they’re grouped, and how they’re visualized**.

---

## Overall

* **type: "HOME"**
* **app: "SLB"**
* **default: false**
* **report: false**
* **order: 0**
* **graphs[]** → widgets on the SLB home page

Focus: **listener traffic, bandwidth, HTTP behavior, cache usage, and TCP connections**.

---

## 1. `incomingBandwidth` 

**What it shows:**
Inbound bandwidth to the SLB listeners over time.

* Metric: `n_rx_bytes`
* Category: `SLB_LISTENER`
* Query uses `avg_over_time`
* Transformation: **USAGE**

**Meaning:**
How much data is coming into the load balancer.

---

## 2. `bandwidth` 

**What it shows:**
Total bandwidth summary.

* **rx** → received bytes
* **tx** → transmitted bytes

**Meaning:**
Aggregate inbound vs outbound traffic handled by SLB.

---

## 3. `httpRequests` 

**What it shows:**
HTTP request flow over time.

* **requests** → total HTTP requests (`n_req`)
* **drops** → dropped HTTP requests (`n_req_drop`)

**Meaning:**
Traffic volume and how many requests were dropped at the SLB layer.

---

## 4. `cacheHits` 

**What it shows:**
Number of cache hits at SLB layer.

* Metric: `n_cache_hit`

**Meaning:**
How many requests were served from SLB cache (if enabled).

---

## 5. `topMethods` 

**What it shows:**
HTTP methods distribution.

Methods tracked:

* GET
* POST
* HEAD
* DELETE
* PUT (misconfigured)

**Meaning:**
What type of HTTP traffic is hitting the SLB.

**Issue:**
`PUT` has no key and an invalid query → this metric will not work.

---

## 6. `httpStatus` 

**What it shows:**
HTTP response code breakdown.

* 1XX, 2XX, 3XX, 4XX, 5XX

**Meaning:**
Application/backend health and error behavior as seen by SLB.

---

## 7. `tcpConnections` 

**What it shows:**
TCP connection behavior over time.

* **concurrent** → `n_conn_rate`
* **rate** → `n_session_rate`

**Meaning:**
Connection load and new session rate handled by the load balancer.

---

## Key issues / observations (important)

1. **Counters averaged instead of increased**

   * `avg_over_time` used on byte and request counters
   * `rate()` or `increase()` would be more correct

2. **Units inconsistent**

   * `conversion: bits` + `UNIT: byte(s)`
   * Causes confusion in UI

3. **Broken PUT metric**

   * Missing key
   * Invalid query

4. **Cache hits without misses**

   * No way to compute cache hit ratio

---

## One-line summary

This JSON defines an **SLB Home dashboard** showing **bandwidth in/out, HTTP requests and drops, cache hits, HTTP methods, response codes, and TCP connection behavior**, purely as a **dashboard and metric definition**, not real SLB traffic data.
