---
sidebar_position: 5
---

# DDOS

The overview page provides the **HOME dashboard configuration for the DDoS protection system**.
It describes **what is visualized, from where the data is pulled, and how it’s aggregated**.

---

## Overall

* **type: "HOME"**
* **app: "DDOS"**
* **default: false**
* **report: false**
* **order: 0**
* **graphs[]** → widgets on the DDoS overview page

Primary focus: **Inbound traffic, attackers, and mitigation effectiveness**.

---

## 1. `inboundHeatMap` 

**What it shows:**
Geographic distribution of inbound traffic sources.

* Metric category: `InboundGeoIPTopTalker`
* Top-talker enabled
* Up to **250 countries**

**Meaning:**
Where inbound traffic (including attack traffic) is coming from.

---

## 2. `countryChart` 

**What it shows:**
Top **10 countries** generating inbound traffic.

* Same data source as heatmap
* Ranked list

**Meaning:**
Country-wise ranking of inbound request/packet sources.

---

## 3. `topSourceIP` 

**What it shows:**
Top source IPs by inbound traffic volume.

* Category: `InboundSrcIPv4TopTalkerPps`
* Country lookup enabled

**Meaning:**
IPs sending the most packets (good + bad).

---

## 4. `topAttackIP` 

**What it shows:**
Top attacking IPs that were **blocked**.

* Category: `InboundBlockedSrcIPv4TopTalker`
* Country lookup enabled

**Meaning:**
IPs actively mitigated by DDoS protection.

---

## 5. `inboundBandwidth` 

**What it shows:**
Inbound bandwidth over time.

Metrics:

* **Received** → `n_rx_bits`
* **Forwarded** → `n_tx_bits`
* Unit: **bps**

**Meaning:**
Traffic volume before and after mitigation.

---

## 6. `inboundPacket` 

**What it shows:**
Inbound packet rate over time.

Metrics:

* **Received** → `n_rx_pkts`
* **Forwarded** → `n_tx_pkts`
* Unit: **pps**

**Meaning:**
Packet-level view of attack intensity.

---

## 7. `drops` 

**What it shows:**
Packets dropped by DDoS mitigation.

Metrics:

* **Inbound drops**
* **Outbound drops**

**Meaning:**
How much traffic was blocked at packet level.

---

## 8. `bytes` 

**What it shows:**
Bits/bytes dropped due to mitigation.

Metrics:

* **Inbound bits dropped**
* **Outbound bits dropped**

**Meaning:**
Bandwidth saved due to DDoS protection.

---

## Key observations (important)

1. **avg_over_time used on counters**

   * For bits/packets, `rate()` or `increase()` would be more accurate

2. **UNIT mismatch**

   * `UNIT: "pps"` used even for bits/bytes summary

3. **Clear separation of Received vs Forwarded**

   * Good design for measuring mitigation effectiveness

4. **Blocked IP table is the strongest signal**

   * Direct list of attackers

---

## One-line summary

This JSON defines a **DDoS Home dashboard** that shows **where attacks come from (geo + IP), how intense they are (bps/pps), and how effective mitigation is (drops and saved bandwidth)**—purely a **visualization and query definition**, not the data itself.
