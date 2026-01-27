---
sidebar_position: 7
---

# LLB

The overview page provides the **HOME dashboard configuration for LLB (Layer-4 Load Balancer)**.
It specifies **what Layer-4 traffic and health metrics are shown on the LLB overview page and how they are visualized**.

---

## Overall

* **type: "HOME"**
* **app: "LLB"**
* **default: false**
* **report: false**
* **order: 0**
* **graphs[]** → widgets rendered on the LLB home page

Focus: **Layer-4 protocol usage, sessions, link status, bandwidth, packets, and top destinations**.

---

## 1. `layer4` 

**What it shows:**
Traffic volume by **Layer-4 protocol**.

Metrics:

* **UDP** → `UDPMetrics : n_bits`
* **TCP** → `TCPMetrics : n_bits`
* **ICMP** → `ICMPMetrics : n_icmp_bits`

**Aggregation:** SUM
**Unit:** bytes/bits (usage)

**Meaning:**
How much L4 traffic each protocol is carrying.

---

## 2. `sessions` 

**What it shows:**
Current number of active sessions.

Metric:

* `n_sessions` from `SessionStatus`
* Aggregation: **LAST**

**Meaning:**
Live session count handled by the LLB.

---

## 3. `activeLinks` 

**What it shows:**
WAN link status.

Metrics:

* **Total** → `n_wan_total`
* **Active** → `n_wan_active`
* Aggregation: **LAST**

**Meaning:**
How many WAN links exist vs how many are up.

---

## 4. `bandwidth` 

**What it shows:**
Bandwidth over time.

Metrics:

* **Incoming** → `n_rx_bits`
* **Outgoing** → `n_tx_bits`
* Aggregation: **AVG**
* Unit: bits

**Meaning:**
Traffic throughput handled by the load balancer.

---

## 5. `packetRate` 

**What it shows:**
Packet rate over time.

Metrics:

* **Incoming** → `n_rx_pkts`
* **Outgoing** → `n_tx_pkts`
* Aggregation: **AVG**

**Meaning:**
Packets per interval, useful for detecting floods.

---

## 6. `topDstIPv4` 

**What it shows:**
Top destination IPv4 addresses by traffic.

* Category: `DstIPv4TopTalkerBps`
* Top 10 destinations
* Country lookup enabled

**Meaning:**
Which backend destinations receive the most traffic.

---

## Key observations / issues

1. **Bits vs bytes ambiguity**

   * Keys use `*_bits`
   * UNIT says `byte(s)` in some places

2. **AVG used for bandwidth**

   * Fine for trend
   * Not for absolute totals

3. **Good L4 visibility**

   * Protocol split + packets + sessions is solid

---

## One-line summary

This JSON defines an **LLB Home dashboard** that shows **Layer-4 protocol traffic (TCP/UDP/ICMP), session counts, WAN link status, bandwidth and packet rates over time, and top destination IPs**, purely as a **visual and metric configuration**, not actual data.
