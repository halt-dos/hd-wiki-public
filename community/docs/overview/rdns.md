---
sidebar_position: 8
---

# GSLB

The overview page provides the **default HOME dashboard for RDNS (Recursive DNS)**.
It specifies **which recursive-DNS metrics are displayed, how they’re grouped, and how they’re visualized**.

---

## Overall

* **type: "HOME"**
* **app: "RDNS"**
* **default: true** → this is the default RDNS dashboard
* **report: false**
* **order: 0**
* **graphs[]** → widgets on the RDNS overview page

Focus: **Recursive DNS traffic, latency, responses, flags, and drops**.

---

## 1. `drops` 

**What it shows:**
Total DNS queries dropped by firewall rules.

* Data source: `FIREWALL`
* Query: `n_drops`
* Aggregation: SUM

**Meaning:**
How many recursive DNS queries were blocked.

---

## 2. `totalQueries` 

**What it shows:**
Total recursive DNS queries across all protocols.

Includes:

* UDP
* TCP
* DoH

**Query logic:**
`increase()` over time window for each protocol, then summed.

**Meaning:**
Total DNS load handled by the recursive resolver.

---

## 3. `dnsQueries` 

**What it shows:**
DNS queries over time, split by protocol.

* **UDP**
* **TCP**
* **DoH**

**Meaning:**
Traffic mix and protocol usage trend.

---

## 4. `latency` 

**What it shows:**
DNS resolution latency distribution (histogram buckets).

Buckets include:

* 1ms, 10ms, 50ms, 100ms, 250ms, 500ms, 1000ms, 1500ms, +Inf (slow)

**Meaning:**
How fast the resolver is responding and how many slow queries exist.

---

## 5. `response` 

**What it shows:**
DNS response outcome breakdown.

Includes:

* **cacheEntries** → served from cache
* **noError** → successful resolution
* **noData** → empty response
* **nxDomain** → domain does not exist
* **serverFail** → SERVFAIL

**Meaning:**
Resolver correctness and health.

---

## 6. `Answer Flags` 

**What it shows:**
DNS answer flag usage over time.

Flags tracked:

* RA (Recursion Available)
* RD (Recursion Desired)
* EDNS0
* AA (Authoritative)
* DO (DNSSEC OK)
* AD (Authenticated Data)
* TC (Truncated)
* CD (Checking Disabled)

**Meaning:**
Protocol-level behavior and DNSSEC usage.

---

## 7. `dropRate` 

**What it shows:**
DNS query drop trend over time.

* Source: `FIREWALL`
* Metric: `n_drops`

**Meaning:**
When and how aggressively DNS traffic is being blocked.

---

## Key observations / issues (important)

1. **Misleading metric keys**

   * `dropRate` uses `resolver_answer_ra` as key name but queries `n_drops`

2. **avg_over_time on counters**

   * For drops and queries, `rate()` or `increase()` is more correct

3. **Latency buckets overlap**

   * Buckets are cumulative (`le=`), so values are not exclusive

4. **Strong DNS observability**

   * This is the most detailed dashboard so far

---

## One-line summary

This JSON defines the **RDNS Home dashboard**, showing **total recursive DNS traffic, protocol split (UDP/TCP/DoH), latency distribution, response codes, DNS flags, and firewall drops**, purely as a **dashboard and metric definition**, not actual resolver data.
