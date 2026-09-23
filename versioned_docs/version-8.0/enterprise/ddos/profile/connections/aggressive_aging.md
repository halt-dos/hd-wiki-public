---
sidebar_position: 3
---

# Aggressive Aging

---

The Aggressive aging feature is used to set the age value for non-responsive established & non-established connections.

![aggressive aging](/img/ddos/v8/securityprofile_aggressive_aging.png)

### How to Use

1. Go to **Apps > DDoS > Profile > Connection Settings > Aggressive Aging**

2. Configure the settings.

3. Click on **Save Changes**



### Description

#### Inbound Aging Enabled

User can Enable/Disable the validation of timeout for inbound TCP connection. By default this field is disable by enabling it, Haltdos Anti-DDoS solution monitor the age of inbound TCP connection state according to the configured policies.

```
    Accepted values: Enable / Disable

    Default: Disable
```


#### Inbound Connection Timeout

User can specify the time limit for inbound TCP connections. By specifying this field user can limit the time for inbound TCP connections, if the connection is non-responsive or non-established it will disconnect the connection according to the input time automatically.

```
    Accepted values: Integer

    Default: 600
```


#### Inbound Incomplete Connection Timeout

User can specify the time limit for inbound incomplete TCP connections. By specifying this field user can limit the time for inbound half open TCP connections,if the connection is not established till the input time it will disconnect the connection.

```
    Accepted values: Integer

    Default: 30
```


#### Outbound Aging Enabled

User can Enable/Disable the validation of timeout for outbound TCP connection. By default this field is disable by enabling it, Haltdos Anti-DDoS solution monitor the age of outbound TCP connection state according to the configured policies.

```
    Accepted values: Enable / Disable

    Default: Disable
```


#### Outbound Connection Timeout

User can specify the time limit for outbound TCP connections. By specifying this field user can limit the time for outbound TCP connections, if the connection is non-responsive or non-established it will disconnect the connection according to the input time automatically.

```
    Accepted values: Integer

    Default: 600
```


#### Outbound Incomplete Connection Timeout

User can specify the time limit for outbound incomplete TCP connections. By specifying this field user can limit the time for outbound half open TCP connections,if the connection is not established till the input time it will disconnect the connection.

```
    Accepted values: Integer

    Default: 30
```

