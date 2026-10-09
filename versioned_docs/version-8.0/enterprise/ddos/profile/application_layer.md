---
sidebar_position: 5
---

# Application Layer


Application layer attacks -- sometimes referred to as Layer 7 attacks — target applications of the victim of the attack are either by sending too many requests or flooding a particular URL or sending a malformed HTTP request.

#### These include different support protocols like HTTP, DNS, SNMP, FTP, SMTP which is described further

---

# HTTP

It helps in stopping different kinds of HTTP flood attacks.

---


The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web and is used to load web pages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.

![http_settings](/img/ddos/v8/securityprofile_application_layer_1.png)

![http_settings](/img/ddos/v8/securityprofile_application_layer_2.png)

### How to use

1. Go to **Apps > DDoS > Profile > Application Layer**

2. Scroll to **HTTP Settings**

3. Configure the settings.

4. Click on **Save Changes**.


### **Description:**

##### **HTTP Request Per Source**

User can specify the number of HTTP requests allowed per IP. In this field user can limits the number of HTTP requests per source IP. By default it is set to 0 which means there is no mitigation on HTTP request.

```
    Accepted values: Integer

    Default: 0
```


##### **Payload Length Misbehavior Threshold:**

User can specify the Payload length misbehavior on IP address, which means user can limit the misbehavior of IP payload length by setting the threshold value if the payload length misbehavior exceed the value Haltdos Anti-DDoS solution drops the packets.

```
    Accepted values: Integer

    Default: 0
```


##### **Minimum payload length**

User can specify the minimum length(in bytes) of the payload in the HTTP request, which helps the user to set the minimum payload length which is allowed to pass.

```
    Accepted values: Integer

    Default: 0
```


##### **Minimum incomplete HTTP header length**

User can specify the minimum length of incomplete HTTP header, which means user can limit the minimum length of incomplete HTTP header which is allowed to pass

```
    Accepted values: Integer

    Default: 0
```


##### **Progressive Challenge Threshold**

User can specify the threshold to verify that the request per second coming from a client is through a bot or legitimate client. For example: If there are multiple requests coming from a source then this will throw a challenge to client for verifying legitimate requests

```
    Accepted values: Integer

    Default: 0
```


**Note**: This value must be less than Http Request Per Source to be effective

##### **Enable HTTP Limits**

User can specify the limits of HTTP request on per URLs basis.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


##### **Default HTTP Request Per URL**

User can specify the number of request per second from default HTTP request for custom URLs, which means specified number of request can be passed on custom URLs per second by the default HTTP requests

```
    Accepted values: Integer

    Default: 0
```


![url_threshold](/img/ddos/v7/docs/url.png)

#### **URL Threshold**


##### **Host**

Enter the host name

```
    Accepted values: String

    Default: Blank
```


##### **Method**

Specify HTTP method

```
    Accepted values: GET / POST

    Default: GET
```


##### **URI**

Specify the URI

```
    Accepted values: Regex

    Default: Blank
```


##### **Threshold**

Specify threshold per source IP

```
    Accepted values: Integer

    Default: 1
```


---

# DNS

This section helps in stopping different kinds of DNS flood attack.

---

![dns_setting](/img/ddos/v7/docs/dnss.png)

### How to use

1. Go to **Apps > DDoS > Profile > Application Layer**

2. Scroll down and Configure the settings.

3. Click on **Save Changes**.


### Description

#### Enable DNS Lock down

User can specify by enabling DNS Lock down, where the system only allows valid cached DNS queries to pass through and block all other DNS queries

```
    Accepted values: Enable / Disable

    Default: Disable
```


#### DNS Queries Per Source

Specify allowed DNS queries per source IP in queries per second

```
    Accepted values: Integer

    Default: 0
```


---

# Miscellaneous Settings

It helps in stopping different kinds of SMTP flood attack.

---

![miscellaneous_settings](\img\ddos\v7\docs\miscellaneous.png)

### How to Use

1. Go to **Apps > DDoS > Profile > Application Layer**

2. Scroll down and Configure the settings.

3. Click on **Save Changes**.


### Description

#### Allow Inbound NTP Monlist

This option allow accepting the NTP monitlist from Internet.

```
    Accepted values: Enable / Disable

    Default: Disable
```


#### Allow Outbound NTP Monlist

This option allow accepting the NTP monitlist to be sent to the Internet.

```
    Accepted values: Enable / Disable

    Default: Disable
```


#### Enter failed FTP login attempts per IP

User can specify the limit of FTP login attempts which is failed to login on per IP basis

```
    Accepted values: Integer

    Default: 0
```


##### Enter failed SMTP login attempts per IP

User can specify the limit of SMTP login attempts which is failed to login on per IP basis

```
    Accepted values: Integer

    Default: 0
```

