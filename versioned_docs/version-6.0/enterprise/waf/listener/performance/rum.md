# RUM Metric
Real User Monitoring (RUM) helps in analyzing website performance (till page metrics) on client side.

## Overview

Haltdos provides the user to monitor performance in real-time on the client-side. When the RUM metric is enabled, WAF monitors performance to a specific URI w.r.t. duration set for collecting information for the request. The performance analysis is displayed in terms of statistics on the Analytics page in Real User Monitoring.

![RUM](/img/waf/v6/docs/RUM.png)

## How to Use :
1. Go to **WAF** > **Listeners** > **Performance** > **Rum Metric**
2. Click on **Add Configuration**
3. Click on **Save Changes**

  | Parameters | Accepted Values | Default |
     | ----------- | ----------- | --------- |
     | Enable Rum Metric| Enabled/Disabled | Disabled
     | Duration | Integer  | 3600
     | Add URI | URI | Blank

## Description 

1.**Enable RUM Metric**

To enable RUM metric, enable the toggle button. It starts to monitor the performance for a specific URI at a defined interval.

2.**Duration** 

This field specifies the duration for collecting information for the request recursively. The time duration is specified in seconds.

3.**Add URI**

This field specifies the URI address where the RUM metric will analyze the performance.

