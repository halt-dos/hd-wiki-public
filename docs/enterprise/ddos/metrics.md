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
| 1_latency | Initial latency metric |
| 1XX | Informational response codes |
| 2XX | Successful response codes |
| 3XX | Redirection response codes |
| 4XX | Client error responses |
| 5XX | Server error responses |
| ACL | Access control list |
| auto_neg | Automatic negotiation status |
| avg_conn_duration | Average connection duration |
| avg_conn_per_src | Average connections per source |
| avg_half_conn_duration | Average half-connection duration |
| avg_init_conn_payload | Average initial connection payload |
| avg_trans_per_src | Average transactions per source |
| BIND | HTTP BIND method |
| bucket_0 | Histogram bucket zero |
| bucket_1 | Histogram bucket one |
| bucket_2 | Histogram bucket two |
| bucket_3 | Histogram bucket three |
| bucket_4 | Histogram bucket four |
| bucket_5 | Histogram bucket five |
| bucket_6 | Histogram bucket six |
| bucket_7 | Histogram bucket seven |
| CHECKOUT | HTTP CHECKOUT method |
| clean_map_data_pool_available | Clean map data pool available |
| clean_map_data_pool_used | Clean map data pool used |
| conn_tracker_pool_available | Connection tracker pool available |
| conn_tracker_pool_used | Connection tracker pool used |
| CONNECT | HTTP CONNECT method |
| COPY | HTTP COPY method |
| current_hw_bypass | Current hardware bypass state |
| current_role | Current system role |
| current_state | Current system state |
| DELETE | HTTP DELETE method |
| dns_pattern_score | DNS traffic pattern score |
| duplex | Network link duplex mode |
| entries_conn_duration | Connection duration histogram entries |
| entries_conn_per_src | Connections-per-source entries |
| entries_half_conn_duration | Half-connection duration entries |
| entries_init_conn_payload | Initial payload histogram entries |
| entries_trans_per_src | Transactions-per-source entries |
| errors | Total error count |
| frag_pattern_score | Fragment traffic pattern score |
| GET | HTTP GET method |
| global_ha_session_map_count | Global HA session map count |
| global_offload_session_map_count | Global offload session map count |
| global_pattern_score | Global traffic pattern score |
| global_session_map_count | Global session map count |
| ha_msg_pool_available | High-availability message pool available |
| ha_msg_pool_used | High-availability message pool used |
| ha_session_pool_available | High-availability session pool available |
| ha_session_pool_used | High-availability session pool used |
| HEAD | HTTP HEAD method |
| icmp_pattern_score | ICMP traffic pattern score |
| igmp_pattern_score | IGMP traffic pattern score |
| internet_conn_map_0_count | Internet connection map 0 count |
| internet_conn_map_1_count | Internet connection map 1 count |
| internet_conn_map_global_count | Internet global connection map count |
| internet_conn_map_ha_count | Internet HA connection map count |
| internet_connection_pool_available | Internet connection pool available |
| internet_connection_pool_used | Internet connection pool used |
| internet_ha_connection_pool_available | Internet HA connection pool available |
| internet_ha_connection_pool_used | Internet HA connection pool used |
| internet_offload_pkt_pool_available | Internet offload packet pool available |
| internet_offload_pkt_pool_used | Internet offload packet pool used |
| ipv4_pattern_score | IPv4 traffic pattern score |
| ipv6_pattern_score | IPv6 traffic pattern score |
| latency | Network response latency |
| LOCK | HTTP LOCK method |
| logger_pool_available | Logger pool available |
| logger_pool_used | Logger pool used |
| M-SEARCH | Multicast search method |
| max_conn_duration | Maximum connection duration |
| max_conn_per_src | Maximum connections per source |
| max_half_conn_duration | Maximum half-connection duration |
| max_init_conn_payload | Maximum initial connection payload |
| max_trans_per_src | Maximum transactions per source |
| MERGE | HTTP MERGE method |
| metrics_pool_available | Metrics pool available |
| metrics_pool_used | Metrics pool used |
| min_conn_duration | Minimum connection duration |
| min_conn_per_src | Minimum connections per source |
| min_half_conn_duration | Minimum half-connection duration |
| min_init_conn_payload | Minimum initial payload |
| min_trans_per_src | Minimum transactions per source |
| misbehavior_rst_pkts_pool_available | Misbehavior reset packet pool available |
| misbehavior_rst_pkts_pool_used | Misbehavior reset packet pool used |
| MKACTIVITY | Calendar activity creation |
| MKCALENDAR | Calendar creation method |
| MKCOL | Collection creation method |
| MOVE | HTTP MOVE method |
| n_ack_pkts | Acknowledged packet count |
| n_active | Active connection count |
| n_bits | Total bit count |
| n_bits_dropped | Dropped bit count |
| n_blacklist_feed_drops | Blacklist feed drops |
| n_blacklist_match_drops | Blacklist match drops |
| n_conn_hashmap_drops | Connection hashmap drops |
| n_conn_io_ring_drops | Connection IO ring drops |
| n_conn_off_ring_drops | Connection offload ring drops |
| n_conn_src_threshold_drops | Source threshold drops |
| n_connection_entries | Connection table entries |
| n_connections | Total connections |
| n_connections_established | Established connections |
| n_connections_received | Connections received |
| n_connections_sent | Connections sent |
| n_cookie_validation_drops | Cookie validation drops |
| n_cookie_vended | Cookies issued |
| n_dns_firewall_drops | DNS firewall drops |
| n_drop_pkts | Dropped packets |
| n_drops | Total drops |
| n_http_invalid_method | Invalid HTTP method |
| n_http_invalid_url | Invalid HTTP URL |
| n_http_req_flood_drops | HTTP request flood drops |
| n_icmp_pkts | ICMP packet count |
| n_internal_drops | Internal processing drops |
| n_invalid_query_drops | Invalid query drops |
| n_ip_reputation_drops | IP reputation drops |
| n_ipv4_pkts | IPv4 packet count |
| n_ipv6_pkts | IPv6 packet count |
| n_lan_active | Active LAN connections |
| n_lan_total | Total LAN connections |
| n_pkts | Total packet count |
| n_pkts_bypassed | Bypassed packets |
| n_pkts_dropped | Dropped packets |
| n_rx_bits | Received bits |
| n_rx_pkts | Received packets |
| n_session_received | Sessions received |
| n_session_sent | Sessions sent |
| n_ssl_renegotiation_requests | SSL renegotiation requests |
| n_syn_pkts | SYN packet count |
| n_tcp_pkts | TCP packet count |
| n_tmp_blacklist_drops | Temporary blacklist drops |
| n_total | Overall total count |
| n_tx_bits | Transmitted bits |
| n_tx_pkts | Transmitted packets |
| n_udp_pkts | UDP packet count |
| n_wan_active | Active WAN connections |
| n_wan_total | Total WAN connections |
| next_hw_bypass | Next hardware bypass state |
| next_role | Next system role |
| next_state | Next system state |
| OPTIONS | HTTP OPTIONS method |
| PATCH | HTTP PATCH method |
| POST | HTTP POST method |
| PUT | HTTP PUT method |
| status | Current operational status |
| TRACE | HTTP TRACE method |
| tx_packets | Transmitted packet total |
| udp_pattern_score | UDP traffic pattern score |
| used_desc | Descriptor usage |
