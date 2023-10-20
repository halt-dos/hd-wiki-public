# Listeners
Make DDOS listen on specific ports to accept connections and mitigate the attacks.

---

## Overview 
Listeners are used for configuring websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource.


![listner](/img/ddos/v7/docs/listner.png)

### How to Use

1. Go to **Apps** > **DDoS** > **Listeners**

2. Click **Add Listener button.**

3. Configure listener as per requirement.

4. Click on **Save Changes**.

![add-listner](/img/ddos/v7/docs/add_listner.png)

|Parameter | Accepted Values | Default 
| ----------- | ----------- |---------|
| Domain/Virtual IP| Website Name | Blank
|Service Type|Drop-down|HTTP
|Origin Servers|Server IP’s with listening port(Ex. 192.168.0.15)|Blank

### Description 

##### **Domain/Virtual IP**
This option allows user to specify fully qualified domain name of the website. Whenever adding the root domain, ensure it is empty.

##### **Service Type**
This option allows user to specify service type based on the protocol of backend application. The listener/subdomain can be created service type with any of the two protocols i.e. HTTP, TCP. When HTTP is selected, DDOS will provide L7 functionality and configurations. For TCP listeners, L4 configurations and functionalities will be available to configure.

##### **Origin Servers**
This option allows user to specify virtual IP the backend server IP where request will be forwarded post offloading. This IP can be added using SSL offloading option. Once the virtual IPs will be added in the SSL offloading, all those IPs will be visible in this field.
