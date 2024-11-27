---
sidebar_position: 6
---

# Virtualization

Support for multi-tenancy in appliance with virtualization technology.

---
:::note Note
This virtualization feature is only available when your license supports virtualization.
:::

## Overview  

Haltdos provides advanced application delivery and load balancing features to applications running on both physical and virtual machines. Haltdos offers vADC with built-in multi-tenancy which provides Virtualized ADC, Instantly Provisioned, Dynamic Resource Allocation, Easy Migration, Simple Orchestration, Centrally Managed. It is fast, scalable, and flexible.



The virtualization platform is built on top of Haltdos hypervisor technology that has been designed for low latency, high throughput solution with capabilities such as SRIOV, VM isolation, dynamic resizing, etc.  

![virtualization](/img/platform/v7/docs/virtualization.png)


##  Virtual Stack and Instances

In order to take advantage of virtualization technology, users will have to create a virtual stack to manage one or more virtual instances. Like your licensed stack, virtual stack provides full capability and flexibility of licensed stack with separate administration, RBAC control, policy management, etc. To create virtual stack, refer to Stack section.  

To create virtual instance, your license should support virtualization. On the original licensed stack, go to Instance section to create a Hypervisor VM (virtual instance). Please refer to Instance section for creating a VM. Once a VM has been created, you can assign that VM to a virtual stack. You have flexibility of choosing one or more virtual instances from different host machines (hypervisors). These pool of virtual instances will be configured to run all Apps configured on the instance (ADC, SLB, WAF, LLB, DDOS, etc.).  

:::note Note
Each virtual instance created requires a pre-built OS template that can be downloaded from OS Template section by administrator. Typical size of VM template ranges from **2 GB - 3 GB** depending upon the operating system and OS version.
:::

:::note Note
List of supported Hypervisors include: **Hyper-V**, **Kernel-based Virutal Machine (KVM)**, **Red Hat Virtualization**, **Xen hypervisor**, **VMWare vSphere**, **IBM PowerVM**
:::