---
pagination_prev: null
sidebar_position: 0
---

# Global Server Load Balancer

Global Server Load Balancing (**GSLB**) App in Haltdos Platform

---

For companies to deliver the best possible experience to users, they need to ensure always-on connectivity and reliable performance for business applications whenever and wherever they’re accessed. GSLB is a method of distributing traffic amongst servers potentially dispersed across multiple geographies. The servers can be located either on-premise in a company’s own data center, or hosted in a cloud (public cloud or private cloud).  

Most companies deploy server resources at multiple locations, primarily for enabling disaster recovery. “Active‑passive” is the most common scheme used. The active location is used to serve the data, which is duplicated on “passive” or “recovery” sites. If the active site fails, the standby locations come into play. The active‑passive scheme removes the requirement to synchronize data across sites in real-time. Instead, a simpler batch method using less expensive out‑of‑band connections can be used to distribute active site changes to the passive sites. In the above scenario, the role of the global server load balancer would be to simply detect the failure at the active site and divert requests to the passive sites automatically. This could be seen as automation of a manual process of changing the IP address in the DNS configuration for an FQDN. However, the real benefits of GSLB come into play when companies maintain multiple active sites serving the same content, so synchronizing the sites in real-time becomes important.  

**Haltdos GSLB** is a method of distributing traffic amongst servers located in multiple geographies around the world. The servers can be located either on-premises in a company’s own data centers, or hosted in a cloud.

### Benefits

**Reliability and Availability**  
GSLB can be used to improve website reliability and availability in the face of server or network failures. If a power outage hits California, the GSLB will redirect client requests to other servers hosted in multiple sites that are spread apart geographically.  

**Enhanced Performance**  
Delivering content from the nearest server to the requesting user minimizes network latency and the probability of encountering network problems.  

**Security & Compliance**  
For many highly regulated industries like defense, telecommunications, healthcare, etc. GSLB enables network architects to service a global user base in a manner that complies with government regulations. For example, a GSLB can be configured to forward requests to data centers in the US only if they come from US users and not from any other country.  

**Localized Content**  
GSLB can forward requests to local servers that host content customized for relevance in the user’s country and written in the national language.  

**Server Maintenance**  
Data Migrations and Server upgrades can be done seamlessly without disruption since the client requests can simply be redirected to servers elsewhere.