---
sidebar_position: 1
---

# Servers

![servers](/img/adc/v7/docs/server.png)

### How to Use:

1. Go to Stack > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) > **Server Groups**.

2. Select the **Group name**.

3. Select the **Add Server** option.

4. Configure your settings. 

5. Click **Save Changes**.

![servers2](/img/adc/v7/docs/server1.png)

### Description:

##### **Server ID**

Server ID is used to identify the upstream servers. It will be always unique for every original/upstream server.

##### **Server**

This option allows users to add the server domain name/IPv4/IPv6 address of the server.

    Accepted values: String

    Default: Blank 

##### **Port**

This option allows users to set the port number that is being used for the server.

    Accepted values: Integer

    Max: 65535

    Min: 0

    Default: 80  

##### **Weight**

This option allows users to set the weight value for the server. Server with a higher weight value will get more requests than servers with less weight value.

    Accepted values: Integer

    Max: 100

    Min:  1

    Default: 1 

##### **Back up**

This option allows users to enable or disable the backup server. If the user enables this option, that server will act as a backup server and after the set threshold limit this backup server will start. If the user disabled this option, that server will act as a normal server in the server group.

    Accepted values: True / False

    Default: False 

##### **Mode**

This option allows users to configure the server ready or down setting. 

    Accepted values: Ready / Down / Gracefully Down

    Default: Ready 

1. **Ready** - If the user has set the Ready value in this option then server will take part actively in handling the client requests.
2. **Down** - If the user has set the Down value in this option then server will not take part actively in handling the client requests. 
3. **Gracefully Down** - Gracefully Down option will ensure no active connection will be break during the server down activity, server will be handling the old connection until con-current connection count reach to 0. Once con-current connection will be 0 then server will be marked as down at SLB level. Hence, with the help this option, user can gracefully down any server.

##### Forwarded HTTP Version

This option allows user to select HTTP version while forwarding request to the backend server.

    Accepted values: String

    Default: Blank 

##### **Slow Start**
 This option allows users to select the graceful start time for newly added servers.

    Accepted values: Integer

    Default: 0 

##### **Max Connection**

The user can define how many maximum connections can be made on this particular server.

    Accepted values: Integer

    Default: 0
