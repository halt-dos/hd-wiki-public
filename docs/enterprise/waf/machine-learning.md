---
sidebar_position: 1
---

# Machine Learning

Reason behind using AI based Machine Learning in WAF.

---

Haltdos WAF uses machine learning for detecting and diminishing application layer attacks on web applications with the help of built-in rules (signatures) and user defined rules. 

## Anomaly based Learning

Haltdos provides user a robust solution with the help of machine-learning because the main task of a web application firewall is to protect downstream web applications against technical attacks. It can also be used for log analysis, or to support administrators in creating or optimizing complex WAF configurations.

AL is limited because it depends on what it learns from usage patterns that it has encountered. Web application firewalls that leverage machine learning ML, however, take a different approach. With ML, the WAF can minimize false positives by using a statistical model to determine the probability that an anomaly is actually evidence of a cyberattack or if it’s just an error or a change in how users interact with the application.

WAFs can utilize ML in an additional way – training ML models to recognize specific threats based on data collected from actual attacks or from security solutions. For example, leverages machine learning to detect advanced bots, providing a total picture of bot activity on web applications. To learn about whether a request is legitimate or a potential malicious attack attempt, it performs the following tasks:

- Captures and collects inputs, such as URL parameters, to build a mathematical model of allowed access.

- Observes the HTTP method of the traffic.

- Matches anomalies against pre-trained threat models.

- Detect attacks.

Haltdos WAF is used machine learning to enumerate all HTTP request, parameter, headers and cookies. This calculation is done during initial learning phase of standard behavior by detecting deviation. Initially, solution is set on LEARNING mode means working on sample request and baseline evaluation of users and web application. The baseline is figuring every request URL + Method combination and includes all parameters (in header and in body) along with headers and associated cookies. Once the learning is complete, the solution will verify every request against the model to determine whether it's an anomaly or not.

The magnificent advantage of Haltdos WAF is that solution does not depend on only one algorithm to evaluate genial anomaly or 0-day attack. Every request is evaluated against different ML models which check for different categories of attacks such as SQL Injection, Cross-site Scripting, etc. The suspicion score is the measure of deviation from baseline. Greater the deviation, higher the score and likely that the incoming request is a malicious request.  

To configure Learning for your application, go to [**Learning**](/v8/enterprise/waf/listener/learning) module.