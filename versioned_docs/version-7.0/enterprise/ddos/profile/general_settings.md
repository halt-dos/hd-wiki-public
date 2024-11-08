---
sidebar_position: 1
---

# Profile Settings

Settings for inspecting the packet

---

General settings evaluates the data part and the headers of a packet that is transmitted through an inspection point, weeding out any non-compliant to protocol, spam, viruses, intrusions, and any other defined criteria to block the packet from passing through the inspection point.

![general_setting](/img/ddos/v7/docs/generalsetting.png)

### How to Use

1. Go to **Apps > DDoS > Profile > Profile Settings**

2. Configure the settings.

3. Click on **Save Changes**.


### Description

##### **Inbound Countries**

In this field, users can specify the list of inbound countries that will be permanently disallowed for inbound traffic on a profile basis. It also allows the users to use the "not" feature ex. "not India", which allows only network traffic from India. Apart from that all the inbound network traffic from other countries will be dropped.

```
    Accepted values: list of country as per ISO 3166-1 alpha-2 standard 2 letter country-code.

    Default: Blank  
```


For more information about ISO 3166-1 alpha-2, please refer to this site: [**ISO 3166-1 alpha-2**](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

##### **Outbound Countries**

In this field, users can specify the list of outbound countries that will be permanently disallowed for outbound traffic on a profile basis. It also allows the users to use the "not" feature ex. "not America", which allows the outbound network traffic for America only. Traffic from other countries will be dropped.

```
    Accepted values: list of country as per ISO 3166-1 alpha-2 standard 2 letter country-code.

    Default: Blank  
```


##### **Session Expiry Time**

In this field, users can specify the session expiry time (in seconds) for the established outbound connection if the connection is inactive. Haltdos DDoS will monitor the TCP connection session if it is inactive till the input time, the session expires and a new session needs to be established.

```
    Accepted values: Integer

    Default: Blank 
```


##### **Graceful Startup Period**

In this field, users can specify the graceful startup period(in seconds), which will help the application in the establishment of a successful connection with the server. The mitigation trigger will wait before starting mitigation on startup.

```
    Accepted values: Integer

    Default: Blank 
```


##### **SSL Renegotiation Threshold**

In this field users can specify the maximum connection allowed to be established in a SSL negotiation. SSL renegotiation threshold value allow the number of connection can be made in one session.

```
    Accepted values: Integer

    Default: Blank 
```


##### **Anti-Scanning Threshold**

In this field, users can specify the threshold value(in pps) of Anti-scanning to limit packet scanning attempts. The Haltdos Anti-DDoS solution can limit the unusual scanning of the packet if anyone is doing so. Users can limit the scanning attempt by setting this threshold.

```
    Accepted values: Integer

    Default: Blank 
```


##### **Learning Packet Sampling Percentage**

It will help users to collect Learning packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos Anti-DDoS solution collects the sample from the network traffic to learn its behavior.

```
    Accepted values: Integer

    Default: Blank 
```


##### **Drop packet Sampling Percentage**

It will help users to collect Drop packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos Anti-DDoS solution collects the sample from the network traffic to analyze the dropped packet behavior.

```
    Accepted values: Integer

    Default: Blank 
```


##### **Offload Percentage**

Offloading of TLS packets for decryption, users can specify the offload percentage. Users can set a limit in percentage so that Haltdos Anti-DDoS solution collects the sample from the network traffic to analyze the behavior of TLS decryption.

```
    Accepted values: Integer

    Default: Blank 
```

