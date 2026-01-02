---
sidebar_position: 3
---

# Backend CRD Configuration Guide

---

## Overview

The **Backend Custom Resource (CRD)** extends the Kubernetes API to provide fine-grained control over how traffic is load balanced, secured, and managed across backend pods. It allows administrators to define backend-specific behavior independently of Ingress resources, enabling advanced traffic management, health checks, SSL handling, and performance tuning.

The Backend CRD is designed for scenarios where application-level requirements exceed the capabilities of standard Ingress configuration and require deeper control over backend behavior.

If the Haltdos Ingress Controller is installed using Helm, the Backend CRD is installed and managed automatically. :contentReference[oaicite:0]{index=0}

---

## Why Use the Backend CRD

The Backend CRD enables:

- Advanced backend-level traffic control
- Precise load-balancing behavior per service
- Custom health checks and failover strategies
- Backend SSL and protocol customization
- Performance tuning for high-throughput workloads
- Decoupling backend behavior from routing rules

This makes it especially useful for **enterprise applications**, **stateful services**, and **non-HTTP workloads**.

---

## Backend CRD Installation

Before using the Backend CRD, its definition must be installed in the Kubernetes cluster.

- When installed via **Helm**, the CRD is applied automatically
- When installed manually, the CRD can be applied using `kubectl`

Once installed, Backend resources become available as native Kubernetes objects and can be managed using standard Kubernetes workflows.

---

## Backend CRD Usage Model

The Backend CRD follows a **declare-and-attach** model:

1. **Declare** backend behavior using a `Backend` custom resource  
2. **Attach** the Backend resource to traffic using:
   - A global ConfigMap
   - An Ingress annotation
   - A Service annotation

This allows backend behavior to be applied globally, per application, or per service.

---

## Example: Backend Resource Definition

```yaml
apiVersion: ingress.haltdos.io/v1
kind: Backend
metadata:
  name: example-backend
  namespace: default
spec:
  config:
    balance:
      algorithm: leastconn
```

This example configures backend traffic to use a least-connections load-balancing algorithm.

## Applying Backend Configuration
### Apply to All Services (Global)
A Backend CRD can be applied globally by referencing it in the ingress controller ConfigMap.

```
  cr-backend: default/example-backend
```
This ensures the backend configuration applies to all services managed by the ingress controller.

### Apply via Ingress Resource
Backend behavior can be applied to all services routed by a specific Ingress using annotations.

```
metadata:
  annotations:
    haltdos.io/cr-backend: default/example-backend
```
This approach applies backend rules only to traffic handled by that Ingress.

### Apply to a Specific Service
To apply backend behavior to a single service, annotate the Service definition.

```
yaml
metadata:
  annotations:
    haltdos.io/cr-backend: default/example-backend
```
This allows precise backend customization for individual services.

Backend Configuration Capabilities
The Backend CRD supports a wide range of configuration capabilities, grouped into the following functional areas.

Load Balancing Behavior
Backend traffic distribution can be customized using multiple algorithms and strategies, including:

Round-robin and least-connections algorithms

Hash-based load balancing

Cookie-based session persistence

Preference for previously selected backend servers

These options help optimize traffic distribution based on application characteristics.

Health Checks and Availability
The Backend CRD supports advanced health checking mechanisms to ensure traffic is routed only to healthy backend pods.

Capabilities include:

TCP and HTTP health checks

Custom health check endpoints

Check intervals and timeouts

Rise and fall thresholds

External and protocol-specific health checks

This ensures high availability and rapid failure detection.

SSL and Backend Security
Backend-level SSL and security behavior can be controlled independently of ingress-level SSL termination.

Supported capabilities include:

Backend SSL enablement

Certificate and CA validation

TLS protocol and cipher configuration

Mutual TLS (mTLS) between ingress and backend

SNI and ALPN configuration

These features are essential for secure, compliance-driven deployments.

Connection Handling and Timeouts
Backend connection behavior can be tuned to suit different traffic patterns and workloads.

Configuration options include:

Backend connection timeouts

Request and response timeouts

Queue timeouts

Tunnel and long-lived connection handling

Retry and redispatch behavior

This allows fine control over latency, retries, and resource usage.

HTTP Behavior and Protocol Control
For HTTP-based workloads, the Backend CRD supports:

HTTP connection reuse and keep-alive tuning

Header handling and forwarding behavior

Path and request manipulation

Protocol-specific optimizations (HTTP/1.1, HTTP/2)

Buffering and request handling behavior

These settings help optimize application performance and compatibility.

Session Persistence and State Management
Stateful applications can leverage backend persistence features such as:

Cookie-based session stickiness

Persistence rules and conditions

Stick tables for tracking client state

Forced or ignored persistence behavior

This ensures consistent routing for session-dependent applications.

Logging, Observability, and Debugging
The Backend CRD provides backend-specific observability capabilities, including:

Backend log tagging

Health check logging

Error handling and custom error responses

Statistics and administrative visibility

Integration with monitoring and logging systems

These features assist in troubleshooting and operational monitoring.

Performance and Scaling Controls
Backend performance can be tuned using:

Maximum connection limits per backend

Server weight and capacity tuning

Connection reuse and pooling behavior

Thread and process binding options

Slow start and ramp-up behavior

These options enable backend scaling and performance optimization.

Configuration Scope and Precedence
When Backend CRD configuration overlaps with other configuration layers, precedence is applied as follows:

Service-level Backend CRD attachment

Ingress-level Backend CRD attachment

Global Backend CRD configuration

Default controller behavior

This ensures precise control without unintended overrides.

Best Practices
Use Backend CRDs for advanced backend requirements only

Prefer Ingress configuration for routing and simple policies

Apply Backend CRDs at the narrowest scope required

Validate changes in staging before production rollout

Monitor backend health and logs after configuration updates

Summary
The Backend CRD provides a powerful and flexible mechanism for defining backend-specific behavior within the Haltdos Ingress Controller. By separating backend configuration from routing logic, it enables precise control over load balancing, health checks, SSL security, and performance tuning, making it well suited for complex and enterprise-grade Kubernetes deployments.