---
sidebar_position: 3
---

# DNS

---

This DNS page shows the list of DNS Records. All Protection URL along with their mapped values are listed here.

A protection URL is the public-facing endpoint through which all user traffic is routed so that security controls such as DDoS mitigation, WAF inspection, rate limiting, and bot filtering can be applied before requests reach the actual application server. Instead of exposing the origin server directly on the internet, the protection URL acts as a controlled entry point. Traffic first lands on this protected endpoint, is inspected and filtered, and only legitimate requests are forwarded to the backend origin, keeping the real server IP hidden and reducing attack surface.

In DNS, A and AAAA are record types used to resolve domain names to IP addresses. An A record maps a domain name to an IPv4 address, while an AAAA record maps a domain name to an IPv6 address. When a client tries to access a domain, DNS resolution returns either an IPv4 address via an A record or an IPv6 address via an AAAA record, depending on what the client and network support.

In a protected architecture, the domain’s A and AAAA records do not point to the origin server’s IP address. Instead, they resolve to the IPv4 and IPv6 addresses of the protection layer. As a result, all inbound traffic is forced through the protection URL, where security checks are enforced, and the origin remains shielded from direct public access.

![DNS](/img/platform/v8/docs/sysDns.png)

### Description

Actions bar has three options-

### 1. Edit Protection Url

![Update Protection Name](/img/platform/v8/docs/sysUpdateProtectionUrl.png)

#### Update Protection URL

Here user can update the protection Url.

```
    Accepted Value: String

    Default: Blank
```

#### Record Type

Record type can be switched between A and AAAA.

```
    Accepted Value: A / AAAA

    Default: A
```

#### Values

Enter the IPv4 Address.

```
    Accepted Value: IPv4 / IPv6 Address

    Default: Blank
```

### 2. Edit Record Name

![Update Record Name](/img/platform/v8/docs/sysUpdateRecordName.png)

#### Current Record Name

It displays current Record Name.

#### New Record Name

```
    Accepted Value: String

    Default: Blank
```

### 3. Delete Protection Url

It deletes the current Protection Url.
