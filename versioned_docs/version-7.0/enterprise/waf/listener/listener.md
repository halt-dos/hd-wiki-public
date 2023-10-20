# Listener 
Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers

---

## Overview 
Listeners are used for configuring websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource. 

Listeners are commonly used to integrate a website into the WAF system. The WAF solution will only listen to domains/VIPs that have been added to it.

When we add a website to WAF, we must include our backend server and its port number.

![Listener](/img/waf/v7/docs/listeners.png)

![Listener](/img/waf/v7/docs/addinglisteners.png)

## How to Use :
1. Go to **Apps** > **WAF** > **Listeners**
2. Click **Add Listener button.**
3. Configure your settings.
4. Click **Save Changes**

|Parameter | Accepted Values | Default 
| ----------- | ----------- |---------|
| Domain/Virtual IP| Website Name | Blank
| Reference|Clone existing Listener setting for new subdomain|Empty
Service Type|Drop-down|HTTP
Origin Servers & port|Server IP’s with listening port(Ex. 8.8.8.8:80)|Blank

## Description 
##### **Domain / Virtual IP**
This option allows user to specify fully qualified domain name of the website. Whenever adding the root domain, ensure it is empty.

##### **Reference**
This option allows user to create new listener with different subdomain by modifying an existing listener. It clones the same configuration in the new listener.

##### **Service Type**
This option allows user to specify service type based on the protocol of backend application. The listener/subdomain can be created service type with any of the three protocols i.e. HTTP, TCP, UDP.

##### **Origin Servers**
This option allows user to specify IP and listening port of the backend server wherein load balancing occurs. There can be combination of multiple IP and listening port.

For example, we want to add a backend server 10.0.0.45 with its listening port 443, we can use syntax '10.0.0.45:443'.
