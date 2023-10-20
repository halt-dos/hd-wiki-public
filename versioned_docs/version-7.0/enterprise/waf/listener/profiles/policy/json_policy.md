---
sidebar_position: 2
---

# JSON Policy

#### Configure JSON Security Policy for Restful web service
---

### Overview

JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:

![JSON Policy](/img/waf/v7/docs/profile_jsonpolicy.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Security Profiles** > **Policy** > **JSON Policy**.
2. Configure your settings.
3. Click on **Save Changes**.

### JSON Example

```
{   
  "employees": [   
  {   
    "firstName": "John",   
    "lastName": "Doe"   
  },   
  {   
    "firstName": "Anna",   
    "lastName": "Smith"   
  },   
  {   
    "firstName": "Peter",   
    "lastName": "Jones"   
  }   
  ]   
}
```
  
  

| Parameters                     | Accepted Values | Defaults         |
|--------------------------------|-----------------|------------------|
| Policy Mode                    | Drop-down       | Strict           |
| Supported Header               | Drop-Down       | application/json |
| Maximum Children               | Integer         | 100              |
| Maximum Key Name Length        | Integer         | 1000             |
| Maximum Property Value length  | Integer         | 1000             |
| Maximum Depth                  | Integer         | 100              |

## Description

##### **Policy Mode**
Users are allowed to specify support for json/json5 using STRICT mode where as RELAX will extends support for json5.

##### **Supported Header**
Users are allowed to specify supported header i.e. content-type, to identify request as json.

##### **Maximum Children**
This field specifies the maximum number of keys that a JSON object can have.
In the above example, the maximum children's length is 3, i.e. (key employees have 3 children).
A JSON object can have a minimum of 1 key and a maximum of 10000 keys.

##### **Maximum Key Name Length**
This field specifies the maximum key name length that a JSON object can have. In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9). A JSON object can have 1 as minimum key name length and 1000 as maximum key name length.

##### **Maximum Property Value length**
This field specifies the maximum property value size in a JSON object. A JSON object can have a minimum property value size of 1 and a maximum property value size of 10000.

##### **Maximum Depth**
This field specifies the maximum depth that a JSON object can have.
In the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 1000000.
