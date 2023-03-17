---
sidebar_position: 1
---

# Stack Status

Overview of Status of resources allocated to a stack

---

## Overview

All stacks have one or more instances associated with them. Each instance may be configured with one or more NIC cards sending and receiving traffic over them.

This status page shows the details of all instances, their health, the status of various services running in it as well as the status of traffic flowing through various NIC ports.

A sample instance status associated with a stack is shown below:

![stackstatus](/img/platform/v6/docs/stack_status1.png)

The status information shows: 

- Last Updated Time: Shows the last time when status was updated for the instance. By default, instance status is updated once every minute.

- Resource Utilisation: Shows the CPU, RAM and Hard disk utilisation in terms of percentage

- Service Status: Shows the status of various services running on the instance along with their up time.