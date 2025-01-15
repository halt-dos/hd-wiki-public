---
sidebar_position: 0
---

# Settings

To set up the Operational Settings for the particular Listener.

---

## Overview

Operational Setting configure different settings of Listener like the network protocol to be used. User can also configure the listener to work as Recursive DNS, Authoritative DNS or Both. Operational Setting specifies the IP address of the Listener. Basically, Operational enables the user to make custom changes on its DNS.

![operational](/img/gslb/v8/gslb-settings.png)

![operational](/img/gslb/v8/gslb-settings-2.png)

### How to Use:
1. Go to  **Apps** > **GSLB** > **Listener** > **Operational**
2. Configure your settings.
3. Click **Save Changes**.

Configure the following parameters to set up the desired settings:

#### Description

**DNS Service Type**    

Specify the DNS Service type

```
    Accepted values: Auth & Recursive / Authoritative / Recursive

    Default: Auth & Recursive
```


**Enable Logging**  

Select whether Logging needs to be enabled 

```
    Accepted values: Enable / Disable

    Default: Disable
```


**SSL Certificate**  

Choose SSl certificate if SSL port is enabled  

```
    Accepted values: Select SSL

    Default: None 
```


**Addresses**  

Specify the list of addresses that will be used for listening for DNS traffic

```
    Accepted values: Enter Address

    Default: Blank
```


**Upstream Resolvers**  

Specify the resolver for Recursive upstream DNS resolvers

```
    Accepted values: Enter Address

    Default: Blank 
```


**Refuse Query with no RD flag**  

Specify to respond with refuse on queries with no RD flag 

```
    Accepted values: Enable / Disable

    Default: Enable
```


**Blacklisted Domain Feed Files**  

Select your Domain Filtering file

```
    Accepted values: Select Domain

    Default: Blank
```


**Blacklisted Response Feed Files**  

Select your Domain Filtering file

```
    Accepted values: Enter Address

    Default: Blank 
```


**Whitelisted Domain Feed Files**  

Select your Domain Filtering file

```
    Accepted values: Select domain filtering file from the drop-down

    Default: Blank
```


**Cache Size**  

Specify Cache Size in MB

```
    Accepted values: Integer

    Default: 100
```

**Maximum Sub-Domain level**  

Specify the maximum level of sub-domains allowed

```
    Accepted values: Integer

    Default: 10 
```


**Maximum Domain length**  

Specify the maximum length of the domain allowed

```
    Accepted values: Integer

    Default: 100
```


**Maximum Response length**  

Specify the maximum length of the DNS query Response Message


```
    Accepted values: Integer

    Default: 1024
```


### PORT

User need to specify the port in the Port Modal



**Port**  

Mention the port

```
    Accepted values: Integer

    Default: 100
```


**Protocol**  

Select Protocol

```
    Accepted values: TCP / UPD / HTTPS / TLS

    Default: Blank
```


**SSL Enabled**  

Select the SSL whether it need to be enabled or not

```
    Accepted values: True / False

    Default: False
```

