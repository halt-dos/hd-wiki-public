---
sidebar_position: 2
---

# Load Balancing

---

### How to Use:

1. Go to Stack > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) >[** Server Groups**](./server_groups.md/) > **Select Server Name** > **Load Balancing**

2. Configure your settings. 

3. Click **Save Changes**.

![Load balancing](/img/adc/v6/docs/loadbalancing.png)

| SETTINGS                  | ACCEPTED VALUE | DEFAULT     |
|---------------------------|----------------|-------------|
| Connection Reuse Policy   | Drop-Down      | Always      |
| Enable HTTP KeepAlive     | Boolean        | Disable     |
| HTTP KeepAlive Timeout    | Integer        | 2           |
| Tunnel Timeout            | Integer        | 120         |
| Request Timeout           | Integer        | 10          |
| Server Connect Timeout    | Integer        | 4           |
| Idle Connection Timeout   | Integer        | 30          |
| Resume Connection Timeout | Integer        | 1           |
| Queue Timeout             | Integer        | 5           |
| Connection Pool Size      | Integer        | 32          |
| Server Retries            | Integer        | 1           |
| Algorithm                 | Drop-Down      | Round Robin |

![Load balancing2](/img/adc/v6/docs/loadbalancing2.png)

#### Description:

#### Connection Reuse Policy

This option allows users to specify an HTTP connection reuse policy.

#### Enable HTTP KeepAlive

This option allows users to specify enabling server connection keep-alive.

#### HTTP KeepAlive Timeout

This option allows users to specify a keep-alive server connection timeout.

#### Tunnel Timeout

This option allows users to set the maximum inactivity time on the client and server-side for Websocket tunnels

#### Request Timeout

This option allows users to specify the maximum allowed time to wait for a complete HTTP request.

#### Server Connect Timeout

This option allows users to specify a max time to wait for establishing server connection.

#### Idle Connection Timeout

This option allows users to specify idle server connection timeout.

#### Resume Connection Timeout

This option allows users to specify the time within which a lost server connection can resume.

#### Queue Timeout

This option allows users to specify the maximum time to wait in the queue for a connection slot to be free.

#### Connection Pool Size

This option allows users to specify the maximum number of idling connections for a server. Set -1 for unlimited.

#### Server Retries

This option allows users to specify the max number of connection retries.

#### Algorithm

This option allows users to specify the Server Group Algorithm.

### Adding Location

![Load balancing3](/img/adc/v6/docs/loadbalancing3.png)

| SETTINGS | ACCEPTED VALUE | DEFAULT |
|----------|----------------|---------|
| Priority | String         |         |
| Location | Drop-Down      |         |

### Description:

#### Priority

The user can set the priority.

#### Location

The user can set the location for which load balancing is done.
