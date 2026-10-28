---
sidebar_position: 3
---

# Sensors

Choose where APID learns about your traffic from.

---

### Overview

Sensors discover the APIs that are **actually being used**. Traffic is attributed to an endpoint by its host. APID provides two kinds of sensors, and lists the hosts it has seen that belong to no collection.

![Sensors](/img/apid/sensors.png)

### How to Use:

1. Go to **Stack** > **APID** > **Sensors**.
2. Configure the **Log sensor** or the **Traffic sensor**.
3. Click **Save** or **Save & apply**.

### Log Sensor

Learns from access logs. APID listens on UDP addresses to which a product, such as a WAF, sends its logs. Click **Add log sensor** to add a listener.

![Add log sensor](/img/apid/add_log_sensor.png)

##### **Source Type**

The product that produces the logs.

```
    Accepted values: WAF

    Default: WAF
```

##### **Listeners**

UDP address and port to listen on, for example `0.0.0.0:9000`. Configure the log source to send its logs to this address.

```
    Accepted values: IP address:Port

    Default: Blank
```

### Traffic Sensor

Captures traffic from the network. Type a port and press Enter to add it.

##### **Listeners**

TCP ports the sensor mirrors, for example `80` and `443`.

```
    Accepted values: TCP ports

    Default: Blank
```

### Shadow Services

Hosts that serve traffic but belong to no collection, which means they have no formal owner or oversight. For every host the table shows the protocol (for example HTTPS and the offered HTTP versions and TLS version), the number of hits, the clients, the servers and when it was last seen. Use the **Protocol** filter to narrow the list. Click **Add endpoint** on a row to bring its endpoints under discovery.
