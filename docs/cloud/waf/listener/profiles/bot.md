---
sidebar_position: 4
---
# Bot Protection 
Detect and Block malicious bots in real-time

##  Overview
Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. HaltDos Threat Stream TM provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic.

![Bot](/img/waf/v8/docs/botProtection.png)

## How To Use
1. Go to **WAF** > **Listener** > **Profiles** > **Bot Protection**
2. Configure your setting
3. Click on **Save Changes** 

### Description  

##### **Allowed Crawlers**
This field specifies the list of good crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Allowed Crawlers permits the crawlers to access the protected URL. 

```
    Accepted values: String

    Default: Empty  
```


    E.g. Google Crawler  

    User-Agent: google  

##### **Bad Crawlers**
This field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers does not permit the crawlers to access the protected URL.

```
    Accepted values: String  
    
    Default: Empty  
```


    E.g. Google Crawler  

    User-Agent: google  

##### **Suspicious Crawlers**
This field specifies a list of suspicious crawlers by specifying their user agents. These requests will be rate-limited based on the Bot rate limit i.e. Max Request Rate and Max Request Burst.

```
    Accepted values: String  
    
    Default: Empty  
```


    E.g. Suspicious Crawler  

    User-Agent: wow.tor 

##### **Maximum Bot Request Rate**
This field specifies the maximum allowed Bot request rate from a single client IP. In case the request rate of the user is higher than the defined rate, the request gets dropped.

```
    Accepted values: Numbers

    Default: 20
```


##### **Maximum Bot Request Burst**
This field specifies the maximum allowed Bot request burst from a single client IP. In case the requested burst of the user is higher than the defined rate, the request gets dropped.

```
    Accepted values: Numbers

    Default: 30  
```



:::note Note
Bot Request Burst must be greater than or equal to Bot Request Rate
:::

  
##### **Bot Track Duration**
Specify the Bot request rate track duration in seconds.

```
    Accepted values: Numbers

    Default: 30  
```


##### **Tor Traffic**

This field allows you to take action in case there is Tor traffic in the network. Tor traffic are the request coming from tor browser or dark web. It includes two actions:

```
    Accepted values: NO ACTION / DROP / SEND CHALLENGE

    Default: NO ACTION  
```


- **NO ACTION** 
Don't perform any action  

- **DROP**
Drop the request  

- **SEND CHALLENGE** 
Send a challenge like a captcha  

##### **Bad Reputation Traffic**

This field allows you to take action on traffic when Haltdos Threat Stream TM reports suspicious IPs. It includes two actions:

```
    Accepted values: NO ACTION / SEND CAPTCHA / SEND CRYPTO CHALLENGE / DROP

    Default: NO ACTION  
```


- **NO ACTION**
Don't perform any action  

- **DROP**
Drop the request  

- **SEND CHALLENGE**
Send a challenge like a captcha  

##### **Advance Bot Protection**
This field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:

```
    Accepted values: NONE / TOKEN VALIDATION / FINGERPRINT / ANY

    Default: NO ACTION  
```


- **NONE** :
Don't perform any action  

- **FINGERPRINT**:
Perform fingerprint-based validation for protection of Web Applications, Web Services, and Mobile Applications from automated threats like bots. Action on the request is taken after the analysis of user activity and browser-based calculated score which helps in confirming the source of the request, human or bot. The following actions can be taken: Drop, Send Challenge, Record, Rate Limit.  

- **TOKEN VALIDATION** :
Perform token-based validation. API requests will be authenticated using tokens associated with the request. This ensures that the web service is serving authorized requests with the help of Haltdos Advance Bot Protection.  

- **ANY**: 
On the basis of application configuration, the required challenge will be thrown on the requests.

##### **Fingerprint Suspicion Threshold**
This field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:

```
    Accepted values: NONE / TOKEN VALIDATION / FINGERPRINT / ANY

    Default: NO ACTION  
```


##### **Fingerprint Bot Traffic Action**
This field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:

```
    Accepted values: NO ACTION / RECORD / RATE LIMIT / SEND CAPTCHA / SEND CRYPTO CHALLENGE / DROP

    Default: NO ACTION  
```


##### **Invalid Token Traffic Action**
This field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:

```
    Accepted values: NO ACTION / RECORD / RATE LIMIT / DROP

    Default: NO ACTION  
```


##### **Anonymous Traffic Action**
This field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:

```
    Accepted values: NO ACTION / RECORD / RATE LIMIT / DROP

    Default: NO ACTION  
```



:::note Note
User can configure Advance Bot Settings in the Advanced settings for the listener.
:::
