---
sidebar_position: 1
---

# HTTP

It helps in stopping different kinds of HTTP flood attacks.

---


The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web and is used to load web pages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.

![http_settings](\img\ddos\v7\docs\http.png)

### How to use

1. Go to **Apps > DDoS > Profile > Application Layer**

2. Scroll to **HTTP Settings**

3. Configure the settings.

4. Click on **Save Changes**.

| Settings                              | Accepted Values | Default |
|---------------------------------------|-----------------|---------|
| HTTP Request Per Source               | Integer         | 0       |
| Payload Length Misbehavior Threshold  | Integer         | 0       |
| Minimum Payload Length                | Integer         | 0       |
| Minimum Incomplete HTTP Header Length | Integer         | 0       |
| Progressive Challenge Threshold       | Integer         | 0       |
| Enable HTTP Limits                    | Boolen          | False   |
| Default HTTP Request Per URL          | Integer         | 0       |

#### **URL Threshold**

| Settings  | Accepted Values  | Default |
|-----------|------------------|---------|
| Host      | String           | --      |
| Method    | Drop Down        | Get     |
| URL       | String/Regex     | --      |
| Threshold | Integer          | 0       |

![url_threshold](\img\ddos\v6\docs\ddos15.png)

### **Description:**

##### **HTTP Request Per Source**

Specify the number of requests allowed per IP

##### **Payload Length Misbehaviour Threshold:**

Specify allowed IP misbehavior on breaching min. payload length.

##### **Minimum payload length**

Specify the minimum length of the payload in the HTTP request
##### **Minimum incomplete HTTP header length**

Specify the minimum length of the header

##### **Progressive Challenge Threshold**

Specifies that the request coming from a client is through a bot or legitimate client. For example: If there are multiple requests coming from a source then this will throw a challenge to client for verifying legitimate requests

##### **Enable HTTP Limits**

Specify per URL limits for HTTP request

##### **Default HTTP Request Per URL**

This will set the HTTP request for all the URLs

##### **Host**

Enter the host name

##### **Method**
Specify HTTP method

##### **URI**

Specify the URI

##### **Threshold**

Specify threshold per source IP