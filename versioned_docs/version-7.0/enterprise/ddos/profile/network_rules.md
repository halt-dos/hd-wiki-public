---
sidebar_position: 7
---

# Network Rules

---

Network Rules are user-configured rules performed on network interfaces like IP, Port, Domain, etc in order to take action based on the conditions set in the rule.

### How to Use

1. Go to **Apps > DDoS > Profile > Network Rules**

2. Add network rules with the specific configuration required.

3. Click on **Save Changes**

![network_rukes](/img/ddos/v7/docs/network.png)

### Rule Information

### Description

##### **Name**

Specify the name of the rule

```
    Accepted values: String

    Default: Blank 
```


##### **Rule Description**

Specify the description for the rule

```
    Accepted values: String

    Default: Blank 
```


##### **Priority**

User can specify the priority of the rule. In case of multiple rules, user can set the priority accordingly

```
    Accepted values: Integer

    Default: 0 
```


##### **Direction**

Specify the direction of the rule on which rule can apply i.e. Any, Inbound, Outbound

```
    Accepted values: Any / Inbound / Outbound

    Default: Any 
```


**Any**: Rule is applicable on both Inbound as well as Outbound traffic

**Inbound**: Rule is applicable on Inbound traffic only

**Outbound**: Rule is applicable on Outbound traffic only

##### **Action**

In this field user can select the action which should be applicable on the rule

```
    Accepted values: Integer

    Default: 0 
```


### Rule Conditions

##### **Protocol**

In this field user can specify the Protocol on which rule will be applicable.

```
    Accepted values: IPV4

    Default: IPV4 
```


##### **Field**

User can specify the Field according to the selected protocol. Field will be different for the different protocol

```
    Accepted values: IS IPv4

    Default: IS IPv4 
```


##### **Criteria**

User can specify the Criteria according to the slected field. Criteria will be differnt for the different field

```
    Accepted values: NONE

    Default: NONE 
```

