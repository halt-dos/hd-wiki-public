---
sidebar_position: 1
---

# Pullzone

A Pull Zone specifies the location of the static files that need to be cached. It also defines how to serve them to the clients

---

**Overview**

A Pull Zone is used to pull static files from a predefined zone, which is cached on our servers. This also lays down the method used to fetch the files.

### How to Use:

1. Go to **CDN > Pullzones**
2. Click on **Add Pullzone**
3. Configure your settings
4. Click on Save

| SETTINGS   | ACCEPTED VALUES | DEFAULT |
|------------|-----------------|---------|
| Name       | String          | Blank   |
| Origin URL | HTTP URL        | Blank   |

**Name**

Specify the name for your pullzone as unique identifier.

**Origin URL**

Specify the HTTP URL of your back-end server on which you need to do caching.