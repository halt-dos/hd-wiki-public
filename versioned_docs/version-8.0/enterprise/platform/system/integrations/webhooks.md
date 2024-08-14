---
sidebar_position: 3
---

# Webhooks

### Integration with external 3rd party solutions for notification and alerts via APIs

---

Haltdos platform can easily integrate with one or more API endpoints to send alerts and notifications for timely action (as necessary). API integration can be done for various reasons such as integration with SMS Gateway, internal ticketing system, etc.

![webhooks](/img/platform/v8/docs/webhooks.png)

### How to Use:

1. Go to **System** > **Integration** > **Webhooks**.
2. Click on the button  **Add Webhooks**
3. Configure your settings
4. Click **Save Changes**

### Description:

**Enable**

 Select whether to Enable it or Disable it. 

    Accepted values: Enable / Disable

    Default: Disable 

**Name**

  Specify the Name 

    Accepted values: String

    Default: Blank 

**Stack**

 Specify the Stack 

    Accepted values: Dropdown list of stacks available

    Default: Blank 

**HTTP Method**

Specify HTTP method from the provided options

    Accepted values: POST / PUT / DELETE / UPDATE

    Default: POST 

**URL**

Mention the URL here

    Accepted values: URL

    Default: Blank 

**Payload Location**

This option helps the user to mention the payload location.

    Accepted values: ARG / PARAM / BODY

    Default: PARAM 

**Payload Name**

This option helps the user to mention the payload name.

    Accepted values: String

    Default: Blank 

**Attribute Type**

This option helps the user to mention the Attribute Type.

    Accepted values: ARG / PARAM / HEADER / COOKIE

    Default: ARG 

**Attribute Name**

This option helps the user to mention the Attribute name

    Accepted values: String

    Default: Blank 

**Attribute Value**

This option helps the user to mention the Attribute Value.

    Accepted values: String

    Default: Blank 
