---
sidebar_position: 10
---

# VPN

The overview page provides the **HOME dashboard configuration for a VPN service**.
It specifies **which VPN health and usage metrics are shown and how they’re visualized**.

---

## Overall

* **type: "HOME"**
* **app: "VPN"**
* **default: false**
* **report: false**
* **order: 0**
* **graphs[]** → widgets on the VPN overview page

Focus: **session lifecycle, VPN status, authentication failures, session duration, and bandwidth usage**.

---

## 1. `session_state`

**What it shows:**
Counts of VPN sessions by state.

Metrics:

* **handled** → sessions successfully handled
* **timeout** → sessions that timed out
* **error** → sessions that failed due to errors
* **idle** → sessions dropped due to idle timeout

**Meaning:**
Overall session health and failure patterns.

**Issue:**
`timeout` and `error` mix `SUM` with `AVG` at metric level — inconsistent aggregation.

---

## 2. `vpnStatus`

**What it shows:**
VPN service up/down status over time.

* Metric: `n_status`
* Transformation: **BINARY**
* Aggregation: **AVG**

**Meaning:**
Whether the VPN service was up or down during the time window.

---

## 3. `active_sessions`

**What it shows:**
Peak number of concurrent VPN sessions.

* Metric: `n_sessions`
* Aggregation: **MAX**

**Meaning:**
Maximum active VPN users at any point.

---

## 4. `auth_fail`

**What it shows:**
Authentication failures.

* Metric: `n_auth_fail`
* Aggregation: **SUM**

**Meaning:**
How many VPN login attempts failed (possible brute-force or misconfig).

---

## 5. `session_duration`

**What it shows:**
Session duration metric.

* Metric: `n_avg_session_time`
* Aggregation: **AVG**, summarized as **MAX**

**Meaning:**
Longest observed average session duration.

**Issue:**
“MAX of AVG” is odd; typically you want AVG or P95.

---

## 6. `vpnBandwidth`

**What it shows:**
VPN traffic volume over time.

Metrics:

* **TX** → bytes sent
* **RX** → bytes received
* Aggregation: **AVG**

**Meaning:**
Bandwidth usage of VPN tunnels.

**Issue:**
Bandwidth is averaged, not rate-based; `rate()` would be more accurate.

---

## Key issues / observations

1. **Aggregation inconsistencies**

   * SUM + AVG mixed in several widgets
   * Can distort interpretation

2. **Units inconsistent**

   * `UNIT` vs `unit`
   * bytes vs requests used loosely

3. **No user/source visibility**

   * No per-user, per-IP, or per-tunnel breakdown

---

## One-line summary

This JSON defines a **VPN Home dashboard** showing **session states, service availability, active users, authentication failures, session duration, and VPN bandwidth usage**, purely as a **dashboard and metric configuration**, not real VPN data.
