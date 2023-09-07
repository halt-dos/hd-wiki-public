# Performance
How to enable and configure caching and compression of responses received?

### Overview

When caching is enabled, DDOS saves responses in a directory and uses them to respond to clients without having to proxy requests for the same content every time and also when compression is enable it provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression.




![performance](/img/ddos/v7/docs/performance.png)

### How to Use

1. Go to **Apps** > **DDoS** > **Listener** > **Performance**
2. Click on **Add the Setting**
3. Click on **Save Changes**.

| Parameter                    | Accepted Value | Default Values |
|------------------------------|----------------|----------------|
| Enable Caching               | Boolean        | Disable        |
| Cache Pool                   | Drop-down      | Blank          |
| Enable Cache unsafe method   | Boolean        | Disable        |
| Enable Compression           | Boolean        | Disable        |
| Compression algorithm        | Drop-down      | GZIP, DEFLATE  |
| Minimum Response to Compress | Integer        | 0              |
| Minimum Response to Compress | Integer        | 0              |
| Compression MIME filter      | Drop-down      | multiple MIME  |


### Description 

##### **Enable Caching**

Users can enable the caching using the button. It stores data so that future requests for that data can be served faster.

##### **Cache Pool**

This option allows users to select the cache pool which is previously made cache pool from stack settings. User first need to click kn add and go to Resources/Cache Pools and create new cache pool which will be further used in cache pool option under DDoS listeners.

##### **Enable Caching Unsafe Method**
This option allows users to enable extended caching of POST methods.

##### **Enable Compression**

This option allows users to enable compression for the mentioned listener.

##### **Minimum Response to Compress**
This option allows users to set minimum content length for HTTP responses. If any request will be bigger than the mentioned length, it will be compressed. 

##### **Maximum Response to Compress**
This option allows users to set maximum content length for HTTP responses. If any request will be smaller than the mentioned length, it will be compressed.

##### **Compression Mime Filter**

Users can configure the MIME types for which compression is enabled. Haltdos solution will compress responses with other MIME types then include them in this field.