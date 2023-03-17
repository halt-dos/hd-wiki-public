---
sidebar_position: 2
---
# Form Rule 
### Overview
Form Validation offers a positive security model of Application Firewall and allows enforcing specific values or a range of values for various form fields of a web application form.
![Form Page Screen](/img/waf/v6/docs/form_page.png)
 
 ### How to Use:
1. Follow the links: **WAF** > **Listener** >  **Profiles** > **Rules** > **Form Rules**.
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on Save Changes.

| Parameters         | Accepted value |  Default |
|--------------------|----------------|----------|
| Rule Name          | String         | Blank    |
| Rule Message       | String         | Blank    |
| Rule Priority      | Integer        | 0        |
| URI                | String         | Blank    |
| Method             | Drop-down      | All      |
| Request Validation | Drop-down      | Blank    |
| Value              | String         | Blank    |
| Field Name         | String         | Blank    |
| Field Type         | Drop-down      | Blank    |
| Field Value        | Drop-down      | Blank    |
### Description

#### Rule Name
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

#### Rule Message
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

#### Rule Priority
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

#### URI
Users are allowed to specify the URI of the form for which the form validation rule will be applied. The request to specified URI will only be validated.
Example:  /login

#### HTTP Method

Specify the HTTP method on which the rule will be applied. All the HTTP methods are supported like GET, POST, PUT, DELETE, OPTIONS, HEAD.
By clicking on the Request Validation and Field Validation tab, the end-user can add the validation according to a particular set value.

#### Request Validation

Specify the type of validation to be implemented by selecting the validation type from the drop-down list.

Accepted Values:
- Minimum Request Size - Specify the minimum size of the request.
- Maximum Request Size - Specify the maximum size of the request.
- Minimum Header Count - Specify the minimum header count of the request.
- Maximum Header Count - Specify the maximum header count of the request.
- Minimum Body Length - Specify the minimum body length of the request.
- Maximum Body length - Specify the maximum body length of the request.
- Maximum Header length - Specify the maximum header length of the request.
- Maximum Header Value length - Specify the maximum header value length of the request.

#### Field Validation

- **Field Name** - Specify the name of the form field which you want the form validation rule to validate.

- **Field Type** - Select the type of the form field which you want the form validation rule to validate.
- **Field Value** - Select the value of the form field which you want the form validation rule to validate.

#### Accepted Values:

- **Field Type** - Users can specify the field type selection in the adjacent drop-down select the required field type (Integer, String, Email, etc).
- **Min Value** - Users can specify the minimum value accepted  by that field. On Selecting Field Type in the adjacent drop-down enter the minimum value of the form field.
- **Max Value** - Users can specify the maximum value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum value of the form field.
- **Min File Size** - Users can specify the minimum file size accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the minimum file size for the form field.
- **Max File Size** - Users can specify the maximum file size accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum file size for the form field.
- **Allowed File Extension** - Users can specify the file extension which will be allowed with a request which could be restricted. On Selecting Field Type in the adjacent drop-down enter the file extensions allowed for the form field.
- **Min Length** - Users can specify the minimum length of the value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the minimum length of the value of the form field.
- **Max Length** - Users can specify the maximum length of the value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum length of the value of the form field.



