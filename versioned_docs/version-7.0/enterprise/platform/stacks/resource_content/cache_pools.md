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

| SETTINGS        | ACCEPTED VALUES | DEFAULT |
|-----------------|-----------------|---------|
| Pool name       | String          | Blank   |
| Scope           | Drop-down       | Blank   |
| Pool Size       | Integer         | 10      |
| Max-object Size | Integer         | 1000    |
| Max Cache Size  | Integer         | 60      |


#### Description 

**Pool Name**

Users can define the pool name.

**Scope**

Users can specify the scope for the cache pool.

**Pool Size**

User can define the pool size.

**Max Object Size**

User can define the max pool size.

**Max Cache Size**

User can define the max cache size as per the need.

