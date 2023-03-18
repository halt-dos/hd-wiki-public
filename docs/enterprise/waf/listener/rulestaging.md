---
sidebar_position: 10
---

# Rule Staging
User can specify rule staging settings on this page for Listener

---

### Overview
Users can configure below rule staging settings for Listener.


![Rule Staging](/img/waf/v7/docs/rulestaging.png)

## How to Use:

1. Go to **WAF** > **Listeners** > **Advanced Settings** > **Staging Settings**
2. Configure your settings
3. Click **Save Changes**

| Parameters | Accepted  Values| Default |
| ----------- | ----------- | -------- |
| Staging Policy| Specify the Staging policy and auto-deployment of new signatures Accepted values: Dropdown | Manual
| Minimum Staging Requests | Specify minimum requests before deploying new signatures.Accepted values: Integer | 10000
| Minimum Staging Duration |Specify the minimum duration before deploying new signatures Accepted values:Integer |7
Maximum Staging Threshold|Specify maximum acceptable match for auto-deploying new signatures.Accepted values :Integer|0

### Description
##### **Staging Policy**

Users can specify the staging policy and auto-deployment of new signatures. Accepted values: MANUAL / REQUEST/ DURATION/ REQUEST AND DURATION/ REQUEST OR DURATION. By default, it is MANUAL.

##### **Minimum Staging Requests**

Users can specify minimum requests before deploying new signatures. By default, it is 10000 requests.

##### **Minimum Staging Duration**

Users can specify minimum duration before deploying new signatures. By default, it is 7 days.

##### **Maximum Staging Threshold**

Users can specify the maximum acceptable match for auto-deploying new signatures. By default, it is 0.