---
sidebar_position: 1
---

# Settings
  
#### Overview 
Profile Setting specifies all the operational settings for user different application type (i.e. WEBSITE/WEB SERVICE/WEB SOCKET). It provides user protection and invokes signature rules to every configured specific settings for mentioned application type.

![Profile_settings](/img/waf/v7/docs/profile_setting.png)
   
### How to Use:
1. Go to **WAF** > **Listener** > **Profiles** > **Settings**.
2. Configure your settings.
3. Click on Save Changes.

| Parameters                   | Accepted Values | Default |
|------------------------------|-----------------|---------|
| Operational Mode             | Drop-Down       | Bypass  |
| Paranoia Level               | Drop-Down       | Low     |
| Enable Signature Validation  | Boolean         | False   |
| Enable LibInjection          | Boolean         | False   |
| Application Type             | Drop-Down       | Other   |
| Application Framework            | Drop-Down       | Other   |
| Application Language           | Drop-Down       | Other   |
| Application Server            | Drop-Down       | Other   |
| Application Database             | Drop-Down       | Other   |
| Application OS            | Drop-Down       | Other   |
| User Groups                  | Drop-down       | Blank   |
| Temporary Blacklist Duration | Integer         |    0     |
   
## Description

##### **Operational Mode**
This option allows user to specify operational mode for every given security profile. Different operational modes are:
- **MITIGATION:** In this mode, all the mitigation & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped  

- **BYPASS:** In this mode, all the requests get bypassed without any filtration of mitigation & rule sets.  

- **RECORD:** In this mode, all the mitigation & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event.  

##### **Paranoia Level** 
Paranoia Level configures the severity in which HTTP requests should be allowed. It lets you disable certain rules to minimize several false positives that they may encounter.  
   
Note: Higher paranoia can also result in false positives.  

Haltdos WAF comes with four Security Paranoia Levels:  

- **LOW** -Adequate security level to defend almost all web applications from generic exploits. Recommended security level to ensure the least disruption from false positives.  

- **MEDIUM** - A slightly higher level of security to block nearly all web application exploits. It might result in some false positives.  

- **HIGH** - A more paranoid approach to web security. It delivers a higher number of false positives.  

- **UNDER ATACK** - The most paranoid defensive security method. It blocks sufficient legitimate requests to your site.  

##### **Enable Signature Validation**
Users can specify to enable the signature validation for the present profile.  

##### **Enable LibInjection**
Users can configure settings related to Specify whether to enable internal libinjection based validations.  

##### **Application Type**
Specify the type of application (i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems.  

##### **Application Framework**
Specify the framework used for developing the application (if any).

##### **Application Language**
Specify the programming language in which application is developed.

##### **Application Server**
Specify the server on which application is running.

##### **Application  Database**
Specify the database which is being used in the application (if any).

##### **Application OS**
Specify the Operating system on which application is running.

##### **User Groups**
Create a user group for operating the API gateway. Detailed information can be found using this link User Group.  

##### **Temporary Blacklist Duration**
The time duration for which a malicious IP is suspended by WAF is specified here. The WAF Rules and Web Policy use this value.


