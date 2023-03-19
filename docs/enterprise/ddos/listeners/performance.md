# Performance
How to enable and configure caching and compression of responses received?

## Overview

When caching is enabled, DDOS saves responses in a directory and uses them to respond to clients without having to proxy requests for the same content every time and also when compression is enable it provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression.

![performance](/img/ddos/v7/docs/performance.png)

### How to Use

1. Go to **Apps** > **DDos** > **Listener** > **Performance**
2. Click on **Add the Setting**
3. Click on **Save Changes**

| Parameters | Accepted Values | Default |
| ----------- | ----------- | --------- |
| Enable Caching | Enabled/Disabled | Disabled
| Enable Compression | Enabled/Disabled | Disabled
| Compression Mime Filter |Any mime type| text/xml , text/plain

### Description 

#### Enable Caching

To enable caching, enable the toggle button. It stores data so that future requests for that data can be served faster.

#### Enable Compression

To enable compression, enable the toggle button. It compresses the responses to an extent.

#### Compression Mime Filter

By default,DDOS compresses responses only with MIME-type text/HTML. To compress responses with other MIME types then include them in this field.