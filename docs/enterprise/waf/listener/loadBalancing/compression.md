---
sidebar_position: 5
---
# Compression
Configure compression or decompression of responses

---

### Overview 
Haltdos provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression.

![Caching](/img/waf/v7/docs/performance_compression.png)

# How to Use :
1. Go to **WAF** > **Listeners** > **Performance** > **Compression**
2. Click on **Add Compression Configuration ** 
3. Click **Save Changes**

| Parameters | Accepted Values | Default |
| ----------- | ----------- | --------- |
| Enable Compression | Enabled/Disabled | Disabled
| Compression Level | Integer (1-9) | 1
| Min Length Compression | Length in bytes | 1000
| Disable Compression| Regex | Blank
| Minimum HTTP version | Drop-down| HTTP 1.1
| URI Filter | URI Regex | Blank
| Proxy Response Filter | expired/no-cache/no-store/private/no_last_modified/no_etag/any/auth | expired, no-cache, no-store, private, no_last_modified, no_etag, any, auth
| Mime Type Filter |Any mime type| text/xml , text/plain
| De-Compression | Enabled/Disabled | Disabled
     
![Compression](/img/waf/v7/docs/performance.png)

### Description 

##### **Enable Compression**

To enable compression, enable the toggle button. It compresses the responses to an extent.

##### **Compression Level**

The level of compression to be achieved. The greater the number more the compression. The range is 1 - 9.

##### **Min Length Compression**

This field specifies the minimum length of the response to be compressed.

##### **Disable Compression**

Specify one or more regular expressions (Regex) that will be evaluated on HTTP requests and disable compression for matching requests.

##### **Minimum HTTP Version**

Specify the minimum HTTP version from which compression will be applied. The response above the specified version is compressed.

##### **URI Filter**

This field allows performing compression on the specific URI using one or more regex. If the field is empty then no filter perform.

##### **Proxy Response Filter**

This field allows performing compression on the specific type of HTTP requests. 

##### **Mime Type Filter**

By default, WAF compresses responses only with MIME-type text/HTML. To compress responses with other MIME types then include them in this field.

##### **Decompression**

Some clients do not support responses with the GZIP encoding method. At the same time, it might be desirable to store compressed data, or compress responses on the fly and store them in the cache. To successfully serve both clients that do and do not accept compressed data, WAF can decompress data on the fly when sending it to the latter type of client.





