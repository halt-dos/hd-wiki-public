---
sidebar_position: 2
---

# Backend CRD

---

## Overview

The **Backend Custom Resource (CRD)** extends the Kubernetes API to provide **fine-grained control over backend traffic behavior** for services managed by the Haltdos Ingress Controller.

While Ingress resources define *how traffic is routed*, the Backend CRD defines *how traffic is handled once it reaches backend pods*. This includes load-balancing logic, health checks, connection handling, SSL behavior, persistence rules, and performance tuning.

Backend CRD is ideal for applications that require **advanced backend behavior**, **stateful traffic handling**, or **protocol-specific tuning**, beyond what standard Ingress configuration provides. :contentReference[oaicite:1]{index=1}

---

## When to Use Backend CRD

Use Backend CRD when you need to:

- Customize load balancing behavior per application or service
- Configure advanced health checks
- Enable session persistence or stickiness
- Control backend SSL/TLS behavior
- Tune backend-specific timeouts and retries
- Optimize performance for high-traffic or stateful services

---

## Installation & Availability

- If the Haltdos Ingress Controller is installed using **Helm**, the Backend CRD is installed automatically.
- For manual installations, the CRD must be applied once per cluster.

Once installed, Backend becomes a native Kubernetes resource and can be managed using standard `kubectl` workflows. :contentReference[oaicite:2]{index=2}

---

## Configuration Scope & Attachment

A Backend CRD can be applied at different scopes:

### Global (All Services)
Applied via controller ConfigMap using `cr-backend`.

### Ingress Level
Applied using annotations on an Ingress resource, affecting all services routed by that Ingress.

### Service Level
Applied using annotations on a specific Service, affecting only that backend.

This allows precise backend behavior control with predictable precedence.

---

## Load Balancing & Traffic Distribution

Controls how requests are distributed across backend pods.

### Capabilities
- Multiple load-balancing algorithms
- Hash-based routing
- Cookie-based persistence
- Backup server selection
- Retry and redispatch behavior

#### Underlying Engine Directives (Advanced)

```
balance
hash_type
hash_balance_factor
cookie
dynamic_cookie_key
persist
persist_rule
prefer_last_server
allbackups
default_server
redispatch
retries
retry_on
smali
```

---

## Health Checks & Backend Availability

Ensures traffic is routed only to healthy backend pods.

### Capabilities
- HTTP, TCP, and protocol-specific checks
- Custom check endpoints
- External health check scripts
- Failure detection and recovery thresholds

#### Underlying Engine Directives (Advanced)

```
adv_check
checkcache
http-check
httpchk_params
external_check
external_check_command
external_check_path
mysql_check_params
pgsql_check_params
smtpchk_params
spop_check
monitor_uri
```

---

## Connection Lifecycle & Timeout Handling

Controls how backend connections are opened, maintained, and closed.

### Capabilities
- Connection establishment timeouts
- Queue and tunnel handling
- Graceful shutdown behavior
- Resource protection during backend overload

#### Underlying Engine Directives (Advanced)

```
abortonclose
connect_timeout
check_timeout
queue_timeout
server_timeout
server_fin_timeout
tunnel_timeout
fullconn
maxconn
nolinger
```

---

## SSL / TLS & Secure Backend Communication

Controls encrypted communication between ingress and backend services.

### Capabilities
- Backend SSL enablement
- TLS protocol and cipher control
- mTLS support
- ALPN and SNI handling
- Certificate verification and reuse

#### Underlying Engine Directives (Advanced)

```
ssl
ssl_certificate
ssl_cafile
verify
verifyhost
ssl_min_ver
ssl_max_ver
tls_tickets
independent_streams
disable_h2_upgrade
```

---

## HTTP Behavior & Protocol Control

Defines how HTTP traffic is handled at the backend.

### Capabilities
- HTTP connection modes
- Request buffering
- Header validation and forwarding
- Protocol compatibility handling

#### Underlying Engine Directives (Advanced)

```
accept_invalid_http_response
http-buffer-request
http_connection_mode
http_keep_alive_timeout
http_request_timeout
http_no_delay
http_use_htx
http_restrict_req_hdr_names
http_send_name_header
http_pretend_keepalive
h1_case_adjust_bogus_server
```

---

## Session Persistence & Stickiness

Ensures consistent routing for stateful applications.

### Capabilities
- Cookie-based stickiness
- Conditional persistence rules
- Stick tables and tracking
- Ignore/force persistence conditions

#### Underlying Engine Directives (Advanced)

```
persist
persist_rule
force_persist
force_persist_list
ignore_persist
ignore_persist_list
stick_table
```

---

## Compression & Response Optimization

Optimizes bandwidth usage and response delivery.

### Capabilities
- Request and response compression
- Algorithm selection
- Offloading compression tasks

#### Underlying Engine Directives (Advanced)

```
compression
```

---

## Logging, Statistics & Observability

Provides backend-level visibility and operational insight.

### Capabilities
- Health check logging
- Custom log tagging
- Backend statistics endpoints
- Administrative access controls

#### Underlying Engine Directives (Advanced)

```
log_health_checks
log_tag
stats_options
contstats
```

---

## TCP Optimization & Performance

Low-level TCP optimizations for high-throughput and long-lived connections.

### Capabilities
- TCP keepalive tuning
- Smart connection handling
- Zero-copy forwarding
- Reduced kernel overhead

#### Underlying Engine Directives (Advanced)

```
tcp_smart_connect
tcpka
srvtcpka
srvtcpka_cnt
srvtcpka_idle
srvtcpka_intvl
splice_auto
splice_request
splice_response
```

---

## Source IP Preservation & Transparency

Preserves original client identity when forwarding traffic.

#### Underlying Engine Directives (Advanced)

```
forwardfor
originalto
source
transparent
```

---

## Error Handling & Custom Responses

Controls how backend errors are handled and presented.

### Capabilities
- Custom error pages
- Redirect-based error handling
- Alerting and notification support

#### Underlying Engine Directives (Advanced)

```
error_files
errorfiles_from_http_errors
errorloc302
errorloc303
email_alert
from
```

---

## Administrative & Metadata Controls

Controls backend metadata and operational state.

#### Underlying Engine Directives (Advanced)

```
name
description
id
enabled
disabled
load_server_state_from_file
server_state_file_name
bind_process
mode
```

---

## Best Practices

- Use Backend CRD for **backend-specific behavior only**
- Keep routing logic in Ingress resources
- Apply Backend CRD at the **narrowest scope required**
- Version-control Backend manifests
- Validate changes in staging before production rollout

---

## Summary

The Backend CRD enables precise, backend-specific control over traffic handling in the Haltdos Ingress Controller. By combining clear, human-readable explanations with explicit engine-level directive mapping, this documentation supports both **non-HAProxy users** and **advanced HAProxy practitioners**, while maintaining clarity, transparency, and operational confidence. :contentReference[oaicite:3]{index=3}