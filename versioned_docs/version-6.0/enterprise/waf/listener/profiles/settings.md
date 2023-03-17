---
sidebar_position: 1
---

# Settings
  
#### Overview 
Profile Setting specifies all the operational settings for user different application type (i.e. WEBSITE/WEB SERVICE/WEB SOCKET). It provides user protection and invokes signature rules to every configured specific settings for mentioned application type.

![Profile_settings](/img/waf/v6/docs/profilesetting.png)
   
### How to Use:
1. Go to WAF > Listener > Security Profiles > Settings.
2. Configure your settings.
3. Click on Save Changes.

![Profile_settings](/img/waf/v6/docs/profilesetting1.png)

   
| Parameters                   | Accepted Values | Default |
|------------------------------|-----------------|---------|
| Operational Mode             | Drop-Down       | Bypass  |
| Paranoia Level               | Drop-Down       | Low     |
| Enable Signature Validation  | Boolean         | False   |
| Enable LibInjection          | Boolean         | False   |
| Application Type             | Drop-Down       | Other   |
| Application Framewwork            | Drop-Down       | Other   |
| Application Language           | Drop-Down       | Other   |
| Application Server            | Drop-Down       | Other   |
| Application Database             | Drop-Down       | Other   |
| Application OS            | Drop-Down       | Other   |
| User Groups                  | Drop-down       | Blank   |
| Temporary Blacklist Duration | Integer         |    0     |
   
## Description

1.**Operational Mode:**
This option allows user to specify operational mode for every given security profile. Different operational modes are:
- **MITIGATION:** In this mode, all the mitigations & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped  

- **BYPASS:** In this mode, all the requests get bypassed without any filtration of mitigations & rule sets.  

- **RECORD:** In this mode, all the mitigations & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event.  

2.**Paranoia Level:** 
Paranoia level configures the severity in which HTTP requests should be allowed. It lets you disable certain rules to minimize several false positives that they may encounter.  
   
Note: Higher paranoia can also result in false positives.  

Haltdos WAF comes with four Security Paranoia Levels:  
- **LOW** -Adequate security level to defend almost all web applications from generic exploits. Recommended security level to ensure the least disruption from false positives.  

- **MEDIUM** - A slightly higher level of security to block nearly all web application exploits. It might result in some false positives.  

- **HIGH** - A more paranoid approach to web security. It delivers a higher number of false positives.  

- **UNDER ATACK** - The most paranoid defensive security method. It blocks sufficient legitimate requests to your site.  

3.**Enable Signature Validation:**
Users can specify to enable the signature validation for the present profile.  

4.**Enable LibInjection:**
Users can configure settings related to Specify whether to enable internal libinjection based validations.  

5.**Application Type:**
Specify the type of application ( i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems.  

6.**Application Framework:**
Specify the framework used for developing the application (if any).

7.**Application Language:**
Specify the programming language in which application is developed.

8.**Application Server:**
Specify the server on which application is running.

9.**Application  Database**
Specify the database which is being used in the application (if any).

10.**Application OS:**
Specify the Operating system on which application is running.

11.**User Groups:**
Create a user group for operating the API gateway. Detailed information can be found using this link User Group.  

12.**Temporary Blacklist Duration:**
The time duration for which a malicious IP is suspended by WAF is specified here. The WAF Rules and Web Policy use this value.


