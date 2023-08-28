# Protection URL
A Web Application Firewall (WAF) is a security system that protects web applications from various online threats, such as malicious attacks, data breaches, and unauthorized access. A WAF can be implemented as a hardware appliance, software solution, or cloud-based service. One common way to integrate a WAF into a website's architecture is by using a CNAME (Canonical Name) record.




## FQDN

FQDN stands for Fully Qualified Domain Name. It is a complete and unambiguous domain name that specifies an exact location in the Domain Name System (DNS) hierarchy. An FQDN consists of two main parts: **Hostname** and **Domain name**. The hostname is the specific name of a machine or device within the domain, and the domain name indicates the broader context or location of that machine within the DNS structure.

An FQDN is structured in a hierarchical manner, with each part separated by a dot (period). For example, consider the FQDN **www.example.com**:

- **www** is the hostname.
- **example.com** is the domain name.
- Together, they form the fully qualified domain name - **www.example.com**. This FQDN can be used to uniquely identify a specific machine on the internet.

FQDNs are important for various networking and internet-related tasks, including website hosting, email routing, and network administration. They provide a standardized and human-readable way to refer to specific resources on the internet.


## How Protection URL works?

A **CNAME** record is a type of **DNS** record that allows you to create an alias for a domain name. It's used to associate one domain name with another, allowing the second domain to effectively point to the same location as the first domain. This is commonly used for load balancing, content delivery networks (**CDNs**), and in this case, for integrating a WAF with a website.

When using a WAF service, you might be required to set up a CNAME record in your DNS configuration. Here's how it generally works:

- You subscribe to a WAF service, which provides you with a unique domain name (e.g. **waf.examplewaf.com**).

- Instead of directing traffic to your web server directly, you create a CNAME record in your DNS settings. This CNAME record points from a subdomain of your main domain (e.g., **secure.example.com**) to the WAF's domain (e.g., **waf.examplewaf.com**).

- When users access your website using the subdomain you specified (e.g., **secure.example.com**), the DNS resolution process directs the traffic to the WAF service instead.

- The WAF then inspects the incoming traffic, filters out any malicious requests or attacks, and forwards the clean traffic to your actual web server. This adds an extra layer of security for your website.

By using a CNAME record to direct traffic through a WAF, you can leverage the security features of **Haltdos Cloud WAF** without having to modify your main website's infrastructure.

![fdqn](/img/saas/fqdn.png)