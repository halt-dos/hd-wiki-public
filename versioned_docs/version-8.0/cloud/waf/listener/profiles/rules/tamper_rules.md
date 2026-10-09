---
sidebar_position: 8
---

# Tamper Rules
   

### Overview
   
The Tamper rule is a feature of Haltdos WAF that provides encryption for the user input fields to protect from browser based malware stealing user's credentials, It also validates hidden input fields.
   
![Tamper Rule](/img/waf/v8/docs/tamperRule1.png)
   
![Tamper Rule](/img/waf/v8/docs/tamperRule2.png)
    
### How to Use:
1. Follow the links: **WAF** > **Listener** >  **Profiles** > **Rules** > **Tamper Rules**
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on save changes.

### Description 

##### **Rule Name**
Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

```
    Accepted values: String

    Default: Blank  
```


##### **Rule Message**
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

```
    Accepted values: Description for the rule in String format

    Default: Blank  
```


##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0.

```
    Accepted values: Integer

    Default: 0  
```


##### **Tamper Action**
Users are allowed to specify the tamper action to be taken for the request matched.

```
    Accepted values: Encrypt / Obfuscate / Hash / Parameter Protection

    Default: Blank 
```


##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. Drop & Record Request, Record Request, Bypass Request, Temporary Blacklist Src IP, Redirect, Send Challenge, Send Response, Tarpit Src IP, No Action, Skip Learning, Send Empty Response.

```
    Accepted values: Accepted values: DROP / RECORD / BYPASSED / TMP_BLACKLIST / REDIRECT / SEND_CAPTCHA / SEND_CRYPTO_CHALLENGE / SEND_RESPONSE / SEND_RESPONSE_WITHOUT_CODE / SET_RESPONSE_CODE / TARPIT / NO_ACTION / SKIP_LEARNING / EMPTY_RESPONSE / TERMINATE_CONNECTION / BLOCK_USER_SESSION

    Default: Blank  
```


### Attribute Extraction

##### **URI**
Users are allowed to specify the URI on which the tamper rule will be applied.

```
    Accepted values: Regex

    Default: Blank  
```


- **example** - /login

##### **Method**
Users are allowed to select the HTTP method for the rule to extract when matched with the request.

```
    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL  
```


##### **Extract From **
Users are allowed to select the location from where you want to extract the attribute i.e. Field, Cookie, Header, Body, HTML.

```
    Accepted values: Header Name / Header Value / Cookie Name / Cookie Value / Body Name/ Bdy Value / Argument Name / Argument Value / Body / HTML Head / HTML Footer

    Default: 0  
```


##### **Parameter**
Users are allowed to specify the parameter which will be used for the rule for extraction.

```
    Accepted values: String

    Default: Blank  
```


### **Attribute Validation**

##### **URI**
Users are allowed to specify the URI on which the tamper rule will be applied.

```
    Accepted values: Regex

    Default: Blank  
```


##### **Method**
Users are allowed to select the HTTP method for the rule to validate when matched with the request.

```
    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL  
```


##### **Extract From**
Users are allowed to select the location from where you want to validate the attribute i.e. Header, Cookie, Body, Argument Name or Value.

```
    Accepted values: Header Name / Header Value / Cookie Name / Cookie Value / Body Name/ Bdy Value / Argument Name / Argument Value / Body / HTML Head / HTML Footer

    Default: 0  
```


##### **Parameter**

Users are allowed to specify the parameter which will be used for the rule for extraction.

```
    Accepted values: String

    Default: Blank
```

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/cloud/waf/listener/profiles/rules/ruleCond)



