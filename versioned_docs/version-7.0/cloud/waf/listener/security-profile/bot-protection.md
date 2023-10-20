---
sidebar_position: 5
---

# Bot Protection

Detect and Block malicious bots in real-time

---

## Overview

Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. Haltdos Threat Stream provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic.

### How to Use:

1. Go to **WAF > Zones > Listener > Security Profiles > Bot Protection**.

2. Configure your settings.

3. Click **Save**.

**Configure the following parameters to set up the desired settings:**

| PARAMETERS                      | DESCRIPTION                                                                                                                                           | ACCEPTED VALUES                                        | DEFAULT   |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|-----------|
| Allowed Crawlers                | Specify the list of good crawlers by specifying their user agents. Such requests will be allowed.                                                     | User Agent                                             | Blank     |
| Bad Crawlers                    | Specify the list of bad crawlers by specifying their user agents. Such requests will be dropped.                                                      | User Agent                                             | Blank     |
| Suspicious Crawlers             | Specify a list of suspicious crawlers by specifying their user agents. Such requests will be rate-limited.                                            | User Agent                                             | Blank     |
| Maximum Bot Request Rate        | Specify the maximum allowed Bot request rate from a single client IP.                                                                                 | Integer                                                | 30        |
| Maximum Bot Request Burst       | Specify the maximum allowed Bot request burst from a single client IP.                                                                                | Integer                                                | 50        |
| Tor Traffic                     | Specifies the action to perform on TOR Network traffic.                                                                                               | NO ACTION / DROP / SEND CHALLENGE                      | NO ACTION |
| Bad Reputation Traffic          | Specifies the action to perform on traffic from suspicious IPs reported by Haltdos Threat Stream TM.                                                  | NO ACTION / DROP / SEND CHALLENGE                      | NO ACTION |
| Advance Bot Protection          | Specifies the advanced bot protection method.                                                                                                         | NONE / FINGERPRINT / TOKEN VALIDATION / ANY            | NONE      |
| Fingerprint Suspicion Threshold | Specify the score after which the request will be marked as bot request if fingerprinting enabled. As value increased, requests marked as suspicious. | Integer (2-10)                                         | 8         |
| Fingerprint Bot Traffic Action  | Specifies the action when the request is marked by the bot using fingerprinting                                                                       | NO ACTION / RECORD / RATE LIMIT /SEND CHALLENGE / DROP | NO ACTION |
| Invalid Token Traffic Action    | Specifies the action when the request contains an invalid token, if token validation is enabled.                                                      | NO ACTION / RECORD / RATE LIMIT / DROP                 | NO ACTION |
| Anonymous Traffic Action        | Specifies the action when request contains no token, if token validation is enabled.                                                                  | NO ACTION / RECORD / RATE LIMIT / DROP                 | NO ACTION |

**Allowed Crawlers**

This field specifies the list of good crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Allowed Crawlers permits the crawlers to access the protected URL.

```
Accepted values: String
​Default: Empty
​E.g. Google Crawler
​User-Agent: google
```

**Bad Crawlers**

This field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers does not permit the crawlers to access the protected URL.

```
Accepted values: String
​Default: Empty
​E.g. Google Crawler
​User-Agent: google
```
**Suspicious Crawlers**

This field specifies a list of suspicious crawlers by specifying their user agents. These requests will be rate-limited based on the Bot rate limit i.e. Max Request Rate and Max Request Burst.

```
Accepted values: String
​Default: Empty
​E.g. Suspicious Crawler
​User-Agent: wow.tor
```

**Maximum Bot Request Rate**

This field specifies the maximum allowed Bot request rate from a single client IP. In case the request rate of the user is higher than the defined rate, the request gets dropped.

```
Accepted values: Number
​Default: 50
```
**NOTE**: Bot Request Burst must be greater than or equal to Bot Request Rate

**Tor Traffic**

This field allows you to take action in case there is Tor traffic in the network. Tor traffic are the request coming from tor browser or dark web. It includes two actions:

- **NO ACTION** - Don't perform any action
- **DROP** - Drop the request
- **SEND CHALLENGE** - Send a challenge like a captcha

**Bad Reputation Traffic**

This field allows you to take action on traffic when Haltdos Threat Stream TM reports suspicious IPs. It includes two actions:

- NO ACTION - Don't perform any action

- DROP - Drop the request

- SEND CHALLENGE - Send a challenge like a captcha

**Advance Bot Protection**

This field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:
- **NONE** - Don't perform any action
- **FINGERPRINT** - Perform fingerprint-based validation for protection of Web Applications, Web Services, and Mobile Applications from automated threats like bots. Action on the request is taken after the analysis of user activity and browser-based calculated score which helps in confirming the source of the request, human or bot. The following actions can be taken: Drop, Send Challenge, Record, Rate Limit.

- TOKEN VALIDATION - Perform token-based validation. API requests will be authenticated using tokens associated with the request. This ensures that the web service is serving authorized requests with the help of Haltdos Advance Bot Protection.

- ANY - On the basis of application configuration, the required challenge will be thrown on the requests.

Note: User can configure Advance Bot Settings in the Advanced settings for the listener by using the link: **Advance Bot Settings**

**Fingerprint Suspicion Threshold**

This field specifies the score after which the request will be marked as a bot request. In case the request will be taken under fingerprint bot traffic action. Value can be ranged between 2 and 10 inclusive. A score increase, request marked as suspicious request.

```
Accepted values: Integer
​Default: 8
```

**Fingerprint Bot Traffic Action**

This field allows you to take action on traffic when Haltdos Advance Bot Protection reports a suspicious bot and breaches the fingerprint suspicion threshold. It includes the following actions:

- **NONE** - Don't perform any action

- **RECORD** - Don't perform any action and record this request.

- **RATE LIMIT** - Perform rate limit for every request belong to a specific client.

- **SEND CHALLENGE** - Send a challenge like a captcha

- **DROP** - Drop the request.

**Invalid Token Traffic Action**

This field allows you to take action on traffic when Haltdos Advance Bot Protection detects current request contains an invalid token for the current security profile. It includes the following actions:

- NO ACTION - Don't perform any action

- RECORD - Don't perform any action and record this request.

- RATE LIMIT - Perform rate limiting on the request.

- DROP - Drop the request.

**Anonymous Traffic Action**

This field allows you to take action on traffic when Haltdos Advance Bot Protection reports the current request with no token. It includes the following actions:

- NO ACTION - Don't perform any action

- RECORD - Don't perform any action and record this request.

- RATE LIMIT - Perform rate limiting on the request.

- DROP - Drop the request.








