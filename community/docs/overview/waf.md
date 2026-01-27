---
sidebar_position: 11
---

# WAF

The overview page provides the summary of analytics for application WAF. Users are allowed to switch between applications and can see the summary of a particular app.

---

![Overview](/img/ce-waf/docs/Overview1.png)

This screen is a WAF (Web Application Firewall) overview dashboard. It shows traffic volume, source geography, attack vs legitimate traffic, bandwidth usage, and OWASP attack categories for the selected resource.

### 1. Country Heatmap (left)

**Visualization:**
- World map colored by request volume per country
- Hotter colors indicate more traffic

**Top Countries by Requests:**
- India: 1.8K
- USA: 492
- Japan: 265
- Singapore: 141
- Others follow

:::note
"Unknown" means IPs that couldn't be geo-resolved.
:::

**It tells:**
Where traffic is coming from and which countries dominate.

### 2. Requests (center circular chart)

**Traffic Distribution:**
- **Total Requests:** 2.9K
- **Split into:**
  - Legitimate
  - Attack
  - Color segments show the ratio

**It tells:**
How much of your traffic is malicious vs clean.

### 3. Bandwidth Stats (top right)

- **202 MB handled** → total traffic processed by WAF
- **145 KB saved** → bandwidth blocked due to attacks

**What it tells you:**
How much traffic WAF handled and how much backend traffic was avoided.

### 4. OWASP 2021 Attack Categories (right panel)

Shows detected attacks mapped to OWASP Top 10 (2021).

**Key Attack Types Detected:**
- Injection: 70 ← main attack type
- Cryptographic Failures: 7
- Everything else: 0

**It tells:**
What type of vulnerabilities attackers are probing or exploiting.

![Overview](/img/ce-waf/docs/Overview2.png)

This screen shows HTTP traffic behavior through the WAF, split by method, response code, and time. It answers what kind of requests are coming in, how they're handled, and what gets blocked.

### 5. HTTP Request Type (top-left)

Counts requests by HTTP method.

**HTTP Methods Breakdown:**
- GET: 2778 → dominant traffic (normal for web apps)
- POST: 106 → form/API submissions
- PUT: 2
- DELETE: 0
- HEAD: 9

**It tells:**
Traffic is mostly read-only. No abnormal write-heavy behavior.

### 6. Incoming Requests (top-right)

Time-series of total incoming requests.

**Graph Details:**
- **X-axis:** time
- **Y-axis:** requests per interval
- **Notable spikes:** around ~09:40 and ~09:50

**It tells:**
Traffic bursts occurred. Useful for spotting scans, crawlers, or traffic spikes.

### 7. HTTP Response (bottom-left)

Breakdown of response status codes.

**Response Status Distribution:**
- 2XX: 2059 → successful
- 3XX: 685 → redirects
- 4XX: 100 → client errors / blocked requests
- 5XX: 15 → backend/server errors

**It tells:**
- App is mostly healthy
- Some client errors (expected with WAF)
- Very low backend failure rate

### 8. Request Dropped (bottom-right)

Time-series of requests blocked by WAF.

**Blocking Details:**
- **Peak times:** around ~09:30–09:40
- **Correlation:** Matches incoming request spikes

**It tells:**
WAF actively mitigated suspicious traffic during bursts.

![Overview](/img/ce-waf/docs/Overview3.png)

This screen shows who is sending traffic to your application and who is actively attacking it, at the IP address level.

### 9. Top Source IPs (left table)

**What it is:**
IPs ranked by total number of requests, regardless of whether they're good or bad.

**Table Columns:**
- IP Address (with geo country)
- Requests → total hits from that IP

**Example Data:**
- 103.12.133.31 [India] → 877 requests
- 4.190.200.66 [Japan] → 259
- 40.77.177.80 [United States] → 232

**Meaning:**
These are the loudest talkers, not necessarily attackers. Could be:
- Users
- Bots
- Search crawlers
- Monitoring systems

### 10. Top Attacking IPs (right table)

**What it is:**
IPs ranked by security incidents triggered, not by volume.

**Table Columns:**
- IP Address
- Incidents → number of WAF rule violations

**Example Data:**
- 157.49.47.253 [India] → 66 incidents
- 182.69.181.45 [India] → 29
- 216.244.66.241 [United States] → 18

**Meaning:**
These IPs are actively triggering WAF rules (SQLi, XSS, scans, etc.).

#### Key Insight: IPs Appearing in Both Tables

**Important:** An IP can appear in both tables.

**Example: 157.49.47.253**
- Requests: 165
- Incidents: 66

**This means:**
- Moderate traffic
- High malicious intent
- → High-risk IP

#### How to Use This Information

**Decision Guide:**
- **High requests + low incidents** → normal users/bots
- **Low requests + high incidents** → scanners / attackers
- **High requests + high incidents** → candidates for blocking or rate-limiting
