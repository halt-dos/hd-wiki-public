---
sidebar_position: 3
---

# Webhooks

Integration with external 3rd party solutions for notification and alerts via APIs

---

Haltdos platform can easily integrate with one or more API endpoints to send alerts and notifications for timely action (as necessary). API integration can be done for various reasons such as integration with SMS Gateway, internal ticketing system, etc.

![webhooks](/img/platform/v7/docs/webhooks_new_ui.png)

### How to Use:

1. Go to **Stack** > **Integration** > **Webhooks**.
2. Click on the button  **Add Webhoks**    |
3. Configure your settings
4. Click **Save Changes**

| PARAMETERS       | DESCRIPTION                                    | ACCEPTED VALUES | DEFAULT |
|------------------|------------------------------------------------|-----------------|---------|
| Enable           | Enable                                         | Boolean         | False   |
| Name             | Specify the Name                               | String          | Blank   |
| HTTP Method      | Specify HTTP method from the provided options  | Dropdown        | POST    |
| URL              | Specify complete url to send the notifications | URL             | Blank   |
| Payload Location | Specify the Payload Location                   | Drop-down       | PARAM   |
| Payload Name     | Specify the payload name                       | String          | Blank   |
| Attribute Type   | Select the type of attribute                   | Dropdown        | HEADER  |
| Attribute Name   | Enter a name for the attribute                 | String          | Blank   |
| Attribute Value  | Enter a value for the attribute                | String          | Blank   |

