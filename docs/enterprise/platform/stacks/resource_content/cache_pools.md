---
sidebar_position: 6
---

# Cache Pools

Haltdos  SLB Cache Pools are the logical repositories of cache items. They perform all the common operations on items, such as saving them or looking for them. Cache pools are independent of the actual cache implementation.

---


:::note Note
Cache Pool is only part of Haltdos SLB.
:::

### How to Use:

1. Go to **Stack > Resources > Cache Pools**
2.  Select the **Add Cache Pool.**
3. Configure your settings. 
4. Click on **Save changes.**

![cache](/img/platform/v7/docs/cachepool_newui.png)

#### Description 

**Pool Name**

Users can define the pool name.

    Accepted values: String

    Default: Blank 

**Scope**

Users can specify the scope for the cache pool.

    Accepted values: Select Scope

    Default: Blank 

**Pool Size**

User can define the pool size.

    Accepted values: Integer

    Default: 10 

**Max Object Size**

User can define the max pool size.

    Accepted values: Integer

    Default: 1 

**Max Cache Size**

User can define the max cache size as per the need.

    Accepted values: Integer

    Default: 60 

