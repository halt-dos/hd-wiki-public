---
sidebar_position: 3
---
# Incidents
   
---

## Overview

Haltdos solutions provide real-time alerts for various types of incidents from attacks to accounting/audit incidents through Incidents. Incidents can be generated. You can view all incidents or filter them based on category, time.

#### Incident Page

All incidents are listed on the Incidents Page. Filters are available to view incidents of a specific incident type. Each incident is identified by a unique Incident ID which can also be used for searching a specific incidents on the Incidents Page. All Incidents are listed in decreasing chronological order.

#### Incident Details

Depending upon the type of incidents, clicking on any Incident shows details of the incident. For example, a WAF Attack Incident will detail the request/response that got dropped along with details of the request and the reason for dropping the request.

Further to detailing the incident through Incidents, users can perform various actions. For example, virtual patching functionality is implemented through actions in Incident Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan.

![incidents](/img/ce-waf/docs/setup/incidents.jpeg)

#### Type of Incidents  
- **Drop Incidents**

- **Recorded Incidents**

- **Server Errors**

- **Health Incidents**

### How to Use:

1. Go to **WAF** > **Incidents**.
2. Choose Type of Incidents that you want to view.

    - You may also check the previous incidents by changing the date.

### Description

**Filter**
Users can filter out the events based on type of incidents.

**Refresh**
Users can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request.

**Date Range**
Users are allowed to select an appropriate date range no longer than 1 month.