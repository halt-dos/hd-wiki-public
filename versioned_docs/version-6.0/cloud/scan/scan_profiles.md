---
sidebar_position: 2
---

# Scan Profiles

---

## Overview

Haltdos Scanner supports multiple scan profiles per target application. A user can create a scan profile and use that to run multiple scans on target applications. The scan profile defines the scope of the security scan, authentication parameters for performing scanning as authenticated user and connection related settings to not overwhelm targeted applications.

A scan profile consists of the following specifications:

### Scan Scope

 PARAMETER                       | DESCRIPTION                                                                           
---------------------------------|---------------------------------------------------------------------------------------
 Scope to HTTPS                  | Specify if only HTTPs links to scan                                                   
 Scope Directory Depth Limit     | Specify the depth of Scan                                                             
 Scope Include Sub-Domains       | Specify if sub-domains are also included in the scan                                  
 Scope Exclude Binaries          | Specify if binary files are excluded in the scan                                      
 Scope Page Limit                | Specify the number of unique pages to scan                                            
 Scope Dom Depth Limit           | Specify how deep to go into the DOM tree of each page, for pages with JavaScript code 
 Scope Excluded Content Patterns | Excludes pages whose content matches any of the given patterns                        
 Scope Excluded Path Patterns    | Excludes crawling and auditing URLs which match the given patterns                    
 Scope Included Path Patterns    | Only crawls and audits URLs matching the given patterns                               
 Scope Restrict Path             | Uses the given paths instead of crawling.                                             
 Scope Extend Path               | Uses the provided list of paths to extend the scope of the crawl                      

### Scan Auth

| PARAMETER                               | DESCRIPTION                                                                                          |
|-----------------------------------------|------------------------------------------------------------------------------------------------------|
| Enter Url                               | The URL that contains the login form (URL).                                                          |
| Input field name for the username field | Name of the username input field                                                                     |
| Username                                | Login username of your login module                                                                  |
| Input field name for the password field | Name of your Password input field                                                                    |
| Password                                | Login password of your login module                                                                  |
| Enter Login Check                       | For example, if a logout link only appears when a user is logged in then it can be a perfect choice. |

### Scan Audit

| PARAMETER                    | DESCRIPTION                                                                                    |
|------------------------------|------------------------------------------------------------------------------------------------|
| Audit Forms                  | Enable to evaluate forms during scanning                                                       |
| Audit Links                  | Enable Audit links                                                                             |
| Audit UI Forms               | Evaluate UI forms during scanning                                                              |
| Audit UI Input               | Audit orphan input elements with associated DOM events                                         |
| Audit Cookies                | Evaluate cookies during scanning                                                               |
| Audit Headers                | Evaluate headers during scanning                                                               |
| Audit JSON                   | Enable Audit JSON inputs                                                                       |
| Audit XMLs                   | Enable Audit XML inputs                                                                        |
| Audit With Both HTTP methods | Audit elements with both GET and POST requests                                                 |
| Audit Cookies Extensively    | Submits all links and forms of the page along with the cookie permutations                     |
| Audit Include Vector Pattern | Only includes input vectors (parameters) whose name matches the given patterns in the audit.   |
| Audit Exclude Vector Pattern | Excludes input vectors(parameters)whose name matches the given patterns from the audit         |
| Audit Link Templates         | Regular expression with named captures to use to extract input information from generic paths. |
| Add Form Key                 | Form key                                                                                       |
| Add Form Value               | Form value                                                                                     |

### Connection Settings

| PARAMETER              | DESCRIPTION                                          |
|------------------------|------------------------------------------------------|
| Request Redirect Limit | Limits the amount of total redirects to be followed. |
| Request Concurrency    | Amount of requests to be active at any given time.   |
| Request Queue Size     | Maximum amount of HTTP requests to keep in the queue |
| Request Timeout        | Specify request timeout value                        |
| Response Max Size      | Specify max response size to be evaluated            |
| Add Cookie Value       | Specify list of cookies to be specified during scan  |
| Add Header Value       | Specify list of headers to be included during scan   |

### Fingerprinting

Optimize Scan by restricting the scope to the technologies used by the target application

| PARAMETER             | DESCRIPTION                                                            |
|-----------------------|------------------------------------------------------------------------|
| Operating System      | Specify the list of operating systems of Origin Servers                |
| Database              | Specify the list of databases used by target application               |
| Web Servers           | Specify the list of web servers used by target application             |
| Web Frameworks        | Specify the list of web frameworks (if any) used by target application |
| Programming Languages | Specify the list of programming languages used by target application   |

### Scan Types

Specify the types of scans to run. The scans can be of two types:

1. Active Scan
2. Passive Scan

#### Active Scans

Active Scan checks the following vulnerabilities during the scan

- Code Injections
- CSRF
- File Inclusions
- LDAP Inclusions
- No SQL Injection
- OS Command Injection
- Path Traversal
- Response Splitting
- Source Code Disclosure
- SQL Injection
- Unvalidated Redirect
- XSS
- XML

#### Passive Scans

Passive Scan checks the following vulnerabilities during the scan

- Check HTTP Methods
- Check for Backdoor
- Check File Directories
- Check Admin Interfaces
- Check Files
- Check Cookies
- Check for information disclosure
- Check HTML issues
- Check CORS security
- Check Input forms
- Check Code Repository issues
- Check Access Policy
- Check HTTP Header security (HSTS policy)
- Check HTTP Response for miscellaneous disclosures