---
sidebar_position: 5
---

# Ingress Annotations

---

## Overview

Ingress annotations allow fine-grained, **per-Ingress customization** of traffic behavior in the Haltdos Ingress Controller. While global behavior is defined using Defaults and Backend CRDs, annotations enable **application-specific overrides** directly on Kubernetes Ingress resources.

Ingress annotations control request routing, access control, authentication, SSL behavior, rate limiting, header manipulation, logging, and backend handling on a per-application basis.

They are applied using the `metadata.annotations` field of a Kubernetes Ingress resource and take **highest precedence** for the associated routes. :contentReference[oaicite:1]{index=1}

---

## When to Use Ingress Annotations

Ingress annotations are recommended when you need to:

- Apply application-specific policies without impacting other services
- Override global Defaults or Backend behavior
- Enable security, routing, or performance features for a single ingress
- Rapidly customize traffic handling using Kubernetes manifests

---

## Configuration Precedence

Ingress annotations follow the highest precedence:

1. **Ingress Annotations**
2. **Backend CRD**
3. **Defaults CRD**
4. **Controller built-in defaults**

This ensures per-application configuration always takes priority.

---

## Access Control (IP Filtering)

Controls which client IPs are allowed or denied access to an ingress.

### Capabilities
- Allow traffic only from trusted IP ranges
- Block known malicious or unwanted sources
- Support CIDR and pattern-file based rules

#### Supported Annotations

```
haproxy.org/allow-list
haproxy.org/deny-list
haproxy.org/whitelist
haproxy.org/blacklist
```

These annotations accept:
- Comma-separated IP addresses or CIDR ranges
- Pattern files (e.g. `patterns/ips`) for large rule sets

---

## Authentication & Authorization

Protects ingress routes using authentication mechanisms.

### Capabilities
- HTTP Basic Authentication
- Configurable authentication realms
- Secure credential storage via Kubernetes Secrets

#### Supported Annotations

```
haproxy.org/auth-type
haproxy.org/auth-realm
haproxy.org/auth-secret
```

These annotations work together to enforce authentication at the ingress layer.

---

## Backend Configuration Injection

Allows injecting advanced backend-specific HAProxy configuration for a particular ingress.

### Capabilities
- Insert custom HAProxy directives
- Enable advanced persistence or routing logic
- Apply configuration without modifying global defaults

#### Supported Annotations

```
haproxy.org/backend-config-snippet
```

This annotation accepts one or more valid HAProxy directives.

---

## Load Balancing & Session Persistence

Controls how traffic is distributed and how client sessions are maintained.

### Capabilities
- Configure load-balancing algorithms
- Enable cookie-based persistence
- Control backend scaling behavior

#### Supported Annotations

```
haproxy.org/load-balance
haproxy.org/cookie-persistence
haproxy.org/cookie-persistence-no-dynamic
haproxy.org/pod-maxconn
haproxy.org/scale-server-slots
haproxy.org/standalone-backend
```

---

## Health Checks & Backend Availability

Controls backend health monitoring for a specific ingress.

### Capabilities
- Enable or disable health checks
- Define HTTP health check endpoints
- Control check intervals and timeouts

#### Supported Annotations

```
haproxy.org/check
haproxy.org/check-http
haproxy.org/check-interval
haproxy.org/timeout-check
haproxy.org/timeout-server
```

---

## Rate Limiting & Traffic Protection

Protects applications from abuse and traffic spikes.

### Capabilities
- Limit request rates per client
- Configure tracking size and evaluation window
- Customize response codes on limit violation

#### Supported Annotations

```
haproxy.org/rate-limit-period
haproxy.org/rate-limit-requests
haproxy.org/rate-limit-size
haproxy.org/rate-limit-status-code
```

---

## CORS (Cross-Origin Resource Sharing)

Controls cross-origin request behavior for browser-based applications.

### Capabilities
- Enable or disable CORS
- Control allowed origins, headers, and methods
- Configure credential handling and cache duration

#### Supported Annotations
```
haproxy.org/cors-enable
haproxy.org/cors-allow-origin
haproxy.org/cors-allow-methods
haproxy.org/cors-allow-headers
haproxy.org/cors-allow-credentials
haproxy.org/cors-max-age
```

---

## Header Manipulation

Allows modifying HTTP headers before or after request processing.

### Capabilities
- Set or override request headers
- Set response headers
- Modify Host header behavior
- Preserve client IP information

#### Supported Annotations

```
haproxy.org/request-set-header
haproxy.org/response-set-header
haproxy.org/set-host
haproxy.org/src-ip-header
haproxy.org/forwarded-for
```

---

## Request Routing & Redirection

Controls URL rewriting and request redirection behavior.

### Capabilities
- Rewrite request paths
- Redirect requests to different hosts or ports
- Configure redirect response codes

#### Supported Annotations

```
haproxy.org/path-rewrite
haproxy.org/request-redirect
haproxy.org/request-redirect-code
```

---

## SSL / TLS & Secure Traffic Handling

Controls HTTPS behavior at the ingress level.

### Capabilities
- Enable or disable SSL passthrough
- Enforce HTTPS redirection
- Configure redirect ports and status codes
- Enable backend SSL and HTTP/2

#### Supported Annotations

```
haproxy.org/ssl-passthrough
haproxy.org/ssl-redirect
haproxy.org/ssl-redirect-code
haproxy.org/ssl-redirect-port
haproxy.org/server-ssl
haproxy.org/server-proto
haproxy.org/server-ca
haproxy.org/server-crt
```

---

## Proxy Protocol & Client Identity

Preserves client identity when traffic passes through upstream proxies or load balancers.

### Capabilities
- Enable PROXY protocol (v1 / v2)
- Preserve SSL metadata and client CN

#### Supported Annotations
```
haproxy.org/send-proxy-protocol
```
---

## Logging & Request Capture

Provides enhanced visibility into ingress traffic.

### Capabilities
- Capture headers or cookies for logging
- Control captured data size

#### Supported Annotations

```
haproxy.org/request-capture
haproxy.org/request-capture-len
```

---

## Ingress Controller Selection

Controls which ingress controller processes the ingress resource.

#### Supported Annotations

```
haproxy.org/ingress.class
```

---

## Best Practices

- Use Ingress annotations for **application-specific behavior**
- Prefer Defaults or Backend CRDs for shared configuration
- Avoid duplicating the same annotation across many ingresses
- Validate annotation changes in staging before production rollout
- Monitor logs and metrics after applying changes

---

## Summary

Ingress annotations provide powerful, per-application customization capabilities in the Haltdos Ingress Controller. By combining clear conceptual explanations with explicit annotation visibility, this documentation supports both **platform users** and **advanced HAProxy practitioners**, ensuring flexibility, clarity, and operational confidence. :contentReference[oaicite:2]{index=2}