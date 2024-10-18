# Cluster Deployment
----

Regardless of the mode of deployment, Haltdos solution supports high availability cluster deployment option. It is a recommended practice to ensure smooth uninterrupted operations even under stressed environments. Haltdos solution instances use VRRP protocol for High Availability (N+1) where one device can run in Active mode while the other devices is run in standby mode. The solution can also be configured to run in Active-Active mode with support for cluster deployment with all instances of the solution running in Active mode and handling application traffic simultaneously.

### Centralized Management

In case of high availability deployment, each solution instance needs to coordinate and share data between them. This requires a central management server (Hardware or VM) that provides a GUI for operators to configure and disseminate policy across all instances and coordinate data sharing between them. Haltdos Central Management solution also provides multi-tenancy support in case the customers wish to have two or more clusters of Haltdos solution instances that have separate policies and manage different applications. The same capability also allows customers to configure a single central management for monitoring and configuring Haltdos solution instances across DC & DR.
