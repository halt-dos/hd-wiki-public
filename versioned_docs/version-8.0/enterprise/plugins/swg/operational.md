# Operational Settings

---

## Overview

Operational Settings allow users to fine-tune how SWG handles web traffic and connections. Users can block specific connections based on IP ranges (public or private), control data compression, configure listening host and ports, and adjust proxy modes to suit different deployment scenarios. These configurable parameters enhance the gateway’s performance, security, and adaptability, ensuring optimal operation in diverse network environments.

![operational](/img/plugins/swg/swg_operational.png)

### Description 

##### Enable Anti-Compression:
Option to send uncompressed data to maintain data integrity during inspection.

```
    Accepted values: Enable / Disable

    Default: Disabled
```


##### Block Connections from Public IP Addresses:
Provides control over network access by blocking unwanted connections from Public IP addresses.

```
    Accepted values: Enable / Disable

    Default: Enabled
```


##### Block Connections from Private IP Addresses:
Provides control over network access by blocking unwanted connections from Private IP addresses.

```
    Accepted values: Enable / Disable

    Default: Disabled
```


##### HTTP Body Size Limit:
Sets a byte size limit for HTTP request and response bodies to control data flow and resource usage.

```
    Accepted values: Integer

    Default: 0
```


    Metric: Kilobytes

##### Connection Strategy:
Configurable to determine when server connections are established.

```
    Accepted values: EAGER / LAZY

    Default: EAGER
```


- **LAZY** : When set to LAZY, Haltdos SWG tries to defer establishing an upstream connection as long as possible. This makes it possible to use server replay while being offline. 

- **EAGER**: When set to eager, Haltdos SWG can detect protocols with server-side greetings, as well as accurately mirror TLS ALPN negotiation.


##### Enable HTTP 2.0:
Allows the proxy to support modern HTTP protocols for better performance and enhanced security.

```
    Accepted values: Enable / Disable

    Default: Disabled
```


##### HTTP2 Keepalive Ping:
Sends periodic PING frames on idle connections to keep them open or terminate when necessary.

```
    Accepted values: Integer

    Default: 58
```


##### Enable HTTP 3.0:
Allows the proxy to support modern HTTP protocols for better performance and enhanced security.

```
    Accepted values: Enable / Disable

    Default: Disabled
```


##### Listen Host:
Specifies the IP address on which the proxy will operate.

```
    Accepted values: IP

    Default: 127.0.0.1
```


##### Listen Port:
Specifies the Port on which the proxy will operate.

```
    Accepted values: Integer

    Max: 65535

    Min: 0

    Default: 443
```


##### Proxy Mode:
Configures the type of proxy server to spawn, tailoring the deployment to specific use cases.

```
    Accepted values: DEFAULT / TRANSPARENT / SOCKS5

    Default: DEFAULT
```


##### Stream Large Bodies:
Streams large responses directly to the client, useful for handling large data transfers.

```
    Accepted values: Integer

    Default: 0
```


    Metric: Kilobytes

##### WebSocket Enabled:
Allows WebSocket traffic through the proxy, providing support for real-time web applications.

```
    Accepted values: Enable / Disable

    Default: Disabled
```


