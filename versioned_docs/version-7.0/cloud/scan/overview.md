---
sidebar_position: 1
---
# Overview

---

Haltdos Scanner is a **Website Vulnerability Scanner** that can quickly assess the security of a web application. It is a full-blown web application scanner, capable of performing comprehensive security assessments against any type of web application.

The scanner first crawls the target application then it sends various inputs into the parameters of the pages and looks for specific web vulnerabilities such as: SQL Injection, Cross-Site Scripting, Local File Inclusion, OS Command Injection and many more. Furthermore, the scanner also attempts to detect sensitive files from the server like backup files, old files, admin interfaces, archive files, etc.

Haltdos Scanner supports both on-demand as well as scheduled scans.

---

###  Authenticated Scanning

The Scanner can be configured to scan the target web application as an authenticated user. The authentication can be configured in two ways:

- **User/Password Authentication:** When this option is chosen, the scanner will first try to authenticate to the provided login URL and obtain a valid session cookie. This cookie will be used with all the HTTP requests done to the server, performing an authenticated scan. You have the option to check if the authentication was successful before actually starting the scan.

- **Cookie Authentication:** With this option you can specify an already valid session cookie (or multiple cookies) that will be sent with each HTTP request to the server. You have to first obtain the session cookie by manually logging in to your target application with a web browser and transferring the cookie from the browser to the scanner (copy/paste).

- **Headers Authentication:** This option allows you to specify custom HTTP headers that will be sent with each request to the target application. These can be used for authentication (ex. JWT tokens, Basic Authentication, etc) or for other specific application functionality.