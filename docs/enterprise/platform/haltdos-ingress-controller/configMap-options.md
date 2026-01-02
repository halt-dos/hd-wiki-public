---
sidebar_position: 1
---

# Configuration Guide

---

## Overview

Haltdos Ingress Controller supports centralized and dynamic configuration using Kubernetes-native constructs. Global and ingress-level behavior can be customized using **ConfigMaps**, **Secrets**, and standard **Ingress resources**, allowing administrators to control traffic handling, security policies, SSL behavior, and performance tuning in a declarative manner.

Configuration changes are applied dynamically without requiring service restarts, enabling seamless updates across Kubernetes environments.

---

## Configuration Model

Haltdos Ingress Controller follows a layered configuration model to ensure flexibility and control:

- **Global Configuration** – Applied across all ingress routes using ConfigMaps  
- **Ingress-Specific Configuration** – Applied per application using Kubernetes Ingress definitions  
- **Secret-Based Configuration** – Used for certificates, authentication credentials, and trust material  

This layered approach ensures consistent policy enforcement while still allowing application-specific customization where required.

---

## Global Configuration Using ConfigMaps

A Kubernetes **ConfigMap** is used to define global behavior for the ingress controller. Settings defined here affect all applications managed by the controller and are typically used for security, traffic control, and performance defaults.

---

### Access Control

Administrators can control client access using IP-based policies configured at the global level. These controls help restrict access to trusted sources and protect applications from unauthorized traffic.

Typical access control capabilities include:
- Allowing traffic only from trusted IP addresses or CIDR ranges
- Blocking traffic from known malicious or unwanted sources
- Supporting both allow-list and deny-list based policies

Access control is commonly implemented using options such as **allow-list**, **whitelist**, **deny-list**, and **blacklist**.  
Detailed behavior and usage of these options are documented in the **Configuration Reference** section.

---

### Authentication and Authorization

The ingress controller supports authentication mechanisms that protect applications and sensitive endpoints from unauthorized access.

Authentication capabilities include:
- Basic authentication enforced at the ingress layer
- Configurable authentication realms presented to users
- Secure storage of credentials using Kubernetes Secrets

Authentication behavior is controlled using configuration options such as **auth-type**, **auth-realm**, and **auth-secret**.  
Refer to the **Configuration Reference** for detailed explanations of these parameters.

---

### SSL/TLS Configuration

SSL and TLS behavior can be customized globally to balance security, compatibility, and performance requirements.

Supported SSL/TLS capabilities include:
- SSL/TLS termination at the ingress layer
- SSL passthrough for end-to-end encryption
- HTTP-to-HTTPS redirection
- TLS protocol and cipher selection
- Client certificate authentication (mTLS)
- Certificate validation using trusted CA bundles

Common configuration options include **ssl-certificate**, **ssl-passthrough**, **ssl-redirect**, **client-ca**, **client-crt-optional**, and **tls-alpn**.  
Detailed definitions and usage scenarios are available in the **Configuration Reference** section.

---

### Traffic Routing and Load Balancing

Traffic routing and load balancing behavior can be tuned to ensure high availability and optimal distribution across backend services.

Key capabilities include:
- Multiple load-balancing algorithms
- Session persistence using cookies
- Health checks to monitor backend availability
- Path-based routing and request rewriting

These features are controlled using options such as **load-balance**, **cookie-persistence**, **check**, **check-http**, **check-interval**, **path-rewrite**, and **scale-server-slots**.

---

### Traffic Management and Rate Limiting

To protect applications from abuse, traffic spikes, and denial-of-service scenarios, the ingress controller provides fine-grained traffic management controls.

Traffic protection capabilities include:
- Request rate limiting
- Connection limiting
- Configurable rate thresholds and evaluation windows
- Custom response behavior when limits are exceeded

Rate limiting behavior is managed using options such as **rate-limit-requests**, **rate-limit-period**, **rate-limit-size**, and **rate-limit-status-code**.

---

### Header Manipulation

Administrators can modify HTTP headers to support backend integration, observability, and security requirements.

Header management capabilities include:
- Adding or modifying request headers before forwarding traffic
- Adding or modifying response headers before sending responses to clients
- Forwarding client identity and SSL metadata upstream
- Overriding Host headers when required

These behaviors are implemented using options such as **request-set-header**, **response-set-header**, **set-host**, **forwarded-for**, and **src-ip-header**.

---

### Logging and Monitoring Configuration

The ingress controller provides flexible logging and observability options to support troubleshooting, monitoring, and auditing.

Logging and monitoring features include:
- Customizable HTTP and TCP log formats
- Request and response data capture
- Integration with external syslog servers
- Support for real-time metrics and monitoring platforms

Logging-related configuration is handled using options such as **log-format**, **log-format-tcp**, **logasap**, **dontlognull**, **request-capture**, **request-capture-len**, and **syslog-server**.

---

### Timeouts and Performance Tuning

Connection handling and performance behavior can be optimized to suit different workloads and traffic patterns.

Performance tuning options include:
- Client-side and server-side connection timeouts
- Backend connection and request timeouts
- Queue and tunnel timeout management
- Maximum connection limits
- Worker thread configuration

These settings are controlled using options such as **timeout-client**, **timeout-server**, **timeout-connect**, **timeout-http-request**, **timeout-queue**, **timeout-tunnel**, **maxconn**, **pod-maxconn**, and **nbthread**.

---

## Secret-Based Configuration

Sensitive data such as certificates, private keys, and credentials are managed using Kubernetes **Secrets**. Secrets are consumed dynamically by the ingress controller and can be updated independently of ConfigMaps.

Secret-based configuration supports:
- Server and client SSL certificates
- Trusted CA bundles
- Mutual TLS (mTLS) authentication
- Secure backend communication

Common secret-related options include **server-ca**, **server-crt**, **server-ssl**, and **generate-certificates-signer**.

---

## Configuration Scope and Precedence

When multiple configuration layers are applied, precedence is evaluated in the following order:

1. **Ingress-specific configuration**
2. **Global ConfigMap configuration**
3. **Default controller settings**

This precedence model ensures that application-specific requirements can override global defaults without affecting other applications.

---

## Best Practices

- Use ConfigMaps to define global defaults and shared policies  
- Apply ingress-specific configuration only when application-level overrides are required  
- Store all sensitive information securely in Kubernetes Secrets  
- Validate configuration changes in staging environments before production rollout  
- Monitor logs and metrics after configuration updates to ensure expected behavior  

---
## Configuration Reference

This section explains all supported configuration options for the Haltdos Ingress Controller. Each option controls a specific aspect of traffic handling, security, SSL behavior, or performance tuning.

---

## Access Control & IP Filtering

### allow-list
Specifies a list of IP addresses or CIDR ranges that are explicitly allowed to access applications. Requests from any other source are denied. This is typically used to restrict access to trusted networks such as corporate IPs.

---

### deny-list / blacklist / whitelist
Controls access by blocking or allowing traffic based on source IP addresses or CIDR ranges.  
- **whitelist / allow-list** permits only listed IPs  
- **deny-list / blacklist** blocks listed IPs  

These options help protect applications from known malicious or unwanted sources.

---

## Authentication & Authorization

### auth-type
Defines the authentication mechanism used to protect ingress endpoints. Currently supports basic authentication.

---

### auth-realm
Specifies the authentication realm name presented to users during authentication. This text is displayed in the browser’s login prompt.

---

### auth-secret
References a Kubernetes Secret containing user credentials used for authentication. Credentials are stored securely and validated during client access.

---

## Backend Health & Availability

### check
Enables or disables health checks for backend services. When enabled, unhealthy backends are automatically removed from traffic rotation.

---

### check-http
Defines the HTTP endpoint used for health checks, such as `/health`. The ingress controller periodically sends requests to this endpoint to verify backend health.

---

### check-interval
Specifies how frequently health checks are performed. Shorter intervals provide faster detection of failures but may increase overhead.

---

## SSL / TLS & Certificate Management

### ssl-certificate
Specifies the SSL certificate used for terminating HTTPS traffic at the ingress layer.

---

### ssl-passthrough
When enabled, SSL traffic is forwarded directly to backend services without termination at the ingress layer. This is useful when backend services manage their own certificates.

---

### ssl-redirect
Automatically redirects HTTP traffic to HTTPS when SSL is enabled, enforcing secure communication.

---

### ssl-redirect-code
Defines the HTTP status code used for redirection, such as 301 (permanent) or 302 (temporary).

---

### ssl-redirect-port
Specifies the HTTPS port to which clients are redirected.

---

### client-ca
Specifies the trusted Certificate Authority (CA) used to validate client certificates in mutual TLS (mTLS) setups.

---

### client-crt-optional
Controls whether client certificates are optional or mandatory during TLS authentication.

---

### client-strict-sni
Enforces strict Server Name Indication (SNI) matching during TLS handshakes to prevent misrouted or spoofed connections.

---

### generate-certificates-signer
Defines a CA certificate used to dynamically generate and sign TLS certificates for incoming connections when on-the-fly certificate generation is enabled.

---

### tls-alpn
Specifies the Application-Layer Protocol Negotiation (ALPN) protocols advertised during TLS handshakes, such as HTTP/2 or HTTP/1.1.

---

## Load Balancing & Traffic Distribution

### load-balance
Defines the load-balancing algorithm used to distribute traffic across backend services, such as round-robin or least connections.

---

### cookie-persistence
Enables session persistence using cookies, ensuring requests from the same client are routed to the same backend.

---

### cookie-persistence-no-dynamic
Similar to cookie persistence, but disables dynamic cookie behavior for stricter session control.

---

### scale-server-slots
Controls the number of backend server slots allocated, allowing the ingress controller to scale backend definitions dynamically.

---

## Traffic Control & Rate Limiting

### rate-limit-period
Defines the time window used for rate limiting calculations.

---

### rate-limit-requests
Specifies the maximum number of requests allowed within the defined period. Requests exceeding this limit are denied.

---

### rate-limit-size
Defines how many client IPs are tracked for rate limiting purposes.

---

### rate-limit-status-code
Specifies the HTTP response code returned when a client exceeds rate limits.

---

## HTTP Behavior & Header Management

### request-set-header
Adds or modifies HTTP request headers before forwarding traffic to backend services.

---

### response-set-header
Adds or modifies HTTP response headers before sending responses to clients.

---

### set-host
Overrides the Host header value sent to backend services.

---

### forwarded-for
Controls whether the original client IP is forwarded using headers such as `X-Forwarded-For`.

---

### src-ip-header
Specifies a custom header used to pass the client’s source IP to backend services.

---

## Path & Request Manipulation

### path-rewrite
Rewrites incoming request paths before forwarding them to backend services. Commonly used when backend paths differ from public URLs.

---

### request-redirect
Redirects incoming requests to a different host or endpoint.

---

### request-redirect-code
Specifies the HTTP status code used for redirection.

---

## Logging & Observability

### log-format
Defines the format of HTTP access logs generated by the ingress controller.

---

### log-format-tcp
Defines the format for TCP traffic logs.

---

### logasap
Logs requests as soon as they are received, instead of waiting for completion.

---

### dontlognull
Suppresses logging for empty or null connections to reduce log noise.

---

### request-capture
Captures specific request elements (headers, cookies) and includes them in logs for troubleshooting.

---

### request-capture-len
Defines the maximum length of captured request data.

---

### syslog-server
Configures external syslog servers for forwarding logs, enabling centralized logging and monitoring.

---

## Performance & Connection Tuning

### maxconn
Defines the maximum number of concurrent client connections allowed.

---

### pod-maxconn
Limits the number of concurrent connections per backend pod.

---

### nbthread
Specifies the number of worker threads used by the ingress controller.

---

### hard-stop-after
Forces termination of ongoing connections after a defined duration during shutdown or reload.

---

### timeout-client / timeout-server
Defines inactivity timeouts for client-side and server-side connections.

---

### timeout-connect
Specifies the maximum time allowed to establish a connection to a backend service.

---

### timeout-http-request
Limits the amount of time allowed to receive a complete HTTP request.

---

### timeout-http-keep-alive
Defines how long idle keep-alive connections are maintained.

---

### timeout-queue
Specifies how long a request can remain queued before being rejected.

---

### timeout-tunnel
Defines the maximum duration for tunneled connections such as WebSockets.

---

## Advanced Configuration

### backend-config-snippet
Allows advanced backend-specific configuration snippets for fine-grained traffic behavior.

---

### frontend-config-snippet
Allows advanced frontend-level configuration applied to all incoming traffic.

---

### global-config-snippet
Applies low-level global configuration affecting the entire ingress controller.

---

### stats-config-snippet
Customizes statistics and monitoring endpoints for administrative visibility.

---

## Backend Security (mTLS)

### server-ca
Specifies the CA used to validate backend server certificates for mutual TLS authentication.

---

### server-crt
Specifies the client certificate used when authenticating to backend services.

---

### server-proto
Defines the protocol used to communicate with backend services, such as HTTP/2.

---

### server-ssl
Enables SSL/TLS when connecting to backend services.

---

## Protocol & Network Options

### proxy-protocol
Enables PROXY protocol support to preserve client connection information.

---

### send-proxy-protocol
Controls how PROXY protocol information is sent to backend services.

---

### quic-alt-svc-max-age
Controls how long QUIC protocol alternatives are cached by clients.

---

## Summary

These configuration options provide granular control over security, routing, performance, and observability within the Haltdos Ingress Controller. By combining global defaults with ingress-specific overrides, administrators can build secure, scalable, and highly optimized Kubernetes ingress environments.
