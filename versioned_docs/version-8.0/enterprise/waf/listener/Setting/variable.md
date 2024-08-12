---
sidebar_position: 4
---

# Variable
Variables are dynamic values that can affect the behaviour of current request of the application.

---

## Overview

![Listener Operational Settings](/img/waf/v8/docs/variable.png)  
  
### How to Use:
1. Go to **WAF** > **Listener** > **Settings** > **Variables**.  
2. Configure the settings.
3. Click on Save changes.  


### Description  

##### **Variable Scope**
Users can specify the scope of the variable. Users can select any of the following: GLOBAL, TRANSACTION, SESSION, CUSTOM.

    Accepted values: GLOBAL / TRANSACTION / SESSION / CUSTOM

    Default: GLOBAL

##### **Variable Name**
Users can specify the user-friendly variable name.

    Accepted values: String

    Default: Blank 

##### **Variable Type**
Users can specify the variable type either it is string or Integer.

    Accepted values: String / Integer

    Default: String 

##### **Default Value**
Users can specify the default value for the variable.

    Accepted values: String

    Default: Blank
