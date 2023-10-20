---
sidebar_position: 0
sidebar_label: Introduction
---

# Introduction

**Web Application Firewall (WAF/ WAAP)** is a [**reverse proxy**](/glossary#reverse-proxy) solution which helps to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It secure company's Web applications against application layer cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats.  

**WAF** works as the intermediary as well as shield between the user and the app itself, analyzing and securing all communications before they reach the app or the user. A **WAF** operates through a set of rules often called policies. These policies aim to protect against vulnerabilities in the application by filtering out malicious traffic.  

A **WAF** analyzes **Hypertext Transfer Protocol (HTTP)** requests and applies a set of rules that define what parts of that conversation are begin and what parts are malicious. The main parts of HTTP conversations that a WAF analyzes are **GET** and **POST** requests. GET requests are used to retrieve data from the server, and POST requests are used to send data to a server to change its state.  

![haltdos](/img/ce-waf/docs/waf.png)  

A **WAF** can take two approaches to analyzing and filtering the content contained in these HTTP requests or a hybrid combination of the two:  

- **Whitelisting**: A whitelisting approach means that the WAF will deny all requests by default and allow only requests that are known to be trusted. It provides a list of what IP addresses are known to be safe.  

- **Blacklisting**: A blacklisting approach defaults to letting packets through and uses preset signatures to block malicious web traffic and protect vulnerabilities of websites or web applications.