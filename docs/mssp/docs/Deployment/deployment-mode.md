# Deployment Mode
---

Haltdos solutions supports multiple deployment options for seamless integration into existing network.
The solution supports the following deployment options :

### Inline Reverse Proxy Mode

In this mode, the solution will be placed inline in the network. In Reverse Proxy mode, all incoming and outgoing traffic will pass through the solution and can inspect both incoming request and outgoing responses. In this mode, there are two sub-modes of implementation:

![inline-reverse-proxy](/img/mssp/v8/docs/inline-reverse-proxy.png)

### ONE-ARM Mode

The solution can be configured in One Arm mode as a reverse proxy. In One Arm mode, all incoming and outgoing traffic will pass through the solution and can inspect both incoming request and outgoing responses. All the traffic will pass through the same network interface.

![one-arm-mode](/img/mssp/v8/docs/one-arm-mode.png)

### N-ARM Mode

The solution can be configured in N-arm mode as a reverse proxy. In N-arm mode, all incoming and outgoing traffic will pass through the solution and can inspect both incoming request and outgoing responses. All the communication between the client and the solution will be handled by one network interface and the communication between the solution and server will be handled by another network interface.

![n-arm-mode](/img/mssp/v8/docs/n-arm-mode.png)

### Offline Mode

In this mode of deployment, the solution will run in detection mode only (passive / promiscuous). The solution will receive traffic either via SPAN port(Switched Port Analyzer) in which the Router (or the switch) will send mirrored traffic via Span port for detecting application layer attacks.

![offline-mode](/img/mssp/v8/docs/offline-mode.png)