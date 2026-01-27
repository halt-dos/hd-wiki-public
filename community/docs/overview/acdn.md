---
sidebar_position: 1
---

# ACDN

The overview page provides the **HOME dashboard configuration for ACDN (Application/CDN layer)**.
It only defines **what summary widget exists and which metrics it pulls**.

---

## Top-level

* **type: "HOME"** → Home/overview dashboard
* **default: false** → not the default dashboard
* **report: false** → not used for reports
* **order: 0** → display order
* **graphs[]** → widgets on this dashboard

---

## Widget `SUMMARY`

* **type: "SUMMARY"** → KPI-style summary tiles (not charts)
* **app: "ACDN"** → data source is ACDN
* **name: "ACDN Summary"**
* **GRAPH_SIZE: 6** → layout width
* **UNIT: "request(s)"** → display unit (mostly cosmetic)

This widget shows **high-level CDN health metrics**.

---

## Metrics inside the summary

### 1. `used_bandwidth`

* **key: "n_bytes"**
* **aggregation: SUM**
* **category: "AcdnMetrics"**

**Meaning:**
Total bandwidth consumed through the CDN (bytes served).

---

### 2. `requests_served`

* **key: "n_req_served"**
* **aggregation: SUM**

**Meaning:**
Total number of requests served by the CDN (cached + origin).

---

### 3. `cache_hit_ratio`

* **key: "n_cache_hit_ratio"**
* **aggregation: SUM** ← problematic

**Meaning (intended):**
How many requests were served from cache vs origin.

**Problem:**
Cache hit ratio should **not** be summed.
It should be **AVG or calculated as hits / total requests**.

As defined, this metric is **logically incorrect** unless the backend already emits a pre-aggregated ratio.

---

## Key issues to be aware of

1. **Cache hit ratio aggregation is wrong**

   * SUM of ratios is meaningless
   * Should be AVG or derived

2. **UNIT mismatch**

   * `UNIT: "request(s)"` is applied globally
   * Bandwidth and ratio are not requests

3. **Redundant fields**

   * `type: "TOTAL"` + `aggregation: "SUM"` repeated
   * Could be simplified

---

## One-line summary

This JSON defines an **ACDN summary dashboard widget** that shows **total bandwidth used, total requests served, and cache efficiency**, but the **cache hit ratio logic is flawed** unless corrected at the metric source.

---