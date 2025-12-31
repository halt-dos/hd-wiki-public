---
sidebar_position: 0
pagination_prev: null
---

# Haltdos Platform

---

## Overview

Haltdos is a security company providing next-generation security products. Our solutions are catered for enterprise regardless of the underlying infrastructure. All our security products are built on top of Haltdos Platform (hdPlatform) which is internationally certified with Common Criteria EAL 2+ certification.

## Infrastructure Agnostic  

Haltdos Platform separates logical entities from physical infrastructure. This allows hdPlatform to be installed in various flavors - SaaS, Hardware, or Virtual form factor. Separating logical entities from physical infrastructure provide the following benefits:

- Horizontally scale by adding more hardware
- Flexible Deployment for any environment
- Apps built on hdPlatform can work across any flavor - SaaS, Hardware or Virtual without compromising on features

## Security Management

Security Management in the Haltdos Platform provides centralized control over security-related configurations, credentials, and trust assets used across all platform planes and services. It enables administrators to manage SSL/TLS certificates, cryptographic materials, and security policies from a unified interface, reducing operational complexity and administrative overhead. The platform is designed to support integration with centralized certificate management systems, allowing streamlined certificate provisioning, renewal, rotation, and revocation to simplify SSL lifecycle management across deployed services. Security Management ensures consistent enforcement of trust and security controls while maintaining high availability and compliance across the platform.

## Policy Management

The Haltdos platform supports dynamic creation and management of Layer 4 and Layer 7 services on load balancer systems through a dedicated **SYNC** machine designed specifically for orchestration integration. The SYNC machine continuously monitors the orchestration platform’s API server and automatically updates load balancer configurations based on changes in containerized applications, such as service creation, scaling, or deletion. This enables seamless and automated traffic distribution across services while ensuring configuration consistency and service availability without manual intervention.

## OS Hardening

The Hardening OS forms the secure foundation of the Haltdos Platform and is a purpose-built, security-hardened operating system designed specifically to run Haltdos security applications. It minimizes the attack surface by disabling unnecessary services, enforcing strict access controls, and applying system-level security hardening to ensure integrity, availability, and resilience of the platform. The Hardening OS is tightly integrated with the underlying hardware in appliance deployments and is optimized to support all platform planes without relying on hypervisors or virtualization components for core operation.

## Reporting   

Reporting in the Haltdos Platform is provided as a centralized platform service that collects, aggregates, and presents operational, security, and traffic-related data generated across all platform planes. It offers real-time visibility and historical insights through dashboards, logs, and reports, enabling monitoring of system health, security events, traffic patterns, policy actions, and compliance metrics. The reporting service supports auditing, troubleshooting, and capacity planning, and allows data export and integration with external monitoring tools, SIEM systems, and analytics platforms.

## Separation of Planes

Haltdos Platform is divided into multiple planes - each with its dedicated functions and purpose.  

- **Management Plane**  
Covers all managerial aspects of installing, managing, and operating solutions provided by Haltdos. Operations such as updating policy, user management, installing updates, and reporting are done in this plane. This plane also exposes GUI, CLI, and API interfaces for user interaction and integration with 3rd party tools. For security reasons, except user creation, deletion, and change of user permission and administrator capabilities, all functionality of GUI can be managed through CLI as well.  

- **Enforcement Plane**  
Enforcement of policies is done through this plane. This plane connects to Management Plane for retrieving updates, policies. and procedures.  

- **Auxiliary Plane**  
The Enforcement Plane can encompass multiple instances to support High Availability / Clustering scenarios. The Auxiliary Plane manages status and intelligence sharing between multiple instances in the Enforcement Plane. The shared data includes connection status, SSL status, intel status such as blocked IP, state information such as variables, learning, rule staging, etc.  

- **Data Plane**  
All traffic flowing through your protected infrastructure is the Data Plane. All products and services by Haltdos are built as Apps in hdPlatform. These apps include Anti-DDoS, Web Application Firewall, Server Load Balancer, Global Server Load Balancer, Link Load Balancer, etc.  

