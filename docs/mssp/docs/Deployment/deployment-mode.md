# MSSP Deployment
----


Haltdos license supports four modes of MSSP deployments depending upon MSSP network architecture and requirement. For deploying the MSSP license, the Haltdos deployment team will assist in deploying the solution in any of the following modes:

### Standalone Mode

In this mode of MSSP deployment, each sub-license created works as individual standalone ADC instances, including dedicated management inside each instance. High Availability can be achieved through VRRP enabled on multiple ADC instances and configuration changes can be synchronized across ADC instances using the Configuration Sync feature. This mode is beneficial when the end customer wants dedicated management for their ADC solution. However, there is an additional CPU, RAM, and disk space overhead to accommodate management features. In the event of configuring multiple ADC instances in Active-Active mode, the statistics gathered on traffic flowing through the ADC instance will be specific to that ADC instance. The overall consumption will need to be manually calculated across all ADC instances.

![Standalone Mode](/img/mssp/v8/docs/standalone-deployment.png)

### Centralized Management Mode

In this mode of MSSP deployment, each sub-license created will have a dedicated centralized management to manage one or more ADC instances. The management module will not be installed on the ADC instance - making the VM running the ADC instance dedicated for high throughput traffic processing. Similar to the Standalone Mode, the end customer gets a dedicated management VM for managing their ADC solution. However, there is an additional VM overhead for centralized management for every sub-license. Unlike the Standalone Mode, the centralized management calculates statistics across all ADC instances - giving a holistic view of traffic metrics across all ADC instances.

![Standalone Mode](/img/mssp/v8/docs/standalone-deployment2.png)

### Cluster Mode

this mode of MSSP deployment, there is one multi-tenant centralized management for all end-customers. Multiple sub-licenses can be loaded on the centralized management. The centralized management will manage all ADC instances associated with a sub-license. Moreover, it ensures the isolation of logs, statistics, and traffic across every sub-license. If desired, end customers can log onto the centralized management to view statistics, reports, and incidents, and perform policy changes on ADC instances associated with their license. The centralized management is designed to be scalable for mid-size MSSP deployments.

![Standalone Mode](/img/mssp/v8/docs/standalone-deployment3.png)

### Private Cloud Mode

While very similar to Cluster mode, this mode is designed to be horizontally scalable for large-scale MSSP deployment.

![private-cloud](/img/mssp/v8/docs/private-cloud.png)
