---
sidebar_position: 5
---

# Metrics Reference

---

## Overview

This section provides a complete reference of all available metrics, along with a concise description of what each metric represents. These metrics expose operational, performance, traffic, and system-level insights and can be used for monitoring, analytics, and alerting. These metrics are available per listener or backend or both as applicable. The metrics are exposed in prometheus format and support scraping. 

## Metrics

This table provides a complete and structured reference for all supported metrics. These metrics can be used to monitor performance, diagnose issues, analyze traffic patterns, and ensure operational visibility across the platform.

| Metric | Description |
|--------|------------|
| c_status | Current operational status |
| c_uweight | User-defined backend/server weight |
| c_weight | Effective backend/server weight |
| n_active | Number of active entities |
| n_active_peers | Number of active peers |
| n_agg_chk_status | Aggregated health check status |
| n_agg_server_chk_status | Aggregated server health check result |
| n_agg_server_status | Aggregated server state |
| n_backup | Backup role indicator |
| n_busy_polling_enabled | Busy polling enabled status |
| n_bytes_out_rate | Outgoing bytes per second |
| n_bytes_out_total | Total bytes sent |
| n_cache_check | Cache check operations |
| n_cache_hit | Cache hit count |
| n_chk_change_sec | Seconds since last health state change |
| n_chk_down | Health check down count |
| n_chk_fail | Health check failure count |
| n_comp_bypass | Compression bypass count |
| n_compress_resp | Compressed HTTP responses |
| n_compress_rx | Compressed bytes received |
| n_compress_tx | Compressed bytes transmitted |
| n_conn_attempts | Connection attempts |
| n_conn_check | Connection check count |
| n_conn_drop | Dropped connections |
| n_conn_err | Connection errors |
| n_conn_idle | Idle connections |
| n_conn_idle_limit | Idle connection limit |
| n_conn_need | Required connections |
| n_conn_rate | Connection rate |
| n_conn_reuses | Reused connections |
| n_conn_safe_idle | Safely reusable idle connections |
| n_conn_total | Total connections |
| n_conn_unsafe_idle | Unsafe idle connections |
| n_conn_used | Connections in use |
| n_connect_time_sec | Connection establishment time |
| n_connected_peers | Connected peers |
| n_connections_total | Lifetime connection count |
| n_current_backend_ssl_key_rate | Current backend SSL key rate |
| n_current_connection_rate | Current connection rate |
| n_current_connections | Current connections |
| n_current_frontend_ssl_key_rate | Current frontend SSL key rate |
| n_current_run_queue | Current run queue size |
| n_current_session_rate | Current session rate |
| n_current_ssl_connections | Current SSL connections |
| n_current_ssl_rate | SSL handshake rate |
| n_current_tasks | Active tasks |
| n_current_zlib_memory | Current zlib memory usage |
| n_downtime_sec | Downtime duration |
| n_dropped_logs_total | Dropped log entries |
| n_failed_header_rewriting | Failed header rewrites |
| n_failed_resolutions | Failed resolutions |
| n_frontend_ssl_reuse | SSL session reuse |
| n_hard_max_connections | Hard maximum connections |
| n_http_comp_bytes_in_total | Total HTTP compressed bytes received |
| n_http_comp_bytes_out_total | Total HTTP compressed bytes sent |
| n_http_resp_1xx | HTTP 1xx responses |
| n_http_resp_2xx | HTTP 2xx responses |
| n_http_resp_3xx | HTTP 3xx responses |
| n_http_resp_4xx | HTTP 4xx responses |
| n_http_resp_5xx | HTTP 5xx responses |
| n_http_resp_nxx | Non-standard HTTP responses |
| n_idle_time_percent | CPU idle percentage |
| n_internal_err | Internal errors |
| n_jobs | Background jobs |
| n_last_session_sec | Seconds since last session |
| n_lb | Load balancing algorithm |
| n_limit_connection_rate | Connection rate limit |
| n_limit_http_comp | HTTP compression limit |
| n_limit_session_rate | Session rate limit |
| n_limit_sessions | Session limit |
| n_limit_ssl_rate | SSL rate limit |
| n_listeners | Number of listeners |
| n_max_backend_ssl_key_rate | Maximum backend SSL key rate |
| n_max_connect_time_sec | Maximum connection time |
| n_max_connection_rate | Maximum connection rate |
| n_max_connections | Maximum connections |
| n_max_fds | Maximum file descriptors |
| n_max_frontend_ssl_key_rate | Maximum frontend SSL key rate |
| n_max_memory_bytes | Maximum memory usage |
| n_max_pipes | Maximum pipes |
| n_max_queue | Maximum queue size |
| n_max_queue_time_sec | Maximum queue time |
| n_max_response_time_sec | Maximum response time |
| n_max_session_rate | Maximum session rate |
| n_max_sessions | Maximum sessions |
| n_max_sockets | Maximum sockets |
| n_max_ssl_connections | Maximum SSL connections |
| n_max_ssl_rate | Maximum SSL rate |
| n_max_total_time_sec | Maximum total processing time |
| n_max_zlib_memory | Maximum zlib memory usage |
| n_pipes_free_total | Free pipe resources |
| n_pipes_used_total | Pipes currently used |
| n_pool_allocated_bytes | Pool allocated bytes |
| n_pool_failures_total | Pool allocation failures |
| n_pool_used_bytes | Pool used bytes |
| n_procs | Process count |
| n_queue | Current queue size |
| n_queue_limit | Queue limit |
| n_queue_time_sec | Queue wait time |
| n_recv_logs_total | Received log entries |
| n_redispatch_warn | Redispatch warnings |
| n_req | Total requests |
| n_req_cli_abort | Client-aborted requests |
| n_req_drop | Dropped requests |
| n_req_err | Request errors |
| n_req_rate | Request rate |
| n_req_srv_abort | Server-aborted requests |
| n_requests_total | Total requests processed |
| n_resp_drop | Dropped responses |
| n_resp_err | Response errors |
| n_response_time_sec | Response time |
| n_retry_warn | Retry warnings |
| n_rx_bytes | Bytes received |
| n_sess_drop | Dropped sessions |
| n_session_rate | Session rate |
| n_sessions | Current sessions |
| n_spliced_bytes_out_total | Zero-copy bytes transmitted |
| n_ssl_cache_lookups_total | SSL cache lookups |
| n_ssl_cache_misses_total | SSL cache misses |
| n_ssl_connections_total | Total SSL connections |
| n_start_time_sec | Time since process start |
| n_stopping | Shutdown in progress |
| n_threads | Thread count |
| n_throttle | Throttling events |
| n_total_time_sec | Total processing time |
| n_tx_bytes | Bytes transmitted |
| n_unstoppable_jobs | Uninterruptible jobs |
| n_uptime_sec | Uptime duration |
| reqsize | Request size |
| ressize | Response size |
| scrape_duration_seconds | Scrape duration |
| scrape_response_size_bytes | Scrape response size |
| scrape_samples_post_metric_relabeling | Samples after relabeling |
| scrape_samples_scraped | Samples scraped |
| scrape_series_added | New series added |
| scrape_timeout_seconds | Scrape timeout |
| total_sessions | Total sessions handled |
| up | Target availability status |
