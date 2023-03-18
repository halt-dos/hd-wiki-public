---
sidebar_position: 8
---
# Deploy to Production

Steps to deploy WAF into production.

---

**Steps to deploy to production**

1. Delete the existing A Record for the subdomain. 
DNS A-Record is an association of the subdomain with the backend server IP. For the safer side, it is recommended to keep a  copy of the A record.

2. Create a CNAME record with minimum TTL for the    same subdomain with the Protection URL provided by Haltdos when the listener for the subdomain was created. The Protection URL for a subdomain can be found under Go to stack >> Go to resource >> WAF >> Listeners. Note that it might take a few minutes, depending on the TTL that was set for the A record, for the DNS record to go live.

3. After validating the website after this process, you can change the TTL to the desired value.
