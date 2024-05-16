---
sidebar_position: 2
---



# Compression


Configure compression or decompression of responses

---

### Overview 
Haltdos provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression.

![compression](/img/pro-waf/docs/compression1.png)
![compression](/img/pro-waf/docs/compression2.png)

### How to Use :
1. Log into the Haltdos WAF Professional edition web UI console. 
2. Then go to **Listeners** > **Performance** > **Compression**
3. Click on **Add Compression Configuration ** 
4. Click **Save Changes**

### Description 

##### **Enable Compression**

To enable compression, enable the toggle button. It compresses the responses to an extent.

    Accepted values: Enabled/Disabled	

    Default: Disabled

##### **Enable Decompression**

Some clients do not support responses with the GZIP encoding method. At the same time, it might be desirable to store compressed data, or compress responses on the fly and store them in the cache. To successfully serve both clients that do and do not accept compressed data, WAF can decompress data on the fly when sending it to the latter type of client.

    Accepted values: Enabled/Disabled	

    Default: Disabled

##### **Compression Level**

The level of compression to be achieved. The greater the number more the compression. The range is 1 - 9.

    Accepted values: Integer(1-9)	

    Default: 1

##### **Min Length Compression**

This field specifies the minimum length of the response to be compressed.

    Accepted values: Length in bytes	

    Default: 1000
    
    Metric: Bytes

##### **Disable Compression**

Specify one or more regular expressions (Regex) that will be evaluated on HTTP requests and disable compression for matching requests.

    Accepted values: Regex	

    Default: Blank

##### **Minimum HTTP Version**

Specify the minimum HTTP version from which compression will be applied. The response above the specified version is compressed.

    Accepted values: Drop-Down	

    Default: HTTP 1.1

##### **URI Filter**

This field allows performing compression on the specific URI using one or more regex. If the field is empty then no filter perform.

    Accepted values: UGI Regex	

    Default: Blank

##### **Proxy Response Filter**

This field allows performing compression on the specific type of HTTP requests. 

    Accepted values: expired/no-cache/no-store/private/no_last_modified/no_etag/any/auth	

    Default: expired, no-cache, no-store, private, no_last_modified, no_etag, any, auth

##### **Mime Type Filter**

By default, WAF compresses responses only with MIME-type text/HTML. To compress responses with other MIME types then include them in this field.

    Accepted values: Any mime type

    Default: text/xml , text/plain


