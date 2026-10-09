---
sidebar_position: 3
---

# Metrics Reference

---

## Overview

This section provides a complete reference of all available metrics, along with a concise description of what each metric represents. These metrics expose operational, performance, traffic, and system-level insights and can be used for monitoring, analytics, and alerting. These metrics are available per listener or backend or both as applicable. The metrics are exposed in prometheus format and support scraping. 

## Metrics

This table provides a complete and structured reference for all supported metrics. These metrics can be used to monitor performance, diagnose issues, analyze traffic patterns, and ensure operational visibility across the platform.


| Metric | Description |
|------|------------|
| resolver_answer_aa | DNS responses with Authoritative Answer (AA) flag set |
| resolver_answer_ad | DNS responses with Authenticated Data (AD) flag set |
| resolver_answer_cached | DNS responses served from cache |
| resolver_answer_cd | DNS responses with Checking Disabled (CD) flag set |
| resolver_answer_do | DNS responses with DNSSEC OK (DO) flag set |
| resolver_answer_edns0 | DNS responses using EDNS0 |
| resolver_answer_nodata | DNS responses indicating no data available |
| resolver_answer_noerror | DNS responses with NOERROR status |
| resolver_answer_nxdomain | DNS responses indicating non-existent domain |
| resolver_answer_ra | DNS responses with Recursion Available (RA) flag set |
| resolver_answer_rd | DNS responses with Recursion Desired (RD) flag set |
| resolver_answer_servfail | DNS responses with SERVFAIL status |
| resolver_answer_sum_ms | Total response time for DNS answers in milliseconds |
| resolver_answer_tc | DNS responses with Truncated (TC) flag set |
| resolver_answer_total | Total DNS answers processed |
| resolver_cache_clear | Cache clear operations |
| resolver_cache_close | Cache close operations |
| resolver_cache_commit | Cache commit operations |
| resolver_cache_count | Total cache operations |
| resolver_cache_count_entries | Number of entries in resolver cache |
| resolver_cache_match | Successful cache lookups |
| resolver_cache_match_miss | Failed cache lookups |
| resolver_cache_open | Cache open operations |
| resolver_cache_read | Cache read operations |
| resolver_cache_read_leq | Cache reads using less-than-or-equal logic |
| resolver_cache_read_leq_miss | Failed cache read-leq operations |
| resolver_cache_read_miss | Failed cache read attempts |
| resolver_cache_remove | Cache entry removals |
| resolver_cache_remove_miss | Failed cache removal attempts |
| resolver_cache_usage_percent | Percentage of cache utilization |
| resolver_cache_write | Cache write operations |
| resolver_latency_bucket | Histogram buckets for resolver latency |
| resolver_latency_count | Total number of latency samples |
| resolver_latency_sum | Total accumulated resolver latency |
| resolver_query_dnssec | DNS queries with DNSSEC enabled |
| resolver_query_edns | DNS queries using EDNS |
| resolver_request_doh | DNS-over-HTTPS requests |
| resolver_request_doh4 | DNS-over-HTTPS IPv4 requests |
| resolver_request_doh6 | DNS-over-HTTPS IPv6 requests |
| resolver_request_dot | DNS-over-TLS requests |
| resolver_request_dot4 | DNS-over-TLS IPv4 requests |
| resolver_request_dot6 | DNS-over-TLS IPv6 requests |
| resolver_request_internal | Internal resolver requests |
| resolver_request_tcp | DNS requests over TCP |
| resolver_request_tcp4 | DNS TCP IPv4 requests |
| resolver_request_tcp6 | DNS TCP IPv6 requests |
| resolver_request_total | Total DNS requests |
| resolver_request_total4 | Total DNS IPv4 requests |
| resolver_request_total6 | Total DNS IPv6 requests |
| resolver_request_udp | DNS requests over UDP |
| resolver_request_udp4 | DNS UDP IPv4 requests |
| resolver_request_udp6 | DNS UDP IPv6 requests |
| resolver_request_xdp | DNS requests via XDP |
| resolver_request_xdp4 | DNS XDP IPv4 requests |
| resolver_request_xdp6 | DNS XDP IPv6 requests |
| resolver_worker_concurrent | Concurrent resolver worker operations |
| resolver_worker_csw | Resolver worker context switches |
| resolver_worker_dropped | Resolver worker dropped requests |
| resolver_worker_err_http | Resolver worker HTTP errors |
| resolver_worker_err_tcp | Resolver worker TCP errors |
| resolver_worker_err_tls | Resolver worker TLS errors |
| resolver_worker_err_udp | Resolver worker UDP errors |
| resolver_worker_ipv4 | Resolver worker IPv4 activity |
| resolver_worker_ipv6 | Resolver worker IPv6 activity |
| resolver_worker_pagefaults | Resolver worker page faults |
| resolver_worker_queries | Resolver worker processed queries |
| resolver_worker_rss | Resolver worker resident memory usage |
| resolver_worker_swaps | Resolver worker swap operations |
| resolver_worker_systime | Resolver worker system CPU time |
| resolver_worker_tcp | Resolver worker TCP processing |
| resolver_worker_timeout | Resolver worker timeouts |
| resolver_worker_tls | Resolver worker TLS processing |
| resolver_worker_udp | Resolver worker UDP processing |
| resolver_worker_usertime | Resolver worker user CPU time |


