---
sidebar_position: 3
---

import ProductBadge from '@site/src/components/ProductBadge';

# Incidents

<ProductBadge />
<br />
<br />

---


## Overview

Haltdos solutions provide real-time alerts for various types of incidents from attacks to accounting/audit incidents through Incidents. Incidents can be generated. You can view all incidents or filter them based on category, time.

#### Incidents Page

All incidents are listed on the Incidents. Filters are available to view incidents of a specific incident type. Each incident is identified by a unique Incident ID which can also be used for searching a specific incident on the Incidents Page. All Incidents are listed in decreasing chronological order.

#### Incident Details

Depending upon the type of incidents, clicking on any Incident shows details of the incident. For example, a WAF Attack Incident will detail the request/response that got dropped along with details of the request and the reason for dropping the request.

Further to detailing the incident through Incidents, users can perform various actions. For example, whitelisting is implemented through actions in Incident Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan.

![Incidents](/img/pro-waf/docs/incidents.png)

#### Type of Incidents  
- **Drop Incidents**

- **Recorded Incidents**

- **Server Errors**

- **Health Incidents**

#### How to Use:
1. Log into the Haltdos GUI.
2. Select **Incidents** from the sidebar menu.
3. Choose Type of Incidents that you want to view.
    - You may also check the previous incidents by changing the date.

### Description

- **Filter**  
Users can filter out the incidents based on type of incidents.

- **Auto Refresh**  
Users can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request.

- **Date Range**  
Users are allowed to select an appropriate date range no longer than 1 month.

- **Resource**  
Users can filter out the incidents based on the listeners configured.