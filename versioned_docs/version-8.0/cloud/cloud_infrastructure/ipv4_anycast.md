---
sidebar_position: 2
---

# Anycast Capability

---

## How IPv4/v6 Anycast Capability Was Achieved 

Haltdos implemented IPv4/v6 Anycast-like behavior without using native ISP-level Anycast by combining: 

### (A) Intelligent DNS Load Distribution 

- Multiple geographically distributed IPs are mapped behind a single CNAME. 

- DNS dynamically answers with the closest/healthiest IP. 

- This simulates Anycast routing because users always hit the nearest node. 

### (B) Cluster State Synchronization 

- All distributed WAF nodes act as a unified cluster. 

- Even though different IPv4/v6 addresses are used, the platform behaves like global Anycast through: 

    1. Centralized control plane 

    2. Distributed data plane 

    3. Continuous state exchange 

### (C) Failover and Resilience 

- If one CSP region becomes unhealthy: 

    1. DNS instantly stops returning that region’s IP 

    2. Clients are automatically routed to the next nearest region 

- This achieves identical behavior to Anycast: global low latency + automatic failover + multi-site redundancy. 

Incoming traffic consisting of both valid traffic and possible DDoS attack traffic 

Traffic from each region is initially forwarded to the nearest Haltdos solution based on region by our Intelligent-DNS with CNAME routing. 