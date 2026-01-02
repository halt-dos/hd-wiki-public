---
sidebar_position: 9
---

# Helm Values Files

---

## Overview

When installing or configuring the **Haltdos Ingress Controller** using **Helm**, configuration parameters can be provided either through multiple `--set` command-line flags or through a **Helm values file**.

A **values file** (`values.yaml`) provides a clean, reusable, and version-controlled way to define configuration overrides for the ingress controller. It is especially useful for complex deployments where managing numerous `--set` flags becomes error-prone and difficult to maintain.

Values files can be used during:
- Initial installation (`helm install`)
- Post-install configuration changes (`helm upgrade`)

> **Note:** Command-line `--set` options always take precedence over values defined in a values file.

---

## Why Use a Values File

Using a values file is recommended when:

- Managing complex or large Helm configurations
- Maintaining consistent configurations across environments
- Version-controlling deployment settings
- Reducing human error during installation or upgrades
- Simplifying CI/CD and GitOps workflows

---

## Values File vs `--set` Flags

| Method        | Use Case |
|---------------|---------|
| `--set` flags | Small, one-time configuration changes |
| `values.yaml` | Structured, reusable, and long-term configuration |

In practice, **values files are preferred** for production and enterprise environments.

---

## Using a Values File Instead of `--set`

### Example: Using `--set` Flags

```
helm install haltdos-ingress haltdos/kubernetes-ingress \
  --create-namespace \
  --namespace haltdos-controller \
  --set controller.service.nodePorts.http=30000 \
  --set controller.service.nodePorts.https=30001 \
  --set controller.service.nodePorts.stat=30002 \
  --set controller.service.nodePorts.prometheus=30003
```

### Equivalent Configuration Using a Values File
Create a values.yaml file:

```
controller:
  service:
    nodePorts:
      http: 30000
      https: 30001
      stat: 30002
      prometheus: 30003
```

Install using the values file:

```
helm install -f values.yaml haltdos-ingress haltdos/kubernetes-ingress \
  --create-namespace \
  --namespace haltdos-controller
```
This approach is cleaner, easier to review, and simpler to reuse.

### Using Values Files for Service Annotations
Values files can also be used to configure service annotations, which are commonly required when deploying the ingress controller behind cloud load balancers.

### Example: Using --set Flags

```
helm install haltdos-ingress haltdos/kubernetes-ingress \
  --set controller.kind=DaemonSet \
  --set controller.ingressClass=haproxy \
  --set controller.service.type=LoadBalancer \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/aws-load-balancer-cross-zone-load-balancing-enabled"="true" \
  --set controller.service.annotations."service\.beta\.kubernetes\.io/aws-load-balancer-internal"="0.0.0.0/0"
```

### Equivalent Values File Configuration

```
controller:
  kind: DaemonSet
  ingressClass: haproxy
  service:
    type: LoadBalancer
    annotations:
      service.beta.kubernetes.io/aws-load-balancer-cross-zone-load-balancing-enabled: "true"
      service.beta.kubernetes.io/aws-load-balancer-internal: "0.0.0.0/0"
```

Install using:

```
helm install -f values.yaml haltdos-ingress haltdos/kubernetes-ingress
```

### Using Values Files for Startup Arguments
Startup arguments passed to the ingress controller can also be defined in a values file using the controller.extraArgs field.

This is commonly used to configure:

- TCP services

- Custom ConfigMaps

- Advanced controller behavior

Example: Configuring TCP Services

```
controller:
  service:
    tcpPorts:
      - name: mysql
        port: 3306
        targetPort: 3306
        protocol: TCP
  extraArgs:
    - --configmap-tcp-services=default/tcp
```

**Important:** The referenced ConfigMap must exist before running helm install or helm upgrade.

Equivalent --set Command

```
helm install haltdos-ingress haltdos/kubernetes-ingress \
  --set-string "controller.extraArgs={--configmap-tcp-services=default/tcp}"
```

Using a values file is strongly recommended for readability and long-term maintenance.

### Combining Values Files and --set
It is possible to combine both approaches:

```
helm install -f values.yaml haltdos-ingress haltdos/kubernetes-ingress \
  --set controller.replicaCount=3
```

In this case:

- values.yaml provides the base configuration

- --set overrides only specific parameters

### Best Practices
- Store values.yaml in version control

- Maintain separate values files for different environments (dev, staging, prod)

- Use helm upgrade -f values.yaml for controlled updates

- Avoid excessive --set usage in production

- Validate changes in staging before upgrading production clusters

### Summary
Helm values files provide a clean, scalable, and enterprise-ready mechanism for configuring the Haltdos Ingress Controller. By externalizing configuration into structured YAML files, administrators can simplify deployments, reduce errors, and maintain consistent configurations across Kubernetes environments.

Values files are the recommended approach for production-grade installations and ongoing operational management.