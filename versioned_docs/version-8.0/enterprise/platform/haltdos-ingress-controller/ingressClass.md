---
sidebar_position: 6
---

# IngressClass

---

## Overview

An **IngressClass** defines which ingress controller should process a given Ingress resource. This is particularly useful in Kubernetes clusters where **multiple ingress controllers** are deployed, each serving different environments, tenants, or workloads.

By assigning a unique class name to each ingress controller and referencing that class from Ingress resources, traffic can be routed to the appropriate controller instance in a predictable and controlled manner.

IngressClass is supported natively in Kubernetes **v1.18 and later** and is the recommended mechanism for targeting ingress controllers.

---

## When to Use IngressClass

IngressClass is recommended when:

- Multiple ingress controllers run in the same cluster
- Different teams or environments require isolation
- Separate ingress controllers are used for production, staging, or internal traffic
- You want explicit control over which controller processes an Ingress

---

## How IngressClass Works

IngressClass introduces a clear mapping between:

- **Ingress resources** (traffic definitions)
- **Ingress controller instances** (traffic processors)

An ingress controller advertises a **class name**, and an Ingress resource specifies which class it targets. Only the matching ingress controller processes that resource.

---

## Setting the Ingress Controller Class

Each ingress controller must be configured with a **unique class name**. This can be done either **using Helm** or **manually**.

---

## Setting the Class Name Using Helm

When installing the Haltdos Ingress Controller using Helm, the ingress class can be configured using the `controller.ingressClass` value.

If not specified, the default class name is `haproxy`.

### Example: Install with a Custom Class Name

```
helm install haltdos-ingress haltdos/kubernetes-ingress \
  --create-namespace \
  --namespace haltdos-controller \
  --set controller.ingressClass=prod
```

### What This Configuration Does
Setting controller.ingressClass=prod automatically:

- Adds the startup argument --ingress.class=prod to the ingress controller pods

- Creates an IngressClass resource with the name prod

- Registers the controller under that class for Kubernetes to use

- This is the recommended approach when deploying via Helm.

- Setting the Class Name Without Helm

When deploying without Helm, the ingress class must be configured manually.

**Step 1: Configure the Ingress Controller Startup Argument**

Add the --ingress.class argument to the ingress controller container.

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: haltdos-ingress-controller
  namespace: haltdos-controller
spec:
  template:
    spec:
      containers:
      - name: haltdos-ingress
        image: haltdos/kubernetes-ingress
        args:
          - --configmap=haltdos-controller/haltdos-ingress
          - --ingress.class=prod-controller
```

Apply the deployment:

```
kubectl apply -f haltdos-ingress.yaml
```

**Step 2: Create the IngressClass Resource**

The IngressClass resource maps the class name to the controller identifier.

```
apiVersion: networking.k8s.io/v1
kind: IngressClass
metadata:
  name: prod
spec:
  controller: haproxy.org/ingress-controller/prod-controller
Apply the resource:
```

```
kubectl apply -f prod-ingressclass.yaml
```

Once created, Kubernetes associates the class name prod with the specified ingress controller.

### Targeting an Ingress Controller from an Ingress Resource

To route traffic through a specific ingress controller, the Ingress resource must reference the desired class.

### Using ingressClassName (Recommended)

The modern and recommended approach is to use the ingressClassName field.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example
spec:
  ingressClassName: prod
  rules:
    - host: example.k8s.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: http-echo
                port:
                  number: 80
```

This explicitly tells Kubernetes to route this Ingress through the ingress controller associated with the prod class.

Using ingress.class Annotation (Legacy)
The ingress.class annotation is a legacy mechanism and should only be used for backward compatibility.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example
  annotations:
    ingress.class: prod
spec:
  rules:
    - host: example.k8s.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: http-echo
                port:
                  number: 80
```

:::note
Prefer ingressClassName for all new deployments.
:::

**Targeting TCP Custom Resources**
For TCP Custom Resources (supported in Haltdos Ingress Controller v3.1 and later), the ingress controller can be targeted using the ingress.class annotation.

Example: TCP Resource with Ingress Class

```
apiVersion: ingress.v1.haproxy.org/v1
kind: TCP
metadata:
  name: example-tcp
  annotations:
    ingress.class: prod
spec:
  - name: example-service
    frontend:
      name: example-frontend
      tcplog: true
      binds:
        - name: bind1
          port: 2000
    service:
      name: example-service1
      port: 3000
```

This ensures that the TCP resource is processed only by the ingress controller associated with the prod class.

## Best Practices

- Use IngressClass to clearly separate traffic responsibilities

- Assign unique class names per ingress controller

- Prefer ingressClassName over legacy annotations

- Avoid sharing the same class across unrelated controllers

- Document class usage for multi-team clusters

## Summary

IngressClass provides a clean, Kubernetes-native mechanism to control which ingress controller processes a given resource. By clearly defining controller class names and referencing them from Ingress and TCP resources, administrators can safely operate multiple ingress controllers within the same cluster while maintaining isolation, predictability, and operational clarity.