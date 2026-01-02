---
sidebar_position: 8
---

# TCP CRD

---

## Overview

The **TCP Custom Resource (CRD)** extends the Kubernetes API to enable **Layer 4 (TCP) load balancing** using the Haltdos Ingress Controller. It allows administrators to expose TCP listening ports and define how raw TCP traffic is handled, routed, secured, and monitored.

Unlike standard Ingress resources, which focus on HTTP/HTTPS (Layer 7), the TCP CRD is designed for **protocol-agnostic workloads** such as databases, message queues, custom services, and legacy applications.

The TCP CRD provides deep control over frontend behavior, security, performance, logging, and backend routing using Kubernetes-native declarative configuration. :contentReference[oaicite:1]{index=1}

---

## Availability & Installation

- Available since **Ingress Controller v3.0**
- Current documented version: **CRD v3.1**
- API Version: `ingress.v1.haproxy.org/v1`

### Installation

If the ingress controller is installed using **Helm**, the TCP CRD is installed automatically.

For manual installations:

```
kubectl apply -f ingress.v1.haproxy.org_tcps.yaml
```
Verify installation:

```
kubectl get crd tcps.ingress.v1.haproxy.org
```

### When to Use TCP CRD

Use TCP CRD when you need to:

Expose non-HTTP services through the ingress controller

Load balance TCP-based applications

Apply SSL/TLS termination or passthrough at Layer 4

Perform advanced TCP inspection, routing, or rate control

Enable enterprise-grade observability for TCP traffic

Resource Structure
A TCP CRD consists of three logical components:

Frontend – Defines how the controller listens for and processes incoming TCP connections

Service – Maps traffic to a Kubernetes Service and port

Rules & Filters – Optional logic for inspection, routing, logging, and enforcement

Frontend Configuration
Frontend configuration controls how TCP connections are accepted, secured, optimized, and logged.

Connection Handling & Lifecycle
Controls how client TCP connections are established, maintained, and closed.

Capabilities
Connection backlog control

Client timeouts and FIN handling

Graceful connection termination

Idle connection cleanup

Underlying Engine Directives (Advanced)
nginx
Copy code
backlog
client_timeout
client_fin_timeout
idle_close_on_response
nolinger
maxconn
tcp_user_timeout
TCP Optimization & Performance
Optimizes low-level TCP behavior for high-throughput and long-lived connections.

Capabilities
Smart accept behavior

TCP keepalive tuning

Zero-copy forwarding

Kernel-level optimization

Underlying Engine Directives (Advanced)
autohotkey
Copy code
tcp_smart_accept
tcpka
clitcpka
clitcpka_cnt
clitcpka_idle
clitcpka_intvl
splice_auto
splice_request
splice_response
SSL / TLS & Secure TCP Communication
Enables encrypted TCP communication and fine-grained TLS control.

Capabilities
TCP-level SSL termination

Protocol version enforcement

Cipher and curve selection

Mutual TLS (mTLS)

Strict SNI enforcement

Underlying Engine Directives (Advanced)
smali
Copy code
ssl
ssl_certificate
ssl_cafile
ssl_min_ver
ssl_max_ver
ciphers
ciphersuites
curves
sigalgs
client_sigalgs
verify
strict_sni
no_tlsv10
no_tlsv11
no_tlsv12
no_tlsv13
prefer_client_ciphers
tls_ticket_keys
QUIC & Modern Transport Support
Controls QUIC behavior when TCP listeners are QUIC-enabled.

Capabilities
QUIC retry enforcement

Congestion control selection

Socket handling modes

Underlying Engine Directives (Advanced)
perl
Copy code
quic-force-retry
quic-cc-algo
quic-socket
Binding & Listener Configuration
Defines where and how TCP listeners bind to network interfaces.

Capabilities
Port and port-range binding

IPv4/IPv6 behavior

Interface binding

Thread and process pinning

Transparent proxying

Underlying Engine Directives (Advanced)
angelscript
Copy code
address
port
port-range-end
interface
v4v6
v6only
transparent
thread
process
bind_process
Access Control & ACL Processing
Allows conditional traffic acceptance based on TCP attributes.

Capabilities
ACL-based traffic decisions

Conditional backend switching

Protocol inspection and routing

Underlying Engine Directives (Advanced)
nginx
Copy code
acl_list
backend_switching_rule_list
cond
cond_test
TCP Request Rules & Traffic Manipulation
Provides deep inspection and control of TCP sessions.

Capabilities
Rate limiting and bandwidth control

Marking, tracking, and variable handling

SPOE integration

Connection tracking and enforcement

Underlying Engine Directives (Advanced)
dsconfig
Copy code
tcp_request_rule_list
track_table
track_key
track_stick_counter
set-var
sc-inc
bandwidth_limit
spoe_engine
spoe_group_name
Filters & Traffic Processing
Applies traffic filters and processing modules.

Capabilities
Bandwidth limiting

Caching

Compression

Tracing and diagnostics

Underlying Engine Directives (Advanced)
mipsasm
Copy code
filter_list
bandwidth_limit_name
cache_name
compression
trace_name
trace_hexdump
trace_rnd_forwarding
trace_rnd_parsing
Logging & Observability
Controls logging behavior and operational visibility for TCP traffic.

Capabilities
TCP and HTTP-style logging

Structured log formats

Early logging

Log sampling and filtering

Unique request identification

Underlying Engine Directives (Advanced)
nginx
Copy code
tcplog
httplog
clflog
log_format
log_format_sd
log_target_list
log_tag
logasap
dontlog_normal
dontlognull
unique_id_format
unique_id_header
socket_stats
Error Handling & Monitoring
Defines how errors are detected, logged, and reported.

Capabilities
Custom error handling

Monitor endpoints

Email alerting

Error redirection

Underlying Engine Directives (Advanced)
csharp
Copy code
error_files
error_log_format
errorfiles_from_http_errors
errorloc302
errorloc303
monitor_uri
monitor_fail
email_alert
from
Statistics & Administrative Endpoints
Exposes runtime statistics and administrative controls.

Capabilities
Stats UI and APIs

Authentication and authorization

Connection and rate visibility

Underlying Engine Directives (Advanced)
nginx
Copy code
stats_options
contstats
Service Mapping
Defines the Kubernetes Service to which TCP traffic is forwarded.

Capabilities
Service name mapping

Port forwarding

Configuration Fields
elm
Copy code
service.name
service.port
Best Practices
Use TCP CRD for non-HTTP workloads only

Prefer HTTP Ingress resources when possible

Keep rule sets minimal and well-documented

Avoid deep packet inspection unless required

Validate changes in staging before production

Summary
The TCP CRD provides a powerful, Kubernetes-native mechanism for managing Layer 4 traffic using the Haltdos Ingress Controller. By combining clear conceptual guidance with transparent engine-level mappings, it enables both platform engineers and advanced operators to securely expose, optimize, and observe TCP services at scale.

This documentation intentionally balances approachability for non-HAProxy users with full configurability for advanced HAProxy practitioners, ensuring operational clarity, performance, and long-term maintainability.