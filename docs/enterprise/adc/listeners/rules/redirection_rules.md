---
sidebar_position: 3
---

# Redirection Rules

---

Redirection Rules is a feature of Haltdos SLB that allows application owners to redirect a request to another URL, temporarily or permanently on matching a particular URL pattern.

![Redirection rule](/img/adc/v8/docs/redirection_rule.png)

#### How to Use:

1. Go to **Stack** > [**SLB**](/enterprise/adc) > [**Listeners**](../listeners.md) > **Rules**.
2. Select the **Redirection Rules**.
3. Click **Add Rule** button.
4. Configure your settings. 
5. Click **Save Changes**.

### Description:

##### **Rule Name**

User can specify the rule name for redirection rule

    Accepted values: String

    Default: Blank  

##### **Rule Message**

User can specify message that specifies the purpose for this particular rule. 

    Accepted values: String

    Default: Blank 

##### **Rule Enabled**

Users can enable or disable the rule.

    Accepted values: Enabled / Disabled

    Default: Enabled    

##### **Rule Priority**

The user can specify the priority for this particular rule.

    Accepted values: Integer

    Default: 1

##### **Match URI**

The user can specify the URL that needs to be redirected.

    Accepted values: URI

    Default: Blank  

##### **Forward URL**

The user can specify the URL where the match URL needs to be redirected.

    Accepted values: URL

    Default: None  

##### **Response Code**

The user can specify the response code as temporary or permanent redirect.

    Accepted values: 301, 302

    Default: 302 - Temporary Redirect  

**301** - Permanent Redirect

**302** - Temporary Redirect