---
sidebar_position: 1
---
# WEB Policy



### Overview

Configure Web Security Policy for HTML based websites - Static, Dynamic, Wordpress, etc.A web policy or policies are constraints or mandates in relation to technical constraints, legal, editorial, and compliance. Configure policies that HTTP(s) requests must conform to when requesting data from the backend web application.
   
![Web Policy](/img/ce-waf/docs/web_policy2.png)

### How to Use:
1. Go to **WAF** > **Policy** > **Web Policy**.
2. Configure your settings.
3. Click **Save Changes**.

| Parameter                         | Acceptable Value | Default      |
|-----------------------------------|------------------|--------------|
| Maximum Allowed Header Fields     | Integer          | 30           |
| Maximum Header Field Name Length  | Integer          | 50           |
| Maximum Header Field Value Length | Integer          | 2048         |
| Allowed HTTP Methods              | Drop-down        | Pre-selected |
| ALLOWED MIME TYPES                | Drop-down        | Pre-selected |
| WEB EXTENSIONS                    | Drop-down        | Pre-selected |
| RESTRICTED EXTENSIONS             | Drop-down        | Pre-selected |
| RESTRICTED FILE UPLOAD            | Drop-down        | Pre-selected |
| X-FRAME OPTIONS                   | Drop-down        | Disabled     |
| CAPTCHA VALIDATION EXPIRY         | Integer          | 86400        |
| CSRF                              | Boolean          | OFF          |
| Immutable Cookie Validity         | Integer          | 86400        |
| Cookie Name                       | String           | Blank        |

**Maximum Allowed Header Fields**
HTTP header fields provide necessary data about the request or response. It also provides the details about the object sent in the message body.
This field specifies the maximum number of allowed HTTP header fields in the HTTP request header. If the header field exceeds, then the request gets dropped.

**Maximum Header Field Name Length**
This field specifies the maximum allowed length of the HTTP header field name. If the header field name length exceeds the specified length then the request gets dropped.

**Maximum Header Field Value Length**
This field specifies the maximum allowed length of the HTTP header field value. If the header field value length exceeds the specified length then the request gets dropped.

**Allowed HTTP Methods**
HTTP methods are a set of common request methods for HTTP. These request methods indicate the specific action that you need to take care of a specific resource. Each of the request methods implements a different semantic. A group of these methods represents some common features. E.g. a request method can be safe, cache-able, or idempotent.  

We support the following HTTP Methods:  
1. **GET**:  It requests a specified resource representation. It helps to retrieve data.
2. **HEAD**:  It inquires for a response identical to that of a GET request. It doesn't enquire the response body.
3. **POST**:  It helps to submit an entity to the desired resource. It often causes a change in state or side effects on the server.
4. **PUT**:  It exchanges all existing representations of the target resource with the request payload.
5. **DELETE**:  It helps to delete the specified resource
6. **OPTIONS**:  It helps to indicate the communication options for the target resource.
This field specifies all the allowed HTTP methods. If the request includes any methods other than the stated ones, then the request gets dropped.

**Allowed MIME Types**
MIME Type, also known as media type or a Multipurpose Internet Mail Extensions is a standard that indicates both format and nature of a file, document, or bytes assortment.
MIME-type helps browsers to determine how to process a URL. A browser must send an exact MIME type Content-Type header response. In case, it isn't configured correctly; the browser will misinterpret file content. The Website will not function properly, and there will be mishandling of downloaded files.
This field specifies the list of the allowed HTTP MIME type. If the request contains any mime types other than specified ones, then the request gets dropped.

**Web Extensions**
Users are allowed to specify the list of extensions for which Human Authentication will be enabled.

**Restricted Extentions**
Restricted extensions are files that don't reside on a web server. This field specifies the list of extensions that should be blocked or restricted.

**Restricted File Upload**
Restricted file uploads restrict or block the request with a file that is malicious or corrupted based on the file extensions specified, such requests are dropped.

**X-FRAME OPTIONS**
X-frame is used for adding a header to stop clickjacking. Clickjacking is an interface-based attack in which a user is tricked into clicking on actionable content on a hidden website by clicking on some other content in a decoy website.


![Web Policy](/img/ce-waf/docs/web_policy4.png)

Cookies are primarily for session management. Attackers try to steal its data for session hijacking. Parameters to consider while securing cookie:  
 - **Cookie Name**: This field specifies the cookie name for which you need to apply the policies.  
 - **Enable HTTP Only Flag**: This field prevents the client-side script from accessing and manipulating the cookie.  
 - **Enable Secure Flag**: This field allows you to ensure that the cookie is only sent over a secured HTTPS channel.  
 - **Same Site**: This field doesn't allow the browser to send this cookie along with cross-site requests. The main goal is to mitigate the risk of cross-origin data leakage. Even, it protects against cross-site request forgery attacks.  

**STRICT** - This value ensures the cookie is not being sent to the target site in all cross-site browsing contexts.  
**LAX** - This value provides both security and usability to the sites that need to manage the user's logged-in session once the user login from an external link.

:::note Note
This value specifies no action would be taken, and cookies will be allowed to pass to an external site.
:::