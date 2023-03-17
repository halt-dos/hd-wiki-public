# Listener 
Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers

---

## Overview 
Listeners are used for configuring websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource.

![Listener](/img/waf/v6/docs/listener.png)

![Listener](/img/waf/v6/docs/addlistener.png)

## How to Use :
1. Go to **Stack** > **WAF** > **Listeners**
2. Click **Add Listener button.**
3. Configure your settings.
4. Click **Save. Changes**

|Parameter | Accepted Values | Default 
| ----------- | ----------- |---------|
| Sub Domain| Website Name | Blank
| Reference|Clone existing Listener setting for new sub-domain|Empty
Service Type|Drop-down|HTTP
Origin Servers & port|Server IP’s with listening port(Ex. 8.8.8.8:80)|Blank

## Description 
1.**Sub Domain** :
This option allows user to specify fully qualified domain name of the website. Whenever adding the root domain, ensure it is empty.

2.**Reference** :
This option allows user to create new listener with different sub-domain by modifying an existing listener. It clones the same configuration in the new listener.

3.**Service Type**:
This option allows user to specify service type based on the protocol of backend application. The listener/subdomain can be created service type with any of the three protocols i.e. HTTP, TCP, UDP.

4.**Origin Servers**:
This option allows user to specify IP and listening port of the backend server wherein load balancing occurs. There can be combination of multiple IP and listening port.
