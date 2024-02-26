---
sidebar_position: 4
---
# Staging Settings

User can specify rule staging settings on this page for Listener

---

Users can configure below rule staging settings for Listener.

### How to Use:

1. Go to **WAF > Zones > Listeners > Advanced Settings > Staging Settings**

2. Configure your settings

3. Click Save

| PARAMETERS                | ACCEPTED VALUES                                                                              | DEFAULT |
|---------------------------|----------------------------------------------------------------------------------------------|---------|
| Staging Policy            | Specify the Staging policy and auto-deployment of new signatures.
Accepted values: Dropdown  | Manual  |
| Minimum Staging Requests  | Specify minimum requests before deploying new signatures.
Accepted values: Integer           | 10000   |
| Minimum Staging Duration  | Specify the minimum duration before deploying new signatures
Accepted values: Integer        | 7       |
| Maximum Staging Threshold | Specify maximum acceptable match for auto-deploying new signatures.
Accepted values: Integer | 0       |

#### Description

**Staging Policy**: Specify the staging policy and auto-deployment of new signatures. Accepted values: MANUAL / REQUEST/ DURATION/ REQUEST AND DURATION/ REQUEST OR DURATION. By default, it is MANUAL.

**Minimum Staging Requests**: Specify minimum requests before deploying new signatures. By default, it is 10000 requests.

**Minimum Staging Duration**: Specify minimum duration before deploying new signatures. By default, it is 7 days.

**Maximum Staging Threshold**: Specify the maximum acceptable match for auto-deploying new signatures. By default, it is 0.