---
sidebar_position: 4
---

# CDN

The overview page provides the **HOME dashboard configuration for the CDN layer**.
It defines **which widgets appear on the CDN overview page and which metrics they query**.

---

## Overall

* **type: "HOME"** → Home/overview dashboard
* **app: "CDN"** → CDN metrics source
* **default: false** → not the default dashboard
* **report: false** → not for reports
* **order: 0**
* **graphs[]** → widgets rendered on the page

---

## 1. Geo Distribution 

**Widget type:** World map

**Purpose:**
Shows geographic distribution of CDN traffic.

**Details:**

* Top-talker enabled
* Shows up to **251 countries**
* Metric category: `GEO_DISTRIBUTION`
* Aggregation: **SUM**

**Meaning:**
Which countries generate traffic to the CDN and their relative volume.

---

## 2. Top Country Chart 

**Widget type:** Table

**Purpose:**
Ranked list of top traffic-generating countries.

**Details:**

* Top **10 countries**
* Counts requests
* Same data source as the map (`GEO_DISTRIBUTION`)
* Skips zero values
* Has descriptive text explaining intent

**Meaning:**
Exact country-wise request counts hitting the CDN.

---

## 3. CDN Summary 

**Widget type:** KPI summary tiles

Shows high-level CDN health metrics:

### a. used_bandwidth

* Metric: `n_bytes`
* Category: `CdnMetrics`
* Aggregation: **SUM**

**Meaning:**
Total bandwidth consumed by CDN.

---

### b. requests_served

* Metric: `n_req_served`
* Category: `CdnMetrics`
* Aggregation: **SUM**

**Meaning:**
Total number of requests served by the CDN.

---

### c. cache_hit_ratio

* Metric: `n_cache_hit_ratio`
* Category: `CdnMetrics`
* Aggregation: **SUM** (problematic)

**Meaning (intended):**
How effectively CDN cache is serving requests.

**Issue:**
A cache hit ratio should **not be summed**.
It should be **AVG or derived (hits / total requests)**. As defined, this metric is mathematically wrong unless precomputed upstream.

---

## Key observations / issues

1. **Cache hit ratio aggregation is incorrect**

   * SUM of ratios has no meaning

2. **UNIT = request(s)** applied globally

   * Bandwidth and ratio are not requests

3. **MAP + TABLE reuse same GEO_DISTRIBUTION metric**

   * Correct and consistent

---

## One-line summary

This JSON defines a **CDN Home dashboard** showing **where traffic comes from (map + top countries)** and **high-level CDN KPIs (bandwidth, requests served, cache efficiency)**, but the **cache hit ratio logic is flawed** as configured.
