---
sidebar_position: 1
---

# Haltdos Intelligent DNS

---

## Introduction

Modern web applications serve users across diverse geographic regions who expect fast, secure, and reliable service. When an application is deployed or protected across multiple cloud regions, it becomes essential to route traffic efficiently to the nearest and healthiest node. Traditional DNS mechanisms offer only static resolution and cannot make dynamic, performance-based decisions. 

Haltdos Intelligent DNS addresses these challenges through an adaptive DNS routing engine that evaluates proximity, latency, regional health, and availability before responding to a client’s DNS query. Instead of providing a single fixed IP, Haltdos Intelligent DNS responds with the best-suited Haltdos solution endpoint across multi-cloud environments, ensuring low latency and optimal user experience. 

By combining continuous health checks, geo-based decision policies, and Haltdos threat intelligence, the system ensures that users always reach the closest and most stable deployment node. This enables seamless service continuity, faster content delivery, and reduced susceptibility to regional outages or network congestion. 

Furthermore, Haltdos Intelligent DNS delivers Anycast-like behavior over IPv4/v6 by intelligently distributing user traffic to the most appropriate node without relying on native ISP-level Anycast. This ensures high performance, improved resilience, and seamless failover for globally deployed applications. 

---

**Haltdos Intelligent-DNS Architecture**  

![Haltdos Intelligent-DNS Architecture](/img/cloud_architecture/v8/docs/dns_architecture.png)

---

## Explanation

### 1. Intelligent DNS with CNAME Routing

Haltdos provides a CNAME record to the customer (e.g., `app.example.com -> haltdos-global.haltdos.net`).

This CNAME resolves to one or more IPv4/v6 addresses, each belonging to Haltdos WAF clusters deployed across regions of various CSPs.

The Intelligent DNS engine picks the optimal IP based on:

- Nearest edge location
- Real-time latency
- Packet loss
- Regional routing policies
- Health check status

---

### 2. Traffic Forwarding

Once DNS returns the best-fit IP, client traffic is routed directly to the selected Haltdos WAF instance.

All WAF nodes across CSPs share:

- Session state
- Bot scores
- Threat intelligence
- User reputation

So, the experience remains consistent regardless of which CSP node serves the traffic.

---

**Example:**  

- **Application running on public internet in Indonesia, protected by Haltdos Solution.**

![example_1](/img/cloud_architecture/v8/docs/example_1.png)

- **Incoming traffic to application from multiple global endpoints.**

![example_2](/img/cloud_architecture/v8/docs/example_2.png)

- **Incoming Traffic being forwaded to the closest Haltdos Solution based on region, etc**

![example_3](/img/cloud_architecture/v8/docs/example_3.png)

- **Clean traffic from Haltdos Solution is forwarded to the backend application node.** 

![example_4](/img/cloud_architecture/v8/docs/example_4.png)
