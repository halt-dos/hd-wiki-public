---
sidebar_position: 0
pagination_prev: null
---

# Web Application Firewall (WAF)

Web Application Firewall (WAF/ WAAP) is a reverse proxy solution which helps to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It secures a company's Web applications against application layer cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats.  

WAF works as the intermediary as well as shield between the user and the app itself, analyzing and securing all communications before they reach the app or the user. A WAF operates through a set of rules often called policies. These policies aim to protect against vulnerabilities in the application by filtering out malicious traffic.  

A WAF analyzes Hypertext Transfer Protocol (HTTP) requests and applies a set of rules that define what parts of that conversation are beginning and what parts are malicious. The main parts of HTTP conversations that a WAF analyzes are GET and POST requests. GET requests are used to retrieve data from the server, and POST requests are used to send data to a server to change its state.  

A WAF can take two approaches to analyzing and filtering the content contained in these HTTP requests or a hybrid combination of the two:  

- **Whitelisting**: A whitelisting approach means that the WAF will deny all requests by default and allow only requests that are known to be trusted. It provides a list of what IP addresses are known to be safe.  

- **Blacklisting**: A blacklisting approach defaults to letting packets through and uses preset signatures to block malicious web traffic and protect vulnerabilities of websites or web applications.  

![](/img/waf/v7/docs/functioningofwaf.png)

### Benefit of Haltdos WAF  

- **Automated Patches**  

Automated patches are used to detect components and environment settings to adapt the firewall more efficiently. Endpoint WAF is something that is installed inside your application. It is more aware of the environment of your website than a cloud firewall. Haltdos WAF has the ability to use your scan report to temporarily patch your application for immediate protection.  

- **Data Leakage Prevention**  

Data Loss Prevention (DLP) is a set of technologies and business policies to make sure end-users do not send sensitive or confidential data outside the organization without proper authorization. Sensitive information might include financial records, customer data, credit card data, or other protected information.  

Haltdos WAF inspects all inbound traffic for attacks and outbound traffic for sensitive data. When any sensitive or malicious data is identified, it can be blocked or masked automatically. Comprehensive traffic logging helps you identify the source of any potential leaks.  

- **Rules with Learning**  

Unlike most WAFs that depend upon attack signatures (aka. rules) to detect and mitigate attacks, Haltdos WAF lookout for new vectors of attacks and continuously publishes signatures to mitigate them using a combination of Rules, Artificial Intelligence, and Threat Intelligence to provide 360° protection for your application. It continuously learns user and application behavior to detect anomalies and take remedial measures to block 0-day attacks.  

- **Positive + Negative Security Model**  

Positive Model WAF looks to allow access to specific characters or via specific rules. This means that each rule added provides greater access and conversely having no rules in place will block everything by default. This model has the benefit of severely limiting the vectors an attacker can exploit simply because everything that is not expressly allowed is automatically blocked.  

Negative Model WAF works on the premise that most attackers are using exploits that have already been uncovered. By blocking these exploits and by creating patches or updates for new vulnerabilities that occur, the client will have to do very little besides ensuring that their WAF is up-to-date to remain secure.  

Haltdos WAF is based on a Negative Security model that protects against known attacks and a Positive Security model that only admits pre-approved traffic. Think of a negative model as a club bouncer instructed to deny admittance to guests who don’t meet the dress code. Now in the positive model, this is like the bouncer at an exclusive party only admitting people who are invited. Both negative and positive have their advantages and drawbacks but when combined with Artificial Intelligence, Haltdos WAF provides comprehensive protection to your website.  

- **Regular Expression based Policy Configuration**

Haltdos WAF supports Regex engine for defining and enforcing rules and policies by using Regular Expressions. By leveraging the expressive syntax of Regex Engine, WAF Policy configurations can be finely tuned to match complex patterns, validate input data and also use it for configuring all the rules such as firewall, whitelist, redirection etc. With the support of Regex Engine, customers can create intricate rules that cater to specific URL patterns, headers, payload or other attributes within the HTTPS requests. This helps in optimizing the performance and the security of HTTPS request processing at WAF.  

This feature allows the customer to use Haltdos WAF to create dynamic and precise rules increasing the robustness and adaptability of the WAF solution to protect their Web Application.  

