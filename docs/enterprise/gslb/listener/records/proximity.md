---
sidebar_position: 7
---

# Proximity

---

## Overview

Proximity-based load balancing allows the GSLB to route client requests to the most optimal site based on the geographical or network distance between the client and available servers. This helps improve performance, reduce latency, and ensure efficient traffic distribution.

The Haltdos GSLB supports proximity-based decision-making using the following methods:

- **Static Proximity**
- **Dynamic Proximity**

---

## Proximity Methods

### Static Proximity

Static Proximity calculates distance based on the **geographical location** of the client and the server using latitude and longitude coordinates. This method helps determine a fixed distance between the client and each GSLB site, allowing traffic to be routed to the nearest server based on physical location.

This approach is suitable for environments where server locations are static and predictable.

---

### Dynamic Network Proximity

Dynamic Network Proximity measures the distance between the client and data resources based on **network latency** rather than physical location. The GSLB continuously monitors real-time network conditions and directs client requests to the most optimal site.

This method uses **Round Trip Time (RTT)** as the primary metric to determine proximity.

---

## RTT Measurement Mechanism

When RTT information is not already available, the GSLB virtual IP initially selects a site using the **Round Robin** method and forwards the client request to that site. The system then begins calculating RTT between the client’s Local DNS (LDNS) and the selected GSLB site.

RTT is calculated using the following fallback sequence:

### 1. PING (ICMP Echo Request / Reply)

- If an ICMP reply is received, RTT is calculated.
- If the ping fails, the system falls back to DNS-based measurement.

---

### 2. DNS (Query / Response)

- RTT is calculated based on DNS query and response timing.
- If DNS measurement fails, the system falls back to TCP-based measurement.

---

### 3. TCP (SYN to Higher-Order Port)

- RTT is calculated if a **SYN+ACK**, **RST**, or **FIN** response is received.
- If TCP measurement fails, the system falls back to the PING method.

---

## Load Balancing Decision

Once RTT metrics are populated, client requests are load balanced based on the **least RTT**, ensuring traffic is routed to the site offering the best network performance.

The GSLB solution also **periodically shares RTT metrics** across sites to maintain accurate and consistent proximity-based routing decisions.

---
