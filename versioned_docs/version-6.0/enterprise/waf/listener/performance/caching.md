# Caching
How to enable and configure caching of responses received?

## Overview
When caching is enabled, WAF saves responses in a directory and uses them to respond to clients without having to proxy requests for the same content every time.

![caching](/img/waf/v6/docs/Caching(1).png)

## How to Use :

1. Go to **WAF** > **Listener** > **Performance** > **Caching**
2. Click on **Add the Caching Setting**
3. Click on **Save Changes**

     | Parameters | Accepted Values | Default |
     | ----------- | ----------- | --------- |
     | Enable Caching | Enabled/Disabled | Disabled
     | Re-validate Cache | Enabled/Disabled | Enabled
     | Enable Background Update | Enabled/Disabled | Disabled
     | Enable Cache Locking| Enabled/Disabled | Disabled
     | Cache Methods | HTTP Methods | GET, HEAD
     | Maximum Request Cache Size | Integer | Blank
     | URI Filter | Regex | Blank
     | Mime Type Filter | String| Blank
     | Use Stale Cache | Type of errors to be cached | HTTP 500 Errors
     | Response Codes | Response Codes| Blank
     | Minimum Use Before Caching | Integer| 3
     | Cache Validity | Minutes| 5
     | Browser Cache Expiry | Days | 0

![caching](/img/waf/v6/docs/caching_cont.png)


## Description 

1.**Enable Caching**

To enable caching, enable the toggle button. It stores data so that future requests for that data can be served faster.

2.**Re-validate Cache**

This toggle button allows the re-validation of expired cache items. It helps in storing the updated data.

3.**Enable Background Update**

This toggle button enables the caching mechanism to update the cache in the background and store the updated data.

4.**Enable Cache Locking**

Enable to force caching a resource item to complete before allowing new requests to the same resource item.

5.**Cache Methods**

To cache responses to requests with methods other than GET and HEAD, list them along with GET and HEAD as parameters to this field. It specifies the HTTP Methods for which caching will be enforced.

6.**Maximum Request Cache Size**

This field specifies the maximum request size allowed for the caching to store data exceeding which will not be cached.

7.**URI Filter**

This field allows to perform caching on the specific URI using one or more regex. If the field is empty then no filter perform

8.**Mime Type Filter**

This field allows to perform caching on the specific Mime type.

9.**Use Stale Cache**

This field allows to specify the use of stale cache for errors when the back-end server is unavailable.

10.**Response Codes**

This field specifies the list of HTTP status codes for which response will be cached. 

11.**Minimum Use Before Caching**

To define the minimum number of times that a request with the same key must be made before the response is cached. It is specified in terms of a number of requests.

12.**Cache Validity**

To limit how long cached responses with specific status codes are considered valid. It is specified in terms of minutes.

13.**Browser Cache Expiry**

Specify the duration of the cached item after which it will be marked in the client's browser. It is specified in terms of days.

