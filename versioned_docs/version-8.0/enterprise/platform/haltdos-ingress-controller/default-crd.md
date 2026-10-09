---
sidebar_position: 3
---

# Defaults CRD

---

## Overview

The **Defaults Custom Resource (CRD)** extends the Kubernetes API to define **global load balancer behavior** that applies across all services managed by the Haltdos Ingress Controller.

Defaults allow administrators to centrally control connection handling, load balancing, health checks, SSL/TLS behavior, logging, performance tuning, and error handling using declarative Kubernetes manifests.

This CRD is intended for **cluster-wide behavior** and acts as a reusable baseline unless explicitly overridden at ingress or service level. :contentReference[oaicite:1]{index=1}

---

## When to Use Defaults CRD

Defaults CRD is recommended when you need to:

- Enforce consistent load balancer behavior across services
- Reduce repeated configuration in multiple Ingress resources
- Apply enterprise-wide performance and security defaults
- Maintain predictable traffic behavior at scale

---

## Configuration Precedence

Defaults follow a clear precedence order:

1. **Ingress-level configuration**
2. **Defaults CRD configuration**
3. **Controller built-in defaults**

This ensures flexibility without unintended global overrides.

---

## Installation & Activation

If installed via **Helm**, the Defaults CRD is applied automatically.  
For manual installations, the CRD must be installed once per cluster.

After creating a Defaults resource, it must be referenced in the controller ConfigMap using `cr-defaults`.

---

## Connection Lifecycle & Timeout Management

This section defines how client and backend connections are established, maintained, and terminated. Proper tuning prevents resource exhaustion and improves stability.

### Capabilities
- Client and server inactivity timeouts
- Connection establishment limits
- Graceful shutdown handling
- Queue and tunnel timeout control

#### Underlying Engine Directives (Advanced)

```
abortonclose
backlog
client_timeout
client_fin_timeout
connect_timeout
check_timeout
queue_timeout
server_timeout
server_fin_timeout
tunnel_timeout
idle_close_on_response
fullconn
maxconn
nolinger
mipsasm
```

---

## Load Balancing & Backend Selection

Controls how traffic is distributed across backend servers and how session persistence is handled.

### Capabilities
- Multiple balancing algorithms
- Hash-based and cookie-based routing
- Persistence rules
- Backup server handling
- Retry and redispatch behavior

#### Underlying Engine Directives (Advanced)

```
balance
hash_balance_factor
hash_type
cookie
dynamic_cookie_key
persist
persist_rule
prefer_last_server
allbackups
default_backend
default_server
redispatch
retries
retry_on
```

---

## Health Checks & Backend Monitoring

Ensures traffic is sent only to healthy backend servers.

### Capabilities
- Protocol-specific health checks
- External and custom checks
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
monitor_uri
```

---

## SSL / TLS & Secure Backend Communication

Controls encrypted communication, protocol negotiation, and stream handling between the ingress controller and backend services.

### Capabilities
- Backend TLS enablement
- Protocol and cipher control
- ALPN and SNI handling
- Multiplexed stream behavior

#### Underlying Engine Directives (Advanced)

independent_streams
disable_h2_upgrade
ssl (backend SSL behavior)
tls-related backend options

*Some SSL behaviors are implicit and inherited from the HAProxy engine unless explicitly overridden.*

---

## HTTP Behavior & Protocol Handling

Defines how HTTP traffic is parsed, forwarded, and optimized.

### Capabilities
- HTTP connection modes
- Header validation and normalization
- Request buffering and reuse
- Protocol upgrades and handling

#### Underlying Engine Directives (Advanced)

```
accept_invalid_http_request
accept_invalid_http_response
http-buffer-request
http_connection_mode
http_keep_alive_timeout
http_request_timeout
http_ignore_probes
http_reuse
http_no_delay
http_pretend_keepalive
http_use_proxy_header
http_use_htx
http_restrict_req_hdr_names
http_send_name_header
h1_case_adjust_bogus_client
h1_case_adjust_bogus_server
```

---

## Logging & Observability

Controls logging behavior and visibility into traffic, errors, and health checks.

### Capabilities
- HTTP and TCP logging formats
- Early request logging
- Error separation
- Structured logging support
- Unique request IDs

#### Underlying Engine Directives (Advanced)

```
log_format
log_format_sd
log_tag
logasap
dontlog_normal
dontlognull
clflog
httplog
httpslog
tcplog
log_health_checks
log_separate_errors
error_log_format
unique_id_format
unique_id_header
socket_stats
```
---

## TCP Optimization & Performance

Low-level TCP optimizations for high-throughput and long-lived connections.

### Capabilities
- Smart connection acceptance
- TCP keepalive tuning
- Zero-copy forwarding (splice)
- Reduced kernel overhead

#### Underlying Engine Directives (Advanced)

```
tcp_smart_accept
tcp_smart_connect
tcpka
clitcpka
clitcpka_cnt
clitcpka_idle
clitcpka_intvl
srvtcpka
srvtcpka_cnt
srvtcpka_idle
srvtcpka_intvl
splice_auto
splice_request
splice_response
```

---

## Error Handling & Custom Responses

Controls how errors are presented to clients.

### Capabilities
- Custom error pages
- Redirect-based error handling
- Email alerts for failures

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

## Source IP & Transparency Controls

Preserves and forwards original client IP information.

#### Underlying Engine Directives (Advanced)

```
forwardfor
originalto
source
transparent
```

---

## Statistics & Administration

Controls administrative endpoints and runtime visibility.

#### Underlying Engine Directives (Advanced)

```
stats_options
contstats
load_server_state_from_file
name
mode
enabled
disabled
```

---

## Best Practices

- Use Defaults CRD only for **cluster-wide behavior**
- Keep application-specific tuning in Ingress or Backend CRDs
- Version-control Defaults YAML
- Test changes in staging environments
- Monitor logs and metrics after updates

---

## Summary

The Defaults CRD provides a powerful and transparent mechanism to define global load balancer behavior in Haltdos Ingress Controller. By combining human-readable explanations with explicit engine-level directive mapping, this documentation serves both **non-HAProxy users** and **advanced HAProxy practitioners**, without compromising clarity, control, or future extensibility. :contentReference[oaicite:2]{index=2}