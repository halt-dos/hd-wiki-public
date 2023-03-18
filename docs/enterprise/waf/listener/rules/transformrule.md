---
sidebar_position: 4
---

# Transform Rules 

Transform Rule allow user to adjust or transform multiple attributes on there application. Like, User can Replace or Remove any parameter per there need. Even User can tranform parameter of there application like from XML to JSON or JSON to XML also.

Under Transform Rule user can even tranform certain protocol like HTTP to MQTT. MQTT is a standards-based messaging protocol, or set of rules, used for machine-to-machine communication.

Transform Rule allow user to do HTML encoding beacause it ensures that text will be correctly displayed in the browser, not interpreted by the browser as HTML

## Overview 

![transformrule](/img/waf/v7/docs/transformrule.png)

### How to Use:

1.Go to **WAF** > **Listeners** > **Rules** > **Tranform Rule**

2.Configure the Rule and Rule Condition 

3.Click on **Save Changes**

## Rule Information

| Parameter | Accepted Values | Default
| ----------- | ----------- |--------- |
| Rule Name|String|Blank
 Rule Message|String|Blank
Rule Priority|Integer|0
URI |String|Blank
Method|Drop Down|All
Transformation|Drop|Set
Location|Drop Down|Argument Value
Parameter Name|String|Blank
Replace With|String|Blank


## Rule Condition

| Parameter | Accepted Values | Default
| ----------- | ----------- |--------- |
| Location|Drop Down |Body Argument Name
 Parameter|String|Blank
Match Condition|Drop Down|None
Match Value |String|Blank

## Description 

1.**Rule Name :**

Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input.

2.**Rule Message :**

The user can add a short description of the rule. The description would explain the purpose of the rule.

3.**Rule Priority:** 

Set the priority of the rule. If two rules have the same priority, then selection will be random.

4.**URI:**

Specify the URI or regex for which rule will be applied. 

5.**Method:**

Select the HTTP method for the rule to validate when matched with the request.

6.**Transformation:**

Under this user can select which tranform he wants eg. HTTP to MQTT, XML to JSON or JSON to XML. Under this user can also set, replace or remove any parameter of there application.
     
 6.1**XML to JSON**- An element mentioned in XML can be tranform to JSON user just have to provide the location like whether it will be argument name, argument value,body ,body argument name , body argument value and Parameter Name.

 6.2**JSON to XML**- An element mentioned in JSON can be tranform to XML user just have to provide the location like whether it will be argument name, argument value,body ,body argument name , body argument value and Parameter Name.

 6.3 **HTTP to MQTT**- Under this transformation user can convert the protocol service from HTTP to MQTT.

 6.4 **HTML Encode**- HTML Encode ensures that all the elements and text will be correctly displayed in the browser.

7.**Location:**

Location provides the path on which transformation rule is going to work.

8.**Parameter Name:**

User have to specify the parameter name of which transform rule will work.

9.**Replace:**

Replace option comes only in use when the transformation is SET, REPLACE, HTTP to MQTT or HTML Encode

10.**MQTT Client ID:**

This option comes into play when Transformation is **HTTP to MQTT**. Here user have to specify the client ID. In this User will be able to connect the backend.

11.**MQTT Username:**

Here User have to specify MQTT username.

12.**MQTT Password:**

Here User have to specify MQTT passwordss
