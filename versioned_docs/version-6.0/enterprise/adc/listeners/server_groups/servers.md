---
sidebar_position: 1
---

# Servers

![servers](/img/adc/v6/docs/servers1.png)

### How to Use:

1. Go to Stack > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) > Server Groups.

2. Select the group name.

3. Select the Add Server option.

4. Configure your settings. 

5. Click Save Changes.

| SETTING        | ACCEPTED VALUE | DEFAULT |
|----------------|----------------|---------|
| Server ID      | --             | --      |
| Server         | String         | Blank   |
| Port           | Integer        | 80      |
| Weight         | Integer        | 1       |
| Back up        | Drop-Down      | False   |
| Down           | Drop-Down      | False   |
| Max Connection | Integer        | Integer |

![servers2](/img/adc/v6/docs/servers2.png)

#### Description:

#### Server ID

Server ID is used to identify the upstream servers. It will be always unique for every original/upstream server.

#### Server

This option allows users to add the server domain name/IPv4/IPv6 address of the server.

#### Port

This option allows users to set the port number that is being used for the server.

#### Weight

This option allows users to set the weight value for the server. server with a higher weight value will get more requests than servers with less weight value.

#### Back up

This option allows users to enable or disable the backup server. If the user enables this opton, that server will act as a backup server and after the set threshold limit this backup server will start. If the user disabled this option, that server will act as a normal server in the server group.

#### Down

This option allows users to true or false the down setting for server. If the user has set the true value in this option then server will not take part actively in  

#### Max Connection

The user can define how many maximum connection can be made on this particular server.
