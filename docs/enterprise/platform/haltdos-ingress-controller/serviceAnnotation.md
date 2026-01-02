---
sidebar_position: 7
---

# Service Annotations

---

## Overview

Service annotations allow fine-grained, **per-service customization** of traffic handling behavior in the Haltdos Ingress Controller. Unlike Ingress annotations, which apply at the routing layer, **Service annotations influence backend behavior** once traffic has already been routed to a specific Kubernetes Service.

Using Service annotations, administrators can control load balancing behavior, health checks, session persistence, SSL/mTLS communication with pods, connection limits, timeouts, and advanced backend logic — without affecting other services.

Annotations are defined under `metadata.annotations` in a Kubernetes **Service** object and apply only to that service. :contentReference[oaicite:1]{index=1}

---

## When to Use Service Annotations

Service annotations are recommended when you need to:

- Customize backend behavior for a specific application
- Enable sticky sessions or advanced load balancing per service
- Configure backend health checks
- Enable SSL or mTLS between ingress and pods
- Control backend connection limits and timeouts
- Inject advanced HAProxy backend logic safely

---

## Configuration Precedence

Service annotations follow this precedence order:

1. **Service Annotations**
2. **Ingress Annotations**
3. **Backend CRD**
4. **Defaults CRD**
5. **Controller built-in defaults**

This ensures the most specific configuration always wins.

---

## Backend Configuration Injection

Allows injecting advanced HAProxy backend directives directly for a specific service.

### Capabilities
- Insert raw HAProxy backend configuration
- Enable advanced routing or persistence logic
- Fine-tune backend behavior without global impact

#### Supported Annotation

haproxy.org/backend-config-snippet

smali
Copy code

This annotation accepts one or more valid HAProxy backend directives.

---

## Health Checks & Backend Availability

Controls health monitoring of backend pods.

### Capabilities
- Enable TCP or HTTP health checks
- Define custom check endpoints
- Tune check intervals and timeouts

#### Supported Annotations

haproxy.org/check
haproxy.org/check-http
haproxy.org/check-interval
haproxy.org/timeout-check
haproxy.org/timeout-server

yaml
Copy code

These annotations ensure traffic is routed only to healthy pods.

---

## Load Balancing & Traffic Distribution

Controls how traffic is distributed across backend pods.

### Capabilities
- Select load-balancing algorithms
- Control backend scaling behavior
- Optimize traffic distribution under load

#### Supported Annotation

haproxy.org/load-balance

markdown
Copy code

Supported algorithms include:
- `roundrobin`
- `leastconn`
- `source`
- `uri`
- `random`
- `hdr`
- `rdp-cookie`

---

## Session Persistence (Sticky Sessions)

Ensures consistent routing of client sessions to the same backend pod.

### Capabilities
- Cookie-based stickiness
- Support for dynamic and static cookies
- Multi-controller safe session persistence

#### Supported Annotations

haproxy.org/cookie-persistence
haproxy.org/cookie-persistence-no-dynamic

yaml
Copy code

These annotations insert cookies to track backend pod selection.

---

## Backend Connection Limits

Controls the number of concurrent connections allowed per backend pod.

### Capabilities
- Prevent backend overload
- Fair connection distribution across replicas
- Safe scaling with multiple ingress controller instances

#### Supported Annotation

haproxy.org/pod-maxconn

yaml
Copy code

> When multiple ingress controller replicas are running, the configured value is automatically divided across instances.

---

## Advanced Routing Rules

Allows conditional routing to backends using custom ACL logic.

### Capabilities
- Route traffic based on headers, cookies, or request attributes
- Override default path-based routing logic

#### Supported Annotation

haproxy.org/route-acl

yaml
Copy code

This annotation accepts a valid HAProxy ACL expression.

---

## Dynamic Backend Scaling

Controls how many backend server slots are pre-provisioned.

### Capabilities
- Scale backends dynamically without reloads
- Minimize downtime during scaling events
- Support large backend pools

#### Supported Annotation

haproxy.org/scale-server-slots

yaml
Copy code

---

## Client Identity & Forwarding

Preserves client source information when forwarding requests.

### Capabilities
- Forward client IP to backend pods
- Maintain transparency for logging and auditing

#### Supported Annotation

haproxy.org/forwarded-for

pgsql
Copy code

---

## SSL / TLS & Secure Backend Communication

Controls encrypted communication between ingress controller and backend pods.

### Capabilities
- Enable SSL to backend services
- Enable mutual TLS (mTLS)
- Control backend protocol negotiation
- Pass encrypted traffic directly to pods

#### Supported Annotations

haproxy.org/server-ssl
haproxy.org/server-ca
haproxy.org/server-crt
haproxy.org/server-proto
haproxy.org/send-proxy-protocol
haproxy.org/ssl-passthrough

yaml
Copy code

These annotations enable secure, compliant backend communication patterns.

---

## Backend Isolation

Ensures backend configuration isolation when multiple ingresses reference the same service.

### Capabilities
- Prevent configuration conflicts
- Create dedicated backends per ingress
- Improve multi-tenant safety

#### Supported Annotation

haproxy.org/standalone-backend

yaml
Copy code

---

## Best Practices

- Use Service annotations for **backend-specific behavior**
- Prefer Backend CRD for reusable backend policies
- Avoid injecting large snippets unless necessary
- Validate backend SSL and mTLS settings carefully
- Monitor health checks and backend metrics after changes

---

## Summary

Service annotations provide precise, service-level control over backend behavior in the Haltdos Ingress Controller. By combining Kubernetes-native annotations with advanced HAProxy backend capabilities, they enable flexible, secure, and scalable service management without impacting global or ingress-level configuration.

This documentation intentionally balances **approachability for non-HAProxy users** with **full transparency for advanced operators**, ensuring clarity, control, and operational confidence across environments. :contentReference[oaicite:2]{index=2}