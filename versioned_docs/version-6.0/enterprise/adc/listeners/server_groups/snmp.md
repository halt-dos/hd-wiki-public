---
sidebar_position: 3
---

# SNMP

---

### How to Use:

1. Go to Stack > [**SLB**](/adc/docs) > [**Listeners**](../../listeners/) > [** Server Groups**](../server_groups/).

2. Select the group name.

3. Select the Add Server option.

3. Configure your settings. 

4. Click Save Changes.

![snmp](/img/adc/v6/docs/snmp.png)

| SETTINGS             | ACCEPTED VALUE | DEFAULT           |
|----------------------|----------------|-------------------|
| Enable Monitoring    | Boolean        | Disabled          |
| SNMP port            | Integer        | 80                |
| SNMP Version         | Drop-Down      | SNMP v2c          |
| SNMP Username        | String         | Blank             |
| SNMP Community       | String         | public            |
| SNMP Security level  | Drop-Down      | No Auth & privacy |
| SNMP Check Type      | Drop-Down      | CPU Measurement   |

#### Description:

#### Enable Monitoring

This option allows users to specify enabling SNMP monitoring.

#### SNMP port

This option allows users to specify the SNMP port.

#### SNMP Version

This option allows users to specify the SNMP version for monitoring.

#### SNMP Username

This option allows users to specify SNMP usernames.

#### SNMP Community

This option allows users to specify SNMP Community.

#### SNMP Security level 

This option allows users to specify the SNMP security level.

#### SNMP Check Type

This option allows users to specify SNMP checks.