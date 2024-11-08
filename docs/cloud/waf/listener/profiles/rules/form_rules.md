---
sidebar_position: 2
---
# Form Rule 
### Overview
Form Validation offers a positive security model of Application Firewall and allows enforcing specific values or a range of values for various form fields of a web application form.
![Form Page Screen](/img/waf/v8/docs/formRule1.png)
 
![Form Page Screen](/img/waf/v8/docs/formRule2.png)

### How to Use:
1. Follow the links: **WAF** > **Listener** > **Profiles** > **Rules** > **Form Rules**.
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on **Save Changes**.

### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

```
    Accepted values: String

    Default: None
```


##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

```
    Accepted values: Description for the rule in String format

    Default: None  
```


##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule default value Is 0. 

```
    Accepted values: Integer

    Default: 0
```


##### **URI**
Users are allowed to specify the URI of the form for which the form validation rule will be applied. The request to specified URI will only be validated.
Example: /login

```
    Accepted values: Regex

    Default: None
```


##### **HTTP Method**

Specify the HTTP method on which the rule will be applied. All the HTTP methods are supported like GET, POST, PUT, DELETE, OPTIONS, HEAD.
By clicking on the Request Validation and Field Validation tab, the end-user can add the validation according to a particular set value.

```
    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: GET
```


##### **Rule Action**

Specidy Rule Action

```
    Accepted values: NO_ACTION / DROP / RECORD / BYPASSED / REDIRECT / SEND_RESPONSE / SEND_RESPONSE_WITHOUT_CODE / SET_RESPONSE_CODE / SEND_CAPTCHA / SEND_CRYPTO_CHALLENGE / TARPIT / TMP_BLACKLIST / SKIP_LEARNING / TERMINATE_CONNECTION / BLOCK_USER_SESSION

    Default: NO_ACTION
```



##### **Request Validation**

Specify the type of validation to be implemented by selecting the validation type from the drop-down list.

```
    Accepted values: MINIMUM REQUEST SIZE / MAXIMUM REQUEST SIZE / MINIMUM HEADER COUNT / MAXIMUM HEADER COUNT / MINIMUM BODY LENGTH / MAXIMUM BODY LENGTH / MINIMUM HEADER LENGTH / MAXIMUM HEADER VALUE LENGTH

    Default: Blank
```


Accepted Values:
- **Minimum Request Size** - Specify the minimum size of the request.
- **Maximum Request Size** - Specify the maximum size of the request.
- **Minimum Header Count** - Specify the minimum header count of the request.
- **Maximum Header Count** - Specify the maximum header count of the request.
- **Minimum Body Length** - Specify the minimum body length of the request.
- **Maximum Body length** - Specify the maximum body length of the request.
- **Maximum Header length** - Specify the maximum header length of the request.
- **Maximum Header Value length** - Specify the maximum header value length of the request.

##### **Field Validation**

- **Field Name** - Specify the name of the form field which you want the form validation rule to validate.  

```
    Accepted values: String

    Default: Blank
```

- **Field Validation** - Select the type of the form field which you want the form validation rule to validate.

```
    Accepted values: FIELD_TYPE / MIN_VALUE / MAX_VALUE / MIN_FILE_SIZE / MAX_FILE_SIZE / FILE_EXTENSION / MIN_LENGTH / MAX_LENGTH / PATTERN_EXISTS

    Default: Select
```

- **Validation Parameter** - Select the value of the form field which you want the form validation rule to validate.

```
    Accepted values: String

    Default: Blank
```


##### Accepted Values:

- **Field Type** - Users can specify the field type selection in the adjacent drop-down select the required field type (Integer, String, Email, etc).
- **Min Value** - Users can specify the minimum value accepted  by that field. On Selecting Field Type in the adjacent drop-down enter the minimum value of the form field.
- **Max Value** - Users can specify the maximum value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum value of the form field.
- **Min File Size** - Users can specify the minimum file size accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the minimum file size for the form field.
- **Max File Size** - Users can specify the maximum file size accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum file size for the form field.
- **Allowed File Extension** - Users can specify the file extension which will be allowed with a request which could be restricted. On Selecting Field Type in the adjacent drop-down enter the file extensions allowed for the form field.
- **Min Length** - Users can specify the minimum length of the value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the minimum length of the value of the form field.
- **Max Length** - Users can specify the maximum length of the value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum length of the value of the form field.



