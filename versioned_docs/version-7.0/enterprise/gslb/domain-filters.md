---
sidebar_position: 2
---

# Domain Filters

---

**Domain Filters** allows a DNS resolver to modify DNS records. It was originally developed as a way to block access to dangerous websites.  

For example, if a computer queries the IP address of a known dangerous site that spreads malware, the DNS resolver can return NXDOMAIN as the DNS response, so the computer can’t connect to the dangerous site. This is the original use case. As such, Domain Filter is also known as **DNS firewall.**  

![domain filters](/img/gslb/v7/docs/domainfilters.png)

### How to Use

1. Go to **Apps** > **GSLB** > **Listener** > **Domain Filter** 
2. Click on **Add Domain Filter**.
3. Enter the name of file and mention the domain name and click on **Save changes**.
4. Click on **Listeners** > **Select Listener** 
5. Go to Domain Filter Files > Select the file from Drop Down (created at Domain Filter )
6. Click On **Save Changes** > Domain Filter File will be selected.

![domain filters](/img/gslb/v7/docs/domain.png)

|   Settings  | Accepted Value   | Default    |
| ----------- | ----------- | -------- |
| Name | String | Blank
| Script Area | String | Blank

![domain filters](/img/gslb/v7/docs/domain_filter.png)

### Description

**Name**

Users can specify the name for the Domain Filter files.

**Domain Names**

Users can mention the domains of which record need to be blocked.
