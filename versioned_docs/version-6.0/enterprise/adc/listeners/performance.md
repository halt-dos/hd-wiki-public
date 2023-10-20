---
sidebar_position: 6
---

# Performance

---

Performance settings are designed to increase the performance of the traffic coming from the client-side. Users can enable the caching and compression method to increase the performance of the system.

![performance](/img/adc/v6/docs/performance.png)

### How to Use:

1. Go to Stack > [**SLB**](/enterprise/adc)  > [**Listeners**](./listeners.md) > performance

2. Configure your settings.

3. Click Save Changes.

**Configure the following parameters to set up the desired settings:**

| PARAMETERS                    | ACCEPTED VALUES | Type           |
|-------------------------------|-----------------|----------------|
| Enable Caching                | Boolean         | Disabled       |
| Cache Pool                    | Drop Down       | Blank          |
| Enable Compression            | Boolean         | Disabled       |
| Compression Algorithm         | Drop Down       | Blank          |
| Minimum Response To Compress  | Integer         | 0              |
| Maximum Response To Compress  | Integer         | 0              |
| Compression Mime Filter       | String          | File Etensions |

#### Description:

#### Enable Caching

This option allows users to enable content caching. Content Caching helps to improve solution performance, reduce cost through minimizing resources and increase throughput.

#### Enable Compression

This option allows users to enable content compression. It helps to increase throughput and significant for cost savings. 

This option allows users to select a cache pool to use for content caching.

#### Cache Pool

This option allows users to select a cache pool for content caching. It helps to increase read performance and speed up of solution. User can redirect at **Cache Pools** and add cache.

Users can specify supported compression algorithm.

#### Minimum Response To Compress

Users can specify minimum HTTP response content length to compress. If HTTP response content length is larger than the specified minimum limit, it will be compresses. If HTTP response content length is smaller than the specified minimum limit, it will be skipped for compression.

#### Maximum Response To Compress

Users can specify maximum HTTP response content length to compress.If HTTP response content length is smaller than the specified maximum limit, it will be compresses. If HTTP response content length is larger than the specified maximum limit, it will be skipped for compression.

#### Compression Mime Filter

This option allows users to specify the Disabled selective list of mime-types for content compression.