---
sidebar_position: 2
---
# Caching

How to enable and configure caching of responses received?

---

## Overview

When caching is enabled, WAF saves responses in a directory and uses them to respond to clients without having to proxy requests for the same content every time.

### How to Use:

1. Go to **WAF > Zones > Listeners > Performance > Caching**

2. Add the caching settings and **Save Changes**.

| PARAMETERS                 | ACCEPTED VALUES             | DEFAULT         |
|----------------------------|-----------------------------|-----------------|
| Enable Caching             | Enabled/Disabled            | Disabled        |
| Revalidate Cache           | Enabled/Disabled            | Enabled         |
| Enable Background Update   | Enabled/Disabled            | Disabled        |
| Enable Cache Locking       | Enabled/Disabled            | Disabled        |
| Cache Methods              | HTTP Methods                | GET, HEAD       |
| Maximum Request Cache Size | Integer                     | Blank           |
| URI Filter                 | Regex                       | Blank           |
| Mime Type Filter           | String                      | Blank           |
| Use Stale Cache            | Type of errors to be cached | HTTP 500 Errors |
| Response Codes             | Response Codes              | blank           |
| Minimum Use Before Caching | Integer                     | 3               |
| Cache Validity             | Minutes                     | 5               |
| Browser Cache Expiry       | Days                        | 0               |

#### Description

**Enable Caching**: To enable caching, enable the toggle button. It stores data so that future requests for that data can be served faster.

**Revalidate Cache**: This toggle button allows the revalidation of expired cache items. It helps in storing the updated data.

**Enable Background Update**: This toggle button enables the caching mechanism to update the cache in the background and store the updated data.

**Enable Cache Locking**: Enable to force caching a resource item to complete before allowing new requests to the same resource item.

**Cache Methods**: To cache responses to requests with methods other than GET and HEAD, list them along with GET and HEAD as parameters to this field. It specifies the HTTP Methods for which caching will be enforced.

**Maximum Request Cache Size**: This field specifies the maximum request size allowed for the caching to store data exceeding which will not be cached.

**URI Filter**: This field allows to perform caching on the specific URI using one or more regex. If the field is empty then no filter perform

**Mime Type Filter**: This field allows to perform caching on the specific Mime type.

**Use Stale Cache**: This field allows to specify the use of stale cache for errors when the backend server is unavailable.

**Response Codes**: This field specifies the list of HTTP status codes for which response will be cached.

**Minimum Use Before Caching**: To define the minimum number of times that a request with the same key must be made before the response is cached. It is specified in terms of a number of requests.

**Cache Validity**: To limit how long cached responses with specific status codes are considered valid. It is specified in terms of minutes.

**Browser Cache Expiry**: Specify the duration of the cached item after which it will be marked in the client's browser. It is specified in terms of days.