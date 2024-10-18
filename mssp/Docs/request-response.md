# Request - Response
----

### Request Lifecycle

Haltdos ADC is an enterprise grade Web Application and API Protection solution that can accurately detect and mitigate application layer DDoS attacks on websites and web services and secure them from getting compromised. The Request Lifecycle sets forth the steps of how the request will be inspected in the solution.

![Request Lifecycle](/img/mssp/v8/docs/request-lifecycle.png)

### Request Analysis

When active, the solution receives and analyzes each request against the ruleset applicable to the configured application and determines which of the following actions to take:
- Requests which are identified as known attacks by ruleset are rejected and logged with information to
help trace the attacker.  
- If the request passes all the rules, it is evaluated against Machine Learning (if learning is complete and
enabled). Requests that are deemed malicious are blocked by the ADC.  
- Permitted requests are passed to the application.  

Haltdos ADC supports multiple blocking options such as IP blacklist (permanent or suspension), connection termination, blocking session, dropping request, sending challenge (JS / Captcha) or tarpit (delay response), rate limiting, behavior analysis and DNS protection along with L7 DDoS protection.

![Request Analysis](/img/mssp/v8/docs/request-analysis.png)

----

### Response Analysis

Haltdos ADC monitors outgoing responses as they are returned to the client. Security-sensitive information can be filtered out from responses to ensure that data leakage is prevented. Sensitive and Personal Identification Information (PII) such credit card data, social security numbers, or health care related content can be screened out by using comprehensive security policies. The solution supports multiple blocking option in response phase such as IP blacklist (permanent or suspension), custom page (honeynet, error page, maintenance page), content replacement, empty response, blocking session, terminating connection, or tarpit (delay response).

![Response Analysis](/img/mssp/v8/docs/response-analysis.png)

