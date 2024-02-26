---
sidebar_position: 7
---

# Deception Rules

Deception provides an alternative approach for security that can deliver a useful additional layer of protection.

---

## Overview

Deception strategies will be implemented as a deception rule. This rule is capable of generating and injecting deception data automatically into HTTP traffic.

The goal of deception is to deceive and manipulate attackers inducing them to take actions that result in blocking the requests coming from them.

The attacker should believe that fake parameters are genuine and really belong to the real application and should try to modify them in a malicious way.

The rule will have to do the following : 

Intercept **HTTP** responses of the original application and inject fake parameters before delivering the response to the client. The possible fake parameter values will try to have attractive names and values.
1. For **GET** requests, the parameters will be added to existing `<a href>` link values.
2. For **POST** requests, the parameters will be added as hidden input type parameters of existing forms.

### How to Use:

1. Go to **WAF > Zones > Listener > Security Profiles > Rules > Deception Rules**.

2. Click on **Add Rule** and set relevant parameters described in the table below.

3. Click on **Save Changes**.

| PARAMETERS   | ACCEPTED VALUES                               | Default Value                                                    |
|--------------|-----------------------------------------------|------------------------------------------------------------------|
| Rule Name    | String                                        | Name eg. Example Rule                                            |
| Rule Message | String                                        | Brief Description eg. This Rule is used for Allowing Example API |
| Match URI    | URI                                           | Blank                                                            |
| Rule Action  | RECORD/DROP/TEMPORARY BLACKLIST/SKIP LEARNING | RECORD                                                           |
| Smoke URI    | URI                                           | Blank                                                            |
| Method       | Dropdown                                      | GET                                                              |
| Fields       | String                                        | Blank                                                            |

#### Description

**Rule Name**: Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

**Rule Message**: Specify a rule message containing a detailed description to identify the rule which is to be created.

**Match URI**: Specify the URI to match with the rule to invoke the action accordingly.

**Rule Action**: Action that should be performed when the Rule Condition is Satisfied. The valid values for action are:

  - **DROP**: If the rule matches then drop the request.

  - **RECORD**: If the rule matches then put the request in record mode.

  - **BYPASS**: If the rule matches put the request in BYPASS mode

  - **TEMPORARY BLACKLIST**: If the rule matched temporarily blacklist the user IP. This will only work if you already have set a temporary blacklist duration else it will not be considered.

  - **SEND CHALLENGE**: If the rule matches then send a captcha challenge to the user to validate the user is human or bot. And if the challenge fails then temporarily blacklist the user and if temp. Blacklist duration Is 0 then send him a challenge unless he passes the challenge, or the challenge duration expires.

  - **SKIP LEARNING**: If the rule matches then no learning will be performed on the current request.

**Smoke URI**: Specify the smoke URI for the rule. The smoke URI will be the one that could be used by attackers to attack.

**Methods**: Specify the HTTP methods for the rule to be created.

**Fields**: Specify the fields for which the rule will be applicable.