---
sidebar_position: 80
---

# SLB Health Check Scripts

This document provides a collection of **Health Check Scripts** used in the **Server Load Balancer (SLB)** monitoring framework.  
Each script checks the availability or response of a specific protocol or service.

### 1. ARP Health Check (arp_check.sh)


```
#!/bin/bash
# ARP Health Check Script for SLB Monitor
# Usage: ./arp_health_check.sh <IP> [INTERFACE]
# Example: ./arp_health_check.sh 192.168.1.10 eth0

IP="$1"
IFACE="$2"

if [ -z "$IP" ]; then
    exit 1
fi

# If no interface specified, try to detect the default one
if [ -z "$IFACE" ]; then
    IFACE=$(ip route | awk '/default/ {print $5; exit}')
fi

# Clear old ARP entry to ensure fresh test
ip neigh flush "$IP" > /dev/null 2>&1

# Send one ARP request and wait briefly for reply
arping -I "$IFACE" -c 2 -w 3 "$IP" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo 0   # Healthy (ARP reply received)
else
    echo 1   # Unhealthy (no ARP response)
fi
```

### 2. ICMP Health Check (icmp_check.sh)

```
#!/bin/bash
# ICMP Health Check Script for SLB Monitor
# Usage: ./icmp_health_check.sh <IP>

IP="$1"

if [ -z "$IP" ]; then
    exit 1
fi

ping -c 3 -W 1 -n "$IP" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo 0
else
    echo 1
fi
```

### 3. NNTP Health Check (nntp_check.sh)

```
#!/bin/bash
# NNTP Health Check Script for SLB Monitoring
# Usage: ./nntp_health_check.sh <IP> [PORT]
# Default NNTP port is 119

IP=$1
PORT=${2:-119}

if [[ -z "$IP" ]]; then
    echo "1"
    exit 1
fi

RESPONSE=$(echo -e "" | nc -w 5 $IP $PORT 2>/dev/null)

if [[ $? -eq 0 && $RESPONSE == +OK* ]]; then
    echo "0"
else
    echo "1"
fi
```

### 4. SNMP Health Check (snmp_check.sh)

```
#!/bin/bash
# SNMP Health Check Script for SLB Monitoring
# Usage: ./snmp_health_check.sh <IP> [PORT] [COMMUNITY]
# Default port: 161, default community: public

IP=$1
PORT=${2:-161}
COMMUNITY=${3:-public}

if [[ -z "$IP" ]]; then
    echo "1"
    exit 1
fi

OID="1.3.6.1.2.1.1.3.0"
snmpget -v2c -c $COMMUNITY -r $IP -p $PORT $IP $OID 2>/dev/null >/dev/null

if [[ $? -eq 0 ]]; then
    echo "0"
else
    echo "1"
fi
```

### 5. Virtual Wire Health Check (virtual_wire.sh)

```
#!/bin/bash
# Virtual Wire Health Check Script for SLB Monitor
# Usage: ./vw_health_check.sh <IP>

IP="$1"
TIMEOUT=3
COUNT=3

if [ -z "$IP" ]; then
    echo 1
    exit 1
fi

ping -c "$COUNT" -W "$TIMEOUT" "$IP" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo 0
else
    echo 1
fi
```

### 6. DHCP Health Check (dhcp_check.sh)

```
#!/bin/bash
# DHCP Health Check Script using dhcping

DHCP_SERVER=$1
TIMEOUT=5

if /usr/bin/dhcping -q -t "$TIMEOUT" "$DHCP_SERVER"; then
    echo "DHCP Server $DHCP_SERVER is UP."
    exit 0
else
    echo "DHCP Server $DHCP_SERVER is DOWN."
    exit 1
fi
```

### 7. IMAP Health Check (imap_check.sh)

```
#!/bin/bash
# IMAP Health Check Script for SLB Monitoring
# Usage: ./imap_health_check.sh <IP> [PORT]

IP=$1
PORT=${2:-143}

if [[ -z "$IP" ]]; then
    echo "1"
    exit 1
fi

RESPONSE=$(echo -e "" | nc -w 5 $IP $PORT 2>/dev/null)

if [[ $? -eq 0 && $RESPONSE == *"* OK"* ]]; then
    echo "0"
else
    echo "1"
fi
```

### 8. RADIUS Health Check (radium_health_check.sh)

```
#!/bin/bash
SERVER=10.0.0.97
SECRET=12345
USER=nischal
PASS=Test
PORT=1812

OUTPUT=$(radtest "$USER" "$PASS" "$SERVER:$PORT" 0 "$SECRET" 2>&1)
if echo "$OUTPUT" | grep -q "Access"; then
  echo 0
else
  echo 1
fi
```

### 9. TCP/UDP Health Check (tcpUdp_check.sh)

```
#!/bin/bash
# TCP/UDP Health Check Script for SLB Monitoring
# Usage: ./tcp_udp_check.sh <PROTOCOL> <IP> <PORT>

PROTOCOL=$1
IP=$2
PORT=$3

if [[ -z "$PROTOCOL" || -z "$IP" || -z "$PORT" ]]; then
    echo "1"
    exit 1
fi

case "$PROTOCOL" in
    tcp)
        nc -z -w 5 $IP $PORT >/dev/null 2>&1
        [ $? -eq 0 ] && echo 0 || echo 1
        ;;
    udp)
        echo -n "" | nc -u -w 3 $IP $PORT >/dev/null 2>&1
        [ $? -eq 0 ] && echo 0 || echo 1
        ;;
    *)
        echo "1"
        ;;
esac
```

### 10. WAP Health Check (wap_check.sh)


```
#!/bin/bash
# WAP Gateway Health Check Script for SLB Monitor
# Usage: ./wap_gateway_health_check.sh <IP> [PORT]

IP="$1"
PORT=${2:-80}

if [ -z "$IP" ]; then
    echo 1
    exit 1
fi

nc -z -w 5 "$IP" "$PORT" >/dev/null 2>&1
[ $? -eq 0 ] && echo 0 || echo 1
```

### 11. DSSP Health Check (dssp_check.sh)

```
#!/bin/bash
# DSSP Health Check Script for SLB Monitor
# Usage: ./dssp_health_check.sh <IP> [PORT]

IP="$1"
PORT=${2:-5000}

if [ -z "$IP" ]; then
    echo 1
    exit 1
fi

nc -z -w 5 "$IP" "$PORT" >/dev/null 2>&1
[ $? -eq 0 ] && echo 0 || echo 1
```

### 12. LDAP/LDAPS Health Check (idap_check.sh)

```
#!/bin/bash
# LDAP/LDAPS Health Check Script for SLB Monitor
# Usage: ./ldap_health_check.sh <IP> <PROTOCOL>

IP="$1"
PROTOCOL="${2:-ldap}"

case "$PROTOCOL" in
    ldap)
        PORT=389
        nc -z -w 5 "$IP" "$PORT" >/dev/null 2>&1
        [ $? -eq 0 ] && echo 0 || echo 1
        ;;
    ldaps)
        PORT=636
        echo | openssl s_client -connect "$IP:$PORT" -brief -crlf >/dev/null 2>&1
        [ $? -eq 0 ] && echo 0 || echo 1
        ;;
    *)
        echo 1
        ;;
esac
```

### 13. RTSP Health Check (rtsp_check.sh)

```
#!/bin/bash
# RTSP Health Check Script for SLB Monitor
# Usage: ./rtsp_health_check.sh <IP> <PORT>

IP="$1"
PORT=${2:-554}

RESPONSE=$(echo -e "OPTIONS rtsp://$IP:$PORT/ RTSP/1.0\r\nCSeq: 1\r\n\r\n" | nc -w 3 "$IP" "$PORT" 2>/dev/null)

if echo "$RESPONSE" | grep -q "RTSP/1.0 200"; then
    echo 0
else
    echo 1
fi
```

### 14. TFTP Health Check (tftp_check.sh)

```
#!/bin/bash
# TFTP Health Check Script for SLB Monitoring
# Usage: ./tftp_health_check.sh <IP> [PORT]

IP=$1
PORT=${2:-69}

if [[ -z "$IP" ]]; then
    echo "1"
    exit 1
fi

echo -n "" | nc -u -w 3 $IP $PORT >/dev/null 2>&1
[ $? -eq 0 ] && echo 0 || echo 1
```

### 15. RDP / Windows Terminal Health Check (windowTerminal_check.sh)

```
#!/bin/bash
# RDP Health Check Script for SLB Monitor
# Usage: ./rdp_health_check.sh <IP> [PORT]

IP="$1"
PORT=${2:-3389}

if [ -z "$IP" ]; then
    echo 1
    exit 1
fi

nc -z -w 5 "$IP" "$PORT" >/dev/null 2>&1
[ $? -eq 0 ] && echo 0 || echo 1
```

### 16. FTP Health Check (ftp_check.sh)

```
#!/bin/bash
# FTP Health Check Script for SLB Monitoring
# Usage: ./ftp_health_check.sh <IP> [PORT]

IP=$1
PORT=${2:-21}

if [[ -z "$IP" ]]; then
    echo "1"
    exit 1
fi

RESPONSE=$(echo -e "" | nc -w 5 $IP $PORT 2>/dev/null)
if [[ $? -eq 0 && $RESPONSE == 220* ]]; then
    echo 0
else
    echo 1
fi
```

### 17. HTTP / Link Health Check (line_check.sh)

```
#!/bin/bash
# Usage: ./link_check.sh <URL>

URL="$1"
TIMEOUT=5

if [ -z "$URL" ]; then
  echo "Usage: $0 <URL>"
  exit 2
fi

HTTP_CODE=$(curl -o /dev/null -s -w "%{http_code}" --max-time $TIMEOUT "$URL")
CURL_EXIT=$?

if [ $CURL_EXIT -ne 0 ]; then
  echo 1
  exit 1
fi

if [[ "$HTTP_CODE" -ge 200 && "$HTTP_CODE" -lt 400 ]]; then
  echo 0
else
  echo 1
fi
```

### 18. SIP Health Check (sip_check.sh)

```
#!/bin/bash
# SIP Health Check Script for SLB Monitor
# Usage: ./sip_health_check.sh <IP> [PORT] [PROTOCOL]

IP="$1"
PORT=${2:-5060}
PROTOCOL=${3:-udp}

if [ -z "$IP" ]; then
    echo 1
    exit 1
fi

case "$PROTOCOL" in
    tcp)
        nc -z -w 5 "$IP" "$PORT" >/dev/null 2>&1
        [ $? -eq 0 ] && echo 0 || echo 1
        ;;
    udp)
        SIP_REQUEST="OPTIONS sip:$IP SIP/2.0\r\nVia: SIP/2.0/UDP $(hostname -I | awk '{print $1}');branch=z9hG4bK\r\nFrom: <sip:health@monitor>\r\nTo: <sip:$IP>\r\nCall-ID: 123456@monitor\r\nCSeq: 1 OPTIONS\r\nContent-Length: 0\r\n\r\n"
        echo -e "$SIP_REQUEST" | nc -u -w 3 "$IP" "$PORT" >/dev/null 2>&1
        [ $? -eq 0 ] && echo 0 || echo 1
        ;;
    *)
        echo 1
        ;;
esac
```

### 19. UDP Health Check (udp_check.sh)

```
#!/bin/bash
# Usage: ./udp_health_check.sh <IP>

IP="$1"
PORT=53
TIMEOUT=3

if [ -z "$IP" ] || [ -z "$PORT" ]; then
  echo "Usage: $0 <IP> <PORT>"
  exit 2
fi

echo "" | nc -u -w $TIMEOUT "$IP" "$PORT" >/dev/null 2>&1
RESULT=$?

if [ $RESULT -eq 0 ]; then
  echo 0
else
  echo 1
fi
```