---
sidebar_position: 4
---
# Caching
##### It store data locally in order to speed up the performance
---

## Overview
When caching is enabled, WAF saves responses in a directory and uses them to respond to clients without having to proxy requests for the same content every time.

![Caching](/img/waf/v8/docs/caching1.png)

![caching](/img/waf/v8/docs/caching2.png)  

## How to Use :

1. Go to **WAF** > **Listener** > **Performance** > **Caching**
2. Click on **Add the Caching Setting**
3. Click on **Save Changes**

### Description 

##### **Enable Caching**

To enable caching, enable the toggle button. It stores data so that future requests for that data can be served faster.

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```


##### **Re-validate Cache**

This toggle button allows the re-validation of expired cache items. It helps in storing the updated data.

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```


##### **Enable Background Update**

This toggle button enables the caching mechanism to update the cache in the background and store the updated data.

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```


##### **Enable Cache Locking**

Enable to force caching a resource item to complete before allowing new requests to the same resource item.

```
    Accepted values: Enabled / Disabled

    Default: Disabled
```


##### **Cache Methods**

To cache responses to requests with methods other than GET and HEAD, list them along with GET and HEAD as parameters to this field. It specifies the HTTP Methods for which caching will be enforced.

```
    Accepted values: HTTP Methods

    Default: GET / HEAD
```


##### **Maximum Request Cache Size**

This field specifies the maximum request size allowed for the caching to store data exceeding which will not be cached.

```
    Accepted values: Integer    

    Max: 999

    Min: 10

    Default: 500
```


    Metric: mb

##### **URI Filter**

This field allows performing caching on the specific URI using one or more regex. If the field is empty then no filter perform

```
    Accepted values: Regex  

    Default: Blank 
```


##### **Mime Type Filter**

This field allows performing caching on the specific Mime type.

```
    Accepted values: String

    Default: Blank
```


##### **Use Stale Cache**

This field allows to specify the use of stale cache for errors when the back-end server is unavailable.

```
    Accepted values: Type of errors to be cached    

    Default: error / invalid_header / updating / timeout / http_500 / http_502 / http_503 / http_504 
```


##### **Response Codes**

This field specifies the list of HTTP status codes for which response will be cached. 

```
    Accepted values: Integer    

    Default: 200 / 304
```


##### **Minimum Use Before Caching**

To define the minimum number of times that a request with the same key must be made before the response is cached. It is specified in terms of a number of requests.

```
    Accepted values: Integer

    Max: 3600

    Min: 1

    Default: 3
```


##### **Cache Validity**

To limit how long cached responses with specific status codes are considered valid. It is specified in terms of minutes.

```
    Accepted values: Integer    

    Max:365

    Min:0

    Default: 5
```


    Metric: Minutes

##### **Browser Cache Expiry**

Specify the duration of the cached item after which it will be marked in the client's browser. It is specified in terms of days.

```
    Accepted values: Integer

    Max: 365

    Min: 0

    Default: 7
```

