---
sidebar_position: 0
pagination_prev: null
---

# Haltdos Platform

Overview of Haltdos Platform

---

## Overview

Haltdos is a security company providing next-generation security products. Our solutions are catered for enterprise regardless of the underlying infrastructure. All our security products are built on top of Haltdos Platform (hdPlatform) which is internationally certified with Common Criteria EAL 2+ certification.

---

## Infrastructure Agnostic  

hdPlatform separates logical entities from physical infrastructure. This allows hdPlatform to be installed in various flavors - SaaS, Hardware, or Virtual form factor. Separating logical entities from physical infrastructure provide the following benefits:

- Horizontally scale by adding more hardware
- Flexible Deployment for any environment
- Apps built on hdPlatform can work across any flavor - SaaS, Hardware or Virtual without compromising on features

---

## Separation of Planes

hdPlatform is divided into multiple planes - each with its dedicated functions and purpose.  

- **Management Plane**  
Covers all managerial aspects of installing, managing, and operating solutions provided by Haltdos. Operations such as updating policy, user management, installing updates, and reporting are done in this plane. This plane also exposes GUI, CLI, and API interfaces for user interaction and integration with 3rd party tools. For security reasons, except user creation, deletion, and change of user permission and administrator capabilities, all functionality of GUI can be managed through CLI as well.  

- **Enforcement Plane**  
Enforcement of policies is done through this plane. This plane connects to Management Plane for retrieving updates, policies. and procedures.  

- **Auxiliary Plane**  
The Enforcement Plane can encompass multiple instances to support High Availability / Clustering scenarios. The Auxiliary Plane manages status and intelligence sharing between multiple instances in the Enforcement Plane. The shared data includes connection status, SSL status, intel status such as blocked IP, state information such as variables, learning, rule staging, etc.  

- **Data Plane**  
All traffic flowing through your protected infrastructure is the Data Plane. All products and services by Haltdos are built as Apps in hdPlatform. These apps include Anti-DDoS, Web Application Firewall, Server Load Balancer, Global Server Load Balancer, Link Load Balancer, etc.  