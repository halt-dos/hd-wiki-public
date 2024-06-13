---
sidebar_position: 3
---

# XML Policy

#### Configure XML Security Policy for XML based API web service.
---

### Overview

XML Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that feature malware XML documents or documents bigger than the allowed size. The owner can set their Minimum & Maximum size limit for the XML document.

![Xmlpolicy](/img/waf/v7/docs/profile_xmlpolicy.png)

### How to Use:
1. Go to **WAF** > **Listeners** > **Profiles** > **Policy** > **XML Policy**.
2. Configure your settings.
3. Click on **Save Changes**.

### Example :

```
<bookstore>
    <book category="children">
    <title>Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
    </book>
    <book category="web">
    <title>Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
    </book>
</bookstore> 
```

### Description

##### **Supported Header**  
 Users are allowed to specify supported header i.e. content-type, to identify request as XML.
        
    Accepted values: String 

    Default: application/xml / text/xml

##### **Maximum Children**  
This field specifies the maximum child nodes of the XML document. In the above example, Tag ``<book>`` has 4 children. An XML document can have a minimum of 1 child and a maximum of 10000 children.

    Accepted values: Integer 

    Max: 10000

    Min: 0

    Default: 100  

##### **Maximum Depth**  
This field specifies the maximum depth of an XML document. In the above example, maximum depth is 2, Tag ``<book>`` is at depth 1 & children are at depth 2. An XML document can have a minimum depth of 1 and a maximum depth up to 1000000.

    Accepted values: Integer 

    Max: 1000000

    Min: 0

    Default: 100 

##### **Maximum Attributes**  
This field specifies the maximum attributes for a single node of an XML document. In the above example, the maximum attribute is 1, Tag ``<book>`` has 1 attribute. An XML document can have a minimum of 1 attribute and a maximum of 1000 attributes.

    Accepted values: Integer

    Max: 1000

    Min: 0

    Default: 100 

##### **Maximum Node Name**  
This field specifies the maximum node name size of an XML document. In the above example, the maximum node name is 9, Tag ``<bookstore>`` length is 9. An XML document can have a minimum of 1 node name size and a maximum of 10000 node name size.

    Accepted values: Integer 

    Max: 10000

    Min: 0

    Default: 1000 

##### **Maximum Node Value**  
This field specifies the maximum node value of the XML document. In the above example, the maximum node value is 12, Tag ``<title>`` has a value of Harry Potter of length 12. An XML document can have a minimum of 1 node value and a maximum of 1000000 node values.

    Accepted values: Integer 

    Max: 1000000

    Min: 0

    Default: 1000  

##### **Maximum Attribute Name**  
This field specifies the maximum attribute name size of an XML document. In the above example, the maximum attribute name is 8, Tag ``<book>`` has an attribute category of length 8. An XML document can have a minimum of 1 attribute name and a maximum of 10000 attribute names.

    Accepted values: Integer 

    Max: 10000

    Min: 0

    Default: 1000  

##### **Maximum Attribute Value**  
This field specifies the maximum attribute value size of the XML document. In the above example, the maximum attribute value is 8, Tag ``<book>`` has an attribute category of length 8. An XML document can have a minimum of 1 attribute value and a maximum of 1000000 attribute value.

    Accepted values: Integer 

    Max: 1000000

    Min: 0

    Default: 1000
