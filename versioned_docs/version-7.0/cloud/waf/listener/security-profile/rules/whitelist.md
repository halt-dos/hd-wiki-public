---
sidebar_position: 4
---

# Whitelist Rules

This rule allows to add exceptions on existing rules (custom and managed)

---

## Overview

A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.

Whitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations.

Here’s another use case: To reduce insider threat, a cyberattack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network.

### How to Use:

Follow the Steps Given Below to configure a Whitelist Rule:

1. Go to **WAF > Zones > Listeners > Security Profiles > Rules > Whitelist Rules**.
2. Click on the **Add Rule** button and a pop-up box will open.
3. Configure the Fields that are present.
4. Click on **Save Changes**

**Configurable Fields**

All the fields are required unless disabled by the UI

| SETTINGS       | DESCRIPTION                                                     | ACCEPTED                                                         |
|----------------|-----------------------------------------------------------------|------------------------------------------------------------------|
| Rule Name      | Name For the Configured Rule                                    | Name eg. Example Rule                                            |
| Message        | Description For the Rule                                        | Brief Description eg. This Rule is used for Allowing Example API |
| Custom Rule ID | ID that you assign the Rule                                     | 9 Digit Number                                                   |
| Specific URI   | URI to whitelisted for this Rule                                | Valid URI eg. /login                                             |
| Location       | Location of the entity that has to be whitelisted               | Any value from the Drop Down List                                |
| Value          | Value at the Location that has to be selected for White Listing | The value that you want to match at the specific location        |

#### Description

**Rule Name**: Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

**Message**: Specify a rule message containing a detailed description to identify the rule which is to be created. 

**Custom Rule Id**: Specify the rule/mitigation id that needs to be whitelisted so that action against that request will be allowed.

**Specific URI**: Specify the URI or regex for which the whitelist rule will be applicable. 

**Add Location**: By clicking on the Add Location button, the end-user can add specify the location to be whitelisted. If no location is added then, the rule/mitigation is whitelisted completely.

- **Location**: Specify the location of the entity that has to be whitelisted. The accepted values are: 

    -  **URL**: Select this if the specified value has to be searched in the URL part of the HTTP Header. 

    - **HEADER VAR**: Select this if the specified value has to be searched in the Headers part of the HTTP Header variables. 

    - **HEADER VAL**: Select this if the specified value has to be searched in the Headers part of the HTTP Header values. 

    - **HEADERS**: Select this if the specified value has to be searched in the Headers part of the HTTP Header. 

    - **COOKIE VAR**: Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie variables. 

    - **COOKIE VAL**: Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values. 

    - **COOKIES**: Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies. 

    - **BODY VAR**: Select this if the specified value has to be searched in the variables in the Body part of the HTTP Header. 

    - **BODY VAL**: Select this if the specified value has to be searched in the values in the Body part of the HTTP Header 

    - **BODY**: Select this if the specified value has to be searched in the Body part of the HTTP Header 

    - **ARGS VAR**: Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header 

    - **ARGS VAL**: Select this if the specified value has to be searched in the values in the Arguments section in the HTTP Header 

    - **ARGS**: Select this if the specified value has to be searched in the Arguments section in the HTTP Header 

    - **VARIABLE**: Select this if the specified value has to be searched in the variables in the HTTP Header.

**Value**: Value at the Location that has to be checked for White Listing.  

**Add**: By clicking on the Add button, the end-user can add multiple conditions for Location and Value to be whitelisted. If no location is added then, the rule/mitigation is whitelisted completely. 