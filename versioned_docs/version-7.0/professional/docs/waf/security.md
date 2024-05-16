---
sidebar_position: 3
---



# Security


---
### Overview 
Profile Setting specifies all the operational settings for user different application type (i.e. WEBSITE/WEB SERVICE/WEB SOCKET). It provides user protection and invokes signature rules to every configured specific settings for mentioned application type.

![security](/img/pro-waf/docs/security.png)

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
3. Then go to **Listeners** > **Security**
3. Configure the rule and click on save changes.

### Description

##### **Mitigation**
This option allows user to enable mitigation.  

    Accepted values: Enable / Disable

    Default: Disabled  


##### **Paranoia Level** 
Paranoia Level configures the severity in which HTTP requests should be allowed. It lets you disable certain rules to minimize several false positives that they may encounter. 

    Accepted values: Low / Medium / High / Under Attack

    Default: Low  
   
Note: Higher paranoia can also result in false positives.  

Haltdos WAF comes with four Security Paranoia Levels:  

- **LOW** -Adequate security level to defend almost all web applications from generic exploits. Recommended security level to ensure the least disruption from false positives.  

- **MEDIUM** - A slightly higher level of security to block nearly all web application exploits. It might result in some false positives.  

- **HIGH** - A more paranoid approach to web security. It delivers a higher number of false positives.  

- **UNDER ATACK** - The most paranoid defensive security method. It blocks sufficient legitimate requests to your site.  

##### **Enable Signature Validation**
Users can specify to enable the signature validation for the present profile.  

    Accepted values: Enable / Disable

    Default: Disable

##### **Enable LibInjection**
Users can configure settings related to Specify whether to enable internal libinjection based validations.  

    Accepted values: Enable / Disable

    Default: Disable  

##### **Application Type**
Specify the type of application (i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems.

    Accepted values: Web-Service / Website / Web Socket

    Default: Web-Service  

##### **Application Framework**
Specify the framework used for developing the application (if any). 

    Accepted values: Other / Drupal / WordPress / Joomal / Laravel / Magneto / Mediawiki / MYBB / Oscommerce / PHBB / PHMYADMIN / Symphony / VBULLITIN /  TYPO3 / SharePoint / SAP / DOMINNO / People_Soft / Other

    Default: Other  

##### **Application Language**
Specify the programming language in which application is developed. 

    Accepted values: Java / DOTNET / PHP / PYTHON / GO / OTHER

    Default: Other  

##### **Application Server**
Specify the server on which application is running.  

    Accepted values: IIS / TOMCAT / APACHE / OTHER

    Default: Other  

##### **Application  Database**
Specify the database which is being used in the application (if any).  

    Accepted values: MYSQL / PGSQL / MSSQL / ORACLE / NOSQL / MONGODB / MSACCES / DB2 / EMC / FIREBIRD / FRONTBASE / HSQLDB / INFORMIX / INGRES / MAXDB / SQLITE / SYBASE / INTERFACE / OTHER

    Default: Other  

##### **Application OS**
Specify the Operating system on which application is running.  

    Accepted values: WINDOW / UNIX / OTHER

    Default: Other  

##### **Temporary Blacklist Duration**
The time duration for which a malicious IP is suspended by WAF is specified here. The WAF Rules and Web Policy use this value.  

    Accepted values: Integer

    Default: 0  

    Metrics: Seconds 

