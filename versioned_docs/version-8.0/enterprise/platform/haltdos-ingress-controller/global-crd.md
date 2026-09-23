---
sidebar_position: 4
---

# Global CRD

---

## Overview

The **Global Custom Resource (CRD)** extends the Kubernetes API to configure **process-level and runtime behavior** of the Haltdos Ingress Controller.

Unlike Ingress or Defaults CRDs, which influence traffic routing and backend behavior, the Global CRD controls how the ingress controller **itself operates**, including process management, threading, CPU allocation, SSL engines, logging targets, runtime APIs, and system-level performance tuning.

This CRD is intended for **cluster-wide controller behavior** and is typically defined once per cluster. :contentReference[oaicite:1]{index=1}

---

## When to Use Global CRD

Use the Global CRD when you need to:

- Tune ingress controller performance at process level
- Control CPU, threading, and NUMA behavior
- Configure global SSL engines and cryptographic defaults
- Enable runtime APIs and administrative sockets
- Manage logging targets and severity globally
- Enforce strict system and security limits

---

## Configuration Scope & Precedence

Global CRD settings apply at the **controller process level** and follow this precedence:

1. **Global CRD configuration**
2. **Controller startup defaults**

> Global CRD settings are **not overridden** by Defaults or Ingress resources.

---

## Installation & Activation

If the ingress controller is installed using **Helm**, the Global CRD is installed automatically.

For manual installations, the CRD must be applied once per cluster. After creation, the Global resource is referenced from the controller ConfigMap using `cr-global`.

---

## Process Model & Runtime Control

This section controls how the ingress controller process runs and behaves at the OS level.

### Capabilities
- Master-worker and daemon modes
- Graceful reload and shutdown behavior
- User/group privilege control
- PID and process isolation

#### Underlying Engine Directives (Advanced)

```
master-worker
daemon
grace
hard_stop_after
user
group
uid
gid
pidfile
set_dumpable
insecure_fork_wanted
insecure_setuid_wanted
```

---

## CPU, Threading & NUMA Optimization

Controls how HAProxy threads and processes are scheduled across CPU cores.

### Capabilities
- Thread and process scaling
- CPU pinning and NUMA awareness
- Reload safety for multi-core environments

#### Underlying Engine Directives (Advanced)

```
nbthread
nbproc
cpu_maps
thread_groups
thread_group_lines
numa_cpu_mapping

```

---

## Connection & Capacity Limits

Defines hard limits to protect the ingress controller from overload.

### Capabilities
- Maximum concurrent connections
- Rate-based connection control
- File descriptor and socket constraints

#### Underlying Engine Directives (Advanced)

```
maxconn
maxconnrate
maxsessrate
maxsslconn
maxsslrate
ulimit_n
strict_limits
```

---

## SSL Engines & Cryptographic Defaults

Controls SSL engines, providers, and default cryptographic behavior used across the controller.

### Capabilities
- SSL engine loading
- Cipher and curve defaults
- TLS protocol enforcement
- Certificate trust chains

#### Underlying Engine Directives (Advanced)

```
ssl
ssl_engines
ssl_provider
ssl_provider_path
ssl_default_bind_ciphers
ssl_default_bind_ciphersuites
ssl_default_bind_curves
ssl_default_bind_sigalgs
ssl_default_server_ciphers
ssl_default_server_ciphersuites
ssl_default_server_curves
ssl_default_server_sigalgs
ssl_dh_param_file
tune_ssl_default_dh_param
```

---

## QUIC & Modern Transport Support

Controls QUIC and HTTP/3 behavior when enabled.

### Capabilities
- QUIC enablement and limits
- Retry and congestion control
- Transport-level tuning

#### Underlying Engine Directives (Advanced)

```
limited_quic
no-quic
quic-force-retry
quic-cc-algo
quic-socket
```

---

## Runtime APIs & Administrative Control

Controls runtime sockets and APIs for live configuration and observability.

### Capabilities
- Runtime socket exposure
- Secure administrative access
- Live statistics and control

#### Underlying Engine Directives (Advanced)
```
runtime_apis
accept_proxy
accept_netscaler_cip
address
level
mode
namespace
```

---

## Logging Targets & Severity Control

Defines global log destinations and formatting rules.

### Capabilities
- Syslog targets
- Severity filtering
- Structured logging formats
- Sampling and rate control

#### Underlying Engine Directives (Advanced)

```
log_targets
log_send_hostname
severity_output
quiet
zero_warning
```


---

## Network & Socket Behavior

Controls low-level networking behavior for listener sockets.

### Capabilities
- IPv4/IPv6 behavior
- Transparent proxying
- TCP Fast Open
- Kernel polling models

#### Underlying Engine Directives (Advanced)

```
v4v6
v6only
transparent
tfo
defer_accept
noepoll
nopoll
nokqueue
nosplice
```


---

## Environment & Variable Management

Controls environment variables exposed to the ingress controller.

### Capabilities
- Environment injection
- Variable formatting
- Secure resets

#### Underlying Engine Directives (Advanced)

```
setenv
unsetenv
presetenv
resetenv
set_var
set_var_fmt
```

---

## Advanced Tuning & Memory Management

Fine-grained performance and memory tuning for high-throughput environments.

### Capabilities
- Buffer sizing
- Zero-copy forwarding
- Scheduler tuning
- SSL cache optimization

#### Underlying Engine Directives (Advanced)
```
tune_options
maxpipes
pipesize
ssl_cachesize
ssl_ctx_cache_size
zlib_memlevel
zlib_windowsize
```

---

## Best Practices

- Use **Global CRD sparingly** — it affects the entire controller
- Avoid frequent changes in production clusters
- Version-control Global CRD manifests
- Apply only after load and performance testing
- Prefer Defaults and Ingress CRDs for traffic behavior

---

## Summary

The Global CRD provides deep, process-level control over the Haltdos Ingress Controller. By abstracting complex HAProxy runtime and system configuration behind Kubernetes-native constructs, it enables platform engineers to fine-tune performance, security, and scalability while maintaining operational consistency across clusters.

This documentation intentionally balances **clarity for non-HAProxy users** with **full transparency for advanced operators**, ensuring long-term maintainability and enterprise readiness. :contentReference[oaicite:2]{index=2}