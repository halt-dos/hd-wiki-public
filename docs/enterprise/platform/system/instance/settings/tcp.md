---
sidebar_position: 4
---

# TCP Setting

---
It shows the configuration regarding TCP Setting

![Monitor](/img/platform/v8/docs/tcpset.png)  

#### How to Use:

1. 1. Go to **Stack > Infrastructure > Instance > (Select Instance) > Setting > TCP Setting**
2. Configure your settings
3. Click **Save CHanges**

### Description

##### Congestion Control Algorithm

Specify the algorithm to be used to avoid congestion

    Accepted values: BBR / RENO / CUBIC

    Default: BBR

##### Use SYN Cookies

Enable this to use SYN cookies in case of SYN Flood

    Accepted values: Enable / Disable

    Default: Enable

##### Read Buffer

Specify the size of the incoming kernel socket buffer

    Accepted values: Integer

    Default: 65536

##### Write Buffer

Specify the size of the outgoing kernel socket buffer

    Accepted values: Integer

    Default: 65536

##### Max TCP Orphans

Specify the maximum number of TCP sockets not attached to any user file handle, held by system

    Accepted values: Integer

    Default: 4096

##### Enable Slow Start

Enable this behavior to time out the congestion window after an idle period

    Accepted values: Enable / Disable

    Default: Disable

##### TCP SYNACK Retries

Specify the number of times SYNACKSs for a passive TCP connection attempt will be retransmitted

    Accepted values: Integer

    Default: 3

##### TCP SYN Retries

Specify the number of times SYNs for a active TCP connection attempt will be retransmitted

    Accepted values: Integer

    Default: 3

##### Enable Window Scaling

Enable Window Scaling during TCP sessions

    Accepted values: Enable / Disable

    Default: Disable

##### Enable Timestamps

Enable to turn timestamps off to reduce performance spikes related to timestamp generation

    Accepted values: Enable / Disable

    Default: Disable

##### Enable Selective ACKs

Enable the TCP selective ACKs option for better throughput

    Accepted values: Enable / Disable

    Default: Disable

##### Enable TCP SACKs

Enable to allow TCP to send SACKs

    Accepted values: Enable / Disable

    Default: Disable

##### Enable Duplicate SACKs

Enable to allow TCP to send duplicate SACKs

    Accepted values: Enable / Disable

    Default: Disable

##### Enable TCP Fast Open

Enable TCP Fast Open to send and accept data in the opening SYN Packet

    Accepted values: Enable / Disable

    Default: Disable

##### TCP Backlog Connections

Specify the maximum number of remembered connection requests, which have not received an acknowledgment from connecting client

    Accepted values: Integer

    Default: 1500

##### TCP Keepalive Probes

Enable to allow TCP to send duplicate SACKs

    Accepted values: Integer

    Default: 5

##### TCP Keepalive Time

Specify how often TCP sends out keepalive messages when keepalive is enabled

    Accepted values: Integer

    Default: 1800

##### TCP Keepalive Interval

Specify how frequently the TCP probes are send out

    Accepted values: Integer

    Default: 60

##### TCP FIN Timeout

Specify time an orphaned connection will remain in the FIN_WAIT_2 state before it is aborted at the local end

    Accepted values: Integer

    Default: 60



