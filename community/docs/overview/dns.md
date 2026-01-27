---
sidebar_position: 6
---

# DNS

The overview page provides the **HOME (default) dashboard configuration for the DNS service**.
It specifies **which DNS metrics are shown on the main page and how they are visualized**.

---

## Overall

* **type: "HOME"** → Home dashboard
* **default: true** → this *is* the default DNS dashboard
* **report: false** → not used for reporting
* **order: 0**
* **app: DNS**
* **graphs[]** → widgets on the DNS home page

---

## 1. `dnsQuerySummary` 

**What it shows:**
Time-series of total DNS queries.

**Details:**

* Visualization: **Area chart**
* Metric key: `total`
* Category: `DNSMetrics`
* Aggregation: **AVG**
* Unit: requests

**Meaning:**
Average DNS query volume over time (queries per interval).

---

## 2. `response` 

**What it shows:**
DNS query counts broken down by **record type**.

**Record types included:**

* **A**
* **AAAA**
* **TXT**
* **CNAME**
* **DS**
* **MX**

**Details:**

* Aggregation: **SUM**
* Category: `DNSMetrics`

**Meaning:**
How many queries were received for each DNS record type.

---

## 3. `totalQueries` 

**What it shows:**
Total number of DNS queries in the selected time window.

**Details:**

* Metric key: `total`
* Aggregation: **SUM**

**Meaning:**
Overall DNS query volume (single KPI number).

---

## Key observations / issues

1. **AVG vs SUM inconsistency**

   * Time-series uses **AVG**
   * Summary uses **SUM**
   * This is fine but must be understood: one shows *rate-like behavior*, the other shows *total volume*

2. **No error/rcode visibility**

   * No NXDOMAIN, SERVFAIL, REFUSED, etc.
   * This dashboard is **traffic-centric, not health-centric**

3. **No source visibility**

   * No client IP, country, or zone breakdown

---

## One-line summary

This JSON defines the **default DNS Home dashboard**, showing **DNS query volume over time, total query count, and distribution by record type**, purely as a **visual layout and metric definition**, not actual DNS data.
