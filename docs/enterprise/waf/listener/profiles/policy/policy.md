---
sidebar_position: 5
---

# Policy

#### Define security policy for your website

Haltdos WAF associates security policies with both HTTP and HTTPS services. It includes preset configured security settings that apply to all associated services. The policies are shareable. You only have to create them once, and you can later assign them to more than one service. The rules of the security policy specify inspection criteria for both input or output data and help in determining vulnerable or malicious data. It includes both negative and positive elements. (Major section is a negative element). For most sites, it implements good web application security. Using security rules for different subdomains, you can custom-design security policy.

Three types of Policies:
1. [**Web Policy**](web_policy.md)
2. [**JSON Policy**](json_policy.md)
3. [**XML Policy**](xml_policy.md)

#### Request Normalization  

Every request that is evaluated is first normalized. During the normalization process, decoding is performed to ensure that the text is assessed in its decoded form. This includes various decoding methods such as:

- URL Decoding
- HTML Decoding
- UTF-8 Decoding
- XML Null Byte Removal  

By normalizing requests, the WAF can effectively evaluate the content and detect potential vulnerabilities more accurately.

