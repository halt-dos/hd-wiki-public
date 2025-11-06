---
sidebar_position: 7
---

# Connection Sync Settings
Configure connection synchronization between WAF nodes using `conntrackd`. This ensures active connections remain uninterrupted during failover or redundancy scenarios.

:::note Note
The option is available when the user selects LLB as their application.
:::

---

### Overview
Connection Sync Settings are used to replicate connection tracking information between primary and secondary WAF nodes. This mechanism helps achieve **high availability** by synchronizing connection states, thereby avoiding session drops when failover occurs.  

The configuration ensures seamless traffic handling, better uptime, and reduced disruption to client requests.

![Connection Sync Settings](/img/platform/v8/docs/conntrackd.png)  

---

### How to Use:
1. Go to **System > Instance > (Select Instance) > Setting > Connection Sync Settings**  
2. Enable the **Sync** option  
3. Configure the required fields (interface, IPs, port, buffer sizes)  
4. Click **Save Changes**

---

### Description

##### **Enable Sync**
Enable or disable the `conntrackd` service responsible for connection synchronization.  

```
    Accepted values: Enable / Disable

    Default: Disabled
```

##### **Interface Name**
Specify the interface on which the `conntrackd` service should run.  
For example: `ens33`.

```
    Accepted values: String (Interface name)

    Default: Blank
```

##### **Current IP**
Configure the current node’s IP address with subnet mask.

```
    Accepted values: IP with CIDR (Ex. 10.0.0.101/24)

    Default: Blank
```

##### **Peer IP**
Configure the peer node’s IP address with subnet mask. This IP will be used for synchronizing connection information.

```
    Accepted values: IP with CIDR (Ex. 10.0.0.102/24)

    Default: Blank
```

##### **Send Buffer Size**
Specify the buffer size allocated for sending synchronization messages.

```
    Accepted values: Bytes (Ex. 1249280)
    
    Default: 1249280
```

##### **Receive Buffer Size**
Specify the buffer size allocated for receiving synchronization messages.

```
    Accepted values: Bytes (Ex. 1249280)

    Default: 1249280
```

##### **Disable External Cache**
Enable or disable the external cache feature of `conntrackd`.

```
    Accepted values: Enable / Disable

    Default: Enable
```