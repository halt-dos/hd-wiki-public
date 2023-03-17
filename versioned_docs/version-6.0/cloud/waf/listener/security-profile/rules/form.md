---
sidebar_position: 1
---

# Form Validation

These rules (Positive Security Model) enforce validation on different forms in your application.

---

## Overview

Form Validation offers a positive security model of Application Firewall and allows enforcing specific values or a range of values for various form fields of a web application form.

### How to Use:

1. Follow the links: **WAF > Zones > Listener > Security Profiles > Rules > Form**.

2. Click on Add Rule and set relevant parameters described in the table below.

3. Click on Save Changes.

| SETTINGS           | ACCEPTED VALUES                                              | DEFAULT |
|--------------------|--------------------------------------------------------------|---------|
| Rule Name          | String                                                       | None    |
| Rule Message       | String                                                       | None    |
| Match URI          | URI                                                          | None    |
| HTTP Method        | GET, POST, PUT, DELETE, HEAD, CONNECT, OPTIONS, TRACE, PATCH | POST    |
| Request Validation | Chose from dropdown                                          | None    |
| Value              | Integer                                                      | None    |
| Field Name         | String                                                       | None    |
| Field Type         | Chose from dropdown                                          | None    |
| Field Value        | Chose from dropdown                                          | None    |

#### Configuring Form Validation Rule

**Rule Name**

Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

**Rule Message**

Specify a rule message containing a detailed description to identify the rule which is to be created.

**Match URI**

Specify the URI of the form for which the form validation rule will be applied. The request to specified URI will only be validated.

- **Example** /login

**HTTP Method**

Specify the HTTP method on which the rule will be applied. All the HTTP methods are supported like GET, POST, PUT, DELETE, OPTIONS, HEAD.

By clicking on the **Request Validation** and **Field Validation** tab, the end-user can add the validation according to a particular set value.

**Request Validation**

Specify the type of validation to be implemented by selecting the validation type from the drop-down list.

Accepted Values:

- **Minimum Request Size** - Specify the minimum size of the request.

- **Maximum Request Size** - Specify the maximum size of the request.

- **Minimum Header Count** - Specify the minimum header count of the request.

- **Maximum Header Count** - Specify the maximum header count of the request.

- **Minimum Body Length** - Specify the minimum body length of the request.

- **Maximum Body length** - Specify the maximum body length of the request.

- **Maximum Header length** - Specify the maximum header length of the request.

- **Maximum Header Value length** - Specify the maximum header value length of the request.

**Field Validation**

- **Field Name** - Specify the name of the form field which you want the form validation rule to validate.
- **Field Type** - Select the type of the form field which you want the form validation rule to validate.

- **Field Value** - Select the value of the form field which you want the form validation rule to validate.

Accepted Values:

- **Field Type** - Specify the type of the field of the form
    - On Selecting Field Type in the adjacent dropdown select the required field type (Integer, String, Email, etc).

- **Min Value** - Specify the minimum value accepted by that form field.
    - On Selecting Field Type in the adjacent dropdown enter the minimum value of the form field.

- **Max Value** - Specify the maximum value accepted by that form field.
    - On Selecting Field Type in the adjacent dropdown enter the maximum value of the form field.

- **Min File Size** - Specify the minimum file size accepted by that form field.
    - On Selecting Field Type in the adjacent dropdown enter the minimum file size for the form field.

- **Max File Size** - Specify the maximum file size accepted by that form field.
    - On Selecting Field Type in the adjacent dropdown enter the maximum file size for the form field.

- **Allowed File Extension** - Specify the file extension which will be allowed with a request which could be restricted.
    - On Selecting Field Type in the adjacent dropdown enter the file extensions allowed for the form field.

- **Min Length** - Specify the minimum length of the value accepted by that form field.
    - On Selecting Field Type in the adjacent dropdown enter the minimum length of the value of the form field.

- **Max Length** - Specify the maximum length of the value accepted by that form field.
    - On Selecting Field Type in the adjacent dropdown enter the maximum length of the value of the form field.

- **Immutable field** - Select this if you want to validate such that the form field becomes immutable.


