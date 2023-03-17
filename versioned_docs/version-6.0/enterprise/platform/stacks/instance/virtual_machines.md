---
sidebar_position: 8
---

# Virtual Machines

Built on proprietary hypervisor technology

---

Haltdos ADC leverages proprietary hypervisor technology to provide virtual instances (VM) that can run independently of other VMs. Virtualization provides ability for organizations to support multi-tenancy and extend Haltdos hardware to support multiple self-contained applications behind different virtual instances. The host hardware machine along with virtual instances can be used to run various apps (WAF, SLB, ADC, DDOS, GSLB, etc.) depending upon your configured license. 

Haltdos leverages the use of SR-IOV and fast path technology to optimize traffic to and from virtual instance to ethernet NICs. The number of virtual instances that can be created depends on hardware capacity and configured license. Multiple virtual instances can be grouped together in a virtual stack that can be managed by different administrators. 

Virtual Instances can be resized based to increase / decrease CPU, RAM & Hard Disk. Haltdos provides pre-built images supporting different Operating Systems (OS) and versions. You can manage your OS templates from Haltdos console (see VM Templates) .

![virtual_machines](/img/platform/v6/docs/virtual_machines1.png)

:::info
The resources allocated to each virtual instance is dedicated to the virtual instance and cannot be leveraged by another virtual instance. This is done to ensure complete isolation of virtual instances.
:::

### How to Use:


![virtual_machines](/img/platform/v6/docs/virtual_machines2.png)

1. Go to Stack > Instances > (Select Instance) > Virtual Machines
2. Click Add
3. Configure CPU, RAM, OS Template, and Virtual Stack
4. Click Save

### VM Management

**Resizing VM**

Once created, you can reconfigure the VM by stopping the VM and resizing the CPU, RAM and Hard Disk as per physical availability on the host machine.

**Stopping & Rebooting VM**

The VM can be stopped and rebooted from the GUI / CLI. Do note, changing the state of an actively serving virtual instance may result in downtime. However, changing the state of one virtual instance will not have any effect on other running virtual instance.

**Deleting VM**

The VM can also be deleted if necessary. Do note, deleting an actively serving virtual instance may result in downtime. However, deleting one virtual instance will not have any effect on other running virtual instance.

:::info
After crearting a VM under this option user can go to stack page and add a virtual stack by clicking on add stack option.
:::