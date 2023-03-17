---
sidebar_position: 4
---
# Bot Protection 
Detect and Block malicious bots in real-time

# Overview
Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. HaltDos Threat Stream TM provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic.

![bot](/img/waf/v6/docs/bot_protection.png)

## How To Use
1. Go to **WAF** > **Listener** > **Security Profiles ** > **Bot Protection**
2. Configure your setting
3. Click on **Save Changes** 

Configure the following parameters to set up the desired settings:

  | Parameter | Description| Accepted Values | Default |
  |---------- | ------------ | -----------  | --------- |
  | Allowed Crawlers | Specify the list of good crawlers by specifying their user agents. Such requests will be allowed. | User Agent | Blank |
  | Bad Crawlers | Specify the list of bad crawlers by specifying their user agents. Such requests will be dropped. | User Agent | Blank |
  | Suspicious Crawlers | Specify a list of suspicious crawlers by specifying their user agents. Such requests will be rate-limited. | User Agent | Blank |
  | Maximum Bot Request Rate | Specify the maximum allowed Bot request rate from a single client IP.| Integer | NO ACTION | 30|
  | Maximum Bot Request Burst | Specify the maximum allowed Bot request burst from a single client IP.| Integer | NO ACTION | 50|
  | Bot Track Duration | Specify the Bot request rate track duration in seconds. | Integer | NO ACTION | 30 |
  | Tor Traffic | Specifies the action to perform on TOR Network traffic.| NO ACTION / DROP / SEND CHALLENGE |
  | Bad Reputation Traffic | Specifies the action to perform on traffic from suspicious IPs reported by Haltdos Threat Stream TM.| NO ACTION / DROP / SEND CHALLENGE | NO ACTION |
  | Anonymous Proxy Traffic | Specifies the action when request contains no token, if token validation is enabled.| NO ACTION / RECORD / RATE LIMIT / DROP | NO ACTION |
  | Advance Bot Protection | Specifies the advance bot protection method.| NO ACTION / RECORD / RATE LIMIT / DROP | NONE |

1. **Allowed Crawlers**
This field specifies the list of good crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Allowed Crawlers permits the crawlers to access the protected URL. 

    Accepted values: String  
    
    Default: Empty  

    E.g. Google Crawler  

    User-Agent: google  

   
2. **Bad Crawlers**
This field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers does not permit the crawlers to access the protected URL.

    Accepted values: String  
    
    Default: Empty  

    E.g. Google Crawler  

    User-Agent: google  

3. **Suspicious Crawlers**
This field specifies a list of suspicious crawlers by specifying their user agents. These requests will be rate-limited based on the Bot rate limit i.e. Max Request Rate and Max Request Burst.

    Accepted values: String  
    
    Default: Empty  

    E.g. Suspicious Crawler  

    User-Agent: wow.tor 

4. **Maximum Bot Request Rate**
This field specifies the maximum allowed Bot request rate from a single client IP. In case the request rate of the user is higher than the defined rate, the request gets dropped.

    Accepted values: Numbers  

    Default: 30  

5. **Maximum Bot Request Burst**
This field specifies the maximum allowed Bot request burst from a single client IP. In case the requested burst of the user is higher than the defined rate, the request gets dropped.

    Accepted values: Numbers  
    Default: 50  

  
:::note
Bot Request Burst must be greater than or equal to Bot Request Rate
:::

  
6. **Bot Track Duration**
Specify the Bot request rate track duration in seconds.

7. **Tor Traffic**

This field allows you to take action in case there is Tor traffic in the network. Tor traffic are the request coming from tor browser or dark web. It includes two actions:

- **NO ACTION** 
Don't perform any action  

- **DROP**
Drop the request  

- **SEND CHALLENGE** 
Send a challenge like a captcha  

8. **Bad Reputation Traffic**

This field allows you to take action on traffic when Haltdos Threat Stream TM reports suspicious IPs. It includes two actions:

- **NO ACTION**
Don't perform any action  

- **DROP**
Drop the request  

- **SEND CHALLENGE**
Send a challenge like a captcha  

9. **Advance Bot Protection**
This field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:

- **NONE** :
Don't perform any action  

- **FINGERPRINT**:
Perform fingerprint-based validation for protection of Web Applications, Web Services, and Mobile Applications from automated threats like bots. Action on the request is taken after the analysis of user activity and browser-based calculated score which helps in confirming the source of the request, human or bot. The following actions can be taken: Drop, Send Challenge, Record, Rate Limit.  

- **TOKEN VALIDATION** :
Perform token-based validation. API requests will be authenticated using tokens associated with the request. This ensures that the web service is serving authorized requests with the help of Haltdos Advance Bot Protection.  

- **ANY**: 
On the basis of application configuration, the required challenge will be thrown on the requests.
Note: User can configure Advance Bot Settings in the Advanced settings for the listener by using the link: Advance Bot Settings  

    
   

