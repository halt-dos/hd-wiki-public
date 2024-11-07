---
sidebar_position: 6
---

# Performance

---

Performance settings are designed to increase the performance of the traffic coming from the client-side. Users can enable the caching and compression method to increase the performance of the system.

![performance](/img/adc/v7/docs/performance.png)

### How to Use:

1. Go to Stack > [**SLB**](/v7/enterprise/adc)  > [**Listeners**](./listeners.md) > **performance**
2. Configure your settings.
3. Click **Save Changes**.

**Configure the following parameters to set up the desired settings:**

### Description

##### **Enable Caching**

This option allows users to enable content caching. Content Caching helps to improve solution performance, reduce cost through minimizing resources and increase throughput.

```
    Accepted values: Enabled / Disabled

    Default: Disabled 
```


##### **Cache Pool**

This option allows users to select a cache pool for content caching. It helps to increase read performance and speed up of solution. User can redirect at **Cache Pools** and add cache.

```
    Accepted values: Select Cache pool

    Default: Blank 
```


Users can specify supported compression algorithm.

##### **Enable Caching Unsafe Method**

Users are allowed to enable extended caching of POST methods.

```
    Accepted values: Enabled / Disabled

    Default: Disabled 
```


##### **Minimum Response To Compress**

Users can specify minimum HTTP response content length to compress. If HTTP response content length is larger than the specified minimum limit, it will be compresses. If HTTP response content length is smaller than the specified minimum limit, it will be skipped for compression.

```
    Accepted values: Integer

    Default: 0 
```


##### **Maximum Response To Compress**

Users can specify maximum HTTP response content length to compress.If HTTP response content length is smaller than the specified maximum limit, it will be compresses. If HTTP response content length is larger than the specified maximum limit, it will be skipped for compression.

```
    Accepted values: Integer

    Default: 0 
```


##### **Compression Mime Filter**

This option allows users to specify the Disabled selective list of mime-types for content compression.

```
    Accepted values: Any mime type

    Default: text/xml / image/gif / image/jpeg / application/javascript / application/atom+xml / application/rss+xml / text/mathml / text/plain / application/json / application/mac-binhex40 / application/msword / application/pdf / application/postscript / application/rtf / application/vnd.apple.mpegurl / application/vnd.ms-excel / application/vnd.ms-fontobject / application/vnd.ms-powerpoint
```

