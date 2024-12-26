# Configuration
----
### User Management

Haltdos solution supports fine-grained user access for various stakeholders. In consultation with the customer’s IT and Security team, users with relevant and restricted permissions can be created in Haltdos. The solution supports users with following permissions:
- SYSTEM – Full device access
- ADMIN – Full stack (license) / listener (virtual context) access
- READ-WRITE – Policy Read / Write access to stack (license) / listener (virtual context) access
- READ-ONLY – Read only access to stack (license) / listener (virtual context) access.

#### APPLICATION ONBOARDING

- Adding the application as a listener (virtual context) by specifying application FQDN (e.g. www.haltdos.com), type of application (HTTP / TCP / UDP), and backend IP and port combinations.  

- Initially, all applications will be configured with security policy in BYPASS mode.  

- Application specific or wildcard certificates will be added to Haltdos ADC to support SSL offloading. If the application operates with selected SSL protocol and cipher suites, the same will need to beconfigured in ADC. It is recommended for security reasons to enable end-to-end SSL encryption for
secure and reliable communication between end-users and web servers.  

- If the application has multiple backend servers, then appropriate load balancing algorithm (round robin, least conn, etc.) can be configured. Additional load balancing configurations such as weights, backup servers, connection pool size, etc. can also be configured initially or during User Acceptance Testing (UAT) depending upon availability of information from various stakeholders.  

- Optionally, if additional application information is available such as web server OS, application language or framework, etc. then the ADC solution can be initially fine-tuned to speed up auto-profiling.  

- If configured web applications support web service or web sockets, relevant URIs can be used to create
separate security profiles.  

- Headers such as X-Forwarded-For or X-Real-IP headers can be configured for enabling real IP visibility
to web servers.  

- Redirection rules such as HTTP to HTTPS, etc. can also be configured.  

- Enabling Caching, Compression & TCP optimizations  

#### BASIC SECURITY SETUP

With input from application stakeholders, the solution can be configured and specified features enabled / disabled as per requirement. The solution can be configured in RECORD mode and basic security settings help ensure that if need arises due to onset of attack, it can be taken into production to protect the application. If any solution was already implemented in customer’s network, Haltdos team can leverage policies and whitelisting from existing vendor’s into Haltdos solution for continuity of security. Some common security policies that can be configured are as follows:

1. Geo IP Mitigations for the application e.g., blacklisting countries, blacklisting IP or IP prefixes.  

2. Custom error pages for the application  

3. Rate limiting rules for the application modules.  

4. Positive security rules for application.  

5. Captcha protection for the application.  

6. Custom logging rules for PCI/DSS Compliance  

7. Basic or Advance Bot Protection  

8. Enable Machine Learning & Auto-Profiling  

9. Configure Rule Staging for new signatures

#### GLOBAL LOAD BALANCING

If your license supports Global Load Balancing, the following are the steps to configure DNS (authoritative or recursive) in Haltdos ADC.  

- Configuring built-in DNS service as Recursive if existing DNS service is already running.  

- Alternatively, the built-in DNS service can be configured as Authoritative DNS solution and creating DNS zones and records.  

- Optionally configuring security policies like DNSSec, Geo Fencing, etc.  

- Updating NS records for configured zones in authoritative DNS  

#### USER ACCEPTANCE TESTING

For evaluating if the application is working expectedly behind Haltdos ADC, local DNS change will need to be made on evaluator’s machine to direct all web traffic for the application via ADC. This can easily be carried out by changing the hosts file in evaluator’s machine to add DNS entry for the application to point to ADC IP address. After successful evaluation, the DNS entry in hosts file can be deleted.

#### SIGN-OFF & GO-LIVE

After onboarding all applications onto ADC solution and acceptance testing by various stakeholders, Haltdos ADC is ready to be taken into production. After sign-off and due approval and change management, Haltdos ADC can be deployed inline. It is recommended to carry out this activity during off hours or at the
weekend.  

Haltdos ADC can be taken inline one application at a time. Depending upon the customer’s environment, this change can take place by changing DNS settings in data center or customer’s DNS provider to point application to relevant ADC IPs addresses. Alternatively, if the customer uses Link Load Balancer for DNAT, DNAT rule in LLB can point to relevant A IPs instead of application server IPs.  

### POST INSTALLATION

#### BLOCKING MODE

The solutions are prone to false positives if not configured correctly. When handling end-user traffic, Haltdos ADC running in RECORD mode will start logging incidents that it expects to be policy violation or attack. Haltdos ADC comes with built-in forensic tools such as False Positive Finder and Rule Match Finder to quickly identify and fine-tune rule-sets. It is typically recommended to run ADC for at least 10,000 – 100,000 requests before starting fine-tuning. Post fine-tuning, ADC can be configured in MITIGATION mode. Machine Learning in Haltdos ADC automatically activates in blocking mode after 10,000 request per page. This value is configurable. It is recommended to put ADC in blocking mode one or a few applications at a time to avoid disruption.

#### ANALYTICS & REPORTING

Analytics and reporting are essential in evaluating the performance and findings by Haltdos solution. By default, Haltdos solution comes with pre-built dashboards and report templates. Depending upon the customer’s need, these can be customized as per the customer’s requirements and expectations.


